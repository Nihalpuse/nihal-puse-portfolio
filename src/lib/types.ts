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
  company?: string;
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

export interface SiteContent {
  name: string;
  role: string;
  location: string;
  email: string;
  eyebrow: string;
  tagline: string;
  available: boolean;
  availabilityText: string;
  resumeHref: string;
  about: string[];
  principles: string[];
  socials: { github: string; linkedin: string; email: string };
  nav: NavLink[];
}
