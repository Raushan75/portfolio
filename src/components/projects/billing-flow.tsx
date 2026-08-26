import { ArrowDown } from "lucide-react";

export function BillingFlow({ steps }: { steps: string[] }) {
  return (
    <section>
      <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        Automated Billing &mdash; Frontend Workflow
      </h2>

      <div className="mt-4 flex max-w-sm flex-col items-stretch">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <div className="w-full rounded-lg border border-border bg-card px-5 py-3.5 text-center">
              <p className="text-sm font-medium">{step}</p>
            </div>
            {i !== steps.length - 1 && (
              <ArrowDown className="my-2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      <p className="mt-4 max-w-md text-xs leading-relaxed text-muted-foreground">
        The underlying billing-rule calculations run on the backend. On the
        frontend, I built the interfaces that surface each stage of this
        workflow &mdash; from recurring schedules through to the final
        invoice.
      </p>
    </section>
  );
}
