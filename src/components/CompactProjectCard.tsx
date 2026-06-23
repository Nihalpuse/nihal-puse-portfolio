import { ArrowUpRight, Code2, Lock } from "lucide-react";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";

export function CompactProjectCard({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <article className={`glass flex h-full flex-col rounded-xl p-6 ${className}`}>
      <div className="mb-3 flex items-center gap-2">
        {project.status === "live" ? (
          <Badge tone="accent">Live</Badge>
        ) : (
          <Badge tone="accent-2"><Lock size={11} /> Private</Badge>
        )}
        {project.company && <span className="font-mono text-xs text-subtle">{project.company}</span>}
      </div>

      <h3 className="text-lg font-bold">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-4 pt-5 font-mono text-xs">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline"
          >
            Live demo <ArrowUpRight size={14} />
          </a>
        )}
        {project.links.code && (
          <a
            href={project.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-muted hover:text-text"
          >
            <Code2 size={14} /> Code
          </a>
        )}
        {!project.links.live && !project.links.code && project.links.note && (
          <span className="text-subtle">{project.links.note}</span>
        )}
      </div>
    </article>
  );
}
