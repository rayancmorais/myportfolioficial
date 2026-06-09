import type { MermaidDiagram } from "@/types";

export const iClothesArchitecture: MermaidDiagram = {
  id: "iclothes-arch",
  title: "iClothes — MERN Stack Architecture",
  type: "flowchart",
  definition: `
flowchart LR
  subgraph Client["Client Layer"]
    Browser["React SPA\n(Vite)"]
  end

  subgraph Edge["Edge / CDN"]
    Vercel["Vercel CDN\n(Static Assets)"]
  end

  subgraph API["API Layer — Node.js / Express"]
    Router["Express Router"]
    AuthMW["JWT Middleware"]
    ProductCtrl["Product Controller"]
    OrderCtrl["Order Controller"]
    UserCtrl["User Controller"]
  end

  subgraph Security["Security"]
    BCrypt["Bcrypt\nPassword Hash"]
    JWT["JWT\nSigning / Verify"]
  end

  subgraph Data["Data Layer"]
    Mongoose["Mongoose ODM"]
    MongoDB[("MongoDB Atlas\nUsers · Products · Orders")]
  end

  Browser -->|HTTPS| Vercel
  Vercel -->|"REST /api/*"| Router
  Router --> AuthMW
  AuthMW --> JWT
  AuthMW --> ProductCtrl
  AuthMW --> OrderCtrl
  Router --> UserCtrl
  UserCtrl --> BCrypt
  ProductCtrl --> Mongoose
  OrderCtrl --> Mongoose
  UserCtrl --> Mongoose
  Mongoose --> MongoDB

  style Client fill:#1e1b4b,stroke:#4338ca
  style Edge fill:#0c1a2e,stroke:#1d4ed8
  style API fill:#14202e,stroke:#0284c7
  style Security fill:#1a1400,stroke:#ca8a04
  style Data fill:#0e1f14,stroke:#16a34a
`.trim(),
};

export const vascQuestArchitecture: MermaidDiagram = {
  id: "vasc-quest-arch",
  title: "VASC-Quest — Go / AWS Serverless Architecture",
  type: "flowchart",
  definition: `
flowchart TB
  subgraph Client["Client Layer"]
    Web["Next.js\nFrontend"]
    Mobile["Mobile Client"]
  end

  subgraph AWS_Edge["AWS Edge"]
    CF["CloudFront CDN"]
    APIGW["API Gateway\n(HTTP API)"]
  end

  subgraph Lambdas["AWS Lambda — Go 1.21 Handlers"]
    AuthLambda["λ auth-handler\nJWT · Bcrypt"]
    QuestLambda["λ quest-engine\nBusiness Logic"]
    AnalyticsLambda["λ analytics-worker\nAggregations"]
  end

  subgraph Async["Async Messaging"]
    SQS["AWS SQS\n(FIFO Queue)"]
  end

  subgraph Data["Data Layer"]
    MongoDB[("MongoDB Atlas\nQuests · Users · Events")]
    S3["AWS S3\n(Assets / Reports)"]
  end

  subgraph Observability["Observability"]
    CW["CloudWatch\nLogs · Metrics · Alarms"]
    XRay["AWS X-Ray\nDistributed Tracing"]
  end

  Web & Mobile --> CF
  CF --> APIGW
  APIGW -->|"/auth/*"| AuthLambda
  APIGW -->|"/quests/*"| QuestLambda
  APIGW -->|"/analytics/*"| AnalyticsLambda
  AuthLambda --> MongoDB
  QuestLambda --> MongoDB
  QuestLambda -->|"Enqueue event"| SQS
  SQS --> AnalyticsLambda
  AnalyticsLambda --> MongoDB
  AuthLambda --> S3
  AuthLambda --> CW
  QuestLambda --> CW
  QuestLambda --> XRay
  AnalyticsLambda --> CW

  style Client fill:#1e1b4b,stroke:#4338ca
  style AWS_Edge fill:#0c1a2e,stroke:#f97316
  style Lambdas fill:#0e1f14,stroke:#22c55e
  style Async fill:#1a1400,stroke:#eab308
  style Data fill:#14202e,stroke:#0ea5e9
  style Observability fill:#1a0e20,stroke:#a855f7
`.trim(),
};

export const DIAGRAMS: Record<string, MermaidDiagram> = {
  "iclothes-arch": iClothesArchitecture,
  "vasc-quest-arch": vascQuestArchitecture,
};
