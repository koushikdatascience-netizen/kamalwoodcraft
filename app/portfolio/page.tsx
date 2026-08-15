import { portfolio, portfolioFilters } from "@/content/portfolio";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { PageHero } from "@/components/ui/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Portfolio", "Demonstration case studies for AI, CRM, automation, websites, software, and digital solutions.", "/portfolio");
export default function PortfolioPage() {
  return <><PageHero label="Portfolio" title="Demonstration Projects and Capability Showcases" text="These demonstration projects showcase our design and technical capabilities. Client case studies will be added with permission." crumbs={[{ label: "Portfolio" }]} /><section className="section"><div className="container"><div className="mb-8 flex flex-wrap gap-2">{portfolioFilters.map((filter) => <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700" key={filter}>{filter}</span>)}</div><div className="grid gap-5 md:grid-cols-3">{portfolio.map((item) => <PortfolioCard key={item.slug} item={item} />)}</div></div></section></>;
}
