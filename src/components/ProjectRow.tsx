import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/lib/types";

// One row in the editorial project list. The whole row links to the live (or
// code) URL when present; otherwise it renders as a static row with its note.
export function ProjectRow({ project }: { project: Project }) {
  const href = project.links.live ?? project.links.code;
  const linkLabel = project.links.live ? "Live" : "Code";

  const inner = (
    <>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2.5">
          <h4 className="font-semibold">{project.title}</h4>
          {project.company && <span className="font-mono text-xs text-subtle">· {project.company}</span>}
          {project.status === "private" && <Lock size={12} className="text-subtle" aria-hidden />}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted sm:max-w-2xl">{project.blurb}</p>
        <p className="mt-2 font-mono text-xs text-subtle lg:hidden">{project.tech.join(" · ")}</p>
      </div>

      <div className="flex shrink-0 items-center gap-5">
        <span className="hidden font-mono text-xs text-subtle lg:inline">{project.tech.join(" · ")}</span>
        {href ? (
          <span className="inline-flex items-center gap-1 whitespace-nowrap font-mono text-xs text-accent group-hover:underline">
            {linkLabel}
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        ) : (
          <span className="whitespace-nowrap font-mono text-xs text-subtle">{project.links.note}</span>
        )}
      </div>
    </>
  );

  const className =
    "group flex flex-col gap-3 px-5 py-5 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between sm:gap-6";

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
}
