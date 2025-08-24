// src/shared/components/layout/Header.tsx
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/ui/button';

export function Header() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">SzukajWeta.pl</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Jak to działa
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Dla weterynarzy
            </a>
            <Button>Zaloguj się</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
