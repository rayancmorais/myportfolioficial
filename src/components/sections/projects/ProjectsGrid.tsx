"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { BentoProjectCard } from "@/components/motion/BentoProjectCard";
import { projects } from "@/lib/data/projects";

/*
  Desktop Bento layout (3-column grid, auto-rows 240px):

  [ iClothes — featured (col-span-2, row-span-2) ] [ Movideux  ]
  [                                               ] [ Chronos   ]
  [ Map Tracker                                   ] [ Portfolio ]
*/
const SPAN: Record<number, string> = {
  0: "md:col-span-2 md:row-span-2",
};

export function ProjectsGrid() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto w-full max-w-6xl px-4 py-24"
    >
      <h2
        id="projects-heading"
        className="mb-3 text-4xl font-bold tracking-tight text-white"
      >
        Projects
      </h2>
      <p className="mb-8 text-base text-zinc-400">
        A selection of things I&apos;ve built.
      </p>

      {/* Case study quick-links */}
      <div className="mb-10 flex flex-wrap gap-2">
        {projects
          .filter((p) => p.caseStudySlug)
          .map((p) => (
            <Link
              key={p.id}
              href={`/projects/${p.caseStudySlug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-medium text-indigo-300 transition-colors hover:border-indigo-500/40 hover:bg-indigo-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <BookOpen className="h-3 w-3" />
              {p.title} — Case Study
            </Link>
          ))}
      </div>

      {/*
        auto-rows-[240px]: each row is 240px.
        The featured card (row-span-2) gets 240*2 + gap ≈ 492px.
        perspective on the container drives the 3D tilt of each card.
      */}
      <div
        className="grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-3"
        style={{ perspective: 1200 }}
      >
        {projects.map((project, i) => (
          <BentoProjectCard
            key={project.id}
            project={project}
            index={i}
            className={SPAN[i] ?? ""}
          />
        ))}
      </div>
    </section>
  );
}
