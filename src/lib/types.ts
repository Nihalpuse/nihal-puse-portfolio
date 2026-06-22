export type ProjectStatus = "live" | "private";

export interface ProjectLinks {
  live?: string;
  code?: string;
  note?: string;
}

export interface Project {
  slug: string;
  title: string;
  blurb: string;
  tech: string[];
  links: ProjectLinks;
  status: ProjectStatus;
  image?: string;
  featured: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  score: string;
  period: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
