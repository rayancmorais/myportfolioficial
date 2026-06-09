"use client";

import { useEffect, useRef, useState, useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { MermaidDiagram } from "@/types";

interface ArchitectureDiagramProps {
  diagram: MermaidDiagram;
  className?: string;
}

export function ArchitectureDiagram({ diagram, className }: ArchitectureDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");
  const [state, setState] = useState<"idle" | "rendered" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const mermaid = (await import("mermaid")).default;

        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          fontFamily: "var(--font-geist-mono, monospace)",
          themeVariables: {
            primaryColor: "#6366f1",
            primaryTextColor: "#e4e4e7",
            primaryBorderColor: "#3f3f46",
            lineColor: "#52525b",
            secondaryColor: "#18181b",
            tertiaryColor: "#27272a",
            background: "#09090b",
            mainBkg: "#18181b",
            nodeBorder: "#3f3f46",
            clusterBkg: "#0f0f11",
            clusterBorder: "#27272a",
            titleColor: "#f4f4f5",
            edgeLabelBackground: "#18181b",
            attributeBackgroundColorOdd: "#18181b",
            attributeBackgroundColorEven: "#0f0f11",
          },
        });

        // Mermaid requires a unique ID per render
        const { svg } = await mermaid.render(`mermaid-${uid}`, diagram.definition);

        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          // Make the SVG responsive
          const svgEl = containerRef.current.querySelector("svg");
          if (svgEl) {
            svgEl.style.width = "100%";
            svgEl.style.height = "auto";
            svgEl.removeAttribute("height");
          }
          setState("rendered");
        }
      } catch (err) {
        if (!cancelled) {
          setErrorMsg(err instanceof Error ? err.message : "Diagram render failed");
          setState("error");
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [diagram.definition, uid]);

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Diagram title */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500">
          {diagram.title}
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
      </div>

      {/* Render area */}
      {state === "error" ? (
        <div className="rounded-xl border border-red-500/15 bg-red-500/5 p-4">
          <p className="text-xs text-red-400">Failed to render: {errorMsg}</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: state === "rendered" ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {/* Skeleton while loading */}
          {state === "idle" && (
            <div className="absolute inset-0 animate-pulse rounded-xl bg-white/[0.03]" />
          )}

          <div
            ref={containerRef}
            className={cn(
              "w-full overflow-x-auto rounded-xl",
              // Target the generated SVG inside the container
              "[&>svg]:mx-auto [&>svg]:!max-w-full [&>svg]:overflow-visible",
              "[&_.label]:font-mono [&_.label]:text-[11px]"
            )}
          />
        </motion.div>
      )}
    </div>
  );
}
