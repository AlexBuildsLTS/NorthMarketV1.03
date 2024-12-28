import type { Listing } from '../../types/listing';

export const sports: Listing[] = [
  {
    id: 's1',
    title: 'Professional Yoga Mat',
    price: 79.99,
    description: 'Premium non-slip yoga mat with carrying strap.',
    category: 'Sports',
    images: ['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=800'],
    rating: 4.8,
    reviews: 456,
    seller: { id: '7', name: 'SportLife', email: 'contact@sportlife.com', rating: 4.8 }
  },
  {
    id: 's2',
    title: 'Smart Fitness Watch',
    price: 199.99,
    description: 'Advanced fitness tracking with heart rate monitoring.',
    category: 'Sports',
    images: ['https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?auto=format&fit=crop&q=80&w=800'],
    rating: 4.6,
    reviews: 789,
    seller: { id: '7', name: 'SportLife', email: 'contact@sportlife.com', rating: 4.8 }
  }
];