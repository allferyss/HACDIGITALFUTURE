"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Signature HAC motif: a thin orbit arc echoing the logo's circular swoosh,
 * drawn in on scroll. Used between sections instead of a generic divider line.
 */
export function ArcDivider({ className, flip = false }: { className?: string; flip?: boolean }) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const el = pathRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("in-view");
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn("pointer-events-none mx-auto w-full max-w-4xl", className)}>
      <svg
        viewBox="0 0 800 60"
        className={cn("w-full", flip && "-scale-y-100")}
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          d="M20,50 C 250,-10 550,-10 780,50"
          fill="none"
          stroke="url(#arcGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="hac-arc"
        />
        <defs>
          <linearGradient id="arcGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3D6BFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#6E96FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3D6BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
