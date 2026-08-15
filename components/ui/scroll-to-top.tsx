"use client";

import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  return (
    <button
      className="fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full bg-blue-600 text-white shadow-glow"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
