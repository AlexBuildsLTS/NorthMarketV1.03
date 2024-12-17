import React, { createContext, useContext, useReducer, useCallback } from 'react';
import type { AuthState, LoginCredentials, RegisterData, User } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      // TODO: Implement API call
      const user: User = { id: '1', email: credentials.email, name: 'John Doe', isSeller: false };
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'AUTH_ERROR' });
      throw error;
    }
  }, []);

  const register = useCallback(async (data: RegisterData) => {
    try {
      // TODO: Implement API call
      const user: User = { id: '1', email: data.email, name: data.name, isSeller: data.isSeller };
      dispatch({ type: 'REGISTER_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'AUTH_ERROR' });
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: 'LOGOUT' });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

function authReducer(state: AuthState, action: any): AuthState {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case 'AUTH_ERROR':
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}