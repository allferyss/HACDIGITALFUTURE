import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center gap-12 animate-marquee",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex min-w-full shrink-0 items-center gap-12 animate-marquee",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
