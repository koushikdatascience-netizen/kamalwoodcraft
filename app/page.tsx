import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  ClipboardList,
  Hammer,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ScrollText,
  ShieldCheck,
  Store,
  Truck
} from "lucide-react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { company } from "@/content/site";

const quoteText = encodeURIComponent(
  "Hi Kamal Woodcraft,\n\nI want bulk order details:\n\nProduct:\nQuantity:\nSize/Design:\nWood type:\nLocation:"
);
const priceListText = encodeURIComponent(
  "Hi Kamal Woodcraft,\n\nPlease share your bulk price list.\n\nI am a:\nProducts I need:"
);
const quoteHref = `https://wa.me/916290664570?text=${quoteText}`;
const priceListHref = `https://wa.me/916290664570?text=${priceListText}`;

const stats = [
  ["Since", "2018"],
  ["Registered", "2022"],
  ["Minimum order", "20-50 pcs"],
  ["Location", "Kalyani, Nadia"]
];

const products = [
  {
    title: "Wooden Sofa Legs",
    image: "/woodcraft/sofa-legs.png",
    description: "Round, tapered, fluted, square, and traditional sofa leg profiles made in bulk for furniture shops and upholstery businesses.",
    note: "Custom sizes available. Wholesale pricing for bulk."
  },
  {
    title: "Wooden Bed Legs",
    image: "/woodcraft/bed-legs.png",
    description: "Sturdy bed legs turned to required height and design for single, double, and king-size beds. We can match samples or drawings.",
    note: "Made on order for repeat furniture production."
  },
  {
    title: "Wooden Table Legs",
    image: "/woodcraft/table-legs.png",
    description: "Custom table legs for dining tables, coffee tables, side tables, counters, and shop-specific furniture lines.",
    note: "Consistent profile across full batches."
  },
  {
    title: "Staircase Components",
    image: "/woodcraft/staircase.png",
    description: "Balusters, newel posts, and handrail components manufactured for builders, contractors, and interior projects.",
    note: "Bulk staircase sets made to order."
  },
  {
    title: "Custom Wood Turning",
    image: "/woodcraft/custom-turning.png",
    description: "Non-standard wooden parts from your drawing, sample, or sketch: knobs, handles, decorative spindles, posts, and round profiles.",
    note: "Good for custom and replacement parts."
  },
  {
    title: "Bandsaw and Jali Cutting",
    image: "/woodcraft/jali.png",
    description: "Bandsaw cutting for wooden panels, blocks, and resawing, plus traditional jali cutting for doors and decorative panels.",
    note: "Traditional craft service. Not laser-cut."
  }
];

const process = [
  ["Send requirement", "Share product type, quantity, size, design photo or sample, and wood preference on WhatsApp.", ClipboardList],
  ["Get quotation", "We review the work and share pricing, lead time, and pickup or delivery terms.", ScrollText],
  ["We manufacture", "Our workshop produces the order with attention to size consistency and practical finish quality.", Hammer],
  ["Pickup or delivery", "Collect from Kalyani or discuss delivery based on order size and destination.", Truck]
];

const customers = [
  ["Furniture Shops", "Bulk legs and wooden components for regular furniture production.", Store],
  ["Carpenters", "Custom turned parts, samples, and repeat job work support.", Hammer],
  ["Contractors", "Staircase components and project-based wooden parts.", Building2],
  ["Interior Designers", "Decorative wood details for custom furniture and interiors.", Ruler]
];

const reasons = [
  ["Direct Manufacturer", "No middle layer. Work comes directly from our family-run Kalyani workshop."],
  ["Bulk Pricing Advantage", "Wholesale rates can be shared for repeat and quantity orders."],
  ["Custom Size Support", "We can work from drawings, samples, sketches, or exact measurements."],
  ["Consistent Output", "Repeat profiles and batches are made with practical production discipline."],
  ["Local Trust", "Serving furniture makers and trade customers in the region since 2018."]
];

const faqs = [
  {
    question: "Do you accept single-piece orders?",
    answer: "Kamal Woodcraft mainly serves bulk and trade requirements. Minimum order is usually 20-50 pieces depending on product, design, and machine setup."
  },
  {
    question: "Can you make parts from my sample?",
    answer: "Yes. You can share a photo, drawing, size, or physical sample. We will check whether the profile can be matched and quote accordingly."
  },
  {
    question: "Do you provide finished furniture?",
    answer: "The main business is wooden furniture parts and components, such as legs, staircase parts, custom turning, bandsaw work, and jali cutting."
  },
  {
    question: "How do I get the price?",
    answer: "Send product type, quantity, size, design, wood preference, and location on WhatsApp. Pricing depends on quantity, profile complexity, wood type, and lead time."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="woodcraft-hero">
        <div className="container relative z-10 grid min-h-[760px] items-center gap-12 py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-amber-200/35 bg-white/10 px-4 py-2 text-sm font-extrabold uppercase text-amber-100 backdrop-blur">
              <MapPin className="size-4" />
              Kalyani, Nadia · Est. 2018
            </div>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-white md:text-6xl xl:text-7xl">
              Bulk Wooden Furniture Parts Manufacturer
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">
              Kamal Woodcraft manufactures wooden sofa legs, bed legs, table legs, staircase components, custom turned parts, and jali cutting work for furniture shops, carpenters, contractors, and designers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="button-wa" href={quoteHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" />
                Get Bulk Quote
              </a>
              <a className="button-light" href="tel:+918583911435">
                <Phone className="size-5" />
                Call 85839 11435
              </a>
            </div>
            <div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(([label, value]) => (
                <div className="hero-stat" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-product-frame">
            <Image src="/woodcraft/hero-products.png" alt="Kamal Woodcraft wooden furniture parts including jali panels and turned legs" width={1536} height={1024} priority className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="woodcraft-ticker">
        <div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-sm font-extrabold uppercase text-amber-950">
          <span>Bulk orders accepted</span>
          <span>Minimum order 20-50 pieces</span>
          <span>Direct from workshop</span>
          <span>WhatsApp: 62906 64570</span>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="image-stack">
            <Image src="/woodcraft/workshop-hero.png" alt="Kamal Woodcraft workshop in Kalyani" width={1536} height={1024} className="main-proof-image" />
            <Image src="/woodcraft/direct-workshop.png" alt="Wood lathe and workshop machinery" width={1467} height={860} className="small-proof-image" />
          </div>
          <div className="self-center">
            <p className="section-label">About Kamal Woodcraft</p>
            <h2 className="section-title">Family-run manufacturer trusted by furniture makers since 2018</h2>
            <p className="section-text">
              Kamal Woodcraft is a woodworking workshop based in Nabagram, Anandanagar, Kalyani, Nadia, West Bengal. We specialise in bulk manufacturing of wooden furniture components for trade customers.
            </p>
            <p className="section-text">
              The workshop was started in 2018 and formally registered in 2022. Our work has grown through repeat orders, local trust, and practical craftsmanship.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Quality Wood", "Seasoned timber, no shortcuts"],
                ["Bulk Ready", "Consistent output for large orders"],
                ["Trade Focused", "Built for shops and contractors"]
              ].map(([title, text]) => (
                <article className="mini-proof" key={title}>
                  <BadgeCheck className="size-6 text-amber-700" />
                  <strong>{title}</strong>
                  <span>{text}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section bg-stone-50">
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-label">Products</p>
            <h2 className="section-title">Wooden parts made to order, in bulk</h2>
            <p className="section-text">All products are manufactured on order. Price depends on quantity, design, wood type, and lead time. Share your requirement for a practical quotation.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article className="product-card" key={product.title}>
                <div className="product-image">
                  <Image src={product.image} alt={product.title} width={900} height={620} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-extrabold text-stone-950">{product.title}</h3>
                  <p className="mt-3 leading-7 text-stone-600">{product.description}</p>
                  <p className="mt-4 rounded-md bg-amber-50 px-3 py-2 text-sm font-bold text-amber-900">{product.note}</p>
                  <a className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-emerald-700" href={`${quoteHref}%0A%0AProduct%3A%20${encodeURIComponent(product.title)}`} target="_blank" rel="noopener noreferrer">
                    Quote for this product <ArrowRight className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-label">Order Process</p>
              <h2 className="section-title">How to place a bulk order</h2>
              <p className="section-text">A simple WhatsApp-first process keeps orders clear for furniture shops and repeat trade customers.</p>
              <a className="button-wa mt-8" href={quoteHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" />
                Start Order on WhatsApp
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {process.map(([title, text, Icon], index) => (
                <article className="process-card" key={title as string}>
                  <div className="flex items-center justify-between">
                    <Icon className="size-8 text-amber-700" />
                    <span className="text-sm font-extrabold text-stone-400">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 font-heading text-xl font-extrabold text-stone-950">{title as string}</h3>
                  <p className="mt-3 leading-7 text-stone-600">{text as string}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="customers" className="section bg-stone-950 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-label text-amber-300">Who We Serve</p>
            <h2 className="section-title text-white">Built for trade customers who need reliable wooden parts</h2>
            <p className="section-text text-stone-300">We are a B2B manufacturer. Our customers usually need repeatable profiles, fair bulk rates, and direct workshop communication.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {customers.map(([title, text, Icon]) => (
              <article className="customer-card" key={title as string}>
                <Icon className="size-8 text-amber-300" />
                <h3 className="mt-5 font-heading text-xl font-extrabold">{title as string}</h3>
                <p className="mt-3 leading-7 text-stone-300">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="section bg-amber-50">
        <div className="container grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-title">Real wood. Real hands. Direct manufacturer.</h2>
            <div className="mt-8 grid gap-4">
              {reasons.map(([title, text]) => (
                <article className="reason-row" key={title}>
                  <ShieldCheck className="size-6 text-emerald-700" />
                  <div>
                    <h3 className="font-heading text-lg font-extrabold text-stone-950">{title}</h3>
                    <p className="mt-1 leading-7 text-stone-600">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-amber-200 bg-white p-4 shadow-xl">
            <Image src="/woodcraft/jali.png" alt="Jali cutting samples by Kamal Woodcraft" width={1448} height={1086} className="rounded-md object-cover" />
          </div>
        </div>
      </section>

      <section id="workshop" className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-label">Workshop Proof</p>
            <h2 className="section-title">Real machines and real work from Kalyani</h2>
            <p className="section-text">The product images show what customers order. These workshop photos show the practical production setup behind the work.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["/woodcraft/workshop-hero.png", "Wood turning workshop"],
              ["/woodcraft/machine-turning.jpeg", "Manual wood turning machine"],
              ["/woodcraft/machine-jali.jpeg", "Jali and cutting work area"]
            ].map(([src, alt]) => (
              <div className="workshop-card" key={src}>
                <Image src={src} alt={alt} width={900} height={680} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="section bg-stone-950 text-white">
        <div className="container text-center">
          <Boxes className="mx-auto size-12 text-amber-300" />
          <h2 className="mx-auto mt-5 max-w-3xl font-heading text-3xl font-extrabold leading-tight md:text-5xl">Get our bulk price list on WhatsApp</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-stone-300">Send us a message and we will share details for sofa legs, bed legs, table legs, staircase components, and custom wood turning based on your requirement.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="button-wa" href={priceListHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" />
              Get Price List
            </a>
            <a className="button-light" href="tel:+918583911435">
              <Phone className="size-5" />
              Call Workshop
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-stone-50">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-label">Contact</p>
            <h2 className="section-title">Ready to place a bulk order?</h2>
            <p className="section-text">Contact directly via WhatsApp or call for the fastest response. Share product requirement, quantity, size, and location.</p>
            <div className="mt-8 grid gap-4">
              <ContactItem icon={Phone} title="Phone" text="+91 85839 11435" href="tel:+918583911435" />
              <ContactItem icon={MessageCircle} title="WhatsApp" text="+91 62906 64570" href="https://wa.me/916290664570" />
              <ContactItem icon={Mail} title="Email" text="kamalwoodcraft2@gmail.com" href="mailto:kamalwoodcraft2@gmail.com" />
              <ContactItem icon={MapPin} title="Address" text="Nabagram, Anandanagar, Kalyani, Nadia - 741245, West Bengal, India" href={company.maps} />
            </div>
          </div>
          <div className="map-panel">
            <iframe
              title="Kamal Woodcraft location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1833964818456!2d88.48604209999999!3d22.9802826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bf34b6c2c7e7%3A0x8d5672f4e859581b!2sKamal%20Woodcraft!5e0!3m2!1sen!2sin!4v1779826170138!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-label">Questions</p>
            <h2 className="section-title">Common bulk order questions</h2>
          </div>
          <div className="mt-8">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <a className="floating-wa" href={quoteHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with Kamal Woodcraft on WhatsApp">
        <MessageCircle className="size-6" />
      </a>
    </>
  );
}

function ContactItem({ icon: Icon, title, text, href }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string; href?: string }) {
  const content = (
    <>
      <Icon className="size-6 text-amber-700" />
      <span>
        <strong>{title}</strong>
        <em>{text}</em>
      </span>
    </>
  );

  if (href) {
    return (
      <a className="contact-item" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return <div className="contact-item">{content}</div>;
}
