import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { TechnologyBadges } from "@/components/projects/technology-badges";
import { StatusChip } from "@/components/projects/status-chip";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col justify-between rounded-lg border border-border bg-card p-7 transition-colors hover:border-accent/60"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.featured && <StatusChip status="shipped" label="featured project" />}
        </div>

        <h3 className="mt-4 font-display text-2xl font-medium tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-accent">{project.category}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {project.oneLiner}
        </p>
      </div>

      <div className="mt-7">
        <TechnologyBadges technologies={project.technologies.slice(0, 4)} />
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground">
          View case study
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
