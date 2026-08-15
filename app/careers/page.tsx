import { roles } from "@/content/careers";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/ui/page-hero";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Careers", "Internship and learning opportunities at Kamal Technologies.", "/careers");
export default function CareersPage() {
  return <><PageHero label="Careers" title="Build, Learn, and Grow with Kamal Technologies" text="We are building a team of developers, designers, marketers, researchers, and problem solvers who want to work on practical technology projects." crumbs={[{ label: "Careers" }]} /><section className="section"><div className="container"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{roles.map((role) => <article className="card p-6" key={role.slug}><p className="text-sm font-bold text-blue-600">{role.type} • {role.location}</p><h2 className="mt-2 font-heading text-2xl font-extrabold">{role.title}</h2><p className="mt-4 font-bold">Responsibilities</p><ul className="mt-2 text-slate-600">{role.responsibilities.map((x) => <li key={x}>• {x}</li>)}</ul><p className="mt-4 font-bold">Skills</p><ul className="mt-2 text-slate-600">{role.skills.map((x) => <li key={x}>• {x}</li>)}</ul></article>)}</div></div></section><section className="section bg-slate-50"><div className="container grid gap-8 lg:grid-cols-2"><div><h2 className="font-heading text-4xl font-extrabold">Application Process</h2><p className="mt-4 text-slate-600">Share your details, links, role interest, cover note, and resume placeholder. We will review fit and next learning steps.</p><FAQAccordion items={[{ question: "Are all roles full-time paid jobs?", answer: "No. Initial opportunities are clearly marked as internships or placeholders until a specific role is confirmed." }]} /></div><ContactForm compact /></div></section></>;
}
