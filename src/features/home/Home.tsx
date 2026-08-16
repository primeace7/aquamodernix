import { Hero } from "@/features/home/components/Hero";
import { HookSection } from "@/features/home/components/HookSection";
import { ServicesOverview } from "@/features/home/components/ServicesOverview";
import { CaseStudies } from "@/features/home/components/CaseStudies";
import { CtaSection } from "@/features/home/components/CtaSection";

export function Home() {
  return (
    <>
      <Hero />
      <HookSection />
      <ServicesOverview />
      <CaseStudies />
      <CtaSection />
    </>
  );
}
