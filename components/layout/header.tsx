"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { company, navItems } from "@/content/site";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={cn("site-header fixed inset-x-0 top-0 z-50", scrolled && "site-header-scrolled")}>
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a className={cn("site-nav-link rounded-md px-3 py-3 text-sm font-semibold", pathname === item.href && "site-nav-link-active")} href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a href={company.whatsappHref} className="header-quote" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="size-4" />
            WhatsApp Quote
          </a>
        </div>
        <button
          className="grid size-12 place-items-center rounded-md border border-white/40 text-white lg:hidden"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-6" />
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="fixed inset-0 z-[100] overflow-y-auto bg-stone-950 p-6 lg:hidden">
          <div className="flex items-center justify-between">
            <Logo />
            <button className="grid size-11 place-items-center rounded-md border border-white/20 text-white" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="size-6" />
            </button>
          </div>
          <nav className="mt-10 grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-lg font-semibold text-white hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <a href={company.whatsappHref} onClick={() => setOpen(false)} className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-base font-extrabold text-white hover:bg-emerald-500">
              <MessageCircle className="size-5" />
              WhatsApp Quote
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
