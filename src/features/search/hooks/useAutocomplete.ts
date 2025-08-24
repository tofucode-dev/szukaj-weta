'use client';
import { ChangeEvent, useEffect, useState } from 'react';

interface UseAutocompleteProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  onToggle: (isOpen: boolean) => void;
}

export function useAutocomplete({ 
  options, 
  value, 
  onChange, 
  onToggle 
}: UseAutocompleteProps) {
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);

  // Filter options based on input
  useEffect(() => {
    if (value) {
      const filtered = options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(options);
    }
  }, [value]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    onToggle(true);
  };

  const handleSelect = (option: string) => {
    onChange(option);
    onToggle(false);
  };

  return {
    filteredOptions,
    handleInputChange,
    handleSelect
  };
}