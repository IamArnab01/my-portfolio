import { useEffect, useRef } from "react";

/**
 * Global backdrop for the whole page. Rendered once as an absolutely
 * positioned layer (inset-0) inside a relatively-positioned root, so it
 * naturally stretches to the full document height and every glass panel —
 * hero or footer — always has something colorful and textured to blur
 * against. Scoping this to just the hero was the bug in an earlier pass:
 * blurring flat black is indistinguishable from a plain card.
 */
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
      {/* four glow sources distributed down the full page, alternating
          teal/indigo and left/right — matches the approved canvas exactly */}
      <div
        className="absolute rounded-full"
        style={{
          top: "-8%",
          left: "-260px",
          width: 1100,
          height: 1100,
          background:
            "radial-gradient(circle, rgba(45,212,191,.30), rgba(45,212,191,0) 68%)",
          filter: "blur(70px)",
          animation: "drift1 26s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          top: "10%",
          right: "-320px",
          width: 1200,
          height: 1200,
          background:
            "radial-gradient(circle, rgba(59,76,203,.36), rgba(59,76,203,0) 68%)",
          filter: "blur(80px)",
          animation: "drift2 32s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          top: "49%",
          left: "-200px",
          width: 1000,
          height: 1000,
          background:
            "radial-gradient(circle, rgba(45,212,191,.20), rgba(45,212,191,0) 70%)",
          filter: "blur(80px)",
          animation: "drift2 30s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          top: "76%",
          right: "-260px",
          width: 1100,
          height: 1100,
          background:
            "radial-gradient(circle, rgba(59,76,203,.26), rgba(59,76,203,0) 70%)",
          filter: "blur(80px)",
          animation: "drift1 34s ease-in-out infinite",
        }}
      />

      {/* grid texture, brightened in a soft circle around the cursor */}
      <div
        ref={gridRef}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 20%), rgba(0,0,0,1), rgba(0,0,0,.4) 60%, rgba(0,0,0,.15))",
          WebkitMaskImage:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 20%), rgba(0,0,0,1), rgba(0,0,0,.4) 60%, rgba(0,0,0,.15))",
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
