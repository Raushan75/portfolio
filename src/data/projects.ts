export type OwnershipLevel = "complete" | "worked-on" | "partial";

export interface ProjectContribution {
  area: string;
  detail: string;
  ownership: OwnershipLevel;
}

export interface CaseStudySection {
  heading: string;
  body: string[];
}

export interface Screenshot {
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  featured: boolean;
  liveUrl?: string;
  oneLiner: string;
  overview: string;
  myRole: string;
  company: string;
  experienceLabel: string;
  technologies: string[];
  contributions: ProjectContribution[];
  featureHighlights: string[];
  technicalNotes: CaseStudySection[];
  screenshots?: Screenshot[];
  billingFlow?: string[];
  invoiceFields?: string[];
  resultsNote: string;
}

export const projects: Project[] = [
  {
    slug: "growed",
    title: "GrowEd",
    category: "Education & Personalized Learning Platform",
    featured: true,
    liveUrl: "https://www.growed.in/home",
    oneLiner:
      "An education platform offering mentor-led, personalized learning \u2014 with role-based dashboards and billing workflows behind the scenes.",
    overview:
      "GrowEd is an education platform connecting students with mentors for personalized, subject-led learning, alongside a public site covering its courses, careers, and blog content. Behind the public experience sits a set of role-based dashboards \u2014 for teachers, students, and admins \u2014 and internal business workflows for session billing. I worked on the frontend as part of the team at RAKSP Application Pvt. Ltd.; this case study covers my specific contributions, not the product as a whole.",
    myRole:
      "Worked on the frontend across the public website and all three dashboards, with complete ownership of the Teacher Dashboard frontend, and worked on the invoice generation and automated billing interfaces.",
    company: "RAKSP Application Pvt. Ltd.",
    experienceLabel: "2 Years",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Contentful",
      "PostgreSQL",
    ],
    contributions: [
      {
        area: "Public Website",
        detail:
          "Implemented the landing/home page, careers page, and blogs page.",
        ownership: "worked-on",
      },
      {
        area: "Teacher Dashboard",
        detail:
          "Worked completely on the Teacher Dashboard frontend \u2014 layout, session workflows, and data views.",
        ownership: "complete",
      },
      {
        area: "Student Dashboard",
        detail:
          "Partially contributed \u2014 built specific views and components.",
        ownership: "partial",
      },
      {
        area: "Admin Dashboard",
        detail:
          "Partially contributed \u2014 built specific views and components.",
        ownership: "partial",
      },
      {
        area: "Invoice Generation",
        detail:
          "Implemented the UI and frontend workflow for generating and reviewing invoices.",
        ownership: "worked-on",
      },
      {
        area: "Automated Billing",
        detail:
          "Implemented the UI and business workflow for billing driven by recurring session schedules.",
        ownership: "worked-on",
      },
    ],
    featureHighlights: [
      "Complete frontend ownership of the Teacher Dashboard, covering session workflows and data-driven views",
      "Invoice generation implemented as a structured business workflow, not a static page",
      "Automated billing UI reflecting recurring session schedules and billing rules",
      "Public website pages \u2014 home, careers, blogs \u2014 with content/CMS integration",
      "Partial contributions to the Student and Admin dashboards",
    ],
    technicalNotes: [
      {
        heading: "Teacher Dashboard",
        body: [
          "The Teacher Dashboard is the strongest part of my contribution to GrowEd \u2014 I worked completely on its frontend, including the dashboard UI, session-related workflows, and the views teachers use to see student and session information.",
          "The interface is built from reusable React components and stays data-driven throughout, pulling from REST APIs so session and student information reflects live platform data.",
          "It needed to stay clear and responsive under real data \u2014 session lists, schedules, and status information \u2014 while remaining consistent with the rest of the platform's design system across devices.",
        ],
      },
      {
        heading: "Invoice Generation",
        body: [
          "I worked on the frontend workflow for invoice generation, presenting billing information \u2014 student, billing period, sessions, rate, subtotal, discount, and total \u2014 as a structured, reviewable document rather than a raw data dump.",
          "This involved building the UI around existing backend invoice data and REST endpoints, rather than designing the underlying payment or backend architecture.",
        ],
      },
      {
        heading: "Automated Billing",
        body: [
          "The automated billing feature calculates billable sessions from recurring schedules and billing rules. On the frontend, I implemented the UI and business workflow that turns a recurring schedule into calculated sessions, a billing amount, and finally an invoice.",
          "I worked on the frontend workflow for this feature and integrated it with the existing backend APIs \u2014 the underlying billing-rule calculations were implemented on the backend.",
        ],
      },
      {
        heading: "Student & Admin Dashboards",
        body: [
          "My contributions to the Student and Admin dashboards were partial \u2014 I built specific views and components within dashboards developed collaboratively across the team, rather than owning either end to end.",
        ],
      },
    ],
    screenshots: [
      { label: "GrowEd Home" },
      { label: "GrowEd Careers" },
      { label: "GrowEd Blogs" },
      { label: "Teacher Dashboard" },
      { label: "Student Dashboard" },
      { label: "Admin Dashboard" },
      { label: "Invoice Generation" },
      { label: "Automated Billing" },
    ],
    billingFlow: [
      "Recurring Schedule",
      "Calendar / Session Calculation",
      "Billable Sessions",
      "Billing Amount",
      "Invoice / Billing Workflow",
    ],
    invoiceFields: [
      "Student",
      "Billing Period",
      "Sessions",
      "Rate",
      "Subtotal",
      "Discount",
      "Total",
    ],
    resultsNote:
      "GrowEd is a live, production education platform. The Teacher Dashboard, invoice generation, and automated billing workflows I worked on are part of its day-to-day operation.",
  },
  {
    slug: "growizz",
    title: "Growizz",
    category: "Productivity Platform",
    featured: false,
    oneLiner:
      "A marketing website paired with a ClickUp-style ticket management interface.",
    overview:
      "Growizz combines a content-driven marketing website with a ticket management feature for tracking tasks \u2014 similar in spirit to tools like ClickUp. It demonstrates application-level frontend work beyond static pages: state, filtering, and workflow UI.",
    myRole:
      "Built the marketing website and worked on the ticket management feature, including the interface for listing, filtering, and managing tickets through their workflow.",
    company: "RAKSP Application Pvt. Ltd.",
    experienceLabel: "2 Years",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],
    contributions: [
      {
        area: "Marketing Website",
        detail:
          "Built the landing page, About Us page, contact page, and blog page.",
        ownership: "complete",
      },
      {
        area: "Ticket Management",
        detail:
          "Built the ticket listing, detail, and status/priority workflow interface.",
        ownership: "worked-on",
      },
    ],
    featureHighlights: [
      "Ticket management interface with listing, detail, status, assignment, priority, and filtering",
      "Productivity-workflow UI patterns inspired by modern tools like ClickUp",
      "Responsive marketing pages including landing, about, contact, and blog",
      "Componentized ticket board built with reusable card and dialog patterns",
    ],
    technicalNotes: [
      {
        heading: "Ticket Management",
        body: [
          "I worked on a ticket management feature similar to ClickUp-style task and ticket management \u2014 covering ticket listing, ticket detail views, status, assignment, priority, and filtering.",
          "This went beyond static marketing pages into application-level frontend work: interactive state, filtering logic, and a workflow-oriented interface for moving tickets between stages.",
        ],
      },
      {
        heading: "Marketing Website",
        body: [
          "Alongside the ticket management feature, I built the public marketing site \u2014 landing, About Us, contact, and blog pages \u2014 as a polished, content-driven entry point to the product.",
        ],
      },
    ],
    resultsNote:
      "The ticket management feature demonstrates frontend experience beyond marketing sites \u2014 building interactive, stateful, workflow-driven interfaces.",
  },
  {
    slug: "naachle",
    title: "Naachle",
    category: "Marketing Website",
    featured: false,
    oneLiner:
      "A complete, polished marketing website built from the ground up.",
    overview:
      "Naachle Dance is a content and marketing website built entirely on the frontend, covering the full public site experience from landing page through blog.",
    myRole:
      "Worked on the complete frontend and public website experience \u2014 landing, About Us, contact, and blog pages.",
    company: "RAKSP Application Pvt. Ltd.",
    experienceLabel: "2 Years",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    contributions: [
      {
        area: "Landing Page",
        detail: "Built the primary marketing landing page.",
        ownership: "complete",
      },
      {
        area: "About Us",
        detail: "Built the About Us page.",
        ownership: "complete",
      },
      {
        area: "Contact",
        detail: "Built the contact page.",
        ownership: "complete",
      },
      {
        area: "Blog",
        detail: "Built the blog page and layout.",
        ownership: "complete",
      },
    ],
    featureHighlights: [
      "Full public website experience built end to end on the frontend",
      "Consistent, polished content-and-marketing design across all pages",
      "Responsive layouts across every page of the site",
    ],
    technicalNotes: [
      {
        heading: "Complete Frontend Ownership",
        body: [
          "I owned the complete frontend and public website experience for Naachle Dance, from the landing page through the blog, rather than contributing to isolated pages.",
          "The focus was on a polished, cohesive content and marketing presentation across the full site.",
        ],
      },
    ],
    resultsNote:
      "A fully shipped, polished marketing website representing complete ownership of the public frontend experience.",
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const otherProjects = projects.filter((p) => !p.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
