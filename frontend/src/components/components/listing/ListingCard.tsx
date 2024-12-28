import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { Button } from '../ui/Button';
import type { Listing } from '../../types/listing';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const { addToCart, getItemQuantity } = useCart();
  const quantity = getItemQuantity(listing.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking add to cart
    addToCart(listing.id);
  };

  return (
    <Link 
      to={`/listing/${listing.id}`}
      className="block bg-navy-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <img
          src={listing.images[0]}
          alt={listing.title}
          className="w-full h-48 object-cover"
        />
        {quantity > 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-sm">
            {quantity}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white hover:text-emerald-500 transition-colors">
          {listing.title}
        </h3>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-300">
            {listing.rating} ({listing.reviews} reviews)
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-emerald-500">
            ${listing.price}
          </span>
          <Button
            onClick={handleAddToCart}
            className="flex items-center space-x-1"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;