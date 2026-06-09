"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

// ── Spring: snappy Ease-Out-Expo feel ─────────────────────────────────────
const SPRING = { stiffness: 420, damping: 30, mass: 0.5 };

// ── Staggered viewport entrance ───────────────────────────────────────────
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 420,
      damping: 30,
      delay: i * 0.08,
    },
  }),
};

interface BentoProjectCardProps {
  project: Project;
  /** Card index — drives the stagger delay */
  index: number;
  className?: string;
}

export function BentoProjectCard({
  project,
  index,
  className,
}: BentoProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // ── Mouse tracking ───────────────────────────────────────────────────────
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, SPRING);
  const springY = useSpring(rawY, SPRING);

  // 3D tilt — max ±5°
  const rotateX = useTransform(springY, [-80, 80], [5, -5]);
  const rotateY = useTransform(springX, [-80, 80], [-5, 5]);

  // Shimmer position (as %)
  const shimmerX = useTransform(springX, [-120, 120], [30, 70]);
  const shimmerY = useTransform(springY, [-120, 120], [30, 70]);

  // Shimmer gradient via motion template (updates without re-render)
  const shimmerBg = useMotionTemplate`radial-gradient(circle at ${shimmerX}% ${shimmerY}%, rgba(99,102,241,0.18), transparent 55%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    rawX.set(e.clientX - r.left - r.width / 2);
    rawY.set(e.clientY - r.top - r.height / 2);
  };

  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setHovered(false);
  };

  return (
    // Perspective wrapper stays as the grid item — article inside gets the 3D transform
    <div className={cn("group", className)} style={{ perspective: 900 }}>
      <motion.article
        ref={cardRef}
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", height: "100%" }}
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-2xl",
          // ── Glassmorphism ──────────────────────────────────────────────
          "border border-white/[0.07] bg-white/[0.04] backdrop-blur-2xl",
          "shadow-[0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.06)]",
          "transition-shadow duration-500 ease-out",
          hovered &&
            "shadow-[0_0_0_1px_rgba(99,102,241,0.28),0_20px_60px_rgba(0,0,0,0.4)]"
        )}
      >
        {/* ── Cursor-tracked shimmer ───────────────────────────────────── */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
          style={{ background: shimmerBg, opacity: hovered ? 1 : 0 }}
          transition={{ opacity: { duration: 0.3 } }}
        />

        {/* ── Top edge glow on hover ───────────────────────────────────── */}
        <div
          aria-hidden
          className={cn(
            "absolute inset-x-0 top-0 z-10 h-px",
            "bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent",
            "transition-opacity duration-500",
            hovered ? "opacity-100" : "opacity-0"
          )}
        />

        {/* ── Image ───────────────────────────────────────────────────── */}
        <div className="relative h-44 shrink-0 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "object-cover transition-transform duration-700 ease-out",
              hovered && "scale-[1.06]"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
        </div>

        {/* ── Content ─────────────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-1 flex-col gap-3 p-5">
          <h3 className="text-[15px] font-semibold leading-snug text-white">
            {project.title}
          </h3>

          <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-zinc-300 ring-1 ring-inset ring-white/[0.07]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-zinc-500 ring-1 ring-inset ring-white/[0.05]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* CTA */}
          <motion.div
            className="flex items-center gap-1 text-xs font-medium text-indigo-400"
            animate={{ x: hovered ? 3 : 0, opacity: hovered ? 1 : 0.5 }}
            transition={SPRING}
          >
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            View project
          </motion.div>
        </div>

        {/* ── Accessible full-card link ────────────────────────────────── */}
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} — opens in new tab`}
          className="absolute inset-0 z-20 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        />
      </motion.article>
    </div>
  );
}
