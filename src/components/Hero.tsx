"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { site } from "@/content/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const containerProps = reduce ? {} : { variants: container, initial: "hidden", animate: "show" };
  const itemProps = reduce ? {} : { variants: item };

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-accent-2) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent-2) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <motion.div className="relative mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pt-32" {...containerProps}>
        <motion.p className="font-mono text-sm text-accent" {...itemProps}>
          {site.eyebrow}
        </motion.p>
        <motion.h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-7xl" {...itemProps}>
          Nihal <span className="text-accent-2">Puse</span>
        </motion.h1>
        <motion.p className="mt-5 max-w-xl text-lg text-muted" {...itemProps}>
          {site.tagline}
        </motion.p>

        <motion.div className="mt-8 flex flex-wrap items-center gap-3" {...itemProps}>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-all duration-200 ease-out hover:opacity-90 hover:shadow-[0_8px_24px_-6px_rgba(45,212,191,0.5)] hover:scale-[1.03] active:scale-[0.97]"
          >
            View work <ArrowRight size={16} />
          </a>
          <a
            href={site.resumeHref}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium backdrop-blur-md transition-all duration-200 ease-out hover:border-accent hover:text-accent hover:scale-[1.03] active:scale-[0.97]"
          >
            <Download size={16} /> Download résumé
          </a>
          {site.available && (
            <span className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-4 py-2.5 text-sm text-accent backdrop-blur-md">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {site.availabilityText}
            </span>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
