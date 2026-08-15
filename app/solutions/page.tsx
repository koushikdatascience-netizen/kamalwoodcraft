import { solutions } from "@/content/solutions";
import { SolutionCard } from "@/components/cards/solution-card";
import { PageHero } from "@/components/ui/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Solutions", "Business solutions for CRM, AI support, WhatsApp automation, HR, billing, reporting, booking, and document processing.", "/solutions");
export default function SolutionsPage() {
  return <><PageHero label="Solutions" title="Solutions Designed Around Your Operations" text="Connected systems for practical business workflows." crumbs={[{ label: "Solutions" }]} /><section className="section"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{solutions.map((solution) => <SolutionCard key={solution.slug} solution={solution} />)}</div></section></>;
}
