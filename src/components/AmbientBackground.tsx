import { useEffect, useRef } from "react";

/**
 * Global backdrop for the whole page. Rendered once as an absolutely
 * positioned layer (inset-0) inside a relatively-positioned root, so it
 * naturally stretches to the full document height and every glass panel —
 * hero or footer — always has something colorful and textured to blur
 * against. Scoping this to just the hero was the bug in an earlier pass:
 * blurring flat black is indistinguishable from a plain card.
 *
 * Six blobs (not four) spread evenly down the page — four left noticeable
 * dark gaps once real content pushed the page past ~4000px tall.
 */
const BLOBS = [
  { top: "-8%", side: "left" as const, color: "139,92,246", opacity: 0.3, size: 1100, blur: 70, anim: "drift1 26s" },
  { top: "12%", side: "right" as const, color: "99,102,241", opacity: 0.36, size: 1200, blur: 80, anim: "drift2 32s" },
  { top: "32%", side: "left" as const, color: "244,114,182", opacity: 0.22, size: 1000, blur: 80, anim: "drift2 30s" },
  { top: "52%", side: "right" as const, color: "99,102,241", opacity: 0.28, size: 1100, blur: 80, anim: "drift1 34s" },
  { top: "72%", side: "left" as const, color: "139,92,246", opacity: 0.22, size: 1000, blur: 80, anim: "drift1 29s" },
  { top: "90%", side: "right" as const, color: "244,114,182", opacity: 0.26, size: 1100, blur: 80, anim: "drift2 33s" },
];

export function AmbientBackground() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const grid = gridRef.current;
    if (!grid) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        grid.style.setProperty("--mx", `${e.clientX}px`);
        grid.style.setProperty("--my", `${e.clientY}px`);
        raf = 0;
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: blob.top,
            [blob.side]: -(blob.size * 0.24),
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, rgba(${blob.color},${blob.opacity}), rgba(${blob.color},0) 68%)`,
            filter: `blur(${blob.blur}px)`,
            animation: `${blob.anim} ease-in-out infinite`,
          }}
        />
      ))}

      {/* grid texture, brightened further in a soft circle around the cursor —
          but visible everywhere, not just near it */}
      <div
        ref={gridRef}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(500px circle at var(--mx, 50%) var(--my, 20%), rgba(0,0,0,1), rgba(0,0,0,.7) 60%, rgba(0,0,0,.45))",
          WebkitMaskImage:
            "radial-gradient(500px circle at var(--mx, 50%) var(--my, 20%), rgba(0,0,0,1), rgba(0,0,0,.7) 60%, rgba(0,0,0,.45))",
        }}
      />

      {/* film grain */}
      <div
        className="absolute inset-0"
        style={{
          mixBlendMode: "overlay",
          opacity: 0.07,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
