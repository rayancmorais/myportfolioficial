"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { skills, CATEGORY_COLORS, type SkillCategory } from "@/lib/data/skills";
import { cn } from "@/lib/utils";

const CATEGORIES: SkillCategory[] = ["Frontend", "Backend", "Mobile", "Tools"];

const pill: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 420, damping: 28, delay: i * 0.04 },
  }),
};

export function TechStackSection() {
  const [active, setActive] = useState<SkillCategory | "All">("All");

  const filtered =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto w-full max-w-6xl px-4 py-24"
    >
      <h2
        id="skills-heading"
        className="mb-3 text-4xl font-bold tracking-tight text-white"
      >
        Skills
      </h2>
      <p className="mb-10 text-base text-zinc-400">
        Technologies I reach for regularly.
      </p>

      {/* Category tabs */}
      <div
        role="tablist"
        aria-label="Filter skills by category"
        className="mb-8 flex flex-wrap gap-2"
      >
        {(["All", ...CATEGORIES] as const).map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
              active === cat
                ? "bg-white/10 text-white ring-1 ring-inset ring-white/15"
                : "text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="flex flex-wrap gap-2.5"
        >
          {filtered.map((skill, i) => (
            <motion.span
              key={skill.name}
              custom={i}
              variants={pill}
              initial="hidden"
              animate="visible"
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium ring-1 ring-inset",
                CATEGORY_COLORS[skill.category]
              )}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
