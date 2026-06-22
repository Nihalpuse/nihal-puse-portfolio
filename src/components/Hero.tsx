import { ArrowRight, Download } from "lucide-react";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pt-32">
        <p className="font-mono text-sm text-accent">{site.eyebrow}</p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-7xl">
          Nihal <span className="text-accent-2">Puse</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted">{site.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            View work <ArrowRight size={16} />
          </a>
          <a
            href={site.resumeHref}
            className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={16} /> Download résumé
          </a>
          {site.available && (
            <span className="inline-flex items-center gap-2 rounded-lg border border-accent/40 px-4 py-2.5 text-sm text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden /> {site.availabilityText}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
