import { ScrambleText } from "@/components/ui/ScrambleText";
import { RiseHeading } from "@/components/ui/RiseHeading";

export function SectionHeading({ id, label, title }: { id: string; label: string; title: string }) {
  return (
    <div className="mb-10">
      <ScrambleText
        text={label}
        className="block font-mono text-xs uppercase tracking-[0.18em] text-accent-2"
      />
      <RiseHeading
        id={id}
        text={title}
        className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl"
      />
    </div>
  );
}
