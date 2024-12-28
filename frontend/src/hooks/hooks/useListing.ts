import { useState, useEffect } from 'react';
import type { Listing } from '../types/listing';
import { mockListings } from '../data/mockListings';

export const useListing = (id: string) => {
  const [listing, setListing] = useState<Listing | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setIsLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const found = mockListings.find(l => l.id === id);
        if (!found) {
          throw new Error('Listing not found');
        }
        
        setListing(found);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch listing');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchListing();
    }
  }, [id]);

  return { listing, isLoading, error };
};