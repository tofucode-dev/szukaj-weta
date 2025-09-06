// src/features/search/components/LocationAutocomplete.tsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { Label } from '@/shared/components/ui/label';
import { Input } from '@/shared/components/ui/input';
import { useAutocomplete } from '../hooks/useAutocomplete';
import { POLISH_CITIES } from '../constants/locations';

interface LocationAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
}

export function LocationAutocomplete({ value, onChange }: LocationAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { filteredOptions, handleInputChange, handleSelect } = useAutocomplete({
    options: [...POLISH_CITIES],
    value,
    onChange,
    onToggle: setIsOpen,
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex-1 relative" ref={ref}>
      <Label htmlFor="location" className="text-md text-foreground mb-1 font-semibold block">
      Miejscowość
      </Label>
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary" />
        <Input
          id="location"
          type="text"
          placeholder="Miejscowość..."
          value={value}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-8 h-12 bg-card border-none shadow-none font-semibold rounded-lg"
        />
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary" />

        {isOpen && filteredOptions.length > 0 && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            {filteredOptions.map((city) => (
              <div
                key={city}
                className="px-4 py-2 hover:bg-accent cursor-pointer text-sm font-semibold"
                onClick={() => handleSelect(city)}
              >
                {city}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
