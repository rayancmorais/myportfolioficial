import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import { getCaseStudy, getAllSlugs } from "@/lib/data/case-studies";
import { ArchitectureDiagram } from "@/components/motion/ArchitectureDiagram";
import { cn } from "@/lib/utils";
import type { Impact, Technology, TechCategory } from "@/types";

// ── Static params (pre-renders both case study pages at build time) ──────────

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Case Study | Rayan Morais`,
    description: cs.tagline,
  };
}

// ── Helpers ──────────────────────────────────────────────────────────────────

const CATEGORY_COLOR: Record<TechCategory, string> = {
  frontend: "text-indigo-300 bg-indigo-500/10 ring-indigo-500/20",
  backend: "text-emerald-300 bg-emerald-500/10 ring-emerald-500/20",
  infrastructure: "text-orange-300 bg-orange-500/10 ring-orange-500/20",
  database: "text-sky-300 bg-sky-500/10 ring-sky-500/20",
  devops: "text-amber-300 bg-amber-500/10 ring-amber-500/20",
  mobile: "text-purple-300 bg-purple-500/10 ring-purple-500/20",
  language: "text-rose-300 bg-rose-500/10 ring-rose-500/20",
};

const DIRECTION_ICON: Record<string, string> = {
  up: "↑",
  down: "↓",
  neutral: "→",
};

const STATUS_BADGE: Record<string, string> = {
  live: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
  "in-progress": "bg-amber-500/10 text-amber-400 ring-amber-500/20",
  archived: "bg-zinc-500/10 text-zinc-400 ring-zinc-500/20",
};

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Back nav */}
      <div className="sticky top-0 z-40 border-b border-white/[0.06] bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All projects
          </Link>

          <div className="h-4 w-px bg-white/10" />

          <span
            className={cn(
              "rounded-full px-3 py-0.5 text-[11px] font-semibold ring-1 ring-inset capitalize",
              STATUS_BADGE[cs.status]
            )}
          >
            {cs.status.replace("-", " ")}
          </span>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-16">
        {/* Hero */}
        <header className="mb-16">
          <p className="mb-3 text-sm font-medium text-indigo-400">{cs.role}</p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white">
            {cs.title}
          </h1>
          <p className="mb-6 max-w-2xl text-xl leading-relaxed text-zinc-400">
            {cs.tagline}
          </p>
          <p className="text-sm text-zinc-600">{cs.timeline}</p>

          {/* CTA links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {cs.liveUrl && (
              <a
                href={cs.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live site
              </a>
            )}
            {cs.githubUrl && (
              <a
                href={cs.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <GitBranch className="h-3.5 w-3.5" />
                Source code
              </a>
            )}
          </div>
        </header>

        {/* Cover image */}
        <div className="mb-16 overflow-hidden rounded-2xl border border-white/[0.07]">
          <div className="relative aspect-video bg-zinc-900">
            <Image
              src={cs.coverImage}
              alt={cs.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
          </div>
        </div>

        {/* Impact metrics */}
        <section aria-labelledby="impact-heading" className="mb-16">
          <h2
            id="impact-heading"
            className="mb-6 text-2xl font-bold tracking-tight text-white"
          >
            Impact
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {cs.impact.map((item: Impact) => (
              <div
                key={item.metric}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5"
              >
                <p className="mb-1 text-2xl font-bold text-white">
                  {DIRECTION_ICON[item.direction ?? "neutral"]}{" "}
                  {item.value}
                </p>
                <p className="text-xs text-zinc-400">{item.metric}</p>
                {item.delta && (
                  <p className="mt-1 text-[10px] text-zinc-600">{item.delta}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Case study sections (Problem / Solution / Architecture / Outcome) */}
        <div className="mb-16 space-y-12">
          {cs.sections.map((section) => (
            <section key={section.heading} aria-labelledby={`section-${section.heading}`}>
              <h2
                id={`section-${section.heading}`}
                className="mb-4 flex items-center gap-3 text-xl font-bold text-white"
              >
                <span className="h-px flex-1 bg-white/[0.07]" />
                {section.heading}
                <span className="h-px flex-1 bg-white/[0.07]" />
              </h2>
              <p className="leading-relaxed text-zinc-300">{section.body}</p>
            </section>
          ))}
        </div>

        {/* Architecture diagram */}
        {cs.architectureDiagram && (
          <section aria-labelledby="arch-heading" className="mb-16">
            <h2
              id="arch-heading"
              className="mb-6 text-2xl font-bold tracking-tight text-white"
            >
              System Architecture
            </h2>
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 backdrop-blur-xl">
              <ArchitectureDiagram diagram={cs.architectureDiagram} />
            </div>
          </section>
        )}

        {/* Tech stack */}
        <section aria-labelledby="stack-heading">
          <h2
            id="stack-heading"
            className="mb-6 text-2xl font-bold tracking-tight text-white"
          >
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {cs.technologies.map((tech: Technology) => (
              <span
                key={tech.name}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
                  CATEGORY_COLOR[tech.category]
                )}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
