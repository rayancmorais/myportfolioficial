// ── Domain type barrel ────────────────────────────────────────────────────────
// Import from this file anywhere in the app: `import type { CaseStudy } from "@/types"`

export type {
  TechCategory,
  Technology,
  Impact,
  CaseStudySection,
  CaseStudy,
  ProjectSummary,
} from "./project";

export type {
  MermaidDiagramType,
  MermaidDiagram,
  NodeType,
  EdgeType,
  ArchitectureNode,
  ArchitectureEdge,
  ArchitectureFlow,
} from "./diagram";

export type {
  RAGDocumentType,
  RAGDocumentMetadata,
  RAGDocument,
  RAGRetrievalResult,
  DigitalTwinConfig,
  PortfolioMessage,
  SupabaseDocument,
} from "./ai";

export type {
  BentoSpan,
  BentoVariant,
  BentoTile,
  HeroTile,
  ProjectTile,
  SkillCloudTile,
  AIChatTile,
  ArchitectureTile,
  PerformanceTile,
  StatTile,
  AboutTile,
  ContactTile,
  BentoGridConfig,
} from "./bento";

export type {
  LighthouseScore,
  ServiceStatus,
  APIStatus,
  MetricTrend,
  Metric,
  PerformanceDashboard,
} from "./performance";

// lighthouseColor is a runtime helper, not just a type
export { lighthouseColor } from "./performance";

export type {
  SpringConfig,
  MagneticConfig,
  TiltConfig,
} from "./motion";

// Runtime motion constants and factories
export {
  SPRINGS,
  EASE_OUT_EXPO,
  EASE_IN_OUT_EXPO,
  TRANSITIONS,
  fadeUp,
  staggerContainer,
  accessibleTransition,
} from "./motion";

export type {
  APIResponse,
  APIError,
  ChatRequest,
  ServiceHealthPayload,
  RAGIngestPayload,
  Env,
} from "./api";

// Runtime Zod schemas and env validator
export {
  ChatRequestSchema,
  ServiceHealthSchema,
  RAGIngestSchema,
  EnvSchema,
  validateEnv,
} from "./api";

export type {
  FrontMatter,
  MDXDocument,
  CaseStudyFrontMatter,
  TimelineEntry,
} from "./content";

// ── UI / display DTOs (presentational layer) ──────────────────────────────────
export type { Project, Certificate } from "./ui";
