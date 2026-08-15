import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isLight = variant === "light";
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Kamal Wood Craft home">
      <span className="grid size-12 place-items-center overflow-hidden rounded-md bg-white p-1">
        <Image src="/woodcraft/kamal-logo.png" alt="" width={48} height={48} className="size-full object-contain" />
      </span>
      <span className={cn("leading-none", isLight ? "text-white" : "text-stone-950")}>
        <span className="block font-heading text-xl font-extrabold tracking-wide">KAMAL</span>
        <span className="block text-[11px] font-semibold tracking-[0.18em]">WOODCRAFT</span>
      </span>
    </Link>
  );
}
