import { Suspense } from "react";
import { ChatInterface } from "./ChatInterface";

/*
  PPR boundary: the static shell (heading, description) is prerendered at
  build time. The <ChatInterface> is wrapped in <Suspense> so it streams in
  at request time without blocking the rest of the page.
  Requires `experimental_ppr = true` on the parent route segment (page.tsx).
*/

function ChatSkeleton() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading AI chat"
      className="h-[520px] animate-pulse rounded-2xl border border-white/[0.07] bg-white/[0.03]"
    />
  );
}

export function ChatSection() {
  return (
    <section
      id="ai-chat"
      aria-labelledby="chat-heading"
      className="mx-auto w-full max-w-3xl px-4 py-24"
    >
      <h2
        id="chat-heading"
        className="mb-3 text-4xl font-bold tracking-tight text-white"
      >
        AI Assistant
      </h2>
      <p className="mb-8 text-base text-zinc-400">
        Ask anything about my experience, projects, or skills — powered by
        GPT-4o mini.
      </p>

      <Suspense fallback={<ChatSkeleton />}>
        <ChatInterface />
      </Suspense>
    </section>
  );
}
