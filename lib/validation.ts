import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  companyName: z.string().optional(),
  email: z.string().email("Enter a valid work email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  country: z.string().min(2, "Enter your country"),
  service: z.string().min(1, "Choose a service"),
  budget: z.string().min(1, "Choose a budget range"),
  timeline: z.string().min(1, "Choose a timeline"),
  description: z.string().min(20, "Share at least 20 characters"),
  preferredContact: z.string().min(1, "Choose a contact method"),
  consent: z.boolean().refine(Boolean, "Consent is required"),
  website: z.string().max(0, "Spam check failed").optional()
});

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email"),
  website: z.string().max(0).optional()
});
