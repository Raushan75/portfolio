import { Badge } from "@/components/ui/badge";

interface Ticket {
  id: string;
  title: string;
  priority: "Low" | "Medium" | "High";
  assignee: string;
}

const columns: { title: string; tickets: Ticket[] }[] = [
  {
    title: "Backlog",
    tickets: [
      { id: "GRW-102", title: "Add filter presets to ticket list", priority: "Low", assignee: "R.K." },
      { id: "GRW-108", title: "Bulk status update for tickets", priority: "Medium", assignee: "S.P." },
    ],
  },
  {
    title: "In Progress",
    tickets: [
      { id: "GRW-095", title: "Ticket detail panel redesign", priority: "High", assignee: "R.K." },
      { id: "GRW-099", title: "Assignment dropdown component", priority: "Medium", assignee: "A.V." },
    ],
  },
  {
    title: "Completed",
    tickets: [
      { id: "GRW-081", title: "Priority badges across board", priority: "Medium", assignee: "R.K." },
      { id: "GRW-076", title: "Ticket search and filtering", priority: "High", assignee: "R.K." },
    ],
  },
];

const priorityVariant: Record<Ticket["priority"], string> = {
  Low: "text-muted-foreground",
  Medium: "text-status-progress",
  High: "text-accent",
};

export function TicketBoardDemo() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Ticket Management &mdash; Sample View
        </h2>
        <span className="text-xs text-muted-foreground">Illustrative sample data</span>
      </div>

      <div className="mt-4 rounded-lg border border-border bg-card">
        <div className="flex flex-wrap items-center gap-3 border-b border-border px-5 py-4">
          <div className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-xs text-muted-foreground">
            Search tickets&hellip;
          </div>
          <span className="rounded-md border border-border px-3 py-2 text-xs text-muted-foreground">
            Filter
          </span>
          <span className="rounded-md bg-accent px-3 py-2 text-xs font-medium text-accent-foreground">
            + New Ticket
          </span>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title} className="bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{col.title}</p>
                <span className="font-mono text-xs text-muted-foreground">
                  {col.tickets.length}
                </span>
              </div>
              <div className="mt-3 space-y-3">
                {col.tickets.map((t) => (
                  <div key={t.id} className="rounded-md border border-border p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-muted-foreground">{t.id}</span>
                      <Badge variant="outline" className={priorityVariant[t.priority]}>
                        {t.priority}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm leading-snug">{t.title}</p>
                    <p className="mt-2 text-xs text-muted-foreground">Assigned &mdash; {t.assignee}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
