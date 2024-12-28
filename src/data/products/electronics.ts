import type { Listing } from '../../types/listing';

export const electronics: Listing[] = [
  {
    id: 'e1',
    title: 'Wireless Earbuds Pro',
    price: 129.99,
    description: 'Premium wireless earbuds with active noise cancellation.',
    category: 'Electronics',
    images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800'],
    rating: 4.8,
    reviews: 856,
    seller: { id: '1', name: 'TechGear', email: 'contact@techgear.com', rating: 4.9 }
  },
  {
    id: 'e2',
    title: 'Ultra HD Smart TV 55"',
    price: 699.99,
    description: 'Crystal clear 4K display with smart features.',
    category: 'Electronics',
    images: ['https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800'],
    rating: 4.7,
    reviews: 543,
    seller: { id: '1', name: 'TechGear', email: 'contact@techgear.com', rating: 4.9 }
  },
  {
    id: 'e3',
    title: 'Professional Camera Kit',
    price: 1299.99,
    description: 'Full-frame mirrorless camera with lens kit.',
    category: 'Electronics',
    images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800'],
    rating: 4.9,
    reviews: 328,
    seller: { id: '2', name: 'PhotoPro', email: 'sales@photopro.com', rating: 4.8 }
  }
];