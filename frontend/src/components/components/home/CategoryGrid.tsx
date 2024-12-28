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

const categories = [
  { icon: Laptop, name: 'Electronics', color: 'bg-blue-500', path: '/category/electronics' },
  { icon: Shirt, name: 'Fashion', color: 'bg-pink-500', path: '/category/fashion' },
  { icon: Home, name: 'Home & Garden', color: 'bg-green-500', path: '/category/home-garden' },
  { icon: BookOpen, name: 'Books', color: 'bg-yellow-500', path: '/category/books' },
  { icon: Dumbbell, name: 'Sports', color: 'bg-red-500', path: '/category/sports' },
  { icon: Car, name: 'Automotive', color: 'bg-purple-500', path: '/category/automotive' },
  { icon: Camera, name: 'Photography', color: 'bg-indigo-500', path: '/category/photography' },
  { icon: Gamepad, name: 'Gaming', color: 'bg-orange-500', path: '/category/gaming' },
  { icon: Music2, name: 'Music', color: 'bg-teal-500', path: '/category/music' },
  { icon: Watch, name: 'Watches', color: 'bg-cyan-500', path: '/category/watches' },
  { icon: Utensils, name: 'Food', color: 'bg-amber-500', path: '/category/food' },
  { icon: Palette, name: 'Art', color: 'bg-rose-500', path: '/category/art' }
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={category.path}
          className={`${category.color} p-6 rounded-lg hover:opacity-90 transition-opacity flex flex-col items-center justify-center gap-3`}
        >
          <category.icon className="w-8 h-8 text-white" />
          <span className="text-white font-medium">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;