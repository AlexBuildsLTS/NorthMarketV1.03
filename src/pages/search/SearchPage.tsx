import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useListings } from '../../hooks/useListings';
import ListingCard from '../../components/listing/ListingCard';
import { Loader } from 'lucide-react';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { listings, isLoading } = useListings({ query });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader className="w-8 h-8 animate-spin text-emerald-500" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white mb-4">
        Search Results for "{query}"
      </h1>
      {listings.length === 0 ? (
        <p className="text-gray-400">No results found for your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;