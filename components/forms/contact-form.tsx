"use client";

import { useState } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { contactSchema } from "@/lib/validation";
import { budgetOptions, contactMethods, serviceOptions, timelineOptions } from "@/lib/constants";
import { Button } from "@/components/ui/button";

type ContactFormValues = z.input<typeof contactSchema>;

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { consent: false }
  });

  async function onSubmit(values: ContactFormValues) {
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
    if (endpoint) {
      await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    }
    setStatus(endpoint ? "Your enquiry has been sent." : "Demo success: form validation works. Configure NEXT_PUBLIC_CONTACT_FORM_ENDPOINT to send messages.");
    reset();
  }

  return (
    <form className="card grid gap-4 p-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" error={errors.fullName?.message}><input {...register("fullName")} /></Field>
        <Field label="Company name" error={errors.companyName?.message}><input {...register("companyName")} /></Field>
        <Field label="Work email" error={errors.email?.message}><input type="email" {...register("email")} /></Field>
        <Field label="Phone number" error={errors.phone?.message}><input {...register("phone")} /></Field>
        {!compact ? <Field label="Country" error={errors.country?.message}><input {...register("country")} /></Field> : <input type="hidden" value="India" {...register("country")} />}
        <SelectField label="Required service" error={errors.service?.message} options={serviceOptions} register={register("service")} />
        {!compact ? <SelectField label="Project budget" error={errors.budget?.message} options={budgetOptions} register={register("budget")} /> : <input type="hidden" value="Need consultation" {...register("budget")} />}
        {!compact ? <SelectField label="Expected timeline" error={errors.timeline?.message} options={timelineOptions} register={register("timeline")} /> : <input type="hidden" value="Flexible" {...register("timeline")} />}
        {!compact ? <SelectField label="Preferred contact" error={errors.preferredContact?.message} options={contactMethods} register={register("preferredContact")} /> : <input type="hidden" value="Email" {...register("preferredContact")} />}
      </div>
      <Field label="Project description" error={errors.description?.message}><textarea rows={5} {...register("description")} /></Field>
      <input className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />
      <label className="flex gap-3 text-sm text-slate-600">
        <input type="checkbox" className="mt-1 size-4" {...register("consent")} />
        I agree to be contacted about this enquiry.
      </label>
      {errors.consent?.message ? <p className="text-sm text-red-600">{errors.consent.message}</p> : null}
      <Button type="submit">{isSubmitting ? "Sending..." : "Submit Enquiry"}</Button>
      {status ? <p className="rounded-md bg-blue-50 p-3 text-sm font-semibold text-blue-700">{status}</p> : null}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactElement }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-navy-950">
      {label}
      <span className="contents">{children}</span>
      <style jsx>{`
        :global(input), :global(select), :global(textarea) {
          width: 100%;
          border: 1px solid var(--slate-300);
          border-radius: 8px;
          padding: 0.8rem 0.9rem;
          color: var(--foreground);
          background: white;
        }
      `}</style>
      {error ? <span className="text-sm font-medium text-red-600">{error}</span> : null}
    </label>
  );
}

function SelectField({ label, error, options, register }: { label: string; error?: string; options: string[]; register: UseFormRegisterReturn }) {
  return (
    <Field label={label} error={error}>
      <select {...register}>
        <option value="">Select</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </Field>
  );
}
