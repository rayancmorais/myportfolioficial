/**
 * Seeds the Supabase pgvector store with portfolio knowledge base documents.
 *
 * Usage:
 *   npx tsx scripts/seed-rag.ts
 *
 * Required env vars (copy .env.local.example → .env.local):
 *   OPENAI_API_KEY
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 */

// Load .env.local so env vars are available outside Next.js
import { config } from "dotenv";
config({ path: ".env.local" });

import { seedDocuments } from "../src/lib/rag";

seedDocuments().catch((err) => {
  console.error(err);
  process.exit(1);
});
