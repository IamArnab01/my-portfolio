import type { CSSProperties } from "react";
import { skills } from "@/lib/content";
import { TECH_ICONS } from "@/lib/tech-icons";

const AURORA_DOTS = ["#f472b6", "#8b5cf6", "#6366f1", "#a78bfa"];

// Innermost ring holds the fewest items (tight spacing reads fine at a small
// radius); outermost holds the most, where there's circumference to spare.
// Computed off `skills.length` instead of a fixed-size array so a new
// category slots in without hand-tuning a ring table.
const rings = [...skills].sort((a, b) => a.items.length - b.items.length);
const RING_COUNT = rings.length;
const MAX_INSET = 42; // %, keeps the innermost ring clear of the center hub

const ringConfigs = rings.map((_, j) => ({
  inset: `${(MAX_INSET * (RING_COUNT - 1 - j)) / (RING_COUNT - 1)}%`,
  duration: `${28 + j * 8}s`,
  dir: (j % 2 === 0 ? "cw" : "ccw") as "cw" | "ccw",
  dot: AURORA_DOTS[j % AURORA_DOTS.length],
}));

export function TechOrbit() {
  return (
    <div>
      <div className="relative mx-auto aspect-square w-full max-w-[820px]">
        <div className="glass-pill absolute top-1/2 left-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
          <span className="font-mono text-[13px] tracking-[0.1em] text-(--signal-bright)">AD</span>
        </div>

        {rings.map((group, ringIndex) => {
          const config = ringConfigs[ringIndex];
          const n = group.items.length;
          return (
            <div
              key={group.title}
              className="orbit-ring absolute rounded-full border border-white/10"
              data-dir={config.dir}
              style={{ inset: config.inset, "--orbit-duration": config.duration } as CSSProperties}
            >
              {group.items.map((item, i) => {
                const angle = (360 / n) * i - 90;
                const rad = (angle * Math.PI) / 180;
                const left = 50 + 50 * Math.cos(rad);
                const top = 50 + 50 * Math.sin(rad);
                const entry = TECH_ICONS[item];
                const Icon = entry?.Icon;
                return (
                  <div
                    key={item}
                    className="absolute"
                    style={{ left: `${left}%`, top: `${top}%`, transform: "translate(-50%, -50%)" }}
                  >
                    <div className="orbit-counter" data-dir={config.dir}>
                      <div className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-(--signal)/50 hover:bg-white/10">
                        {Icon ? (
                          <Icon size={16} color={entry.color} />
                        ) : (
                          <span className="text-[9px] text-white/75">{item.slice(0, 2)}</span>
                        )}
                        <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 rounded-md bg-black/85 px-2 py-1 font-mono text-[10px] whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">
                          {item}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[11px] tracking-wide text-white/45">
        {rings.map((group, i) => (
          <span key={group.title} className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ringConfigs[i].dot }} />
            {group.title}
          </span>
        ))}
      </div>
    </div>
  );
}
