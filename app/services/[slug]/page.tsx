import { notFound } from "next/navigation";
import { services, getService } from "@/content/services";
import { PageHero } from "@/components/ui/page-hero";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  return service ? pageMetadata(service.title, service.summary, `/services/${service.slug}`) : {};
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return (
    <>
      <PageHero label="Service" title={service.title} text={service.description} crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]} />
      <DetailGrid sections={{ "Business Problems Solved": service.problems, Capabilities: service.capabilities, "Use Cases": service.useCases, Technology: service.technologies, Benefits: service.benefits, "Engagement Model": ["Discovery-led scope", "Fixed project or monthly support", "Documentation and post-launch improvement"] }} />
      <section className="section bg-slate-50"><div className="container"><FAQAccordion items={service.faqs} /></div></section>
      <CTABanner />
    </>
  );
}

function DetailGrid({ sections }: { sections: Record<string, string[]> }) {
  return <section className="section"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{Object.entries(sections).map(([title, items]) => <article className="card p-6" key={title}><h2 className="font-heading text-2xl font-extrabold">{title}</h2><ul className="mt-4 space-y-2 text-slate-600">{items.map((item) => <li key={item}>• {item}</li>)}</ul></article>)}</div></section>;
}
