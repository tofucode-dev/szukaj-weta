// src/features/search/components/HeroSection.tsx
import React from 'react';
import { SearchForm } from './SearchForm';
import { PopularSearches } from './PopularSearches';

export function HeroSection() {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Znajdź najlepszego
            <span className="text-primary block">weterynarza specjalistę</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Kardiolog, dermatolog, neurolog - znajdź odpowiedniego specjalistę dla swojego pupila w
            kilka sekund
          </p>

          <SearchForm />
          <PopularSearches />
        </div>
      </div>
    </div>
  );
}
