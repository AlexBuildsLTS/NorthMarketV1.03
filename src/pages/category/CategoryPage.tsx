import React from 'react';
import { useParams } from 'react-router-dom';
import ListingCard from '../../components/listing/ListingCard';
import { allProducts } from '../../data/products';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const products = category 
    ? allProducts.filter(p => p.category.toLowerCase() === category.toLowerCase().replace('-', ' '))
    : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white mb-8 capitalize">
        {category?.replace('-', ' ')}
      </h1>
      
      {products.length === 0 ? (
        <p className="text-gray-400">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ListingCard key={product.id} listing={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;