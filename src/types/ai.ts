import type { Message } from "ai";

// ── RAG / Vector store ────────────────────────────────────────────────────────

export type RAGDocumentType =
  | "architecture"
  | "case-study"
  | "project"
  | "experience"
  | "skill"
  | "blog";

export interface RAGDocumentMetadata {
  /** Source identifier, e.g. "vasc-quest-go-backend" */
  source: string;
  type: RAGDocumentType;
  tags: string[];
  /** ISO-8601 date */
  lastUpdated: string;
}

export interface RAGDocument {
  id: string;
  /** Plain-text content to embed */
  content: string;
  metadata: RAGDocumentMetadata;
  /** pgvector embedding — populated after upsert */
  embedding?: number[];
}

export interface RAGRetrievalResult {
  document: RAGDocument;
  /** Cosine similarity 0–1 */
  score: number;
}

// ── Digital Twin / AI agent ───────────────────────────────────────────────────

export interface DigitalTwinConfig {
  systemPrompt: string;
  model: string; // e.g. "gpt-4o-mini"
  temperature: number;
  maxTokens: number;
  /** k-nearest neighbours to retrieve per query */
  topK: number;
}

/** Extends the Vercel AI SDK message with portfolio-specific fields */
export interface PortfolioMessage extends Message {
  /** RAG sources surfaced alongside this response */
  sources?: RAGRetrievalResult[];
  /** True if this message was generated from a RAG query */
  grounded?: boolean;
}

// ── Supabase vector store schema ──────────────────────────────────────────────

/** Matches the `documents` table in Supabase */
export interface SupabaseDocument {
  id: string;
  content: string;
  metadata: RAGDocumentMetadata;
  embedding: string; // Supabase returns vectors as strings
  created_at: string;
}
