import { useState, useEffect } from 'react';
import type { Listing } from '../types/listing';
import { mockListings } from '../data/mockListings';

interface UseListingsOptions {
  query?: string;
  category?: string;
}

export const useListings = ({ query, category }: UseListingsOptions = {}) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setIsLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Filter by category if provided
        let filtered = category
          ? mockListings.filter(l => l.category.toLowerCase() === category.toLowerCase())
          : mockListings;

        // Filter by search query if provided
        if (query) {
          const searchTerm = query.toLowerCase();
          filtered = filtered.filter(l =>
            l.title.toLowerCase().includes(searchTerm) ||
            l.description.toLowerCase().includes(searchTerm)
          );
        }

        setListings(filtered);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch listings');
      } finally {
        setIsLoading(false);
      }
    };

    fetchListings();
  }, [query, category]);

  return { listings, isLoading, error };
};