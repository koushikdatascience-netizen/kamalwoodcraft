import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "light";
  className?: string;
  type?: "button" | "submit";
};

export function Button({ href, children, variant = "primary", className, type = "button" }: Props) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline-blue-300",
    variant === "primary" && "bg-blue-600 text-white shadow-glow hover:bg-blue-500",
    variant === "secondary" && "bg-navy-950 text-white hover:bg-navy-800",
    variant === "outline" && "border border-slate-300 bg-white text-navy-950 hover:border-blue-400 hover:text-blue-600",
    variant === "light" && "border border-white/20 bg-white/8 text-white hover:bg-white/14",
    className
  );
  const content = (
    <>
      {children}
      <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
    </>
  );
  if (href) {
    return (
      <Link className={cn("group", classes)} href={href}>
        {content}
      </Link>
    );
  }
  return (
    <button className={cn("group", classes)} type={type}>
      {content}
    </button>
  );
}
