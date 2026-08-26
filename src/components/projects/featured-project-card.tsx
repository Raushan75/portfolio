import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { TechnologyBadges } from "@/components/projects/technology-badges";
import { StatusChip } from "@/components/projects/status-chip";
import { Button } from "@/components/ui/button";

export function FeaturedProjectCard({ project }: { project: Project }) {
  const highlightAreas = project.contributions
    .filter((c) => c.ownership !== "partial")
    .map((c) => c.area);

  return (
    <div className="grid gap-8 rounded-xl border border-border bg-card p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <StatusChip status="shipped" label="featured project" />
          <span className="font-mono text-xs text-muted-foreground">{project.category}</span>
        </div>

        <h3 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">Frontend Developer</p>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
          {project.oneLiner}
        </p>

        <div className="mt-6">
          <TechnologyBadges technologies={project.technologies} />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href={`/projects/${project.slug}`}>
              View Case Study <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          {project.liveUrl && (
            <Button asChild variant="outline">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Project <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {highlightAreas.map((area) => (
          <div key={area} className="rounded-lg border border-border bg-background/60 px-4 py-3.5">
            <p className="text-sm font-medium leading-snug">{area}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
