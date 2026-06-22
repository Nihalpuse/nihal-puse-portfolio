import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center font-mono text-xs text-subtle">
        © 2026 {site.name} · built with Next.js + Tailwind
      </div>
    </footer>
  );
}
