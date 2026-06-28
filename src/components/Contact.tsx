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
            Open to full-stack roles and collaborations. The fastest way to reach me is email.
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
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-muted backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-110 hover:border-accent/60 hover:bg-white/[0.08] hover:text-accent active:scale-95"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-muted backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-110 hover:border-accent/60 hover:bg-white/[0.08] hover:text-accent active:scale-95"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={site.socials.email}
              aria-label="Email"
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-muted backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-110 hover:border-accent/60 hover:bg-white/[0.08] hover:text-accent active:scale-95"
            >
              <Mail size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
