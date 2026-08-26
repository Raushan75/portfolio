import type { Metadata } from "next";
import { getProjectBySlug } from "@/data/projects";
import { ProjectDetails } from "@/components/projects/project-details";
import { TicketBoardDemo } from "@/components/projects/ticket-board-demo";

const project = getProjectBySlug("growizz")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.oneLiner,
};

export default function GrowizzPage() {
  return (
    <ProjectDetails project={project}>
      <TicketBoardDemo />
    </ProjectDetails>
  );
}
