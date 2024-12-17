import { Star } from "lucide-react";
import type { Product } from "../../types/product";

const trendingProducts: Product[] = [
  {
    id: "1",
    title: " Earbuds Pro",
    price: 129.99,
    description: "Premium  earbuds with noise cancellation",
    category: "Electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=300",
    rating: 4.8,
    reviews: 856,
    seller: { id: "1", name: "TechGear" },
  },
  {
    id: "2",
    title: "Smart Watch Series X",
    price: 299.99,
    description: "Advanced smartwatch with health tracking",
    category: "Electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=300",
    rating: 4.9,
    reviews: 1289,
    seller: { id: "2", name: "SmartLife" },
  },

  {
    id: "3",
    title: "Noise Cancelling Headphones",
    price: 499.99,
    description:
      " Incorporating AI into the audio field enhances the current capabilities",
    category: "Electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    reviews: 1892,
    seller: { id: "3", name: "Apple" },
  },
  {
    id: "4",
    title: "Leather backpack",
    price: 499.99,
    description:
      " Real leather backpack with water resistance and breathable lining",
    category: "Fashion",
    imageUrl:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    reviews: 1892,
    seller: { id: "3", name: "Hermes" },
  },
];

const TrendingItems = () => {
  return (
    <section className="mt-16">
      <h2 className="mb-8 text-2xl font-bold text-white">Trending Items</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {trendingProducts.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden transition-shadow rounded-lg bg-navy-800 hover:shadow-lg">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">
                {product.title}
              </h3>
              <div className="flex items-center mt-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-300">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-emerald-500">
                  ${product.price}
                </span>
                <button className="px-4 py-2 text-sm text-white rounded-lg bg-emerald-500 hover:bg-emerald-600">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingItems;
