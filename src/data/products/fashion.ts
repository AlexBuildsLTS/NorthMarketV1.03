import type { Listing } from '../../types/listing';

export const fashion: Listing[] = [
  {
    id: 'f1',
    title: 'Premium Leather Jacket',
    price: 199.99,
    description: 'Genuine leather jacket with quilted lining.',
    category: 'Fashion',
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800'],
    rating: 4.6,
    reviews: 234,
    seller: { id: '3', name: 'FashionHub', email: 'support@fashionhub.com', rating: 4.7 }
  },
  {
    id: 'f2',
    title: 'Designer Watch Collection',
    price: 299.99,
    description: 'Luxury timepiece with premium materials.',
    category: 'Fashion',
    images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800'],
    rating: 4.8,
    reviews: 156,
    seller: { id: '3', name: 'FashionHub', email: 'support@fashionhub.com', rating: 4.7 }
  },
  {
    id: 'f3',
    title: 'Handcrafted Leather Bag',
    price: 159.99,
    description: 'Premium leather handbag with custom hardware.',
    category: 'Fashion',
    images: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800'],
    rating: 4.7,
    reviews: 198,
    seller: { id: '4', name: 'LuxuryGoods', email: 'info@luxurygoods.com', rating: 4.9 }
  }
];