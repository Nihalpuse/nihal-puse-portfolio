import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vite", "Tiptap"] },
  { label: "Backend & Data", items: ["REST APIs", "Python microservices", "PostgreSQL (NeonDB)", "Drizzle ORM", "Auth.js"] },
  { label: "Tooling", items: ["Git", "Vercel", "Netlify", "Agile / SDLC"] },
];
