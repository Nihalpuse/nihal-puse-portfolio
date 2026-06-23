import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading id="about-heading" label="About" title="About" />
        <Reveal>
          <div className="max-w-3xl space-y-4 text-muted">
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
      </div>
    </section>
  );
}
