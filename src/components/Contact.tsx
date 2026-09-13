import { contact } from "@/lib/content";
import { MagneticButton } from "@/components/MagneticButton";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 py-16 text-center md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-[640px]">
          <Eyebrow>CONTACT</Eyebrow>
          <h2 className="text-[36px] font-semibold tracking-tight md:text-[56px]">{contact.heading}</h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[15.5px] leading-relaxed text-white/62 md:text-[18px]">
            {contact.subhead}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <MagneticButton href={`mailto:${contact.email}`} variant="primary">
              {contact.email}
            </MagneticButton>
            <MagneticButton href={contact.linkedin.href} variant="secondary">
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
            download
            className="mt-10 inline-block font-mono text-[11px] tracking-[0.2em] text-white/45 hover:text-(--signal)"
          >
            DOWNLOAD RÉSUMÉ
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
