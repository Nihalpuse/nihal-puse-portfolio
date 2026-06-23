"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
        <a
          href="#"
          className="inline-block font-mono text-sm font-bold text-accent transition-opacity duration-200 hover:opacity-80 active:scale-95"
        >
          ~/nihal
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {site.nav.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative py-1 text-sm transition-colors duration-200 hover:text-text ${isActive ? "text-text" : "text-muted"}`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
          <a
            href={site.resumeHref}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-bg transition-all duration-200 ease-out hover:opacity-90 hover:shadow-[0_8px_24px_-6px_rgba(45,212,191,0.5)] active:scale-95"
          >
            <Download size={15} /> Résumé
          </a>
        </div>

        <button
          type="button"
          className="text-muted transition-colors duration-200 hover:text-text active:scale-95 md:hidden"
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
              <a
                key={link.href}
                href={link.href}
                className="text-muted transition-colors duration-200 hover:text-text"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.resumeHref}
              className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-bg transition-all duration-200 ease-out hover:opacity-90 active:scale-95"
            >
              <Download size={15} /> Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
