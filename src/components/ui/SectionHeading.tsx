export function SectionHeading({ id, label, title }: { id: string; label: string; title: string }) {
  return (
    <div className="mb-10">
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-2">{label}</span>
      <h2 id={id} className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
