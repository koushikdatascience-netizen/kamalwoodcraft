export function EmptyState({ title, message, children }: { title: string; message: string; children?: React.ReactNode }) {
  return (
    <section className="container py-32">
      <div className="card mx-auto max-w-xl p-8 text-center">
        <h1 className="font-heading text-3xl font-extrabold text-navy-950">{title}</h1>
        <p className="mt-4 text-slate-600">{message}</p>
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </section>
  );
}

export function ErrorState({ title, message, action }: { title: string; message: string; action: () => void }) {
  return (
    <section className="container py-32">
      <div className="card mx-auto max-w-xl p-8 text-center">
        <h1 className="font-heading text-3xl font-extrabold text-navy-950">{title}</h1>
        <p className="mt-4 text-slate-600">{message}</p>
        <button className="mt-6 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white" onClick={action}>
          Try again
        </button>
      </div>
    </section>
  );
}
