import type { NavItem } from "@/types";

export const company = {
  name: "Kamal Wood Craft",
  tagline: "Bulk Wooden Furniture Parts Manufacturer",
  secondaryTagline: "Direct workshop manufacturing in Kalyani, Nadia.",
  description:
    "Kamal Woodcraft manufactures wooden sofa legs, bed legs, table legs, staircase components, custom-turned parts, and bandsaw or jali cutting work for furniture shops, carpenters, contractors, and designers.",
  email: "kamalwoodcraft2@gmail.com",
  phone: "+918583911435",
  whatsapp: "+916290664570",
  whatsappHref:
    "https://wa.me/916290664570?text=Hi%20Kamal%20Woodcraft%2C%0A%0AI%20want%20bulk%20order%20details%3A%0A%0AProduct%3A%0AQuantity%3A%0ASize%2FDesign%3A%0AWood%20type%3A%0ALocation%3A",
  city: "Kalyani",
  state: "West Bengal",
  country: "India",
  address: "Nabagram, Anandanagar, Kalyani, Nadia - 741245, West Bengal, India",
  maps:
    "https://www.google.com/maps/place/Kamal+Woodcraft/@22.9802826,88.4860421,17z/data=!3m1!4b1!4m6!3m5!1s0x39f8bf34b6c2c7e7:0x8d5672f4e859581b!8m2!3d22.9802826!4d88.4860421!16s%2Fg%2F11l2xthz0h?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
  linkedin: "#",
  github: "#",
  facebook: "https://www.facebook.com/p/Kamal-Woodcraft-61590254706789/",
  instagram: "https://www.instagram.com/kamal_woodcraft/",
  youtube: "#",
  x: "#"
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Process", href: "/#process" },
  { label: "Why Us", href: "/#why" },
  { label: "Contact", href: "/#contact" }
];

export const socialLinks = [
  { label: "Facebook", href: company.facebook },
  { label: "Instagram", href: company.instagram },
  { label: "YouTube", href: company.youtube },
  { label: "LinkedIn", href: company.linkedin },
  { label: "GitHub", href: company.github },
  { label: "X", href: company.x }
];

export const faqs = [
  ["What does Kamal Woodcraft manufacture?", "We manufacture wooden sofa legs, bed legs, table legs, staircase components, custom-turned parts, and bandsaw or jali cutting work."],
  ["Do you take bulk orders?", "Yes. We mainly serve trade and bulk requirements. Minimum order is usually 20-50 pieces depending on product and setup."],
  ["How is pricing decided?", "Pricing depends on product type, size, design complexity, wood type, quantity, and lead time."],
  ["How do I start?", "Send your product type, quantity, design, size, wood preference, and location on WhatsApp."]
].map(([question, answer]) => ({ question, answer }));

export const trustItems = [
  ["Business-First Planning", "Technology decisions start from workflow, users, and measurable outcomes."],
  ["Custom-Built Solutions", "Systems are designed around real business requirements, not generic templates."],
  ["Secure Architecture", "Access control, validation, privacy, and reliable deployment are planned early."],
  ["Scalable Development", "Builds are structured so future features and integrations remain manageable."],
  ["Continuous Support", "Post-launch maintenance and improvement can be planned from the start."]
].map(([title, description]) => ({ title, description }));
