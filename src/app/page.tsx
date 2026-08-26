import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ExperiencePreview } from "@/components/home/experience-preview";
import { TechStack } from "@/components/home/tech-stack";
import { WhatIBuild } from "@/components/home/what-i-build";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ExperiencePreview />
      <TechStack />
      <WhatIBuild />
    </>
  );
}
