export interface User {
  id: string;
  email: string;
  name: string;
  isSeller: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
  isSeller: boolean;
}