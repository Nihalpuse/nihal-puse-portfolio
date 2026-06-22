import { ArrowUpRight } from "lucide-react";
import { projects, githubUrl } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function SelectedWork() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="work" aria-labelledby="work-heading" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <SectionHeading id="work-heading" label="Selected work" title="Selected work" />
        </Reveal>
        <div className="space-y-8">
          {featured.map((project, i) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-accent hover:underline"
          >
            More on GitHub <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
