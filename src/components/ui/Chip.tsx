export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-text/90 backdrop-blur-sm">
      {children}
    </span>
  );
}
