import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export function PageHero({ label, title, text, crumbs }: { label?: string; title: string; text: string; crumbs?: { label: string; href?: string }[] }) {
  return (
    <section className="hero-gradient grid-bg pt-32 text-white">
      <div className="container pb-20">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}
        {label ? <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-blue-300">{label}</p> : null}
        <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">{text}</p>
      </div>
    </section>
  );
}
