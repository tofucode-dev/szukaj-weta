export const POPULAR_SEARCHES = [
  'Kardiolog Warszawa',
  'Dermatolog Kraków', 
  'Neurolog Gdańsk'
] as const;

export const SEARCH_CONFIG = {
  maxResults: 20,
  debounceMs: 300,
  maxDistance: 50 // km
} as const;