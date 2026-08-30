import { siteConfig } from "@/config/site";
import { Counter } from "@/components/animations/counter";
import { StaggerGroup, StaggerItem } from "@/components/animations/fade-in";

export function Stats() {
  return (
    <section className="section-pad">
      <div className="container">
        <StaggerGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {siteConfig.stats.map((s) => (
            <StaggerItem key={s.label} className="border-l border-white/10 pl-5">
              <p className="font-display text-4xl font-medium text-white sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-mist">{s.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
