import { contact } from "@/lib/content";
import { MagneticButton } from "@/components/MagneticButton";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[900px] px-6 py-24 text-center md:px-0 md:py-40">
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

      <a
        href={contact.resumeHref}
        className="mt-10 inline-block font-mono text-[11px] tracking-[0.2em] text-white/45 hover:text-(--signal)"
      >
        DOWNLOAD RÉSUMÉ
      </a>
    </section>
  );
}
