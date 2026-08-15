import type { PortfolioItem } from "@/types";

export const portfolio: PortfolioItem[] = [
  {
    slug: "ai-customer-support-demo",
    title: "AI Customer Support Demo",
    category: "AI",
    tags: ["AI", "Automation", "Web"],
    problem: "A service business needs faster first responses without losing human control.",
    solution: "A controlled AI assistant answers approved questions, captures lead details, and hands off complex cases.",
    features: ["Knowledge-based answers", "Lead capture", "Escalation flow", "Admin review"],
    stack: ["Next.js", "TypeScript", "AI API", "Vector database"],
    architecture: ["Website widget", "Knowledge retrieval", "Validation layer", "Human handoff"]
  },
  {
    slug: "business-crm-demo",
    title: "Business CRM Demo",
    category: "Automation",
    tags: ["Automation", "Software", "Data"],
    problem: "Sales enquiries are spread across phone calls, WhatsApp, and spreadsheets.",
    solution: "A CRM dashboard centralizes leads, follow-ups, stages, ownership, and reporting.",
    features: ["Lead pipeline", "Follow-up reminders", "Status dashboards", "CSV import"],
    stack: ["React", "Node.js", "PostgreSQL", "Cloud hosting"],
    architecture: ["Role-based app", "API layer", "Database", "Reporting module"]
  },
  {
    slug: "service-company-website-demo",
    title: "Service Company Website Demo",
    category: "Web",
    tags: ["Web", "Marketing", "SEO"],
    problem: "A growing service company needs credible digital presence and lead generation.",
    solution: "A fast corporate website with service pages, SEO structure, and enquiry flow.",
    features: ["Service directory", "SEO metadata", "Lead form", "Blog structure"],
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Static hosting"],
    architecture: ["Static pages", "Content data", "Form endpoint abstraction", "Analytics-ready setup"]
  }
];

export const portfolioFilters = ["AI", "Web", "Automation", "Mobile", "Software", "Data", "Marketing"];
export const getPortfolioItem = (slug: string) => portfolio.find((item) => item.slug === slug);
