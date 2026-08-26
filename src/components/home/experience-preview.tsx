"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/experience";
import { StatusChip } from "@/components/projects/status-chip";

export function ExperiencePreview() {
  const entry = experience[0];

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent">Experience</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Two years, one company, real production work.
          </h2>
          <Link
            href="/experience"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            Full experience <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-border bg-card p-7"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-display text-lg font-medium">{entry.company}</h3>
              <p className="text-sm text-muted-foreground">{entry.role}</p>
            </div>
            <StatusChip status="current" label={entry.period} />
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{entry.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {entry.projects.map((p) =>
              p.slug ? (
                <Link
                  key={p.name}
                  href={`/projects/${p.slug}`}
                  className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                >
                  {p.name}
                </Link>
              ) : (
                <span key={p.name} className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground">
                  {p.name}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
