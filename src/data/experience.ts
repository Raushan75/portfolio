export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  status: "current" | "past";
  summary: string;
  responsibilities: string[];
  projects: { name: string; slug?: string }[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "RAKSP Application Pvt. Ltd.",
    role: "Frontend Developer",
    period: "2 Years \u2014 Present",
    status: "current",
    summary:
      "Frontend engineer working across production web applications, dashboards, and business workflows \u2014 building responsive interfaces, reusable React components, and REST API integrations with a Next.js and TypeScript stack.",
    responsibilities: [
      "Building responsive web interfaces for desktop, tablet, and mobile",
      "Developing reusable React components and Next.js applications",
      "Implementing UI with TypeScript and Tailwind CSS",
      "Integrating REST APIs and working with existing backend services",
      "Building dashboard interfaces and business workflow features",
      "Form development and validation",
      "CMS and content integration",
      "Working with PostgreSQL-backed applications",
      "Improving user experience and frontend performance",
    ],
    projects: [
      { name: "GrowEd", slug: "growed" },
      { name: "Growizz", slug: "growizz" },
      { name: "Naachle", slug: "naachle" },
    ],
  },
];

export const experienceYears = 2;
