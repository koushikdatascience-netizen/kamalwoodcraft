const steps = [
  ["Discovery", "Understand goals, users, workflows, constraints, and success criteria."],
  ["Planning", "Define scope, architecture, milestones, content, integrations, and delivery sequence."],
  ["UI and UX Design", "Create clear interfaces that support real users and business tasks."],
  ["Development", "Build maintainable features with structured data, validation, and secure defaults."],
  ["Testing", "Check functionality, responsiveness, accessibility, performance, and edge cases."],
  ["Deployment", "Launch with hosting, domains, SSL, environment configuration, and monitoring basics."],
  ["Support and Improvement", "Maintain, improve, measure, and extend after real usage begins."]
];

export function ProcessTimeline() {
  return (
    <div className="grid gap-4 md:grid-cols-7">
      {steps.map(([title, text], index) => (
        <article className="relative rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={title}>
          <span className="grid size-9 place-items-center rounded-full bg-blue-600 text-sm font-extrabold text-white">{index + 1}</span>
          <h3 className="mt-4 font-heading text-lg font-extrabold text-navy-950">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
        </article>
      ))}
    </div>
  );
}
