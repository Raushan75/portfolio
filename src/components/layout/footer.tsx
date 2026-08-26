import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-medium">Raushan Kumar</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Frontend Developer &mdash; React, Next.js, TypeScript
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={socialLinks.github}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href={socialLinks.linkedin}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-[18px] w-[18px]" />
          </Link>
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
      <div className="container pb-8">
        <p className="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Raushan Kumar. Built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
