import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { icons } from "@/components/ui/icons";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <article className="card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-blue-300">
      <div className="mb-5 grid size-12 place-items-center rounded-full bg-blue-50 text-blue-600">
        <Icon className="size-6" />
      </div>
      <h3 className="font-heading text-xl font-extrabold text-navy-950">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{service.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.capabilities.slice(0, 4).map((item) => (
          <span key={item} className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
            {item}
          </span>
        ))}
      </div>
      <Link className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600" href={`/services/${service.slug}`}>
        Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
