import { electronics } from './electronics';
import { fashion } from './fashion';
import { home } from './home';
import { books } from './books';
import { sports } from './sports';

export const allProducts = [...electronics, ...fashion, ...home, ...books, ...sports];

export const getProductsByCategory = (category: string) => {
  const normalizedCategory = category.toLowerCase().replace('-', ' ');
  return allProducts.filter(product => 
    product.category.toLowerCase() === normalizedCategory
  );
};

export const getProductById = (id: string) => {
  return allProducts.find(product => product.id === id);
};