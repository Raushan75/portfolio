import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/data/navigation";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Raushan Kumar, Frontend Developer.",
};

const channels = [
  { label: "Email", value: socialLinks.email, href: `mailto:${socialLinks.email}`, icon: Mail },
  { label: "LinkedIn", value: "View profile", href: socialLinks.linkedin, icon: Linkedin },
  { label: "GitHub", value: "View profile", href: socialLinks.github, icon: Github },
];

export default function ContactPage() {
  return (
    <div className="container py-20 sm:py-28">
      <div className="max-w-xl">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">Contact</p>
        <h1 className="mt-3 text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Let&apos;s build something useful.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Open to frontend roles and projects involving React, Next.js, and
          TypeScript &mdash; dashboards, business workflows, and production
          web applications.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-3">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/60"
            >
              <channel.icon className="h-4 w-4 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium">{channel.label}</p>
                <p className="text-xs text-muted-foreground">{channel.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-card p-7 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
