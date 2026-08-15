import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type IconName =
  | "bot"
  | "globe"
  | "smartphone"
  | "workflow"
  | "code"
  | "monitor"
  | "chrome"
  | "cloud"
  | "chart"
  | "megaphone"
  | "shield"
  | "users"
  | "briefcase"
  | "factory"
  | "graduation"
  | "heart"
  | "home"
  | "truck"
  | "shopping"
  | "calendar";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: IconName;
  capabilities: string[];
  problems: string[];
  useCases: string[];
  technologies: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
};

export type Solution = {
  slug: string;
  title: string;
  summary: string;
  challenge: string;
  coreSolution: string;
  icon: IconName;
  features: string[];
  audience: string[];
  workflow: string[];
  integrations: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
};

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  icon: IconName;
  solutions: string[];
  challenges: string[];
  services: string[];
  workflow: string[];
  integrations: string[];
  security: string[];
};

export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  architecture: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  published: string;
  author: string;
  excerpt: string;
  sections: { id: string; heading: string; body: string[] }[];
};

export type Role = {
  slug: string;
  title: string;
  type: string;
  location: string;
  responsibilities: string[];
  skills: string[];
};

export type IconMap = Record<IconName, LucideIcon>;
