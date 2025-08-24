'use client';
import { useState } from 'react';

export function useSearch() {
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', { specialty, location });
    // Here you would:
    // 1. Validate the search params
    // 2. Navigate to search results page
    // 3. Or trigger the search API call
  };

  return {
    specialty,
    location,
    setSpecialty,
    setLocation,
    handleSearch
  };
}