export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-text/90 backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/[0.1] hover:text-text">
      {children}
    </span>
  );
}
