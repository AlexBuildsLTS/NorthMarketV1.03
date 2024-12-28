import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Shield, Zap } from 'lucide-react';
import MarketTrends from '../components/home/MarketTrends';
import TrendingItems from '../components/home/TrendingItems';
import CategoryGrid from '../components/home/CategoryGrid';
import Features from '../components/home/Features';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center px-4">
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
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 rounded-lg flex items-center justify-center"
            >
              Start Shopping <ArrowRight className="ml-2" />
            </Link>
            <Link
              to="/register?role=seller"
              className="bg-navy-700 hover:bg-navy-600 text-white font-bold px-8 py-3 rounded-lg flex items-center justify-center"
            >
              Become a Seller <ShoppingBag className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Market Trends</h2>
        <MarketTrends />
      </section>

      {/* Trending Items */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Trending Items</h2>
        <TrendingItems />
      </section>

      {/* Features */}
      <Features />

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Browse Categories</h2>
        <CategoryGrid />
      </section>
    </div>
  );
};

export default HomePage;