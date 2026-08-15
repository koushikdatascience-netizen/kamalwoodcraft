import { Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { company, socialLinks } from "@/content/site";
import { Logo } from "@/components/ui/logo";

const serviceLinks = [
  ["Sofa Legs", "/#products"],
  ["Bed Legs", "/#products"],
  ["Table Legs", "/#products"],
  ["Staircase Components", "/#products"],
  ["Custom Turning", "/#products"],
  ["Bandsaw and Jali Cutting", "/#products"]
];

export function Footer() {
  return (
    <footer className="bg-stone-950 text-white">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-7 text-blue-100">{company.description}</p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href }) => {
                if (href === "#") return null;
                const Icon = label === "Facebook" ? Facebook : label === "Instagram" ? Instagram : null;
                if (!Icon) return null;
                return (
                  <a key={label} href={href} aria-label={label} rel="noopener noreferrer" target="_blank" className="grid size-10 place-items-center rounded-full border border-white/15 text-blue-100 hover:bg-white/10">
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FooterColumn title="Website" links={[["Home", "/"], ["About", "/#about"], ["Products", "/#products"], ["Process", "/#process"], ["Questions", "/#faq"]]} />
            <FooterColumn title="Services" links={serviceLinks} />
            <div>
              <h2 className="font-heading text-base font-extrabold">Contact</h2>
              <div className="mt-4 grid gap-3 text-sm text-blue-100">
                <a className="flex items-center gap-2 hover:text-white" href={company.whatsappHref}><MessageCircle className="size-4" /> WhatsApp quote</a>
                <a className="flex items-center gap-2 hover:text-white" href={`tel:${company.phone}`}><Phone className="size-4" /> {company.phone}</a>
                <a className="flex items-start gap-2 hover:text-white" href={company.maps} target="_blank" rel="noopener noreferrer"><MapPin className="mt-0.5 size-4 shrink-0" /> {company.address}</a>
              </div>
            </div>
            <FooterColumn title="Legal" links={[["Privacy Policy", "/privacy-policy"], ["Terms and Conditions", "/terms"], ["Refund Policy", "/refund-policy"], ["Cookie Policy", "/cookie-policy"]]} />
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-blue-100">© 2026 Kamal Woodcraft, Kalyani, Nadia. All rights reserved.</div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h2 className="font-heading text-base font-extrabold">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm text-blue-100">
        {links.map(([label, href]) => (
          <li key={label}>
            <a className="hover:text-white" href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
