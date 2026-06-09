"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArchitectureDiagram } from "@/components/motion/ArchitectureDiagram";
import { iClothesArchitecture, vascQuestArchitecture } from "@/lib/data/diagrams";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/types";

const DIAGRAMS = [
  {
    key: "iclothes",
    label: "iClothes",
    stack: "Node.js · MongoDB · React",
    diagram: iClothesArchitecture,
  },
  {
    key: "vasc-quest",
    label: "VASC-Quest",
    stack: "Go · AWS Lambda · MongoDB",
    diagram: vascQuestArchitecture,
  },
] as const;

export function ArchitectureSection() {
  const [active, setActive] = useState<"iclothes" | "vasc-quest">("vasc-quest");
  const current = DIAGRAMS.find((d) => d.key === active)!;

  return (
    <section
      id="architecture"
      aria-labelledby="arch-heading"
      className="mx-auto w-full max-w-6xl px-4 py-24"
    >
      <motion.div
        variants={fadeUp()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <h2
          id="arch-heading"
          className="mb-3 text-4xl font-bold tracking-tight text-white"
        >
          Architecture
        </h2>
        <p className="mb-10 text-base text-zinc-400">
          System design diagrams — from MERN monoliths to Go serverless on AWS.
        </p>
      </motion.div>

      {/* Project switcher */}
      <div className="mb-8 flex gap-2" role="tablist" aria-label="Select architecture diagram">
        {DIAGRAMS.map(({ key, label, stack }) => (
          <button
            key={key}
            role="tab"
            aria-selected={active === key}
            onClick={() => setActive(key as typeof active)}
            className={cn(
              "flex flex-col items-start rounded-2xl border px-5 py-3.5 text-left transition-all duration-300",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
              active === key
                ? "border-indigo-500/30 bg-indigo-500/10 text-white"
                : "border-white/[0.07] bg-white/[0.03] text-zinc-400 hover:border-white/[0.12] hover:bg-white/[0.06] hover:text-zinc-200"
            )}
          >
            <span className="text-sm font-semibold leading-tight">{label}</span>
            <span className="mt-0.5 text-[11px] opacity-60">{stack}</span>
          </button>
        ))}
      </div>

      {/* Diagram panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ type: "spring", stiffness: 420, damping: 30 }}
          className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur-xl"
        >
          <ArchitectureDiagram diagram={current.diagram} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
