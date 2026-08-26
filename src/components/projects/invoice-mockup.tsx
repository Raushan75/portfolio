import { Badge } from "@/components/ui/badge";

const sampleValues: Record<string, string> = {
  Student: "Sample Student",
  "Billing Period": "1 \u2013 31 Aug",
  Sessions: "8 sessions",
  Rate: "\u20b9 (per-session rate)",
  Subtotal: "Calculated total",
  Discount: "Applied if eligible",
  Total: "Final amount due",
};

export function InvoiceMockup({ fields }: { fields: string[] }) {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Invoice Generation &mdash; Conceptual UI
        </h2>
        <span className="text-xs text-muted-foreground">Illustrative sample data</span>
      </div>

      <div className="mt-4 max-w-md rounded-lg border border-border bg-card p-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <p className="font-display text-base font-medium">Invoice</p>
          <Badge variant="outline">Draft</Badge>
        </div>

        <dl className="mt-4 space-y-3">
          {fields.map((field) => (
            <div key={field} className="flex items-center justify-between gap-4">
              <dt className="text-xs text-muted-foreground">{field}</dt>
              <dd className="text-sm font-medium">{sampleValues[field] ?? "\u2014"}</dd>
            </div>
          ))}
        </dl>

        <span className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground">
          Generate Invoice
        </span>
      </div>
    </section>
  );
}
