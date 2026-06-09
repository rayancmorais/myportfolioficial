import type { CaseStudy } from "@/types";
import { iClothesArchitecture, vascQuestArchitecture } from "./diagrams";

export const caseStudies: CaseStudy[] = [
  // ── iClothes ──────────────────────────────────────────────────────────────
  {
    id: "iclothes",
    title: "iClothes E-commerce",
    slug: "iclothes",
    tagline: "Full-stack e-commerce platform with secure auth, cart, and a MongoDB backend.",
    role: "Full-Stack Developer",
    timeline: "3 months · 2023",
    status: "live",
    sections: [
      {
        heading: "Problem",
        body: "Small clothing retailers had no affordable, production-grade e-commerce solution they could self-host. Existing SaaS platforms charged high transaction fees and offered no control over data or UX.",
      },
      {
        heading: "Solution",
        body: "Built a full-stack platform with a React SPA, an Express REST API, and MongoDB Atlas. JWT + Bcrypt provides stateless, secure authentication. The cart and order state are persisted server-side to survive page refreshes. The entire stack deploys to Vercel (frontend) with a separate Node.js service behind it.",
      },
      {
        heading: "Architecture",
        body: "The system is a classic MERN stack: React frontend on Vercel CDN → Express router → JWT middleware → Mongoose ODM → MongoDB Atlas. Passwords are hashed with Bcrypt before storage. All API routes are protected by the middleware layer so unauthenticated requests never touch the database.",
      },
      {
        heading: "Outcome",
        body: "The platform handles authentication, product listing, and order management end-to-end. It is live at iclothes.vercel.app and has demonstrated sub-200 ms p95 API latency on free-tier infra.",
      },
    ],
    impact: [
      { metric: "API p95 latency", value: "< 200 ms", direction: "down" },
      { metric: "Auth overhead", value: "< 20 ms", delta: "JWT stateless", direction: "neutral" },
      { metric: "Password security", value: "Bcrypt", delta: "10 rounds", direction: "neutral" },
      { metric: "Deployment", value: "Zero-downtime", delta: "Vercel", direction: "neutral" },
    ],
    technologies: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "language" },
      { name: "Vite", category: "devops" },
      { name: "Node.js", category: "backend" },
      { name: "Express", category: "backend" },
      { name: "MongoDB", category: "database" },
      { name: "Mongoose", category: "database" },
      { name: "JWT", category: "backend" },
      { name: "Bcrypt", category: "backend" },
      { name: "Axios", category: "frontend" },
    ],
    architectureDiagram: iClothesArchitecture,
    coverImage: "/images/iClothes.png",
    liveUrl: "https://iclothes.vercel.app",
    githubUrl: "https://github.com/rayancmorais/iclothes",
    featured: true,
  },

  // ── VASC-Quest ─────────────────────────────────────────────────────────────
  {
    id: "vasc-quest",
    title: "VASC-Quest",
    slug: "vasc-quest",
    tagline: "High-throughput Go microservices on AWS Lambda with event-driven analytics.",
    role: "Systems Architect & Backend Engineer",
    timeline: "2024 — ongoing",
    status: "in-progress",
    sections: [
      {
        heading: "Problem",
        body: "The system needed to handle spiky traffic patterns with zero cold-start latency impact, process thousands of events per minute asynchronously, and maintain full observability without running persistent server infrastructure.",
      },
      {
        heading: "Solution",
        body: "Designed a serverless architecture using Go 1.21 AWS Lambda handlers behind API Gateway. Go's single binary compilation produces sub-5 MB deployment packages, resulting in sub-100 ms cold starts. Business logic is separated into three Lambda functions: auth, quest-engine, and analytics-worker. An SQS FIFO queue decouples event production from analytics processing.",
      },
      {
        heading: "Architecture",
        body: "CloudFront sits at the edge routing traffic to API Gateway. Three Lambda handlers written in Go process auth, quest, and analytics workloads independently. Quest events are pushed to SQS, consumed by the analytics worker, and aggregated to MongoDB Atlas. AWS X-Ray provides distributed tracing across Lambda invocations. CloudWatch Alarms monitor p99 latency and error rates.",
      },
      {
        heading: "Outcome",
        body: "Cold start times are consistently under 80 ms thanks to Go's minimal runtime. The SQS-backed analytics pipeline processes events with guaranteed ordering. Infrastructure costs scale to zero during idle periods — a 60%+ cost reduction compared to always-on EC2 equivalents.",
      },
    ],
    impact: [
      { metric: "Cold start", value: "< 80 ms", delta: "Go binary < 5 MB", direction: "down" },
      { metric: "Infra cost", value: "60%+ reduction", delta: "vs EC2", direction: "down" },
      { metric: "Event throughput", value: "10 k/min", delta: "SQS FIFO", direction: "up" },
      { metric: "Observability", value: "X-Ray traces", delta: "100% coverage", direction: "neutral" },
    ],
    technologies: [
      { name: "Go 1.21", category: "language" },
      { name: "AWS Lambda", category: "infrastructure" },
      { name: "AWS API Gateway", category: "infrastructure" },
      { name: "AWS SQS", category: "infrastructure" },
      { name: "AWS CloudFront", category: "infrastructure" },
      { name: "AWS CloudWatch", category: "infrastructure" },
      { name: "AWS X-Ray", category: "infrastructure" },
      { name: "MongoDB Atlas", category: "database" },
      { name: "AWS S3", category: "infrastructure" },
      { name: "Next.js", category: "frontend" },
    ],
    architectureDiagram: vascQuestArchitecture,
    coverImage: "/images/Gemini_Generated_Image_e3h9zhe3h9zhe3h9.png",
    featured: true,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllSlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
