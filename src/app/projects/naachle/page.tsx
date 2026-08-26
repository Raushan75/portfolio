import type { Metadata } from "next";
import { getProjectBySlug } from "@/data/projects";
import { ProjectDetails } from "@/components/projects/project-details";

const project = getProjectBySlug("sweta-dance")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.oneLiner,
};

export default function SwetaDancePage() {
  return <ProjectDetails project={project} />;
}
