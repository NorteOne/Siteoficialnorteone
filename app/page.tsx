import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { Problems } from "@/components/sections/Problems";
import { SolutionsOverview } from "@/components/sections/SolutionsOverview";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

const homeTitle = "Norte One — Soluções para empresas funcionarem melhor";
const homeDescription =
  "A Norte One entende processos, identifica gargalos e constrói soluções para ajudar empresas a operar melhor, usando tecnologia quando ela realmente faz sentido.";

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
      <Positioning />
      <Problems />
      <SolutionsOverview />
      <AboutTeaser />
      <FinalCTA />
    </>
  );
}
