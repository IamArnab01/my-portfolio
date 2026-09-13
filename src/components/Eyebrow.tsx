import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 font-mono text-[11px] tracking-[0.2em] text-(--signal)">{children}</div>
  );
}
