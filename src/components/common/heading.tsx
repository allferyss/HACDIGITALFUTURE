import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/fade-in";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <FadeIn className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-mist">{description}</p>}
    </FadeIn>
  );
}
