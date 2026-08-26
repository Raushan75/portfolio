"use client";

import * as React from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Status = "idle" | "submitting" | "submitted";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");

  // Mock submit handler. Replace this with a real API route or email
  // service call (e.g. POST to /api/contact) when one is available.
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-8 w-8 text-status-shipped" aria-hidden="true" />
        <p className="font-display text-lg font-medium">Message received.</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out. This form currently uses a mock submit
          handler &mdash; connect it to an API route or email service to
          receive messages for real.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required />
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending\u2026" : "Send Message"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
