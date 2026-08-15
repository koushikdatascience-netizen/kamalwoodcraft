"use client";

import { ErrorState } from "@/components/ui/states";

export default function Error({ reset }: { reset: () => void }) {
  return <ErrorState title="Something went wrong" message="Please try again or contact us if the issue continues." action={reset} />;
}
