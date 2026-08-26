import { cn } from "@/lib/utils";

interface StatusChipProps {
  status: "shipped" | "in-progress" | "current";
  label?: string;
  className?: string;
}

const copy: Record<StatusChipProps["status"], string> = {
  shipped: "shipped",
  "in-progress": "in progress",
  current: "current",
};

export function StatusChip({ status, label, className }: StatusChipProps) {
  const dotClass =
    status === "shipped"
      ? "bg-status-shipped"
      : status === "current"
      ? "bg-accent animate-blink"
      : "bg-status-progress";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground",
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dotClass)} aria-hidden="true" />
      {label ?? copy[status]}
    </span>
  );
}

interface OwnershipChipProps {
  ownership: "complete" | "worked-on" | "partial";
  className?: string;
}

const ownershipCopy: Record<OwnershipChipProps["ownership"], string> = {
  complete: "worked completely on",
  "worked-on": "worked on",
  partial: "partially worked on",
};

const ownershipDot: Record<OwnershipChipProps["ownership"], string> = {
  complete: "bg-status-shipped",
  "worked-on": "bg-status-shipped",
  partial: "bg-status-progress",
};

export function OwnershipChip({ ownership, className }: OwnershipChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground",
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", ownershipDot[ownership])} aria-hidden="true" />
      {ownershipCopy[ownership]}
    </span>
  );
}
