import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="rounded-lg bg-navy-950 p-8 text-white shadow-glow md:p-12">
          <h2 className="max-w-3xl font-heading text-3xl font-extrabold leading-tight md:text-5xl">Have a Business Problem That Technology Can Solve?</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Share your project idea, manual process, current challenge, or growth objective. We will help you understand the right solution, required technology, approximate scope, and next practical step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Book a Free Consultation</Button>
            <Button href="/contact" variant="light">Send Your Requirements</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
