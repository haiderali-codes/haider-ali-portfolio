export type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Team Lead",
    company: "Retail Direct Group (Five Tech)",
    location: "Lahore, Pakistan",
    period: "Dec 2024 — Present",
    bullets: [
      "Lead frontend development for BOX and Laptop Outlet, two production Angular SSR / Next.js eCommerce platforms integrated with a Magento/GraphQL backend, managing a team of 5+ engineers alongside backend and DevOps colleagues.",
      "Architected Core Web Vitals improvements across high-traffic storefronts, achieving 20%+ performance gains.",
      "Introduced CI/CD pipelines that cut deployment time by 40%.",
      "Designed a signals-based B2B pricing and theming system with cookie-driven state and dedicated Redis cache keys for ex-VAT/inc-VAT pricing.",
      "Resolved critical SSR hydration mismatches and a Stripe payment race condition in production checkout flows.",
      "Designing an LLM-powered resume-tailoring application with PDF parsing, structured outputs, evidence-backed rewriting, cached canonical data, claim validation, and controlled provider fallbacks.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Cinnova Technologies",
    period: "Sep 2022 — Dec 2024",
    bullets: [
      "Delivered 3+ Next.js applications serving thousands of active users.",
      "Designed microservices that reduced response times by 30%.",
    ],
  },
  {
    role: "Software Engineer",
    company: "SDSol Technologies",
    period: "Aug 2021 — Aug 2022",
    bullets: [
      "Delivered 2 cross-platform mobile applications using Ionic and Angular.",
      "Improved UI/UX across 4 applications, reducing user-reported issues by 20%.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Codetreck",
    period: "Oct 2018 — Jul 2021",
    bullets: [
      "Developed 5+ web and mobile applications from scratch using the MEAN/MERN stack.",
      "Achieved consistent 90+ Lighthouse performance scores across delivered products.",
    ],
  },
  {
    role: "MEAN/MERN Stack Intern",
    company: "Switch To Solutions",
    period: "Jul 2018 — Sep 2018",
    bullets: ["Built 2 foundational MEAN stack applications using Angular and Node.js."],
  },
];
