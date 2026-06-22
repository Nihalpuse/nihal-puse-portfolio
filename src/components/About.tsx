import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <SectionHeading id="about-heading" label="About" title="About" />
        </Reveal>
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="space-y-4 text-muted">
              {site.about.map((p, i) => (
                <p key={i} className="leading-relaxed">{p}</p>
              ))}
              <ul className="mt-6 space-y-2">
                {site.principles.map((p) => (
                  <li key={p} className="flex gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span className="text-text/90">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="grid aspect-square w-full max-w-[220px] place-items-center rounded-2xl border border-border-strong bg-surface font-mono text-5xl font-bold text-accent-2"
              aria-label={`${site.name} monogram`}
            >
              NP
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
