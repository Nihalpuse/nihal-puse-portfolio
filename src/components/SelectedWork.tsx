import { ArrowUpRight } from "lucide-react";
import { projects, githubUrl } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectRow } from "@/components/ProjectRow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/Stagger";

export function SelectedWork() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="work" aria-labelledby="work-heading" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading id="work-heading" label="Selected work" title="Selected work" />

        <div className="space-y-8">
          {featured.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {more.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent-2">
                More projects
              </h3>
            </Reveal>
            <Reveal>
              <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted">
                Contributed full-stack development across multiple products at Scalixity —
                Docfliq (medical-professional network with courses &amp; live webinars),
                Nakshatra Gyaan (astrology platform with e-commerce &amp; AI chat), and
                SmartTenantAI (role-based property-management app) — and led a full modern
                redesign of the Scalixity company website.
              </p>
            </Reveal>
            <StaggerContainer className="glass divide-y divide-white/10 overflow-hidden rounded-2xl">
              {more.map((project) => (
                <StaggerItem key={project.slug}>
                  <ProjectRow project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        <div className="mt-12">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-sm text-accent transition hover:underline active:scale-95"
          >
            More on GitHub
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
