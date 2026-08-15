import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Solution } from "@/types";
import { icons } from "@/components/ui/icons";

export function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = icons[solution.icon];
  return (
    <article className="card p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-full bg-blue-50 text-blue-600">
          <Icon className="size-5" />
        </span>
        <h3 className="font-heading text-xl font-extrabold text-navy-950">{solution.title}</h3>
      </div>
      <p className="text-sm font-bold text-slate-900">Business challenge</p>
      <p className="mt-2 text-sm leading-7 text-slate-600">{solution.challenge}</p>
      <p className="mt-4 text-sm font-bold text-slate-900">Core solution</p>
      <p className="mt-2 text-sm leading-7 text-slate-600">{solution.coreSolution}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {solution.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="mt-2 size-1.5 rounded-full bg-blue-600" />
            {feature}
          </li>
        ))}
      </ul>
      <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600" href={`/solutions/${solution.slug}`}>
        Explore solution <ArrowRight className="size-4" />
      </Link>
    </article>
  );
}
