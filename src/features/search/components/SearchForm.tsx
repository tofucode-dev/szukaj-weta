"use client";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Search } from "lucide-react";
import { useSearch } from "../hooks/useSearch";
import { LocationAutocomplete } from "./LocationAutocomplete";
import { SpecialtyAutocomplete } from "./SpecialtyAutocomplete";

export function SearchForm() {
  const { specialty, location, setSpecialty, setLocation, handleSearch } =
    useSearch();

  return (
    <Card className="shadow-none border-none bg-accent rounded-xl z-10">
      <CardContent className="w-3/4 mx-auto">
        <div className="flex flex-row gap-4">
          <SpecialtyAutocomplete value={specialty} onChange={setSpecialty} />

          <LocationAutocomplete value={location} onChange={setLocation} />

          <Button
            onClick={handleSearch}
            className="h-12 px-8 font-semibold whitespace-nowrap mt-auto rounded-lg border-none"
            variant="default"
          >
            Wyszukaj specjalistę
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
