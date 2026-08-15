import { services } from "@/content/services";
import { ServiceCard } from "@/components/cards/service-card";
import { PageHero } from "@/components/ui/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Services", "Explore AI, software, automation, website, mobile, cloud, analytics, and digital marketing services.", "/services");

export default function ServicesPage() {
  return (
    <>
      <PageHero label="Services" title="Complete Technology Services for Modern Businesses" text="Choose one focused service or combine multiple capabilities into a complete transformation plan." crumbs={[{ label: "Services" }]} />
      <section className="section"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></section>
    </>
  );
}
