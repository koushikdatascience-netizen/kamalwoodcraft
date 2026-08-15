import type { Industry } from "@/types";

export const industries: Industry[] = [
  ["retail", "Retail", "Billing, inventory, customer communication, and sales dashboards for retail operations.", "shopping"],
  ["restaurants-hospitality", "Restaurants and Hospitality", "Booking, ordering, loyalty, staff workflows, and reporting.", "calendar"],
  ["education", "Education", "Student portals, admissions workflows, attendance, content, and analytics.", "graduation"],
  ["healthcare", "Healthcare", "Appointment workflows, patient communication, documents, and secure records planning.", "heart"],
  ["manufacturing", "Manufacturing", "Inventory, job tracking, reporting, workflow approvals, and vendor visibility.", "factory"],
  ["real-estate", "Real Estate", "Lead tracking, listing websites, WhatsApp follow-ups, and document workflows.", "home"],
  ["professional-services", "Professional Services", "Client portals, proposal workflows, reporting, and knowledge systems.", "briefcase"],
  ["logistics", "Logistics", "Shipment tracking, operations dashboards, notifications, and process automation.", "truck"],
  ["ecommerce", "E-commerce", "Storefronts, inventory, integrations, automation, and customer engagement.", "globe"],
  ["local-businesses", "Local Businesses", "Practical websites, lead capture, WhatsApp, billing, and local SEO.", "users"]
].map(([slug, title, summary, icon]) => ({
  slug,
  title,
  summary,
  icon,
  solutions: ["CRM", "Automation", "Reporting dashboards"],
  challenges: ["Manual coordination", "Scattered customer data", "Limited reporting", "Slow follow-up"],
  services: ["Website development", "Business automation", "Custom software", "Digital marketing"],
  workflow: ["Map current process", "Identify repetitive work", "Design a focused system", "Train users", "Improve after launch"],
  integrations: ["Payment gateways", "Messaging tools", "Email", "Accounting exports", "Existing databases where available"],
  security: ["Role-based access", "Data validation", "Backups", "Audit-friendly workflow planning"]
})) as Industry[];

export const getIndustry = (slug: string) => industries.find((item) => item.slug === slug);
