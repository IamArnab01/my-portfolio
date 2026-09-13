import { Mail, FileText } from "lucide-react";
import { contact } from "@/lib/content";
import { MagneticButton } from "@/components/MagneticButton";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 py-12 text-center md:py-20">
      <Container>
        <Reveal className="mx-auto max-w-[640px]">
          <Eyebrow>CONTACT</Eyebrow>
          <h2 className="text-[36px] font-semibold tracking-tight md:text-[56px]">{contact.heading}</h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[15.5px] leading-relaxed text-white/62 md:text-[18px]">
            {contact.subhead}
          </p>

          {/* Mobile: one row of icon-only actions so email/LinkedIn/résumé never wrap or stack. */}
          <div className="mt-9 flex items-center justify-center gap-3 sm:hidden">
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Email ${contact.email}`}
              className="flex h-13 w-13 items-center justify-center rounded-full bg-(--signal) text-(--signal-ink) shadow-[0_18px_50px_-18px_rgba(45,212,191,0.7)]"
            >
              <Mail size={20} />
            </a>
            <a
              href={contact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="glass-pill flex h-13 w-13 items-center justify-center rounded-full text-white/90"
            >
              <LinkedinIcon size={19} />
            </a>
            <a
              href={contact.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open résumé"
              className="glass-pill flex h-13 w-13 items-center justify-center rounded-full text-white/90"
            >
              <FileText size={19} />
            </a>
          </div>

          {/* sm and up: full text buttons, same links. */}
          <div className="hidden items-center justify-center gap-4 sm:mt-9 sm:flex">
            <MagneticButton href={`mailto:${contact.email}`} variant="primary">
              {contact.email}
            </MagneticButton>
            <MagneticButton href={contact.linkedin.href} variant="secondary" external>
              LinkedIn
            </MagneticButton>
          </div>

          <p className="mt-5 font-mono text-[13px] tracking-[0.08em] text-white/50">
            <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="hover:text-(--signal)">
              {contact.phone}
            </a>
          </p>

          <a
            href={contact.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 hidden font-mono text-[11px] tracking-[0.2em] text-white/45 hover:text-(--signal) sm:inline-block"
          >
            DOWNLOAD RÉSUMÉ
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
