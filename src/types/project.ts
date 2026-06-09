import type { MermaidDiagram } from "./diagram";

// ── Technology ───────────────────────────────────────────────────────────────

export type TechCategory =
  | "frontend"
  | "backend"
  | "infrastructure"
  | "database"
  | "devops"
  | "mobile"
  | "language";

export interface Technology {
  name: string;
  category: TechCategory;
  iconUrl?: string;
  /** semver or release tag, e.g. "1.21" */
  version?: string;
}

// ── Case Study building blocks ────────────────────────────────────────────────

export interface Impact {
  /** Short label, e.g. "API latency" */
  metric: string;
  /** Absolute value, e.g. "< 80 ms" */
  value: string;
  /** Relative change, e.g. "+40%" or "−60 ms" */
  delta?: string;
  /** Direction of improvement */
  direction?: "up" | "down" | "neutral";
}

export interface CaseStudySection {
  /** "Problem" | "Solution" | "Architecture" | "Outcome" */
  heading: string;
  body: string; // plain text or MDX
}

// ── Case Study ────────────────────────────────────────────────────────────────

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  /** One-line elevator pitch */
  tagline: string;
  role: string;
  timeline: string;
  status: "live" | "in-progress" | "archived";
  sections: CaseStudySection[];
  impact: Impact[];
  technologies: Technology[];
  architectureDiagram?: MermaidDiagram;
  /** Path relative to /public/images/ */
  coverImage: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

// ── Convenience re-export used across the app ─────────────────────────────────

/** Minimal project reference used in list views / bento tiles */
export interface ProjectSummary
  extends Pick<
    CaseStudy,
    "id" | "title" | "slug" | "tagline" | "technologies" | "coverImage" | "liveUrl" | "githubUrl" | "status"
  > {}
