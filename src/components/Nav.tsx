"use client";

import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { useActiveSection } from "@/hooks/useActiveSection";

const SECTION_IDS = site.nav.map((n) => n.href.replace("#", ""));

export function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-bg/40 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4" aria-label="Primary">
        <a href="#" className="font-mono text-sm font-bold text-accent">~/nihal</a>

        <div className="hidden items-center gap-7 md:flex">
          {site.nav.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === id ? "true" : undefined}
                className={`text-sm transition-colors hover:text-text ${active === id ? "text-text" : "text-muted"}`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={site.resumeHref}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            <Download size={15} /> Résumé
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-muted"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {site.nav.map((link) => (
              <a key={link.href} href={link.href} className="text-muted" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              href={site.resumeHref}
              className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-bg"
            >
              <Download size={15} /> Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
