// ── MDX / content types ───────────────────────────────────────────────────────
// Used when reading .mdx files from the filesystem (gray-matter frontmatter).

export interface FrontMatter {
  title: string;
  /** Short description for SEO / OG cards */
  description: string;
  /** ISO-8601 date */
  publishedAt: string;
  /** ISO-8601 date — optional, for case studies with a clear ship date */
  updatedAt?: string;
  tags: string[];
  coverImage?: string;
  /** Set to true to exclude from production listings */
  draft?: boolean;
}

/** Full MDX document after parsing with gray-matter + remark */
export interface MDXDocument<T extends FrontMatter = FrontMatter> {
  frontmatter: T;
  /** Serialised MDX source ready for next-mdx-remote */
  content: string;
  /** slug derived from filename */
  slug: string;
  /** Reading time in minutes (computed) */
  readingTimeMin: number;
}

// ── Case study MDX frontmatter (extends base) ─────────────────────────────────

export interface CaseStudyFrontMatter extends FrontMatter {
  role: string;
  timeline: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: "live" | "in-progress" | "archived";
}

// ── Timeline entry (experience / career) ─────────────────────────────────────

export interface TimelineEntry {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  startDate: string; // ISO-8601 month: "2023-06"
  endDate?: string;  // omit for current
  location: string;
  type: "full-time" | "freelance" | "contract" | "open-source";
  highlights: string[];
  technologies: string[];
}
