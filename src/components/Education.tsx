import { education } from "@/content/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section aria-labelledby="education-heading" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <SectionHeading id="education-heading" label="Education" title="Education" />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-border-strong bg-surface-2 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold">{item.degree}</h3>
                  <span className="shrink-0 font-mono text-xs text-subtle">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{item.school}</p>
                <p className="mt-0.5 font-mono text-xs text-subtle">{item.location}</p>
                <p className="mt-3 inline-block rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-xs text-accent">
                  {item.score}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
