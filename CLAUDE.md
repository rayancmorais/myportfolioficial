# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server with Turbopack (http://localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
npx tsc --noEmit # TypeScript check without emitting files
```

No test suite yet.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, RSC) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (PostCSS, CSS-first config) |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Merge utility | `clsx` + `tailwind-merge` via `cn()` in `src/lib/utils.ts` |

## Architecture

Single-page portfolio. The root `src/app/page.tsx` is a **React Server Component** — it renders zero client JS unless it imports a `"use client"` boundary.

### Rendering boundary pattern

```
page.tsx  (RSC — static, no hydration)
  └─ ProjectsGrid  ("use client" — single hydration boundary)
       └─ BentoProjectCard  (inherits client context)
```

This keeps the shell prerendered; only interactive/animated components hydrate.

### Adding a new page section

1. Create `src/components/sections/<name>/<Name>.tsx`
2. Mark it `"use client"` **only** if it uses hooks, event listeners, or Framer Motion
3. Import and render it in `src/app/page.tsx`

### Tailwind v4 (CSS-first)

There is no `tailwind.config.ts`. All customisation lives in `src/app/globals.css` via `@theme inline {}`. To add a new design token:

```css
@theme inline {
  --color-my-token: #hexvalue;
}
```

Then use it as `text-my-token` / `bg-my-token` in Tailwind utilities.

### Motion conventions

- All Framer Motion components live in `src/components/motion/`
- Spring config: `{ stiffness: 420, damping: 30, mass: 0.5 }` (Ease-Out-Expo feel)
- Stagger: `delay: index * 0.08` on `whileInView` variants
- `MagneticButton` — wraps any `<button>` and shifts it toward the cursor
- `BentoProjectCard` — 3D-tilt card with cursor-tracked shimmer and staggered entrance

### Static content

Project data lives in `src/lib/data/projects.ts` (typed array, not JSON). To add or edit a project, update that file only — no component changes needed.

Project images live in `public/images/`.

### Types

Shared interfaces in `src/types/index.ts` (`Project`, `Certificate`).
