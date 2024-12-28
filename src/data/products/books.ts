import type { Listing } from '../../types/listing';

export const books: Listing[] = [
  {
    id: 'b1',
    title: 'The Art of Programming',
    price: 49.99,
    description: 'Comprehensive guide to modern software development.',
    category: 'Books',
    images: ['https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800'],
    rating: 4.9,
    reviews: 345,
    seller: { id: '6', name: 'BookWorld', email: 'info@bookworld.com', rating: 4.9 }
  },
  {
    id: 'b2',
    title: 'Modern Photography Guide',
    price: 34.99,
    description: 'Master the art of digital photography.',
    category: 'Books',
    images: ['https://images.unsplash.com/photo-1476081718509-d5d0b661a376?auto=format&fit=crop&q=80&w=800'],
    rating: 4.7,
    reviews: 234,
    seller: { id: '6', name: 'BookWorld', email: 'info@bookworld.com', rating: 4.9 }
  }
];