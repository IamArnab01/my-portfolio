import { Menu } from "lucide-react";
import { nav } from "@/lib/content";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

export function Nav() {
  return (
    <div className="relative z-30 mx-4 mt-4 mb-6 sm:fixed sm:inset-x-0 sm:top-4 sm:mx-0 sm:mb-0 sm:px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full px-4 py-3 pl-6 glass-pill md:px-6">
        <span className="text-[17px] font-semibold tracking-tight">{nav.brand}</span>

        <div className="hidden items-center gap-8 font-mono text-[11px] tracking-[0.2em] text-white/55 sm:flex">
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

        <Sheet>
          <SheetTrigger className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 hover:text-white sm:hidden">
            <Menu size={20} />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-l border-white/10 bg-[#0b0d11]/98 text-white backdrop-blur-xl"
          >
            <SheetHeader>
              <SheetTitle className="text-white">{nav.brand}</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4 pb-6">
              {nav.links.map((link) => (
                <SheetClose key={link.href} asChild>
                  <a
                    href={link.href}
                    className="rounded-lg px-3 py-3 font-mono text-[13px] tracking-[0.14em] text-white/75 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <a
                  href={nav.contact.href}
                  className="mt-2 rounded-lg border border-(--signal)/35 bg-(--signal)/8 px-3 py-3 text-center font-mono text-[13px] tracking-[0.14em] text-(--signal)"
                >
                  {nav.contact.label}
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
