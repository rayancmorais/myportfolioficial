"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";

const CONTAINER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const ITEM: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 420, damping: 30 },
  },
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20"
    >
      {/* Dot-grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]"
      />
      {/* Radial vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_40%,#09090b_100%)]"
      />
      {/* Indigo glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[40%] h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.08] blur-[100px]"
      />

      {/* Content */}
      <motion.div
        variants={CONTAINER}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-6 text-center"
      >
        {/* Status badge */}
        <motion.div variants={ITEM}>
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
            Open to opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={ITEM}
          className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Full-Stack{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Developer
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={ITEM}
          className="max-w-xl text-lg leading-relaxed text-zinc-400"
        >
          Building products with{" "}
          <span className="text-zinc-200">React, Node.js, and TypeScript</span>{" "}
          — from pixel-perfect UIs to production-grade APIs.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={ITEM}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <MagneticButton
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <ArrowDown className="h-4 w-4" />
            View Projects
          </MagneticButton>

          <MagneticButton
            onClick={() => window.open("/Rayan_Morais_CV_Eng.pdf", "_blank")}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Download className="h-4 w-4" />
            Download CV
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll nudge */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5 text-zinc-600" />
      </motion.div>
    </section>
  );
}
