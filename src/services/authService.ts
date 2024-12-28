import axios from 'axios';
import type { LoginCredentials, RegisterData, User } from '../types/auth';

const API_URL = 'http://localhost:8080/api';

export const authService = {
  async login(credentials: LoginCredentials): Promise<User> {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    return user;
  },

  async register(data: RegisterData): Promise<User> {
    const response = await axios.post(`${API_URL}/auth/register`, data);
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    return user;
  },

  logout() {
    localStorage.removeItem('token');
  },

  getToken() {
    return localStorage.getItem('token');
  }
};