import type { ElementType, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

// One shared width/padding for every section so left edges line up down the page.
export function Container<T extends ElementType = "div">({
  as,
  className,
  ...props
}: { as?: T } & ComponentPropsWithoutRef<T>) {
  // TS can't prove `props` matches whatever element `T` resolves to at each
  // call site — the public signature above is still fully typed for callers,
  // this `any` only turns off checking on the internal render line itself.
  const Tag = (as ?? "div") as ElementType<{ className?: string }>;
  return <Tag className={cn("mx-auto max-w-[1100px] px-6 md:px-10", className)} {...(props as object)} />;
}
