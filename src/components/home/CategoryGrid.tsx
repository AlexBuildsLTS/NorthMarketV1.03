import React from 'react';
import { Link } from 'react-router-dom';
import {
  Laptop,
  Shirt,
  BookOpen,
  Home,
  Dumbbell,
  Car,
  Camera,
  Gamepad,
  Music2,
  Watch,
  Utensils,
  Palette
} from 'lucide-react';
import type { Category } from '../../types/product';

const categories: Category[] = [
  { id: '1', name: 'Electronics', icon: 'Laptop', slug: 'electronics' },
  { id: '2', name: 'Fashion', icon: 'Shirt', slug: 'fashion' },
  { id: '3', name: 'Books', icon: 'BookOpen', slug: 'books' },
  { id: '4', name: 'Home & Garden', icon: 'Home', slug: 'home-garden' },
  { id: '5', name: 'Sports', icon: 'Dumbbell', slug: 'sports' },
  { id: '6', name: 'Automotive', icon: 'Car', slug: 'automotive' },
  { id: '7', name: 'Photography', icon: 'Camera', slug: 'photography' },
  { id: '8', name: 'Gaming', icon: 'Gamepad', slug: 'gaming' },
  { id: '9', name: 'Music', icon: 'Music2', slug: 'music' },
  { id: '10', name: 'Watches', icon: 'Watch', slug: 'watches' },
  { id: '11', name: 'Food', icon: 'Utensils', slug: 'food' },
  { id: '12', name: 'Art', icon: 'Palette', slug: 'art' },
];

const iconComponents: { [key: string]: React.ComponentType } = {
  Laptop,
  Shirt,
  BookOpen,
  Home,
  Dumbbell,
  Car,
  Camera,
  Gamepad,
  Music2,
  Watch,
  Utensils,
  Palette
};

const CategoryGrid = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-white mb-8">Browse Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => {
          const IconComponent = iconComponents[category.icon];
          return (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="bg-navy-800 p-6 rounded-lg hover:bg-navy-700 transition-colors flex flex-col items-center justify-center gap-3"
            >
              <IconComponent className="w-8 h-8 text-emerald-500" />
              <span className="text-white font-medium">{category.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryGrid;