import { useMediaQuery } from "@/lib/use-media-query";
import { DesktopNav } from "@/components/nav/DesktopNav";
import { MobileNav } from "@/components/nav/MobileNav";

// Two distinct components, not one styled two ways — the mobile bar sits in
// normal document flow (scrolls away) and the desktop pill floats fixed.
// Different enough in structure/positioning that a single component toggling
// classes at a breakpoint kept producing sizing/spacing edge cases.
export function Nav() {
  const isDesktop = useMediaQuery("(min-width: 640px)"); // matches Tailwind's sm breakpoint
  return isDesktop ? <DesktopNav /> : <MobileNav />;
}
