import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const trendingProducts = [
  {
    id: '1',
    title: 'Wireless Earbuds Pro',
    price: 129.99,
    rating: 4.8,
    reviews: 856,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: '2',
    title: 'Smart Watch Series X',
    price: 299.99,
    rating: 4.9,
    reviews: 1289,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: '3',
    title: 'Premium Leather Backpack',
    price: 89.99,
    rating: 4.7,
    reviews: 543,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: '4',
    title: 'Noise-Canceling Headphones',
    price: 199.99,
    rating: 4.9,
    reviews: 782,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300'
  }
];

const TrendingItems = () => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {trendingProducts.map((product) => (
        <div key={product.id} className="bg-navy-800 rounded-lg overflow-hidden">
          <Link to={`/listing/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
            />
          </Link>
          <div className="p-4">
            <Link 
              to={`/listing/${product.id}`}
              className="text-lg font-semibold text-white hover:text-emerald-500 transition-colors"
            >
              {product.title}
            </Link>
            <div className="flex items-center mt-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-300">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-bold text-emerald-500">
                ${product.price}
              </span>
              <button
                onClick={() => addToCart(product.id)}
                className="flex items-center space-x-1 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingItems;