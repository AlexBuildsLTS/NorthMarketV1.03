import { useState, useEffect } from 'react';
import api from '../services/api';
import { Listing } from '../types';

export const useListings = (sellerId?: number) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const url = sellerId ? `/api/listings/seller/${sellerId}` : '/api/listings';
        const response = await api.get(url);
        setListings(response.data);
      } catch (err) {
        setError('Failed to fetch listings');
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [sellerId]);

  return { listings, loading, error };
};