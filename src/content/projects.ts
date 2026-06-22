import type { Project } from "@/lib/types";

export const githubUrl = "https://github.com/Nihalpuse";

export const projects: Project[] = [
  {
    slug: "aaj-kya-banega",
    title: "Aaj Kya Banega?",
    blurb:
      "An AI-powered meal-planning platform for flatmates and households to collaboratively decide daily meals — AI recommendations from pantry availability, preferences and history, real-time group voting, pantry management, meal tracking and grocery-list generation.",
    tech: ["Next.js", "TypeScript", "NeonDB (PostgreSQL)", "Gemini AI", "Tailwind CSS", "Vercel"],
    links: {
      live: "https://flatmate-meal-planner.vercel.app",
      code: "https://github.com/Nihalpuse/flatmate-meal-planner",
    },
    status: "live",
    // image: "/projects/aaj-kya-banega.png", // add a screenshot at this path, then uncomment
    featured: true,
  },
  {
    slug: "procurement-workspace",
    title: "Procurement Workspace",
    blurb:
      "An end-to-end RFQ and purchase-order automation platform — vendor quote comparison with L1/L2/L3 ranking and lowest-cost highlighting, a landed-cost comparison engine, synonym-aware vendor search (Jaccard similarity), a multi-tenant database with role-based access, and automated Excel PO generation.",
    tech: ["Next.js 16", "TypeScript", "PostgreSQL (Neon)", "Drizzle ORM", "Auth.js", "Tailwind CSS", "ExcelJS", "Zod"],
    links: {
      note: "Private — walkthrough on request",
    },
    status: "private",
    // image: "/projects/procurement.png", // add a screenshot at this path, then uncomment
    featured: true,
  },
  {
    slug: "docfliq",
    title: "Docfliq",
    blurb:
      "Responsive UI for a professional network and learning platform for verified healthcare professionals — combining a social content feed, course catalog, and live webinar events. Built reusable feed, course, and event-registration components from Figma and wired them to REST APIs for content, verification, and enrollment.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    links: { live: "https://www.docfliq.com" },
    status: "live",
    featured: false,
    company: "Scalixity",
  },
  {
    slug: "nakshatra-gyaan",
    title: "Nakshatra Gyaan",
    blurb:
      "Storefront UI for an astrology e-commerce platform — product listings, cart, and checkout — plus a real-time AI chat interface with streaming responses and message-state management. Integrated product and payment APIs and handled loading, error, and empty states across the shopping experience.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    links: { live: "https://nakshatragyaan.com" },
    status: "live",
    featured: false,
    company: "Scalixity",
  },
  {
    slug: "smarttenant-ai",
    title: "SmartTenantAI",
    blurb:
      "Role-based property-management UI serving two user types — property managers and rental seekers — with distinct dashboards and workflows. Built listings, search, and maintenance-request features as responsive, reusable components, with AI-powered features over REST APIs.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    links: { live: "https://smarttenantai.com" },
    status: "live",
    featured: false,
    company: "Scalixity",
  },
];
