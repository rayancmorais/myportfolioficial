/**
 * UI / display DTOs — lightweight shapes used by presentational components.
 * These are intentionally simpler than the full domain types in project.ts.
 * Migrate components to CaseStudy / ProjectSummary as case-study pages are built.
 */

/** Bento card display data — consumed by BentoProjectCard */
export interface Project {
  id: number;
  title: string;
  description: string;
  /** Plain technology names for pill display */
  technologies: string[];
  imageUrl: string;
  link: string;
  featured?: boolean;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  imageUrl: string;
  credentialUrl?: string;
}
