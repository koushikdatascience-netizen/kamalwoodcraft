import type { Role } from "@/types";

export const roles: Role[] = [
  ["full-stack-development-intern", "Full-Stack Development Intern", "Internship", "Remote or Kolkata placeholder"],
  ["ai-automation-intern", "AI Automation Intern", "Internship", "Remote or Kolkata placeholder"],
  ["ui-ux-design-intern", "UI/UX Design Intern", "Internship", "Remote or Kolkata placeholder"],
  ["digital-marketing-intern", "Digital Marketing Intern", "Internship", "Remote or Kolkata placeholder"],
  ["business-development-intern", "Business Development Intern", "Internship", "Remote or Kolkata placeholder"]
].map(([slug, title, type, location]) => ({
  slug,
  title,
  type,
  location,
  responsibilities: ["Learn through practical project tasks", "Document progress clearly", "Collaborate with technical and business teams"],
  skills: ["Good communication", "Learning mindset", "Portfolio or examples preferred"]
})) as Role[];
