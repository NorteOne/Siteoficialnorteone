import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { Problems } from "@/components/sections/Problems";
import { SolutionsOverview } from "@/components/sections/SolutionsOverview";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

const homeTitle = "Norte One — Software, automação e eficiência operacional";
const homeDescription =
  "Identifique gargalos e crie capacidade de crescimento com a Norte One. Visão de negócio, software sob medida, automação e integrações para melhorar sua operação.";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: homeTitle,
    description: homeDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <SolutionsOverview />
      <Positioning />
      <AboutTeaser />
      <FinalCTA />
    </>
  );
}
