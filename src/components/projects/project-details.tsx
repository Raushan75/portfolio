import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { TechnologyBadges } from "@/components/projects/technology-badges";
import { StatusChip, OwnershipChip } from "@/components/projects/status-chip";
import { ScreenshotGallery } from "@/components/projects/screenshot-gallery";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function ProjectDetails({
  project,
  children,
}: {
  project: Project;
  children?: React.ReactNode;
}) {
  return (
    <div className="container py-20 sm:py-28">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to projects
      </Link>

      <header className="mt-8 max-w-2xl">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            {project.category}
          </p>
          {project.featured && <StatusChip status="shipped" label="featured project" />}
        </div>
        <h1 className="mt-3 text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {project.overview}
        </p>

        <dl className="mt-6 grid grid-cols-3 gap-4 max-w-md">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Role</dt>
            <dd className="mt-1 text-sm font-medium">Frontend Developer</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Company</dt>
            <dd className="mt-1 text-sm font-medium">{project.company}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Experience</dt>
            <dd className="mt-1 text-sm font-medium">{project.experienceLabel}</dd>
          </div>
        </dl>

        {project.liveUrl && (
          <Button asChild variant="outline" className="mt-6">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              View Live Project <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        )}
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-14">
          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              My Role
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {project.myRole}
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              My Contributions
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.contributions.map((c) => (
                <div key={c.area} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-medium">{c.area}</p>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {c.detail}
                  </p>
                  <OwnershipChip ownership={c.ownership} className="mt-3" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Feature Highlights
            </h2>
            <ul className="mt-4 space-y-2.5">
              {project.featureHighlights.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {children}

          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Technical Notes
            </h2>
            <div className="mt-4 space-y-8">
              {project.technicalNotes.map((note) => (
                <div key={note.heading}>
                  <h3 className="font-display text-lg font-medium">{note.heading}</h3>
                  {note.body.map((p, i) => (
                    <p key={i} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {project.screenshots && project.screenshots.length > 0 && (
            <ScreenshotGallery screenshots={project.screenshots} />
          )}

          <Separator />

          <section>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Results
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {project.resultsNote}
            </p>
          </section>

          {project.liveUrl && (
            <section className="rounded-lg border border-border bg-card p-8 text-center">
              <p className="font-display text-lg font-medium">Want to explore the product?</p>
              <Button asChild className="mt-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Visit {project.title} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            </section>
          )}
        </div>

        <aside className="h-fit space-y-6 lg:sticky lg:top-24">
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Technology Stack
            </p>
            <div className="mt-4">
              <TechnologyBadges technologies={project.technologies} />
            </div>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/60"
            >
              <div>
                <p className="font-display text-sm font-medium">Live Project</p>
                <p className="mt-1 text-xs text-muted-foreground">growed.in</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden="true" />
            </a>
          )}

          <Link
            href="/contact"
            className="block rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/60"
          >
            <p className="font-display text-sm font-medium">Interested in similar work?</p>
            <p className="mt-1 text-xs text-muted-foreground">Let&apos;s talk about your project.</p>
          </Link>
        </aside>
      </div>
    </div>
  );
}
