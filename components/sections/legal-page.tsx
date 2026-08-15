import { PageHero } from "@/components/ui/page-hero";

export function LegalPage({ title }: { title: string }) {
  return (
    <>
      <PageHero label="Legal" title={title} text="Professional starter template. This content must be reviewed by a qualified legal professional before production use." crumbs={[{ label: title }]} />
      <section className="section">
        <div className="container max-w-4xl">
          {/* Legal starter templates must be reviewed by a qualified legal professional before production use. */}
          <div className="card p-8">
            <p className="rounded-md bg-blue-50 p-4 text-sm font-semibold text-blue-700">Notice: This is a starter template and does not replace professional legal advice.</p>
            {["Purpose", "Information We May Collect", "How Information May Be Used", "Service Scope and Limitations", "Data Security", "Third-Party Services", "User Responsibilities", "Updates", "Contact"].map((heading) => (
              <section className="mt-8" key={heading}>
                <h2 className="font-heading text-2xl font-extrabold text-navy-950">{heading}</h2>
                <p className="mt-3 leading-8 text-slate-600">
                  Kamal Technologies will maintain clear, fair, and practical policies for business communication, service delivery, and website usage. Exact wording, jurisdiction-specific requirements, refund rules, cookie usage, and compliance obligations should be finalized with legal review before launch.
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
