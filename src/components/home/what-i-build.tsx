import { LayoutDashboard, Workflow, Plug, Globe, AppWindow } from "lucide-react";
import { buildAreas } from "@/data/skills";

const icons = [AppWindow, LayoutDashboard, Workflow, Plug, Globe];

export function WhatIBuild() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">What I build</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Frontend work that carries real business logic.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {buildAreas.map((area, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={area.title} className="rounded-lg border border-border bg-card p-6">
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-display text-base font-medium">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
