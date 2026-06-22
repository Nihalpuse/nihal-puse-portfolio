import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-2">Contact</span>
          <h2 id="contact-heading" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Like what you see? <span className="text-accent">Let&apos;s talk.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Open to frontend roles and collaborations. The fastest way to reach me is email.
          </p>
          <div className="mt-8 flex justify-center">
            <CopyEmail email={site.email} />
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-lg border border-border-strong bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-lg border border-border-strong bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={site.socials.email}
              aria-label="Email"
              className="grid h-11 w-11 place-items-center rounded-lg border border-border-strong bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
