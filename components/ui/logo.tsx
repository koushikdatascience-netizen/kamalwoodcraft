import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isLight = variant === "light";
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Kamal Wood Craft home">
      <span className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-md bg-white p-1">
        <Image src="/woodcraft/kamal-logo.png" alt="" width={112} height={112} className="size-full object-contain" />
      </span>
      <span className={cn("leading-none", isLight ? "text-white" : "text-stone-950")}>
        <span className="block font-heading text-2xl font-bold">KAMAL</span>
        <span className="mt-1 block text-xs font-semibold">WOODCRAFT</span>
      </span>
    </Link>
  );
}
