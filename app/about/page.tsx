import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/sections/cta-banner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About", "Learn about Kamal Technologies, our mission, values, founder-led approach, and practical technology philosophy.", "/about");

const values = ["Integrity", "Quality", "Innovation", "Accountability", "Customer focus", "Continuous learning", "Long-term partnership"];

export default function AboutPage() {
  return (
    <>
      <PageHero title="Technology Built Around People, Processes, and Progress" text="Kamal Technologies is a technology services and software development company focused on helping businesses use modern technology effectively." crumbs={[{ label: "About" }]} />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div><SectionHeading title="Our Story" text="Kamal Technologies was created with the vision of building a trusted technology company capable of serving businesses across industries. The company combines engineering, automation, design, and digital strategy to deliver complete technology solutions under one roof. The name carries forward the values associated with the Kamal family business: trust, workmanship, responsibility, and long-term relationships." /></div>
          <div className="grid gap-5">
            <article className="card p-6"><h2 className="font-heading text-2xl font-extrabold">Mission</h2><p className="mt-3 text-slate-600">To make powerful technology practical and accessible for businesses of every size.</p></article>
            <article className="card p-6"><h2 className="font-heading text-2xl font-extrabold">Vision</h2><p className="mt-3 text-slate-600">To become a trusted global technology partner known for intelligent software, reliable delivery, and meaningful business impact.</p></article>
          </div>
        </div>
      </section>
      <section className="section bg-slate-50"><div className="container"><SectionHeading title="Core Values" /><div className="grid gap-4 md:grid-cols-3">{values.map((value) => <div className="card p-5 font-heading text-xl font-extrabold" key={value}>{value}</div>)}</div></div></section>
      <section className="section"><div className="container"><SectionHeading title="Founder, Team Culture, and How We Work" text="The company is founder-led, learning-oriented, and focused on clear communication. We prefer thoughtful discovery, practical design, reliable engineering, and long-term support over flashy but fragile technology." /></div></section>
      <CTABanner />
    </>
  );
}
