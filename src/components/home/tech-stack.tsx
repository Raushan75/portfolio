"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";

const categories = ["Frontend Engineering", "UI Engineering", "Data & Integration"] as const;

export function TechStack() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">Stack</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-medium tracking-tight sm:text-4xl">
            The tools behind every interface I ship.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((category, ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="font-display text-sm font-medium">{category}</h3>
              <ul className="mt-4 space-y-4">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <li key={skill.name} className="group">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <Badge variant="outline" className="hidden sm:inline-flex">
                          {category.split(" ")[0].toLowerCase()}
                        </Badge>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {skill.description}
                      </p>
                    </li>
                  ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
