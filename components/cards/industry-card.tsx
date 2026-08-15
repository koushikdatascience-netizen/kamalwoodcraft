import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Industry } from "@/types";
import { icons } from "@/components/ui/icons";

export function IndustryCard({ industry, dark = false }: { industry: Industry; dark?: boolean }) {
  const Icon = icons[industry.icon];
  return (
    <article className={dark ? "dark-card rounded-lg p-6 text-white" : "card p-6"}>
      <Icon className="mb-5 size-8 text-blue-400" />
      <h3 className="font-heading text-xl font-extrabold">{industry.title}</h3>
      <p className={dark ? "mt-3 text-sm leading-7 text-blue-100" : "mt-3 text-sm leading-7 text-slate-600"}>{industry.summary}</p>
      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-blue-400">Relevant solutions</p>
      <p className={dark ? "mt-2 text-sm text-blue-100" : "mt-2 text-sm text-slate-600"}>{industry.solutions.join(", ")}</p>
      <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-400" href={`/industries/${industry.slug}`}>
        Explore <ArrowRight className="size-4" />
      </Link>
    </article>
  );
}
