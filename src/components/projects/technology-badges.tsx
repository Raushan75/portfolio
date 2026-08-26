import { Badge } from "@/components/ui/badge";

export function TechnologyBadges({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <Badge key={tech} variant="outline">
          {tech}
        </Badge>
      ))}
    </div>
  );
}
