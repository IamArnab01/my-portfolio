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

// In normal document flow (not fixed) — scrolls away with the page, unlike
// the desktop pill, since a fixed bar reads as ambiguous on a small screen.
// A flat edge-to-edge bar (not the floating glass-pill card) — a card border
// wrapping all four sides looked odd once flush against the viewport edges;
// a bottom border reads as a header instead.
export function MobileNav() {
  return (
    <nav className="relative z-30 flex items-center justify-between gap-4 border-b border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] px-5 py-4 backdrop-blur-xl">
      <span className="text-[17px] font-semibold tracking-tight">{nav.brand}</span>

      <Sheet>
        <SheetTrigger className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 hover:text-white">
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
  );
}
