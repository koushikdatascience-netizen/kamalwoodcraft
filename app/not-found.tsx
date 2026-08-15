import Link from "next/link";
import { EmptyState } from "@/components/ui/states";

export default function NotFound() {
  return (
    <EmptyState title="Page not found" message="The page you are looking for may have moved.">
      <Link className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white" href="/">
        Return Home
      </Link>
    </EmptyState>
  );
}
