import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <SectionHeading id="experience-heading" label="Experience" title="Experience" />
        </Reveal>
        <ol className="relative ml-3 border-l border-border-strong">
          {experience.map((item, i) => (
            <Reveal key={`${item.company}-${item.period}`} delay={i * 0.05}>
              <li className="relative ml-6 pb-16 last:pb-0">
                <span
                  className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-2 ring-4 ring-bg"
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">
                    {item.role} <span className="text-muted">· {item.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-subtle">{item.period}</span>
                </div>
                <p className="mt-0.5 font-mono text-xs text-subtle">{item.location}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-subtle" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
