import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { Problems } from "@/components/sections/Problems";
import { SolutionsOverview } from "@/components/sections/SolutionsOverview";
import { SegmentsTeaser } from "@/components/sections/SegmentsTeaser";
import { Methodology } from "@/components/sections/Methodology";
import { Differentiators } from "@/components/sections/Differentiators";
import { CasesPlaceholder } from "@/components/sections/CasesPlaceholder";
import { TestimonialsPlaceholder } from "@/components/sections/TestimonialsPlaceholder";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <Problems />
      <SolutionsOverview />
      <SegmentsTeaser />
      <Methodology />
      <Differentiators />
      <CasesPlaceholder />
      <TestimonialsPlaceholder />
      <AboutTeaser />
      <FinalCTA />
    </>
  );
}
