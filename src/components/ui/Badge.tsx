type Tone = "accent" | "accent-2" | "muted";

const toneClass: Record<Tone, string> = {
  accent: "border-accent/40 bg-accent/10 text-accent",
  "accent-2": "border-accent-2/40 bg-accent-2/10 text-accent-2",
  muted: "border-border-strong bg-surface text-muted",
};

export function Badge({ children, tone = "accent" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${toneClass[tone]}`}>
      {children}
    </span>
  );
}
