import { notFound } from "next/navigation";
import { getIndustry, industries } from "@/content/industries";
import { PageHero } from "@/components/ui/page-hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return industries.map((industry) => ({ slug: industry.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) { const { slug } = await params; const i = getIndustry(slug); return i ? pageMetadata(i.title, i.summary, `/industries/${i.slug}`) : {}; }
export default async function IndustryDetail({ params }: Props) {
  const { slug } = await params; const i = getIndustry(slug); if (!i) notFound();
  return <><PageHero label="Industry" title={i.title} text={i.summary} crumbs={[{ label: "Industries", href: "/industries" }, { label: i.title }]} /><section className="section"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{Object.entries({ "Industry Challenges": i.challenges, "Recommended Solutions": i.solutions, "Relevant Services": i.services, "Example Workflow": i.workflow, "Integration Possibilities": i.integrations, "Security Considerations": i.security }).map(([title, items]) => <article className="card p-6" key={title}><h2 className="font-heading text-2xl font-extrabold">{title}</h2><ul className="mt-4 space-y-2 text-slate-600">{items.map((item) => <li key={item}>• {item}</li>)}</ul></article>)}</div></section><CTABanner /></>;
}
