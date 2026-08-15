import { notFound } from "next/navigation";
import { getSolution, solutions } from "@/content/solutions";
import { PageHero } from "@/components/ui/page-hero";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return solutions.map((solution) => ({ slug: solution.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) { const { slug } = await params; const s = getSolution(slug); return s ? pageMetadata(s.title, s.summary, `/solutions/${s.slug}`) : {}; }
export default async function SolutionDetail({ params }: Props) {
  const { slug } = await params; const s = getSolution(slug); if (!s) notFound();
  return <><PageHero label="Solution" title={s.title} text={s.summary} crumbs={[{ label: "Solutions", href: "/solutions" }, { label: s.title }]} /><Detail sections={{ "Who It Is For": s.audience, "Problems Solved": [s.challenge], Features: s.features, Workflow: s.workflow, Integrations: s.integrations, Benefits: s.benefits, "Deployment Options": ["Static web interface", "Cloud-hosted application", "Internal business system"] }} /><section className="section bg-slate-50"><div className="container"><FAQAccordion items={s.faqs} /></div></section><CTABanner /></>;
}
function Detail({ sections }: { sections: Record<string, string[]> }) { return <section className="section"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{Object.entries(sections).map(([title, items]) => <article className="card p-6" key={title}><h2 className="font-heading text-2xl font-extrabold">{title}</h2><ul className="mt-4 space-y-2 text-slate-600">{items.map((item) => <li key={item}>• {item}</li>)}</ul></article>)}</div></section>; }
