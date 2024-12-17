import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Shield, Zap } from 'lucide-react';
import MarketTrends from '../components/home/MarketTrends';
import TrendingItems from '../components/home/TrendingItems';
import CategoryGrid from '../components/home/CategoryGrid';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 to-navy-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Trusted Marketplace
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Buy and sell with confidence. Secure transactions, verified sellers,
            amazing products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/browse"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-lg flex items-center justify-center transition-all transform hover:scale-105"
            >
              Start Shopping <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/register?role=seller"
              className="bg-emerald-600/90 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-lg flex items-center justify-center transition-all transform hover:scale-105"
            >
              Become a Seller <ShoppingBag className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-navy-700">
              <Shield className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Secure Transactions
              </h3>
              <p className="text-gray-400">
                Protected payments and verified sellers for your peace of mind
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-navy-700">
              <Zap className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-400">
                Quick and reliable shipping to your doorstep
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-navy-700">
              <ShoppingBag className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Wide Selection
              </h3>
              <p className="text-gray-400">
                Thousands of products across multiple categories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <MarketTrends />

      {/* Trending Items */}
      <TrendingItems />

      {/* Categories */}
      <CategoryGrid />
    </div>
  );
};

export default HomePage;