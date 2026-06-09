import type { RAGDocument } from "@/types";

/**
 * Knowledge base for the Digital Twin AI assistant.
 * These documents are embedded and stored in Supabase pgvector.
 * Run `npm run seed:rag` to upsert them.
 */
export const RAG_DOCUMENTS: RAGDocument[] = [
  // ── VASC-Quest architecture ────────────────────────────────────────────────
  {
    id: "vasc-quest-architecture",
    content: `
VASC-Quest is a high-throughput distributed platform built with Go 1.21 on AWS serverless infrastructure.

Architecture overview:
- Client (Next.js) → CloudFront CDN → AWS API Gateway (HTTP API)
- Three Go Lambda handlers: auth-handler, quest-engine, analytics-worker
- Go was chosen for sub-5 MB binary size, yielding cold starts under 80 ms
- Quest events are pushed to an SQS FIFO queue, consumed asynchronously by analytics-worker
- Data stored in MongoDB Atlas; assets in AWS S3
- Full observability: CloudWatch Logs + Metrics, AWS X-Ray distributed tracing

Key engineering decisions:
1. Serverless Go over EC2: 60%+ cost reduction; scales to zero during idle periods
2. SQS FIFO for analytics: guaranteed ordering, at-least-once delivery, decouples producers from consumers
3. Separate Lambda per domain (auth / quest / analytics): independent scaling, isolated failure domains
4. X-Ray tracing: end-to-end latency visibility across Lambda invocations
    `.trim(),
    metadata: {
      source: "vasc-quest-architecture",
      type: "architecture",
      tags: ["go", "aws", "lambda", "serverless", "sqs", "mongodb", "cloudfront"],
      lastUpdated: "2024-06-01T00:00:00Z",
    },
  },

  // ── iClothes architecture ──────────────────────────────────────────────────
  {
    id: "iclothes-architecture",
    content: `
iClothes is a full-stack e-commerce platform built on the MERN stack.

Architecture overview:
- React SPA (Vite) deployed to Vercel CDN
- Express REST API with JWT middleware for stateless authentication
- MongoDB Atlas via Mongoose ODM for Users, Products, and Orders
- Bcrypt (10 rounds) for password hashing before storage
- Axios for HTTP client on the frontend

Key engineering decisions:
1. JWT stateless auth: no session store needed; tokens validated in middleware before any DB access
2. Mongoose ODM: schema validation at the application layer before writes
3. Vercel deployment: zero-config CI/CD; edge CDN for static assets
4. API latency: p95 under 200 ms on free-tier infrastructure

Live at: https://iclothes.vercel.app
    `.trim(),
    metadata: {
      source: "iclothes-architecture",
      type: "architecture",
      tags: ["react", "nodejs", "express", "mongodb", "jwt", "vercel", "mern"],
      lastUpdated: "2023-12-01T00:00:00Z",
    },
  },

  // ── Skills and experience ──────────────────────────────────────────────────
  {
    id: "rayan-skills-experience",
    content: `
Rayan Morais is a Full-Stack Developer transitioning to a Senior Architect role.

Core skills:
- Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion
- Backend: Node.js, Express, Go (Golang)
- Databases: MongoDB Atlas, Supabase (PostgreSQL + pgvector)
- Infrastructure: AWS Lambda, API Gateway, SQS, CloudFront, S3, CloudWatch, X-Ray
- DevOps: Git, GitHub Actions, Vercel, Docker
- Languages: TypeScript, JavaScript, Go, Python

Recent work involves:
- Go microservices on AWS Lambda for high-throughput event processing
- Next.js 16 App Router with React Server Components and Cache Components (PPR)
- RAG-powered AI assistants using Vercel AI SDK + Supabase pgvector
- MERN stack e-commerce with JWT auth and MongoDB

Based in Brazil. Open to full-time roles, freelance projects, and collaborations.
Contact: rayan_cm2021@icloud.com | github.com/rayancmorais
    `.trim(),
    metadata: {
      source: "rayan-skills-experience",
      type: "experience",
      tags: ["go", "react", "nextjs", "typescript", "aws", "mongodb", "fullstack"],
      lastUpdated: "2026-01-01T00:00:00Z",
    },
  },

  // ── Portfolio projects overview ────────────────────────────────────────────
  {
    id: "portfolio-projects-overview",
    content: `
Rayan's key projects:

1. VASC-Quest (2024, in progress): Go/AWS serverless platform. Lambda handlers, SQS event queue, MongoDB Atlas, X-Ray tracing. 60%+ infra cost reduction vs EC2. Cold starts < 80 ms.

2. iClothes E-commerce (2023, live): MERN stack. React + Express + MongoDB. JWT auth, Bcrypt. Live at iclothes.vercel.app. p95 latency < 200 ms.

3. Movideux (2023): Netflix-style movie browser. React, Node.js, REST API, React Router.

4. Chronos Pomodoro Timer (2023): React web app for time management with Pomodoro technique.

5. Map Tracker (2023): Cross-platform React Native mobile app with GPS tracking, Node.js/MongoDB backend, secure auth.

6. Portfolio (2024): This site. Next.js 16, TypeScript, Tailwind v4, Framer Motion, Vercel AI SDK, Supabase RAG.
    `.trim(),
    metadata: {
      source: "portfolio-projects-overview",
      type: "project",
      tags: ["iclothes", "vasc-quest", "movideux", "chronos", "map-tracker", "portfolio"],
      lastUpdated: "2026-01-01T00:00:00Z",
    },
  },
];
