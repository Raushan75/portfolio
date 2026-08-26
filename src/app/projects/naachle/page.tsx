import type { Metadata } from "next";
import { getProjectBySlug } from "@/data/projects";
import { ProjectDetails } from "@/components/projects/project-details";

const project = getProjectBySlug("naachle")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.oneLiner,
};

export default function NaachlePage() {
  return <ProjectDetails project={project} />;
}
