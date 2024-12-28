import type { Listing } from '../types/listing';

export const mockListings: Listing[] = [
  // Electronics
  {
    id: '1',
    title: 'Wireless Earbuds Pro',
    price: 129.99,
    description: 'Premium wireless earbuds with active noise cancellation, transparency mode, and 24-hour battery life.',
    category: 'Electronics',
    images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800'],
    rating: 4.8,
    reviews: 856,
    seller: { id: '1', name: 'TechGear', email: 'contact@techgear.com', rating: 4.9 }
  },
  {
    id: '2',
    title: 'Smart Watch Series X',
    price: 299.99,
    description: 'Advanced smartwatch with health tracking, ECG, and cellular connectivity.',
    category: 'Electronics',
    images: ['https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800'],
    rating: 4.9,
    reviews: 1289,
    seller: { id: '2', name: 'SmartLife', email: 'sales@smartlife.com', rating: 4.8 }
  },
  {
    id: '3',
    title: '4K Ultra HD Smart TV',
    price: 799.99,
    description: '55-inch 4K Smart TV with HDR and built-in streaming apps.',
    category: 'Electronics',
    images: ['https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800'],
    rating: 4.7,
    reviews: 543,
    seller: { id: '1', name: 'TechGear', email: 'contact@techgear.com', rating: 4.9 }
  },

  // Fashion
  {
    id: '4',
    title: 'Premium Leather Jacket',
    price: 199.99,
    description: 'Genuine leather jacket with quilted lining and metal hardware.',
    category: 'Fashion',
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800'],
    rating: 4.6,
    reviews: 234,
    seller: { id: '3', name: 'FashionHub', email: 'support@fashionhub.com', rating: 4.7 }
  },
  {
    id: '5',
    title: 'Designer Sunglasses',
    price: 159.99,
    description: 'UV-protected polarized sunglasses with premium frame.',
    category: 'Fashion',
    images: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800'],
    rating: 4.8,
    reviews: 456,
    seller: { id: '3', name: 'FashionHub', email: 'support@fashionhub.com', rating: 4.7 }
  },

  // Home & Garden
  {
    id: '6',
    title: 'Smart Garden System',
    price: 89.99,
    description: 'Automated plant watering system with app control and sensors.',
    category: 'Home & Garden',
    images: ['https://images.unsplash.com/photo-1585400786137-a799c0e1b6cc?auto=format&fit=crop&q=80&w=800'],
    rating: 4.5,
    reviews: 178,
    seller: { id: '4', name: 'GreenThumb', email: 'help@greenthumb.com', rating: 4.6 }
  },
  {
    id: '7',
    title: 'Ergonomic Office Chair',
    price: 249.99,
    description: 'Premium office chair with lumbar support and adjustable features.',
    category: 'Home & Garden',
    images: ['https://images.unsplash.com/photo-1589384267710-7a25bc24ab28?auto=format&fit=crop&q=80&w=800'],
    rating: 4.7,
    reviews: 892,
    seller: { id: '5', name: 'HomeStyle', email: 'sales@homestyle.com', rating: 4.8 }
  },

  // Books
  {
    id: '8',
    title: 'The Art of Programming',
    price: 49.99,
    description: 'Comprehensive guide to modern software development practices.',
    category: 'Books',
    images: ['https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800'],
    rating: 4.9,
    reviews: 345,
    seller: { id: '6', name: 'BookWorld', email: 'info@bookworld.com', rating: 4.9 }
  },
  {
    id: '9',
    title: 'Cooking Masterclass',
    price: 34.99,
    description: 'Professional cooking techniques and recipes from world-renowned chefs.',
    category: 'Books',
    images: ['https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=800'],
    rating: 4.8,
    reviews: 567,
    seller: { id: '6', name: 'BookWorld', email: 'info@bookworld.com', rating: 4.9 }
  }
];