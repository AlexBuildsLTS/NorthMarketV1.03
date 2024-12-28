import type { Listing } from '../../types/listing';

export const home: Listing[] = [
  {
    id: 'h1',
    title: 'Modern Coffee Table',
    price: 249.99,
    description: 'Minimalist design with solid wood construction.',
    category: 'Home & Garden',
    images: ['https://images.unsplash.com/photo-1532372320978-9d7d56d5f66f?auto=format&fit=crop&q=80&w=800'],
    rating: 4.5,
    reviews: 178,
    seller: { id: '5', name: 'HomeStyle', email: 'sales@homestyle.com', rating: 4.8 }
  },
  {
    id: 'h2',
    title: 'Smart Garden System',
    price: 89.99,
    description: 'Automated plant watering with app control.',
    category: 'Home & Garden',
    images: ['https://images.unsplash.com/photo-1585400786137-a799c0e1b6cc?auto=format&fit=crop&q=80&w=800'],
    rating: 4.3,
    reviews: 145,
    seller: { id: '4', name: 'GreenThumb', email: 'help@greenthumb.com', rating: 4.6 }
  },
  {
    id: 'h3',
    title: 'Luxury Bedding Set',
    price: 199.99,
    description: 'Premium cotton bedding with elegant design.',
    category: 'Home & Garden',
    images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800'],
    rating: 4.7,
    reviews: 289,
    seller: { id: '5', name: 'HomeStyle', email: 'sales@homestyle.com', rating: 4.8 }
  }
];