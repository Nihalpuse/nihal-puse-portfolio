import { ArrowUpRight, Code2, Lock, RotateCw } from "lucide-react";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";

const FACE = "glass absolute inset-0 overflow-hidden rounded-2xl p-6 [backface-visibility:hidden]";

// Fixed-height card: shows the project name large by default and flips on hover
// (or focus/tap for keyboard + touch) to reveal the full detail.
export function FlipProjectCard({ project }: { project: Project }) {
  return (
    <div
      tabIndex={0}
      className="group h-[22rem] rounded-2xl outline-none [perspective:1200px] focus-visible:ring-2 focus-visible:ring-accent/50"
    >
      <div className="relative h-full w-full rounded-2xl transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
        {/* Front: project name */}
        <div className={`${FACE} flex flex-col items-center justify-center text-center`}>
          <RotateCw size={14} className="absolute right-4 top-4 text-subtle" aria-hidden />
          <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{project.title}</h3>
          {project.company && (
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-subtle">{project.company}</p>
          )}
        </div>

        {/* Back: full detail */}
        <div className={`${FACE} flex flex-col [transform:rotateY(180deg)]`}>
          <div className="mb-2 flex items-center gap-2">
            {project.status === "live" ? (
              <Badge tone="accent">Live</Badge>
            ) : (
              <Badge tone="accent-2"><Lock size={11} /> Private</Badge>
            )}
            {project.company && <span className="font-mono text-xs text-subtle">{project.company}</span>}
          </div>
          <h4 className="text-lg font-bold">{project.title}</h4>
          <p className="mt-2 line-clamp-6 text-sm leading-relaxed text-muted">{project.blurb}</p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-4 pt-3 font-mono text-xs">
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
            {project.links.note && <span className="text-subtle">{project.links.note}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
