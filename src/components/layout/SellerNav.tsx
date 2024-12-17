import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Settings,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const SellerNav = () => {
  const { logout } = useAuth();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/seller' },
    { icon: Package, label: 'Products', to: '/seller/products' },
    { icon: ShoppingCart, label: 'Orders', to: '/seller/orders' },
    { icon: Settings, label: 'Settings', to: '/seller/settings' },
  ];

  return (
    <nav className="bg-navy-800 w-64 min-h-screen p-4">
      <div className="space-y-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-navy-700 text-emerald-500'
                  : 'text-gray-400 hover:bg-navy-700 hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
      
      <button
        onClick={logout}
        className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-400 hover:bg-navy-700 hover:text-white transition-colors mt-auto absolute bottom-4 w-[calc(100%-2rem)]"
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default SellerNav;