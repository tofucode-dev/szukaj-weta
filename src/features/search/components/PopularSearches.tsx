// src/features/search/components/PopularSearches.tsx
'use client';
import React from 'react';
import { Badge } from '@/shared/components/ui/badge';
import { POPULAR_SEARCHES } from '../constants/searchConfig';

export function PopularSearches() {
  const handlePopularSearch = (searchTerm: string) => {
    console.log('Popular search clicked:', searchTerm);
    // Here you would trigger a search with the popular term
  };

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3 items-center">
      <span className="text-muted-foreground">Popularne wyszukiwania:</span>
      {POPULAR_SEARCHES.map((term) => (
        <Badge
          key={term}
          variant="secondary"
          className="cursor-pointer hover:bg-secondary/80 transition-colors"
          onClick={() => handlePopularSearch(term)}
        >
          {term}
        </Badge>
      ))}
    </div>
  );
}
