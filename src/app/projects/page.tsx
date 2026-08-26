import type { Metadata } from "next";
import { featuredProject, otherProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { FeaturedProjectCard } from "@/components/projects/featured-project-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Frontend projects by Raushan Kumar, including GrowEd, Growizz, and Sweta Dance \u2014 dashboards, billing workflows, ticket management, and marketing websites.",
};

export default function ProjectsPage() {
  return (
    <div className="container py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">Projects</p>
        <h1 className="mt-3 text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Dashboards, billing workflows, and marketing sites.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          A selection of production frontend work &mdash; from role-based
          dashboards and business workflows to complete marketing websites.
        </p>
      </div>

      <div className="mt-14">
        <FeaturedProjectCard project={featuredProject} />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {otherProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i + 1} />
        ))}
      </div>
    </div>
  );
}
