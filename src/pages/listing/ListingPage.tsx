import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, MessageCircle } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import ImageGallery from '../../components/listing/ImageGallery';
import ListingComments from '../../components/listing/ListingComments';
import { Button } from '../../components/ui/Button';
import { useListing } from '../../hooks/useListing';

const ListingPage = () => {
  const { id } = useParams<{ id: string }>();
  const { listing, isLoading } = useListing(id!);
  const { addToCart, getItemQuantity } = useCart();
  const quantity = id ? getItemQuantity(id) : 0;

  if (isLoading || !listing) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-[500px] bg-navy-800 rounded-lg mb-8"></div>
          <div className="h-8 bg-navy-800 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-navy-800 rounded w-1/4 mb-8"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ImageGallery images={listing.images} />
        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-white">{listing.title}</h1>
            <div className="flex items-center mt-2 space-x-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-300">
                  {listing.rating} ({listing.reviews} reviews)
                </span>
              </div>
              <button className="flex items-center text-gray-400 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span className="ml-1">Add to Wishlist</span>
              </button>
            </div>
          </div>

          <div className="text-2xl font-bold text-emerald-500">
            ${listing.price}
          </div>

          <p className="text-gray-300">{listing.description}</p>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => addToCart(listing.id)}
              className="flex-1 py-3 flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
              {quantity > 0 && (
                <span className="ml-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-sm">
                  {quantity}
                </span>
              )}
            </Button>
            <Button
              variant="secondary"
              className="py-3 px-4"
              onClick={() => window.location.href = `mailto:${listing.seller.email}`}
            >
              <MessageCircle className="w-5 h-5" />
            </Button>
          </div>

          <div className="border-t border-navy-700 pt-6">
            <h2 className="text-xl font-semibold text-white mb-4">Seller Information</h2>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="text-lg font-bold text-white">
                  {listing.seller.name[0]}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">
                  {listing.seller.name}
                </h3>
                <div className="flex items-center text-gray-400">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1">{listing.seller.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <ListingComments listingId={listing.id} />
      </div>
    </div>
  );
};

export default ListingPage;