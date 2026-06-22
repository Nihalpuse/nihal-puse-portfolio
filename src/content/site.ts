import type { SiteContent } from "@/lib/types";

export const site: SiteContent = {
  name: "Nihal Puse",
  role: "Frontend Developer",
  location: "Bhopal, India",
  email: "nihalpuse44@gmail.com",
  eyebrow: "// frontend developer · react · next.js · typescript",
  tagline:
    "I build fast, accessible web interfaces — turning designs into polished, production products.",
  available: true,
  availabilityText: "Open to frontend opportunities",
  resumeHref: "/resume.pdf",
  about: [
    "Frontend developer based in Bhopal, currently building product UI at Scalixity. I turn designs into fast, accessible interfaces — mostly in the React, Next.js and TypeScript world, backed by Python and Flask when a project needs the full stack.",
    "I design the component API before the pixels, treat performance and accessibility as features rather than afterthoughts, and like to own a feature end to end — from the layout to the API behind it.",
  ],
  principles: [
    "Design the component API before the pixels",
    "Performance and accessibility are features, not afterthoughts",
    "Validate at the edges; trust the server for truth",
    "Build for real devices and slow networks",
    "Own the feature end to end",
  ],
  socials: {
    github: "https://github.com/Nihalpuse",
    linkedin: "https://www.linkedin.com/in/nihal-puse/",
    email: "mailto:nihalpuse44@gmail.com",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};
