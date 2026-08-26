export interface Skill {
  name: string;
  description: string;
  category: "Frontend Engineering" | "UI Engineering" | "Data & Integration";
}

export const skills: Skill[] = [
  { name: "React", description: "Component architecture and reusable UI building blocks.", category: "Frontend Engineering" },
  { name: "Next.js", description: "App Router, routing, and production application structure.", category: "Frontend Engineering" },
  { name: "TypeScript", description: "Strongly typed component props, data, and application logic.", category: "Frontend Engineering" },
  { name: "JavaScript", description: "Core application and interaction logic.", category: "Frontend Engineering" },
  { name: "Tailwind CSS", description: "Utility-first styling for consistent, responsive interfaces.", category: "UI Engineering" },
  { name: "shadcn/ui", description: "Accessible, themeable component primitives.", category: "UI Engineering" },
  { name: "HTML", description: "Semantic, accessible markup.", category: "UI Engineering" },
  { name: "CSS", description: "Layout, responsive design, and visual detail.", category: "UI Engineering" },
  { name: "Lucide React", description: "Consistent iconography across interfaces.", category: "UI Engineering" },
  { name: "REST APIs", description: "Integrating frontend interfaces with backend services.", category: "Data & Integration" },
  { name: "Contentful", description: "CMS-driven content for marketing and blog pages.", category: "Data & Integration" },
  { name: "PostgreSQL", description: "Working with PostgreSQL-backed application data.", category: "Data & Integration" },
];

export const buildAreas = [
  {
    title: "Production Web Applications",
    description: "Responsive and scalable frontend applications built with React and Next.js.",
  },
  {
    title: "Dashboards",
    description: "Admin, teacher, and student dashboard interfaces for real business platforms.",
  },
  {
    title: "Business Workflows",
    description: "Billing, invoicing, and management workflows built as production frontend features.",
  },
  {
    title: "API-Driven Interfaces",
    description: "REST API integration and data-driven UI for dynamic, live application data.",
  },
  {
    title: "Marketing Websites",
    description: "Responsive, content-driven landing and marketing websites.",
  },
];
