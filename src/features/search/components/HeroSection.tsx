// src/features/search/components/HeroSection.tsx
import React from "react";
import { SearchForm } from "./SearchForm";
import { PopularSearches } from "./PopularSearches";
import { Card, CardContent } from "@/shared/components/ui/card";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative py-4">
      <Card className="">
        <CardContent className="relative">
          <div className="text-left">
            <div className="flex gap-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 z-1000 basis-2/3">
                Znajdź najlepszego
                <span className="text-primary block">
                  weterynarza specjalistę
                </span>
              </h1>
              <div className="relative flex basis-1/3">
                <Image
                  src="/dogo.png"
                  alt="Hero Image"
                  width={200}
                  height={200}
                  className="absolute right-10 bottom-0"
                />
                <Image
                  src="/cato.png"
                  alt="Hero Image"
                  width={150}
                  height={150}
                  className="absolute right-40 bottom-0"
                />
              </div>
            </div>

            <SearchForm />
            <PopularSearches />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
