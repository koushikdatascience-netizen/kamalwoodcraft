import type { Solution } from "@/types";

export const solutions: Solution[] = [
  ["ai-customer-support", "AI Customer Support", "Automate repeated customer questions with a controlled AI assistant.", "Support teams spend time answering the same questions.", "A website, WhatsApp, or internal assistant trained on approved business knowledge.", "bot"],
  ["sales-crm", "Sales CRM and Lead Management", "Track leads, follow-ups, stages, owners, and reports in one place.", "Leads are lost across calls, messages, and spreadsheets.", "A CRM workflow with reminders, dashboards, assignments, and pipeline visibility.", "briefcase"],
  ["whatsapp-automation", "WhatsApp Business Automation", "Automate enquiries, reminders, updates, and handoffs.", "Customer messages are hard to track and respond to consistently.", "Structured WhatsApp flows connected to CRM and notification systems.", "workflow"],
  ["hr-attendance", "HR and Attendance Management", "Manage attendance, leave, employee records, and HR workflows.", "HR records and attendance are scattered or manually maintained.", "A lightweight HR system with approvals, reports, and role-based access.", "users"],
  ["billing-inventory", "Billing and Inventory", "Connect billing, stock, item movement, and business reports.", "Stock and billing updates do not stay synchronized.", "A billing and inventory system built around actual item and sales flows.", "shopping"],
  ["marketing-automation", "Marketing Automation", "Capture leads, segment audiences, and automate follow-up campaigns.", "Marketing responses are inconsistent after a user enquiry.", "A connected funnel across landing pages, forms, CRM, email, and reports.", "megaphone"],
  ["reporting-dashboard", "Reporting and Analytics", "Create dashboards for sales, operations, inventory, and marketing.", "Teams wait for manual reports before making decisions.", "Automated dashboards that pull data from the systems already used.", "chart"],
  ["appointment-booking", "Appointment and Booking", "Let customers book slots while teams manage schedules easily.", "Bookings happen through calls and messages without visibility.", "A booking workflow with availability, reminders, staff views, and reports.", "calendar"],
  ["document-processing", "Document Processing", "Extract, classify, and review document information faster.", "Manual review of invoices, IDs, forms, or records takes too long.", "A document workflow with upload, extraction, validation, and human review.", "code"],
  ["knowledge-assistant", "Internal Knowledge Assistant", "Help teams search policies, documents, SOPs, and technical notes.", "Internal knowledge is hard to find when employees need it.", "A secure assistant that answers from approved documents with references.", "shield"]
].map(([slug, title, summary, challenge, coreSolution, icon]) => ({
  slug,
  title,
  summary,
  challenge,
  coreSolution,
  icon,
  features: ["Role-based access", "Dashboards and reports", "Notifications and reminders"],
  audience: ["Growing teams", "Service businesses", "Operations-led companies"],
  workflow: ["Discovery", "Workflow mapping", "Prototype", "Build", "Test", "Deploy"],
  integrations: ["Website forms", "CRM data", "Email", "WhatsApp", "Payment or ERP APIs where available"],
  benefits: ["Better visibility", "Reduced manual work", "Consistent process", "Scalable operations"],
  faqs: [
    { question: "Can this connect with existing tools?", answer: "Yes, where the existing tool provides API or export access." },
    { question: "Can we start with a demo?", answer: "Yes. We can define a small pilot workflow before a larger rollout." }
  ]
})) as Solution[];

export const getSolution = (slug: string) => solutions.find((item) => item.slug === slug);
