import React from 'react';
import { HeroSection } from '@/features/search/components/HeroSection';
import { Header } from '@/shared/components/layout/Header';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <HeroSection />
     {/*  <StatsSection />
      <HowItWorksSection /> */}
    </div>
  );
}
