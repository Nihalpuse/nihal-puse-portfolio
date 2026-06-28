import type { SiteContent } from "@/lib/types";

export const site: SiteContent = {
  name: "Nihal Puse",
  role: "Full-Stack Software Engineer",
  location: "Bhopal, India",
  email: "nihalpuse44@gmail.com",
  eyebrow: "// full-stack engineer · python · typescript · next.js",
  tagline:
    "I build and ship production web apps end to end, from React and Next.js interfaces to Python and PostgreSQL back ends.",
  available: true,
  availabilityText: "Open to full-stack roles",
  resumeHref: "/resume.pdf",
  about: [
    "Full-stack software engineer based in Bhopal, currently building and shipping production features at Scalixity. I work across the stack: React and Next.js interfaces, REST API integration and application state, and PostgreSQL data layers.",
    "I keep code clean and maintainable, treat performance and accessibility as features rather than afterthoughts, and like to own a feature end to end, from the layout to the API behind it.",
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
