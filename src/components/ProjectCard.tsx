import Image from "next/image";
import { ArrowUpRight, Code2, Lock } from "lucide-react";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";

export function ProjectCard({ project }: { project: Project }) {
  const host = project.links.live ? new URL(project.links.live).hostname.replace(/^www\./, "") : null;

  return (
    <article className="glass flex flex-col overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_26px_60px_-12px_rgba(45,212,191,0.28)] hover:ring-1 hover:ring-accent/45">
      {project.image && (
        <>
          {/* Browser chrome */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
            <div className="flex gap-1.5" aria-hidden>
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
            </div>
            <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-subtle">
              <Lock size={10} className="shrink-0" />
              <span className="truncate">{host ?? "private workspace"}</span>
            </div>
          </div>

          {/* Screenshot */}
          <div className="relative aspect-[2/1] w-full bg-white/[0.02]">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover object-top"
            />
          </div>
        </>
      )}

      <div className="flex flex-col p-6 sm:p-8">
        <div className="mb-3">
          {project.status === "live" ? (
            <Badge tone="accent">Featured · Live</Badge>
          ) : (
            <Badge tone="accent-2"><Lock size={11} /> Featured · Private</Badge>
          )}
        </div>
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.blurb}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 pt-2 font-mono text-sm">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline"
            >
              Live demo <ArrowUpRight size={15} />
            </a>
          )}
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted hover:text-text"
            >
              <Code2 size={15} /> Code
            </a>
          )}
          {project.links.note && <span className="text-subtle">{project.links.note}</span>}
        </div>
      </div>
    </article>
  );
}
