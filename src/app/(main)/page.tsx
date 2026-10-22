import { Hero } from "@/components/sections/home/hero";
import { Trusted } from "@/components/sections/home/trusted";
import { Stats } from "@/components/sections/home/stats";
import { WhyUs } from "@/components/sections/home/why-us";
import { ServicesGrid } from "@/components/sections/home/services-grid";
import { ToolsShowcase } from "@/components/sections/home/tools-showcase";
import { Process } from "@/components/sections/home/process";
import { Portfolio } from "@/components/sections/home/portfolio";
import { Testimonials } from "@/components/sections/home/testimonials";
import { Faq } from "@/components/sections/home/faq";
import { LatestArticles } from "@/components/sections/home/latest-articles";
import { Cta } from "@/components/sections/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trusted />
      <Stats />
      <WhyUs />
      <ServicesGrid />
      <ToolsShowcase />
      <Process />
      <Portfolio />
      <Testimonials />
      <Faq />
      <LatestArticles />
      <Cta />
    </>
  );
}
