import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProject, otherProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { FeaturedProjectCard } from "@/components/projects/featured-project-card";

export function FeaturedProjects() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">Projects</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Production work, not tutorials.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            All projects <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12">
          <FeaturedProjectCard project={featuredProject} />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
