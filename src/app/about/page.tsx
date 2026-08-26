import type { Metadata } from "next";
import { experience, experienceYears } from "@/data/experience";
import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description:
    "Raushan Kumar is a Frontend Developer with 2 years of experience building React, Next.js and TypeScript applications, dashboards and business workflows.",
};

export default function AboutPage() {
  return (
    <div className="container py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">About</p>
        <h1 className="mt-3 text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Raushan Kumar
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">Frontend Developer</p>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a Frontend Developer with {experienceYears} years of
            professional experience at {experience[0].company}, working
            primarily with React, Next.js, and TypeScript. My work centers on
            building responsive, production interfaces &mdash; from public
            marketing sites to role-based dashboards and internal business
            workflows.
          </p>
          <p>
            Day to day, that means building reusable React components,
            implementing UI with Tailwind CSS and shadcn/ui, integrating REST
            APIs, and turning business logic &mdash; scheduling, billing,
            ticket workflows &mdash; into interfaces that are clear and
            reliable to use.
          </p>
          <p>
            I also have backend and database exposure through REST API
            integration and working with PostgreSQL-backed applications,
            which helps me build frontend features that align closely with
            how the underlying data actually behaves.
          </p>
          <p>
            I care about interfaces that hold up under real data and real
            usage &mdash; consistent component architecture, typed data
            models, and layouts that stay usable across dashboards, forms,
            and content-driven pages alike.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Focus areas
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill.name} variant="outline">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Currently
            </p>
            <p className="mt-3 font-display text-base font-medium">
              {experience[0].role}
            </p>
            <p className="text-sm text-muted-foreground">{experience[0].company}</p>
            <p className="mt-1 text-sm text-muted-foreground">{experience[0].period}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
