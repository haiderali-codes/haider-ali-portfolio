export type ProjectStatus = "production" | "private" | "demo" | "concept" | "in-development";

export type Project = {
  title: string;
  slug: string;
  category: "Frontend" | "Full-Stack" | "eCommerce" | "Mobile" | "AI / LLM";
  status: ProjectStatus;
  description: string;
  highlight?: string;
  technologies: string[];
  organisation?: string;
  liveUrl?: string;
  github?: string;
  visualLabel: string;
};

export const projects: Project[] = [
  {
    title: "BOX — eCommerce Platform",
    slug: "box-ecommerce",
    category: "eCommerce",
    status: "production",
    organisation: "Retail Direct Group",
    description: "Production Angular 19 SSR eCommerce storefront integrated with Magento/GraphQL, Redis-backed state, Tailwind CSS, and Core Web Vitals optimisation.",
    highlight: "Angular SSR · GraphQL/Magento · Core Web Vitals · Redis",
    technologies: ["Angular 19", "SSR", "GraphQL", "Magento", "Tailwind CSS", "Redis"],
    liveUrl: "https://box.co.uk",
    visualLabel: "BOX",
  },
  {
    title: "Laptop Outlet — eCommerce Platform",
    slug: "laptop-outlet-ecommerce",
    category: "eCommerce",
    status: "production",
    organisation: "Retail Direct Group",
    description: "Production Next.js storefront integrated with Magento/GraphQL, custom checkout flows, Core Web Vitals work, analytics, and payment reliability improvements.",
    highlight: "Next.js · Custom Checkout · GraphQL/Magento",
    technologies: ["Next.js", "GraphQL", "Magento", "Tailwind CSS", "Stripe", "Core Web Vitals"],
    liveUrl: "https://www.laptopoutlet.co.uk",
    visualLabel: "LO",
  },
  {
    title: "Tappi",
    slug: "tappi",
    category: "Full-Stack",
    status: "production",
    organisation: "Cinnova Technologies",
    description: "Full-stack product built with Next.js, React, TypeScript and PostgreSQL as part of a production application portfolio serving active users.",
    technologies: ["Next.js", "React.js", "TypeScript", "JavaScript", "PostgreSQL"],
    visualLabel: "TP",
  },
  {
    title: "SportsWriters",
    slug: "sportswriters",
    category: "Mobile",
    status: "production",
    organisation: "Cinnova Technologies",
    description: "Cross-platform application delivered with Ionic, Angular and Node.js, backed by PostgreSQL and production mobile workflows.",
    technologies: ["Ionic", "Angular 14", "Node.js", "PostgreSQL", "SCSS"],
    visualLabel: "SW",
  },
  {
    title: "Joolep",
    slug: "joolep",
    category: "Mobile",
    status: "production",
    organisation: "SDSol Technologies",
    description: "Hybrid mobile application built with Ionic and Angular, backed by Node.js and MongoDB.",
    technologies: ["Ionic", "Angular 14", "TypeScript", "Node.js", "MongoDB"],
    visualLabel: "JL",
  },
  {
    title: "AI Resume Refiner",
    slug: "ai-resume-refiner",
    category: "AI / LLM",
    status: "in-development",
    description: "LLM-powered resume-tailoring application that analyses software-engineering job descriptions, extracts structured data from PDF resumes, and generates truthful, ATS-friendly resume content with evidence-backed rewriting.",
    highlight: "In Development · Personal Project",
    technologies: ["Next.js", "Node.js / NestJS", "OpenAI API", "PDF Processing", "Structured Outputs", "Prompt Engineering"],
    visualLabel: "AI",
  },
  {
    title: "RAG Knowledge Assistant",
    slug: "rag-knowledge-assistant",
    category: "AI / LLM",
    status: "concept",
    description: "Concept for a document-based Retrieval-Augmented Generation application allowing users to query uploaded knowledge with grounded contextual retrieval.",
    highlight: "Demo / Concept",
    technologies: ["Next.js", "NestJS", "OpenAI", "Embeddings", "Vector Database", "RAG"],
    visualLabel: "RAG",
  },
  {
    title: "AI Job Match Assistant",
    slug: "ai-job-match-assistant",
    category: "AI / LLM",
    status: "concept",
    description: "Concept application comparing developer experience against job requirements and generating skill-gap analysis and compatibility insights.",
    highlight: "Demo / Concept",
    technologies: ["Next.js", "Node.js", "LLM API", "Structured Outputs", "Prompt Engineering"],
    visualLabel: "JM",
  },
];

export const projectCategories = ["All", "Frontend", "Full-Stack", "eCommerce", "Mobile", "AI / LLM"] as const;
