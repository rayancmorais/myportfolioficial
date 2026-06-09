// ── Lighthouse ────────────────────────────────────────────────────────────────

/** 0–100 integer score */
type Score = number;

export interface LighthouseScore {
  performance: Score;
  accessibility: Score;
  bestPractices: Score;
  seo: Score;
  pwa?: Score;
  /** Page URL that was audited */
  url: string;
  /** ISO-8601 — when the audit ran */
  measuredAt: string;
}

/** Colour bucket matching Lighthouse conventions */
export function lighthouseColor(score: Score): "green" | "amber" | "red" {
  if (score >= 90) return "green";
  if (score >= 50) return "amber";
  return "red";
}

// ── API / service health ──────────────────────────────────────────────────────

export type ServiceStatus = "operational" | "degraded" | "down" | "unknown";

export interface APIStatus {
  /** Display name, e.g. "iClothes API" */
  name: string;
  /** Health-check endpoint */
  url: string;
  status: ServiceStatus;
  /** Round-trip latency in milliseconds */
  latencyMs: number;
  /** 30-day uptime percentage */
  uptime: number;
  /** ISO-8601 */
  checkedAt: string;
}

// ── Generic metric tile ───────────────────────────────────────────────────────

export type MetricTrend = "up" | "down" | "flat";

export interface Metric {
  label: string;
  value: string | number;
  unit?: string; // e.g. "ms", "%", "req/s"
  delta?: string; // e.g. "+12%"
  trend?: MetricTrend;
}

export interface PerformanceDashboard {
  lighthouse: LighthouseScore;
  services: APIStatus[];
  keyMetrics: Metric[];
  /** ISO-8601 — last full refresh */
  refreshedAt: string;
}
