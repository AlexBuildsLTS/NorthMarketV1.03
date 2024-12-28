import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { Button } from '../ui/Button';
import type { Product } from '../../types/product';

const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Wireless Earbuds Pro',
    price: 129.99,
    description: 'Premium wireless earbuds with noise cancellation',
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=300',
    rating: 4.8,
    reviews: 856,
    seller: { id: '1', name: 'TechGear' }
  },
  // Add more mock products...
];

const ProductList = () => {
  return (
    <div className="bg-navy-800 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-700">
            {mockProducts.map((product) => (
              <tr key={product.id} className="hover:bg-navy-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="h-10 w-10 rounded-lg object-cover"
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-white">
                        {product.title}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-white">${product.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-navy-600 text-white">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {product.rating} ({product.reviews} reviews)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <Button variant="secondary" className="p-2">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="secondary" className="p-2 hover:bg-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;