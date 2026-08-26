import type { Metadata } from "next";
import { getProjectBySlug } from "@/data/projects";
import { ProjectDetails } from "@/components/projects/project-details";
import { InvoiceMockup } from "@/components/projects/invoice-mockup";
import { BillingFlow } from "@/components/projects/billing-flow";

const project = getProjectBySlug("growed")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.oneLiner,
};

export default function GrowEdPage() {
  return (
    <ProjectDetails project={project}>
      {project.invoiceFields && <InvoiceMockup fields={project.invoiceFields} />}
      {project.billingFlow && <BillingFlow steps={project.billingFlow} />}
    </ProjectDetails>
  );
}
