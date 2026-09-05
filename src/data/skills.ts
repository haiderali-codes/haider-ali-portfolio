export const skillGroups = [
  {
    title: "Frontend",
    skills: ["Angular 17+", "Angular SSR", "Signals", "React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "PrimeNG", "Redux", "RxJS"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "GraphQL", "Microservices", "Authentication", "Session Management"],
  },
  {
    title: "Data & Caching",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    title: "Mobile",
    skills: ["Ionic", "Capacitor", "Android Integrations", "iOS Integrations", "Hybrid Applications"],
  },
  {
    title: "Architecture",
    skills: ["Next.js SSR", "Angular SSR", "Hydration", "State Management", "Component Architecture", "Design Systems", "Core Web Vitals"],
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "PM2", "AWS", "Vercel", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Integrations",
    skills: ["Stripe", "Magento / GraphQL", "GA4", "GTM", "Analytics", "Third-Party APIs"],
  },
  {
    title: "Applied AI & LLM",
    skills: ["OpenAI APIs", "Prompt Design", "Structured Outputs", "Model Routing", "PDF Processing", "AI Output Validation", "RAG Concepts", "AI Automation"],
  },
] as const;

export const coreStack = [
  { label: "Angular / SSR / Signals", level: "Expert" },
  { label: "React.js / Next.js", level: "Expert" },
  { label: "TypeScript / JavaScript", level: "Expert" },
  { label: "Node.js / NestJS", level: "Advanced" },
  { label: "GraphQL / REST APIs", level: "Advanced" },
  { label: "Ionic / Capacitor", level: "Advanced" },
  { label: "Redis / Data Caching", level: "Advanced" },
  { label: "Applied AI / LLM APIs", level: "Proficient" },
] as const;

export const marqueePrimary = [
  "ANGULAR", "REACT.JS", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "NESTJS", "GRAPHQL", "REST", "IONIC", "CAPACITOR", "REDIS", "STRIPE"
];

export const marqueeSecondary = [
  "SSR", "ANGULAR SIGNALS", "MICROSERVICES", "CI/CD", "GITHUB ACTIONS", "VERCEL", "AWS", "FIREBASE", "REDUX", "RXJS", "OPENAI API", "RAG", "PDF PROCESSING"
];
