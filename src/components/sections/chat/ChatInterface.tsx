"use client";

import { useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

const SUGGESTIONS = [
  "What are your main projects?",
  "What tech stack do you use?",
  "Tell me about iClothes",
  "Are you available for hire?",
];

export function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } =
    useChat({ api: "/api/chat" });

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendSuggestion = (text: string) =>
    void append({ role: "user", content: text });

  return (
    <div className="flex h-[520px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl">
      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-5">
        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
            <div className="rounded-full bg-indigo-500/10 p-3.5">
              <Bot className="h-6 w-6 text-indigo-400" />
            </div>
            <p className="text-sm text-zinc-400">
              Ask me anything about Rayan&apos;s work
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendSuggestion(q)}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        <AnimatePresence initial={false}>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 420, damping: 30 }}
              className={cn(
                "flex gap-3 text-sm",
                m.role === "user" ? "flex-row-reverse" : "flex-row"
              )}
            >
              {/* Avatar */}
              <div
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                  m.role === "user" ? "bg-indigo-600" : "bg-white/10"
                )}
              >
                {m.role === "user" ? (
                  <User className="h-3.5 w-3.5 text-white" />
                ) : (
                  <Bot className="h-3.5 w-3.5 text-zinc-300" />
                )}
              </div>

              {/* Bubble */}
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2.5 leading-relaxed",
                  m.role === "user"
                    ? "bg-indigo-600 text-white"
                    : "bg-white/[0.06] text-zinc-200"
                )}
              >
                {m.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Bot className="h-3.5 w-3.5 text-zinc-300" />
            </div>
            <div className="flex items-center gap-1.5 rounded-2xl bg-white/[0.06] px-4 py-3">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-zinc-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 border-t border-white/[0.07] p-3"
      >
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask about my projects or skills…"
          className="flex-1 rounded-xl bg-white/[0.05] px-4 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 transition-all focus:ring-1 focus:ring-indigo-500/50"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          aria-label="Send message"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
