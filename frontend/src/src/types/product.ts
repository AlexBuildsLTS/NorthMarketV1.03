export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  seller: {
    id: string;
    name: string;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
}