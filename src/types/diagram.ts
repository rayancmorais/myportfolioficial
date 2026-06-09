// ── Mermaid diagram types ─────────────────────────────────────────────────────

export type MermaidDiagramType =
  | "flowchart"
  | "sequenceDiagram"
  | "classDiagram"
  | "erDiagram"
  | "architecture"
  | "stateDiagram"
  | "gitgraph";

export interface MermaidDiagram {
  id: string;
  title: string;
  /** Full Mermaid DSL string, e.g. "flowchart LR\n  A --> B" */
  definition: string;
  type: MermaidDiagramType;
}

// ── Low-level architecture graph (source of truth for Mermaid generation) ────

export type NodeType =
  | "client"
  | "cdn"
  | "api-gateway"
  | "lambda"
  | "go-service"
  | "container"
  | "queue"
  | "database"
  | "cache"
  | "storage"
  | "third-party";

export type EdgeType = "sync" | "async" | "event" | "webhook";

export interface ArchitectureNode {
  id: string;
  label: string;
  type: NodeType;
  technology: string; // e.g. "Go 1.21", "AWS Lambda", "MongoDB Atlas"
  description?: string;
  region?: string; // e.g. "us-east-1"
  /** Outbound connections */
  connections: ArchitectureEdge[];
}

export interface ArchitectureEdge {
  targetId: string;
  label?: string;
  type: EdgeType;
  /** e.g. "REST/JSON", "gRPC", "SNS" */
  protocol?: string;
}

export interface ArchitectureFlow {
  id: string;
  title: string;
  description: string;
  nodes: ArchitectureNode[];
}
