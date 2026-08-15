import type { Service } from "@/types";

const commonFaqs = [
  { question: "Can this be delivered in phases?", answer: "Yes. We can start with the highest-value workflow and expand after feedback." },
  { question: "Do you provide support after launch?", answer: "Yes. Maintenance, improvements, monitoring, and issue resolution can be included." }
];

export const services: Service[] = [
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    icon: "bot",
    summary: "Practical AI solutions that automate communication, analyse information, improve decisions, and accelerate customer support.",
    description: "We design AI agents, chatbots, document intelligence, RAG systems, and workflow assistants around real business tasks.",
    capabilities: ["AI agents", "Chatbots", "Voice assistants", "RAG systems", "Document intelligence", "Computer vision"],
    problems: ["Slow customer response", "Manual document review", "Repeated internal questions", "Disconnected knowledge"],
    useCases: ["Support assistant", "Knowledge base search", "Lead qualification", "Invoice and document extraction"],
    technologies: ["OpenAI-compatible integrations", "Gemini-compatible integrations", "LangChain", "Vector databases"],
    benefits: ["Faster responses", "Reduced repetitive work", "Better knowledge access", "Scalable support"],
    faqs: commonFaqs
  },
  {
    slug: "website-development",
    title: "Website Development",
    icon: "globe",
    summary: "Fast, responsive, conversion-focused websites and web applications designed for growth.",
    description: "Corporate websites, e-commerce, SaaS interfaces, portals, admin dashboards, and content-led marketing systems.",
    capabilities: ["Business websites", "Corporate websites", "E-commerce", "SaaS", "Customer portals", "Admin dashboards"],
    problems: ["Outdated online presence", "Low conversion", "Slow pages", "Hard-to-update content"],
    useCases: ["Company site", "Product landing pages", "Booking portals", "Customer dashboards"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    benefits: ["Stronger credibility", "Better SEO", "Mobile-friendly UX", "Maintainable code"],
    faqs: commonFaqs
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: "smartphone",
    summary: "Modern Android and cross-platform applications built for customers, teams, and business operations.",
    description: "We build mobile apps that connect to APIs, automate business tasks, and improve customer or field-team workflows.",
    capabilities: ["Android apps", "Business apps", "E-commerce apps", "Booking apps", "API-integrated apps"],
    problems: ["Manual field updates", "Poor customer access", "No mobile workflow", "Disconnected operations"],
    useCases: ["Customer app", "Internal operations app", "Booking app", "Sales team app"],
    technologies: ["Android", "Flutter", "React Native", "REST APIs"],
    benefits: ["Mobile-first access", "Faster operations", "Better customer engagement", "Integrated data"],
    faqs: commonFaqs
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    icon: "workflow",
    summary: "Automated workflows that connect teams, customers, systems, and business data.",
    description: "We automate repetitive work across sales, support, HR, reporting, notifications, and operations.",
    capabilities: ["CRM automation", "WhatsApp automation", "Email automation", "HR automation", "Reporting workflows"],
    problems: ["Repeated manual updates", "Missed follow-ups", "Delayed reports", "Unclear ownership"],
    useCases: ["Lead routing", "Customer reminders", "Attendance flow", "Report generation"],
    technologies: ["APIs", "Webhooks", "Databases", "Automation workflows"],
    benefits: ["Less manual work", "Fewer missed tasks", "Faster reporting", "Consistent process"],
    faqs: commonFaqs
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    icon: "code",
    summary: "Purpose-built software designed around exact operational requirements.",
    description: "CRM, ERP, HRMS, POS, billing, inventory, and internal tools that match the way your business runs.",
    capabilities: ["CRM", "ERP", "HRMS", "POS", "Billing", "Inventory"],
    problems: ["Spreadsheet dependency", "Generic software mismatch", "Manual approvals", "Fragmented data"],
    useCases: ["Operations system", "Billing app", "Inventory tracker", "Approval portal"],
    technologies: ["Python", ".NET", "Node.js", "PostgreSQL", "SQL Server"],
    benefits: ["Exact workflow fit", "Centralized data", "Better accountability", "Future extensibility"],
    faqs: commonFaqs
  },
  {
    slug: "desktop-applications",
    title: "Desktop Applications",
    icon: "monitor",
    summary: "Reliable Windows software, local agents, utility applications, and offline-first business tools.",
    description: "We create desktop tools for local workflows, device integrations, data processing, and offline-first usage.",
    capabilities: ["Windows tools", "Local utilities", "Offline-first apps", "Data processors"],
    problems: ["Internet-limited operations", "Local device needs", "Manual file work", "Legacy utility gaps"],
    useCases: ["Billing tool", "Local sync agent", "File automation", "Device dashboard"],
    technologies: [".NET", "Python", "SQLite", "Windows services"],
    benefits: ["Reliable local use", "Fast internal tasks", "Offline continuity", "Secure device workflows"],
    faqs: commonFaqs
  },
  {
    slug: "chrome-extensions",
    title: "Chrome Extensions",
    icon: "chrome",
    summary: "Custom browser extensions for productivity, data processing, integration, and workflow automation.",
    description: "We build secure browser extensions that improve team productivity and connect web tools to workflows.",
    capabilities: ["Productivity extensions", "Data capture", "Internal tooling", "Workflow integration"],
    problems: ["Repeated browser tasks", "Copy-paste work", "Disconnected web tools", "Manual research"],
    useCases: ["CRM enrichment helper", "Internal browser assistant", "Data extractor", "Workflow shortcut"],
    technologies: ["Manifest V3", "TypeScript", "Browser APIs", "Secure storage"],
    benefits: ["Faster browser workflows", "Lower manual effort", "Team consistency", "Tool integration"],
    faqs: commonFaqs
  },
  {
    slug: "cloud-devops",
    title: "Cloud and DevOps",
    icon: "cloud",
    summary: "Deployment, hosting, Docker, databases, monitoring, backups, SSL, and CI/CD support.",
    description: "We help plan and operate reliable deployments for websites, apps, databases, and automation systems.",
    capabilities: ["Hosting", "Docker", "Databases", "Monitoring", "Backups", "CI/CD"],
    problems: ["Unreliable deployment", "No backup plan", "Manual releases", "Poor monitoring"],
    useCases: ["App deployment", "Server setup", "Backup strategy", "Release pipeline"],
    technologies: ["Docker", "Linux", "Nginx", "Cloudflare", "Azure"],
    benefits: ["Stable releases", "Clear operations", "Better uptime planning", "Recovery readiness"],
    faqs: commonFaqs
  },
  {
    slug: "data-analytics",
    title: "Data Analytics and BI",
    icon: "chart",
    summary: "Dashboards, automated reporting, data pipelines, and business insights.",
    description: "We turn business data into useful dashboards, scheduled reports, metrics, and decision-support views.",
    capabilities: ["Dashboards", "Automated reporting", "Data pipelines", "Business insights"],
    problems: ["Manual reporting", "Unclear KPIs", "Scattered data", "Slow decisions"],
    useCases: ["Sales dashboard", "Inventory insights", "Marketing reports", "Operations metrics"],
    technologies: ["PostgreSQL", "SQL Server", "Python", "BI dashboards"],
    benefits: ["Clear metrics", "Faster decisions", "Reduced reporting work", "Better visibility"],
    faqs: commonFaqs
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: "megaphone",
    summary: "SEO, social media, paid campaigns, content, lead generation, and marketing automation.",
    description: "We connect website, SEO, campaigns, content, and automation so digital growth is measurable and practical.",
    capabilities: ["SEO", "Social media", "Paid campaigns", "Content", "Lead generation", "Marketing automation"],
    problems: ["Low visibility", "Weak lead capture", "Unclear campaign tracking", "Inconsistent content"],
    useCases: ["SEO foundation", "Lead funnels", "Campaign landing pages", "Automation nurture"],
    technologies: ["Analytics", "Search Console", "CRM integrations", "Marketing tools"],
    benefits: ["Better discoverability", "More qualified enquiries", "Clearer measurement", "Consistent follow-up"],
    faqs: commonFaqs
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
