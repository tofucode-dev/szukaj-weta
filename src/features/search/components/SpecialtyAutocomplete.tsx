// src/features/search/components/SpecialtyAutocomplete.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Heart, ChevronDown } from 'lucide-react';
import { Label } from '@/shared/components/ui/label';
import { Input } from '@/shared/components/ui/input';
import { useAutocomplete } from '../hooks/useAutocomplete';
import { VETERINARY_SPECIALTIES } from '../constants/specialities';

interface SpecialtyAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
}

export function SpecialtyAutocomplete({ value, onChange }: SpecialtyAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { filteredOptions, handleInputChange, handleSelect } = useAutocomplete({
    options: [...VETERINARY_SPECIALTIES],
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
      <Label htmlFor="specialty" className="text-sm font-medium text-gray-700 mb-1 block">
        Specjalizacja
      </Label>
      <div className="relative">
        <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          id="specialty"
          type="text"
          placeholder="Kardiolog zwierzęcy"
          value={value}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-8 h-12"
        />
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />

        {isOpen && filteredOptions.length > 0 && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            {filteredOptions.map((specialty) => (
              <div
                key={specialty}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => handleSelect(specialty)}
              >
                {specialty}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
