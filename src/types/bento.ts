import type { ProjectSummary } from "./project";
import type { LighthouseScore, APIStatus } from "./performance";
import type { MermaidDiagram } from "./diagram";

// ── Grid primitives ───────────────────────────────────────────────────────────

/**
 * Column × row span expressed as a tuple.
 * First element = col-span, second = row-span.
 * e.g. [2, 1] = two columns wide, one row tall.
 */
export type BentoSpan = [colSpan: 1 | 2 | 3, rowSpan: 1 | 2 | 3];

export type BentoVariant =
  | "hero"
  | "project"
  | "skill-cloud"
  | "ai-chat"
  | "architecture"
  | "performance"
  | "about"
  | "contact"
  | "timeline"
  | "stat";

// ── Per-variant data payloads (discriminated union) ───────────────────────────

interface BaseTile {
  id: string;
  span: BentoSpan;
  /** Render order — lower = first */
  order: number;
  /** aria-label for the tile region */
  label: string;
}

export interface HeroTile extends BaseTile {
  variant: "hero";
  data: {
    name: string;
    headline: string;
    subline: string;
    avatarUrl: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

export interface ProjectTile extends BaseTile {
  variant: "project";
  data: ProjectSummary;
}

export interface SkillCloudTile extends BaseTile {
  variant: "skill-cloud";
  data: {
    /** Tuple: [skill name, relative weight 1–5] */
    skills: Array<[name: string, weight: 1 | 2 | 3 | 4 | 5]>;
  };
}

export interface AIChatTile extends BaseTile {
  variant: "ai-chat";
  data: {
    placeholder: string;
    suggestedQuestions: string[];
  };
}

export interface ArchitectureTile extends BaseTile {
  variant: "architecture";
  data: MermaidDiagram;
}

export interface PerformanceTile extends BaseTile {
  variant: "performance";
  data: {
    lighthouse: LighthouseScore;
    services: APIStatus[];
  };
}

export interface StatTile extends BaseTile {
  variant: "stat";
  data: {
    value: string;
    label: string;
    delta?: string;
    icon?: string;
  };
}

export interface AboutTile extends BaseTile {
  variant: "about";
  data: {
    bio: string;
    location: string;
    availability: "open" | "limited" | "closed";
  };
}

export interface ContactTile extends BaseTile {
  variant: "contact";
  data: {
    links: Array<{ platform: string; href: string; display: string }>;
  };
}

/** Discriminated union — exhaustively type-check tile rendering */
export type BentoTile =
  | HeroTile
  | ProjectTile
  | SkillCloudTile
  | AIChatTile
  | ArchitectureTile
  | PerformanceTile
  | StatTile
  | AboutTile
  | ContactTile;

// ── Layout config ─────────────────────────────────────────────────────────────

export interface BentoGridConfig {
  /** Number of columns at each breakpoint */
  columns: { sm: 1 | 2; md: 2 | 3; lg: 3 | 4 };
  /** Base row height in px */
  rowHeight: number;
  gap: number;
  tiles: BentoTile[];
}
