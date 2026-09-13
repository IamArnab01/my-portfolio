import type { ElementType, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

// One shared width/padding for every section so left edges line up down the page.
export function Container<T extends ElementType = "div">({
  as,
  className,
  ...props
}: { as?: T } & ComponentPropsWithoutRef<T>) {
  const Tag = as ?? "div";
  return <Tag className={cn("mx-auto max-w-[1100px] px-6 md:px-10", className)} {...props} />;
}
