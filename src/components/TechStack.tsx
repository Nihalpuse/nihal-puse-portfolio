import { skills } from "@/content/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";

export function TechStack() {
  return (
    <section aria-labelledby="tech-heading" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading id="tech-heading" label="Tech I work with" title="Tech stack" />
        <div className="space-y-6">
          {skills.map((group) => (
            <div key={group.label} className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="w-32 shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-accent">
                {group.label}
              </span>
              <StaggerContainer className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <StaggerItem key={item}>
                    <Chip>{item}</Chip>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
