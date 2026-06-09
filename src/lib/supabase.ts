import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Returns a Supabase client, or null when env vars are not configured.
 * The chat route checks for null and falls back to the hardcoded system prompt.
 */
export function getSupabaseClient() {
  if (!supabaseUrl || !supabaseKey) return null;
  return createClient(supabaseUrl, supabaseKey);
}

/*
  Required Supabase SQL migration (run once in your project):

  -- Enable the pgvector extension
  create extension if not exists vector;

  -- Documents table
  create table if not exists documents (
    id          text primary key,
    content     text not null,
    metadata    jsonb not null default '{}',
    embedding   vector(1536),
    created_at  timestamptz not null default now()
  );

  -- Similarity search function
  create or replace function match_documents (
    query_embedding vector(1536),
    match_threshold float  default 0.70,
    match_count     int    default 5
  )
  returns table (
    id         text,
    content    text,
    metadata   jsonb,
    similarity float
  )
  language sql stable
  as $$
    select
      id, content, metadata,
      1 - (embedding <=> query_embedding) as similarity
    from documents
    where 1 - (embedding <=> query_embedding) > match_threshold
    order by similarity desc
    limit match_count;
  $$;
*/
