'use client';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Search } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { LocationAutocomplete } from './LocationAutocomplete';
import { SpecialtyAutocomplete } from './SpecialtyAutocomplete';

export function SearchForm() {
  const { specialty, location, setSpecialty, setLocation, handleSearch } = useSearch();

  return (
    <Card className="max-w-4xl mx-auto shadow-xl">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <SpecialtyAutocomplete value={specialty} onChange={setSpecialty} />

          <LocationAutocomplete value={location} onChange={setLocation} />

          <Button onClick={handleSearch} className="h-12 px-8 font-semibold whitespace-nowrap">
            <Search className="h-4 w-4 mr-2" />
            Szukaj
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
