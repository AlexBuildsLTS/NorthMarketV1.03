import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Search } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { CategoryDropdown } from '../navigation/CategoryDropdown';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-navy-900 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Store className="h-8 w-8 text-emerald-500" />
          <span className="text-xl font-bold">NorthMarket</span>
        </Link>
        
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 rounded-lg bg-navy-800 border border-navy-700 focus:outline-none focus:border-emerald-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <CategoryDropdown />
          <Link to="/browse" className="hover:text-emerald-500 transition-colors">
            Browse
          </Link>
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="hover:text-emerald-500 transition-colors">
                Dashboard
              </Link>
              <Link to="/profile" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <span className="text-sm font-medium">{user.name[0]}</span>
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="hover:text-emerald-500 transition-colors">
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;