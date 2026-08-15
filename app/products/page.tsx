import { PageHero } from "@/components/ui/page-hero";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Products", "Future Kamal Technologies SaaS product categories and product update signup.", "/products");
export default function ProductsPage() {
  return (
    <>
      <PageHero label="Products" title="Products Are Currently Under Development" text="Kamal Technologies is preparing future owned software products. No launched SaaS products are being claimed at this stage." crumbs={[{ label: "Products" }]} />
      <section className="section"><div className="container"><div className="grid gap-5 md:grid-cols-3">{["Business Automation Products", "AI Productivity Products", "Industry-Specific Software"].map((item) => <article className="card p-6" key={item}><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">Coming Soon</span><h2 className="mt-5 font-heading text-2xl font-extrabold">{item}</h2><p className="mt-3 text-slate-600">Concept category reserved for future product development and updates.</p></article>)}</div><NewsletterForm /></div></section>
    </>
  );
}
