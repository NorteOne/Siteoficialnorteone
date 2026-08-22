import type { LucideIcon } from "lucide-react";

export type Solution = {
  slug: string;
  code: string;
  name: string;
  shortDescription: string;
  description: string;
  problem: string;
  benefits: string[];
  forWhom: string;
  icon: LucideIcon;
};

export type Segment = {
  name: string;
  description: string;
  tier: "core" | "emerging";
};

export type MethodologyStep = {
  step: string;
  title: string;
  description: string;
};

export type Differentiator = {
  title: string;
  description: string;
};

export type ProblemStatement = {
  text: string;
};

export type CaseStudy = {
  company: string;
  segment: string;
  scenario: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  isPlaceholder: boolean;
};

export type ContactFormData = {
  name: string;
  company: string;
  whatsapp: string;
  email: string;
  segment: string;
  challenge: string;
  consent: boolean;
  website?: string; // honeypot
};
