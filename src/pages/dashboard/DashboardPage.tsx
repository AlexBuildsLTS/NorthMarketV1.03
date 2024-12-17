import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import DashboardStats from '../../components/dashboard/DashboardStats';
import MarketTrends from '../../components/home/MarketTrends';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400">Welcome back, {user?.name}</p>
        </div>
      </div>
      
      <DashboardStats />
      
      <div className="mt-8">
        <MarketTrends />
      </div>
    </div>
  );
};

export default DashboardPage;