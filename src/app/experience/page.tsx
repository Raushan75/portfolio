import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/data/experience";
import { StatusChip } from "@/components/projects/status-chip";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional frontend development experience at Flying Feather IT Pvt. Ltd. across dashboards, billing workflows, and production web applications.",
};

export default function ExperiencePage() {
  return (
    <div className="container py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">Experience</p>
        <h1 className="mt-3 text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Two years of production frontend work.
        </h1>
      </div>

      <ol className="mt-16 space-y-0">
        {experience.map((entry, i) => (
          <li key={entry.company} className="relative pl-8">
            {i !== experience.length - 1 && (
              <span
                className="absolute left-[5px] top-6 h-full w-px bg-border"
                aria-hidden="true"
              />
            )}
            <span
              className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background"
              aria-hidden="true"
            />

            <div className="pb-16">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-display text-2xl font-medium">{entry.company}</h2>
                <StatusChip status="current" label={entry.period} />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{entry.role}</p>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {entry.summary}
              </p>

              <Separator className="my-7 max-w-2xl" />

              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Responsibilities
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {entry.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Major projects
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    {entry.projects.map((p) =>
                      p.slug ? (
                        <Link
                          key={p.name}
                          href={`/projects/${p.slug}`}
                          className="rounded-md border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                        >
                          {p.name}
                        </Link>
                      ) : (
                        <span key={p.name} className="rounded-md border border-border px-4 py-3 text-sm font-medium text-muted-foreground">
                          {p.name}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
