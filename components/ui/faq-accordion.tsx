"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy-950"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            {item.question}
            <ChevronDown className={cn("size-5 shrink-0 transition", open === index && "rotate-180")} />
          </button>
          {open === index ? <p className="px-5 pb-5 leading-7 text-slate-600">{item.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
