import { company } from "@/content/site";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/ui/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contact", "Contact Kamal Technologies to discuss AI, software, websites, automation, mobile apps, cloud, analytics, or digital marketing.", "/contact");
export default function ContactPage() {
  return <><PageHero label="Contact" title="Let's Build Something Valuable Together" text="Tell us about your business, project idea, current challenge, or required technology solution. Our team will review your requirements and contact you to discuss the next steps." crumbs={[{ label: "Contact" }]} /><section className="section"><div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"><ContactForm /><aside className="grid gap-4"><Info label="Email" value={company.email} /><Info label="Phone" value={company.phone} /><Info label="WhatsApp" value={company.whatsapp} /><Info label="Location" value={`${company.city}, ${company.state}, ${company.country}`} /><Info label="Business hours" value="Business hours to be added" /><div className="card grid min-h-56 place-items-center bg-slate-50 p-6 text-center text-slate-600">Map placeholder. Public business address can be added later.</div></aside></div></section></>;
}
function Info({ label, value }: { label: string; value: string }) { return <div className="card p-5"><p className="text-sm font-bold uppercase tracking-wide text-blue-600">{label}</p><p className="mt-2 font-semibold text-navy-950">{value}</p></div>; }
