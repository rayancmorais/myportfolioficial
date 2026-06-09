import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import type { CoreMessage } from "ai";
import type { NextRequest } from "next/server";
import { retrieveContext, buildContextBlock } from "@/lib/rag";

const BASE_SYSTEM_PROMPT = `You are the AI "Digital Twin" of Rayan Morais, embedded in his portfolio.
You help visitors learn about Rayan's architecture decisions, projects, and skills.

About Rayan:
- Full-stack developer → transitioning to Senior Architect.
- Based in Brazil. Open to full-time roles, freelance, and collaborations.
- Recent focus: Go microservices on AWS, Next.js RSC, MongoDB, Supabase RAG.

Rules:
- Be concise, technically precise, and professional.
- When answering architecture questions, reference specific patterns (e.g., "FIFO queue", "stateless JWT", "sub-5 MB Go binary").
- If asked about something unrelated to Rayan's work, redirect politely.
- Never fabricate contact details or project specifics not covered in context.`;

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return new Response(
      JSON.stringify({ error: "OPENAI_API_KEY is not configured." }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  const { messages } = (await req.json()) as { messages: CoreMessage[] };

  // ── RAG: retrieve context from the last user message ─────────────────────
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
  let ragContext = "";

  // CoreMessage.content can be string | ContentPart[] — extract plain text
  const queryText =
    typeof lastUserMessage?.content === "string"
      ? lastUserMessage.content
      : Array.isArray(lastUserMessage?.content)
        ? lastUserMessage.content
            .filter((p): p is { type: "text"; text: string } => p.type === "text")
            .map((p) => p.text)
            .join(" ")
        : "";

  if (queryText) {
    try {
      const results = await retrieveContext(queryText, 3);
      ragContext = buildContextBlock(results);
    } catch (err) {
      // RAG failure is non-fatal — fall back to base prompt
      console.error("[RAG] Retrieval failed:", err);
    }
  }

  const systemPrompt = BASE_SYSTEM_PROMPT + ragContext;

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: systemPrompt,
    messages,
    maxTokens: 600,
  });

  return result.toDataStreamResponse({ sendUsage: false });
}
