# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev            # dev server with Turbopack (http://localhost:3000)
npm run build          # production build
npm run start          # serve production build
npm run lint           # ESLint
npm run type-check     # tsc --noEmit
npm test               # Vitest (single run)
npm run test:watch     # Vitest watch mode
npm run test:coverage  # Vitest + v8 coverage (thresholds: 70% lines/functions, 60% branches)
npm run ci             # type-check → lint → test → build (mirrors CI)

npx tsx scripts/seed-rag.ts   # embed RAG_DOCUMENTS and upsert into Supabase pgvector
```

Run a single test file: `npm test -- src/tests/types.test.ts`
Filter by test name: `npm test -- -t "<pattern>"`

## Stack

Next.js 16 (App Router, RSC, PPR) · React 19 · TypeScript 5 · Tailwind v4 (CSS-first) · Framer Motion 12 · Vercel AI SDK (`ai`, `@ai-sdk/openai`, `@ai-sdk/react`) · Supabase (pgvector) · Vitest + Testing Library · Mermaid

## Architecture

Single-page portfolio (`src/app/page.tsx`) plus dynamic case-study pages (`src/app/projects/[slug]/page.tsx`). The main interactive feature is a RAG-backed "Digital Twin" chat that answers questions about Rayan's work.

### Rendering boundaries (RSC / client / PPR)

The root page exports `cacheComponents = true` (Next.js 16 Partial Pre-Rendering). The static shell is prerendered at build time; `ChatSection` streams in via `<Suspense>` without blocking. Only components that need hooks, event listeners, or Framer Motion are `"use client"`:

```
page.tsx                  (RSC, cacheComponents = true)
  ├─ ProjectsGrid         ("use client") → BentoProjectCard ×N
  └─ ChatSection          (RSC, wraps ChatInterface in <Suspense>)
       └─ ChatInterface   ("use client", useChat hook)
```

Adding a new section: create `src/components/sections/<name>/<Name>.tsx`, mark `"use client"` only if needed, import in `page.tsx`.

Case-study pages (`/projects/[slug]`) use `generateStaticParams()` and `generateMetadata()` — they're fully static at build time, driven by `src/lib/data/case-studies.ts`.

### RAG / chat pipeline

`POST /api/chat` (`src/app/api/chat/route.ts`) → `retrieveContext()` (`src/lib/rag.ts`) → context injected into system prompt → `streamText(openai("gpt-4o-mini"), maxTokens: 600)`.

Retrieval **degrades gracefully**:
- With env configured: embed query via `text-embedding-3-small` (1536 dims), call `match_documents` pgvector RPC (cosine, threshold 0.65).
- Without env: keyword fallback over in-memory `RAG_DOCUMENTS`. **Chat always works** with no env set.

The knowledge base is hardcoded in `src/lib/rag-documents.ts`. To update what the twin knows, edit that file then run `npx tsx scripts/seed-rag.ts` to re-embed. `src/lib/supabase.ts` returns `null` when env is missing and contains the SQL migration (pgvector extension, `documents` table, `match_documents` function) as a comment.

Required env vars in `.env.local` (all optional — only needed for vector search):
```
OPENAI_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

### Data as code

All content is typed TypeScript (no JSON) in `src/lib/data/`:
- `projects.ts` — home-page project grid cards
- `case-studies.ts` — full case studies; exposes `getCaseStudy(slug)` and `getAllSlugs()`
- `diagrams.ts` — Mermaid architecture flowcharts rendered by `ArchitectureDiagram`
- `skills.ts` — tech stack grouped by category

To add or edit content, update only these files — no component changes needed. Project images go in `public/images/`.

### Types

All domain types live in `src/types/*` and re-export from `src/types/index.ts`. Some files carry runtime values too:
- `motion.ts` — `SPRINGS` presets, `EASE_OUT_EXPO`, and factories `fadeUp()` / `staggerContainer()`. Use these rather than inlining spring/variant config in components.
- `api.ts` — Zod schemas (`ChatRequestSchema`, etc.) and `validateEnv()`.
- `ai.ts` — RAG types (`RAGDocument`, `RAGRetrievalResult`, `DigitalTwinConfig`).

### Motion conventions

Framer Motion components live in `src/components/motion/`. Canonical spring: `{ stiffness: 420, damping: 30, mass: 0.5 }`. Entrance stagger: `delay: index * 0.08`. Use `fadeUp()` / `staggerContainer()` from `src/types/motion.ts` for consistency.

### Tailwind v4 (CSS-first)

No `tailwind.config.ts`. Design tokens live in `src/app/globals.css` under `@theme inline { --color-my-token: #hex; }`, then used as `text-my-token` / `bg-my-token`. Path alias: `@/*` → `./src/*`.

### CI

`.github/workflows/ci.yml` runs type-check → lint → test:coverage → build on push/PR to `main`. The build job stubs all env vars. Run `npm run ci` locally before pushing.
