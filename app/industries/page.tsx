import { industries } from "@/content/industries";
import { IndustryCard } from "@/components/cards/industry-card";
import { PageHero } from "@/components/ui/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Industries", "Technology solutions for retail, restaurants, education, healthcare, manufacturing, real estate, logistics, ecommerce, and local businesses.", "/industries");
export default function IndustriesPage() {
  return <><PageHero label="Industries" title="Technology Solutions for Different Business Sectors" text="Practical technology plans adapted to industry workflows and constraints." crumbs={[{ label: "Industries" }]} /><section className="section"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{industries.map((industry) => <IndustryCard key={industry.slug} industry={industry} />)}</div></section></>;
}
