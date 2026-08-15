import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PortfolioItem } from "@/types";

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="card overflow-hidden">
      <div className="grid aspect-video place-items-center bg-gradient-to-br from-navy-950 to-navy-700 text-center text-white">
        <div>
          <span className="rounded-full border border-blue-300 px-3 py-1 text-xs font-bold text-blue-100">Demonstration Project</span>
          <p className="mt-4 font-heading text-2xl font-extrabold">{item.title}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-600">{item.category}</p>
        <h3 className="mt-2 font-heading text-xl font-extrabold text-navy-950">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.problem}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600" href={`/portfolio/${item.slug}`}>
          View case study <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
