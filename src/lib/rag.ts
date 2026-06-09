import { embed } from "ai";
import { openai } from "@ai-sdk/openai";
import { getSupabaseClient } from "./supabase";
import { RAG_DOCUMENTS } from "./rag-documents";
import type { RAGRetrievalResult } from "@/types";

const EMBEDDING_MODEL = openai.embedding("text-embedding-3-small");

/**
 * Retrieve the most relevant RAG documents for a query.
 *
 * Strategy:
 * 1. If Supabase is configured → embed the query and run pgvector similarity search.
 * 2. If Supabase is not configured → fall back to naive keyword search over the
 *    in-memory knowledge base so development works without credentials.
 */
export async function retrieveContext(
  query: string,
  topK = 3
): Promise<RAGRetrievalResult[]> {
  const supabase = getSupabaseClient();

  if (supabase && process.env.OPENAI_API_KEY) {
    return retrieveFromSupabase(supabase, query, topK);
  }

  // Keyword fallback — always available
  return keywordFallback(query, topK);
}

// ── Supabase pgvector retrieval ───────────────────────────────────────────────

async function retrieveFromSupabase(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: any,
  query: string,
  topK: number
): Promise<RAGRetrievalResult[]> {
  const { embedding } = await embed({ model: EMBEDDING_MODEL, value: query });

  const { data, error } = await supabase.rpc("match_documents", {
    query_embedding: embedding,
    match_threshold: 0.65,
    match_count: topK,
  });

  if (error) {
    console.error("[RAG] Supabase error:", error.message);
    return keywordFallback(query, topK);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data ?? []).map((row: any) => ({
    document: {
      id: row.id,
      content: row.content,
      metadata: row.metadata,
    },
    score: row.similarity as number,
  }));
}

// ── Keyword fallback (no Supabase required) ───────────────────────────────────

function keywordFallback(query: string, topK: number): RAGRetrievalResult[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  const scored = RAG_DOCUMENTS.map((doc) => {
    const text = `${doc.content} ${doc.metadata.tags.join(" ")}`.toLowerCase();
    const hits = terms.filter((t) => text.includes(t)).length;
    const score = terms.length > 0 ? hits / terms.length : 0;
    return { document: doc, score };
  });

  return scored
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

// ── Build the RAG context block for injection into the system prompt ──────────

export function buildContextBlock(results: RAGRetrievalResult[]): string {
  if (results.length === 0) return "";

  const docs = results
    .map((r) => `[Source: ${r.document.metadata.source}]\n${r.document.content}`)
    .join("\n\n---\n\n");

  return `\n\n## Relevant context\n\n${docs}`;
}

// ── Seed script helper ────────────────────────────────────────────────────────

/**
 * Upsert all RAG documents into Supabase with their embeddings.
 * Called by `scripts/seed-rag.ts`.
 */
export async function seedDocuments(): Promise<void> {
  const supabase = getSupabaseClient();
  if (!supabase) throw new Error("SUPABASE env vars not set.");

  console.log(`Seeding ${RAG_DOCUMENTS.length} documents…`);

  for (const doc of RAG_DOCUMENTS) {
    const { embedding } = await embed({ model: EMBEDDING_MODEL, value: doc.content });

    const { error } = await supabase.from("documents").upsert({
      id: doc.id,
      content: doc.content,
      metadata: doc.metadata,
      embedding,
    });

    if (error) {
      console.error(`Failed to upsert ${doc.id}:`, error.message);
    } else {
      console.log(`  ✓ ${doc.id}`);
    }
  }

  console.log("Done.");
}
