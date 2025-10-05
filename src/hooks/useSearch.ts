import { useState, useMemo } from 'react';
import { Region } from '../types';
import { mockRegions } from '../data/mockRegions';

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRegions = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase();
    return mockRegions.filter(
      (region) =>
        region.name.toLowerCase().includes(query) ||
        region.country.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredRegions,
    allRegions: mockRegions,
  };
}
