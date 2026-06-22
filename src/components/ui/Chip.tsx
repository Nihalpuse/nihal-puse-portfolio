export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-border-strong bg-surface px-3 py-1.5 text-sm text-text/90">
      {children}
    </span>
  );
}
