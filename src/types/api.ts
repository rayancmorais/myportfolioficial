import { z } from "zod";

// ── Generic HTTP response wrapper ─────────────────────────────────────────────

export interface APIResponse<T> {
  data: T;
  meta?: {
    page?: number;
    total?: number;
    /** ISO-8601 */
    generatedAt: string;
  };
}

export interface APIError {
  code: string; // e.g. "NOT_FOUND", "RATE_LIMITED"
  message: string;
  details?: unknown;
}

// ── Chat API ──────────────────────────────────────────────────────────────────

export const ChatRequestSchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant", "system"]),
      content: z.string().min(1).max(4000),
    })
  ),
  /** Session ID for conversation continuity */
  sessionId: z.string().uuid().optional(),
});

export type ChatRequest = z.infer<typeof ChatRequestSchema>;

// ── Performance API ───────────────────────────────────────────────────────────

export const ServiceHealthSchema = z.object({
  name: z.string(),
  url: z.string().url(),
  status: z.enum(["operational", "degraded", "down", "unknown"]),
  latencyMs: z.number().nonnegative(),
  uptime: z.number().min(0).max(100),
  checkedAt: z.string().datetime(),
});

export type ServiceHealthPayload = z.infer<typeof ServiceHealthSchema>;

// ── RAG ingestion API ─────────────────────────────────────────────────────────

export const RAGIngestSchema = z.object({
  documents: z.array(
    z.object({
      id: z.string(),
      content: z.string().min(1),
      metadata: z.object({
        source: z.string(),
        type: z.enum(["architecture", "case-study", "experience", "skill", "blog"]),
        tags: z.array(z.string()),
        lastUpdated: z.string().datetime(),
      }),
    })
  ),
});

export type RAGIngestPayload = z.infer<typeof RAGIngestSchema>;

// ── Environment variables (type-safe) ────────────────────────────────────────

export const EnvSchema = z.object({
  OPENAI_API_KEY: z.string().min(1),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
});

export type Env = z.infer<typeof EnvSchema>;

/** Validate process.env at startup — throws if required vars are missing */
export function validateEnv(): Env {
  return EnvSchema.parse({
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  });
}
