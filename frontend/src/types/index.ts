export interface User {
  id: number;
  email: string;
  username: string;
  profileName?: string;
  profileBio?: string;
  profileAvatar?: string;
  isSeller: boolean;
}

export interface Listing {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  condition: string;
  sellerId: number;
  status: 'available' | 'sold' | 'pending';
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}