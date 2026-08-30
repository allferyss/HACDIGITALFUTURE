import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-blue-300",
        className
      )}
      {...props}
    />
  );
}
