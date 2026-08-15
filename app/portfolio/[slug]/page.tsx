import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolioItem, portfolio } from "@/content/portfolio";
import { PageHero } from "@/components/ui/page-hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return portfolio.map((item) => ({ slug: item.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) { const { slug } = await params; const item = getPortfolioItem(slug); return item ? pageMetadata(item.title, item.problem, `/portfolio/${item.slug}`) : {}; }
export default async function PortfolioDetail({ params }: Props) {
  const { slug } = await params; const item = getPortfolioItem(slug); if (!item) notFound();
  return <><PageHero label="Demonstration Project" title={item.title} text={item.problem} crumbs={[{ label: "Portfolio", href: "/portfolio" }, { label: item.title }]} /><section className="section"><div className="container grid gap-5 md:grid-cols-2"><article className="card p-6"><h2 className="font-heading text-2xl font-extrabold">Project Overview</h2><p className="mt-3 text-slate-600">{item.solution}</p></article>{Object.entries({ Challenge: [item.problem], Solution: [item.solution], Features: item.features, Architecture: item.architecture, "Technology Stack": item.stack }).map(([title, values]) => <article className="card p-6" key={title}><h2 className="font-heading text-2xl font-extrabold">{title}</h2><ul className="mt-4 space-y-2 text-slate-600">{values.map((value) => <li key={value}>• {value}</li>)}</ul></article>)}<div className="card grid aspect-video place-items-center bg-slate-50 p-8 text-center text-slate-600 md:col-span-2">Responsive mockup area placeholder</div><Link className="font-bold text-blue-600" href="/portfolio">Next project navigation</Link></div></section><CTABanner /></>;
}
