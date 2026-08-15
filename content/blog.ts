import type { BlogPost } from "@/types";

const articleBodies = {
  ai: [
    ["what-ai-automation-means", "What AI automation means", "AI automation is not about replacing every human step. For a small business, the useful version is narrower and more practical: identify repeated questions, repeated document checks, repeated follow-ups, or repeated reporting tasks, then use software and AI to make those tasks faster and more consistent.", "A good first automation usually sits close to customer communication or internal knowledge. It can answer common questions, collect details before a team member responds, prepare a draft message, classify an enquiry, or summarize information from a form."],
    ["where-to-start", "Where to start", "Start with a workflow that already happens every week. Customer enquiries, appointment reminders, lead qualification, invoice reading, and internal FAQ support are common examples. The process should have clear inputs, clear rules, and a clear point where a human can review or take over.", "Avoid automating unclear work first. If the process is not documented, the first step is mapping the process, not adding AI."],
    ["human-control", "Keeping human control", "AI systems should be designed with boundaries. The assistant should use approved business information, ask for missing details, and escalate sensitive cases. For documents, extracted data should be reviewed before it affects billing, records, or customer commitments.", "This makes AI useful without creating avoidable business risk."],
    ["practical-cta", "A practical next step", "Choose one repeated process and write down the current steps, people involved, tools used, and problems caused by delays. That document becomes the foundation for a focused automation plan."]
  ],
  web: [
    ["basic-difference", "The basic difference", "A website mainly communicates information and generates trust or leads. A web application lets users perform tasks such as logging in, managing records, booking services, uploading documents, viewing dashboards, or collaborating with a team.", "Many businesses need both: a public website for credibility and a private application for operations."],
    ["when-website", "When a website is enough", "A website is usually enough when the main goal is explaining services, showing credibility, publishing articles, and collecting enquiries. Strong service pages, clear calls to action, fast performance, and SEO foundations matter more than complicated features.", "For many new businesses, this is the best first investment because it improves discoverability and sales conversations."],
    ["when-app", "When to build a web application", "A web application makes sense when users need accounts, repeated workflows, data management, approvals, reports, or integrations. Examples include CRM systems, booking portals, HR tools, inventory dashboards, and customer self-service portals.", "The decision should come from workflow needs, not from trend pressure."],
    ["hybrid-plan", "A phased plan", "A business can launch a professional website first, then add application features later. Using a scalable technical foundation helps the website grow into a portal or dashboard without a complete rebuild."]
  ],
  custom: [
    ["why-custom", "Why custom software exists", "Custom software is useful when standard tools do not match the way a business operates. If teams constantly export spreadsheets, duplicate entries, work around missing fields, or depend on informal approvals, custom software may reduce friction.", "The goal is not novelty. The goal is a better operational fit."],
    ["signals", "Signals that it may be time", "Consider custom software when an existing process involves too many manual handoffs, repeated mistakes, delayed reporting, poor visibility, or multiple disconnected tools. Another strong signal is when growth is limited because the current process depends too heavily on one person’s memory.", "A focused custom system can centralize data, make responsibilities visible, and standardize important steps."],
    ["scope", "Start with the right scope", "The first version should solve a meaningful core workflow. Trying to rebuild every department at once can slow delivery and create confusion. A phased approach gives users something useful early and allows the system to improve with real feedback.", "Discovery, process mapping, and prototype reviews reduce risk before development goes deep."],
    ["ownership", "Long-term ownership", "Custom software should be maintainable. That means documented requirements, clear architecture, access control, backup planning, and a support model. These decisions are part of the product, not optional extras."]
  ]
};

const makePost = (slug: string, title: string, category: string, excerpt: string, sections: string[][]): BlogPost => ({
  slug,
  title,
  category,
  readingTime: "6 min read",
  published: "2026-08-03",
  author: "Kamal Technologies",
  excerpt,
  sections: sections.map(([id, heading, ...body]) => ({ id, heading, body }))
});

export const blogPosts: BlogPost[] = [
  makePost("how-ai-automation-can-help-small-businesses", "How AI Automation Can Help Small Businesses", "AI Automation", "A practical guide to starting with useful AI workflows without overcomplicating operations.", articleBodies.ai),
  makePost("website-vs-web-application-what-does-your-business-need", "Website vs Web Application: What Does Your Business Need?", "Web Strategy", "Understand when your business needs a marketing website, a web application, or a phased combination of both.", articleBodies.web),
  makePost("when-should-a-business-build-custom-software", "When Should a Business Build Custom Software?", "Custom Software", "Clear signals that custom software may be a better fit than another spreadsheet or generic subscription tool.", articleBodies.custom),
  makePost("how-whatsapp-automation-improves-customer-support", "How WhatsApp Automation Improves Customer Support", "Automation", "Use structured messaging flows to respond faster and reduce missed follow-ups.", articleBodies.ai),
  makePost("how-to-choose-the-right-technology-partner", "How to Choose the Right Technology Partner", "Technology Strategy", "A practical checklist for evaluating communication, technical clarity, and long-term support.", articleBodies.web),
  makePost("benefits-of-crm-automation-for-sales-teams", "Benefits of CRM Automation for Sales Teams", "CRM", "How CRM automation improves visibility, ownership, and follow-up consistency.", articleBodies.custom)
];

export const getPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
