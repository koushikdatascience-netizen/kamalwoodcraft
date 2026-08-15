import { cn } from "@/lib/utils";

export function SectionHeading({ label, title, text, dark = false }: { label?: string; title: string; text?: string; dark?: boolean }) {
  return (
    <div className="mb-10 max-w-3xl">
      {label ? <p className={cn("mb-3 text-sm font-extrabold uppercase tracking-wide", dark ? "text-blue-300" : "text-blue-600")}>{label}</p> : null}
      <h2 className={cn("font-heading text-3xl font-extrabold leading-tight md:text-5xl", dark ? "text-white" : "text-navy-950")}>{title}</h2>
      {text ? <p className={cn("mt-5 text-base leading-8 md:text-lg", dark ? "text-blue-100" : "text-slate-600")}>{text}</p> : null}
    </div>
  );
}
