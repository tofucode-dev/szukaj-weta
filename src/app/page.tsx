import React from "react";
import { HeroSection } from "@/features/search/components/HeroSection";
import { Header } from "@/shared/components/layout/Header";
import { RecomendedSection } from "@/features/search/components/RecomendedSection";
import { Footer } from "@/shared/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full p-4 flex flex-col">
      <Header />
      <HeroSection />
      <RecomendedSection />
      <Footer />
      {/*  <StatsSection />
      <HowItWorksSection /> */}
    </div>
  );
}
