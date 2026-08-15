"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { newsletterSchema } from "@/lib/validation";

type Values = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Values>({ resolver: zodResolver(newsletterSchema) });
  return (
    <form className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={handleSubmit(() => setDone(true))}>
      <input className="min-h-12 flex-1 rounded-md border border-slate-300 px-4" placeholder="Email address" type="email" {...register("email")} />
      <input className="hidden" tabIndex={-1} {...register("website")} />
      <button className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white">Join Product Updates</button>
      {errors.email ? <p className="text-sm text-red-600">{errors.email.message}</p> : null}
      {done ? <p className="text-sm font-semibold text-blue-700">Thanks. Product updates placeholder captured locally.</p> : null}
    </form>
  );
}
