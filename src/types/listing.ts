export interface Listing {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  rating: number;
  reviews: number;
  seller: {
    id: string;
    name: string;
    email: string;
    rating: number;
  };
}