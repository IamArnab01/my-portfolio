import { nav } from "@/lib/content";

export function DesktopNav() {
  return (
    <div className="fixed inset-x-0 top-4 z-30 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full px-4 py-3 pl-6 glass-pill md:px-6">
        <span className="text-[17px] font-semibold tracking-tight">{nav.brand}</span>

        <div className="flex items-center gap-8 font-mono text-[11px] tracking-[0.2em] text-white/55">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="text-white hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href={nav.contact.href}
            className="rounded-full border border-(--signal)/35 bg-(--signal)/8 px-4 py-2 text-(--signal) hover:text-(--signal-bright)"
          >
            {nav.contact.label}
          </a>
        </div>
      </nav>
    </div>
  );
}
