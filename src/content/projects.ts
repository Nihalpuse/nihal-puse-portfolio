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
    image: "/projects/aaj-kya-banega.png",
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
    image: "/projects/procurement.png",
    featured: true,
  },
];
