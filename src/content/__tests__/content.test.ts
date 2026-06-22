import { describe, it, expect } from "vitest";
import { site } from "@/content/site";
import { projects, githubUrl } from "@/content/projects";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { skills } from "@/content/skills";

describe("content data", () => {
  it("site has identity + links + nav", () => {
    expect(site.name).toBe("Nihal Puse");
    expect(site.email).toBe("nihalpuse44@gmail.com");
    expect(site.socials.linkedin).toContain("linkedin.com/in/nihal-puse");
    expect(site.socials.github).toBe("https://github.com/Nihalpuse");
    expect(site.resumeHref).toBe("/resume.pdf");
    expect(site.about.length).toBeGreaterThan(0);
    expect(site.principles.length).toBeGreaterThanOrEqual(4);
    expect(site.nav.map((n) => n.href)).toEqual(["#about", "#work", "#experience", "#contact"]);
  });

  it("has exactly two featured projects with required fields", () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured).toHaveLength(2);
    for (const p of projects) {
      expect(p.title).toBeTruthy();
      expect(p.blurb).toBeTruthy();
      expect(p.tech.length).toBeGreaterThan(0);
      expect(["live", "private"]).toContain(p.status);
    }
    expect(githubUrl).toBe("https://github.com/Nihalpuse");
  });

  it("never exposes a phone number in site content", () => {
    const blob = JSON.stringify({ site, projects, experience, education, skills });
    expect(blob).not.toMatch(/9425675862/);
  });

  it("experience and education are populated, newest first", () => {
    expect(experience.length).toBeGreaterThanOrEqual(2);
    expect(experience[0].company).toBe("Scalixity");
    expect(education.length).toBeGreaterThanOrEqual(2);
    expect(education[0].degree).toMatch(/Master/);
  });

  it("skills are grouped", () => {
    expect(skills.length).toBeGreaterThanOrEqual(3);
    expect(skills[0].items.length).toBeGreaterThan(0);
  });
});
