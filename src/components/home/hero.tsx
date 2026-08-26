"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusChip } from "@/components/projects/status-chip";
import { socialLinks } from "@/data/navigation";
import { experienceYears } from "@/data/experience";

const systemRows = [
  { label: "React", value: "component layer", status: "shipped" as const },
  { label: "Next.js", value: "app router", status: "shipped" as const },
  { label: "TypeScript", value: "strict mode", status: "shipped" as const },
  { label: "API", value: "REST integration", status: "shipped" as const },
  { label: "Dashboard", value: "teacher / admin / student", status: "shipped" as const },
  { label: "Billing", value: "recurring schedules", status: "shipped" as const },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container relative grid gap-16 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-accent">Raushan Kumar</p>

          <h1 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Frontend Developer building production-ready web experiences with
            React, Next.js &amp; TypeScript.
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            {experienceYears} years of professional experience shipping
            production web applications, role-based dashboards, business
            workflows, and REST API integrations &mdash; from teacher
            dashboards to automated billing.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <a href={socialLinks.github} className="inline-flex items-center gap-1 hover:text-foreground">
              GitHub <ArrowUpRight className="h-3 w-3" />
            </a>
            <a href={socialLinks.linkedin} className="inline-flex items-center gap-1 hover:text-foreground">
              LinkedIn <ArrowUpRight className="h-3 w-3" />
            </a>
            <a href={`mailto:${socialLinks.email}`} className="inline-flex items-center gap-1 hover:text-foreground">
              {socialLinks.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-xl border border-border bg-card/80 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
              <span className="font-mono text-xs text-muted-foreground">system.status</span>
              <StatusChip status="current" label="online" />
            </div>
            <ul className="divide-y divide-border">
              {systemRows.map((row, i) => (
                <motion.li
                  key={row.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="flex items-center justify-between gap-4 px-5 py-3.5"
                >
                  <div>
                    <p className="font-mono text-sm">{row.label}</p>
                    <p className="text-xs text-muted-foreground">{row.value}</p>
                  </div>
                  <StatusChip status={row.status} />
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
