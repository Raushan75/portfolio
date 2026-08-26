import { ImageIcon } from "lucide-react";
import type { Screenshot } from "@/data/projects";

export function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Screenshots
        </h2>
        <span className="text-xs text-muted-foreground">Placeholders &mdash; to be replaced</span>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {screenshots.map((shot) => (
          <div
            key={shot.label}
            className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted/30 p-4 text-center"
          >
            <ImageIcon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
            <p className="text-xs font-medium text-muted-foreground">{shot.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
