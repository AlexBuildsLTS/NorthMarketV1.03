import React from 'react';
import { Plus } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import DashboardStats from '../../components/dashboard/DashboardStats';
import MarketTrends from '../../components/home/MarketTrends';
import ProductList from '../../components/seller/ProductList';
import { Button } from '../../components/ui/Button';

const SellerDashboardPage = () => {
  const { user } = useAuth();
  const [showNewProduct, setShowNewProduct] = React.useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Seller Dashboard</h1>
          <p className="text-gray-400">Welcome back, {user?.name}</p>
        </div>
        <Button onClick={() => setShowNewProduct(true)}>
          <Plus className="w-5 h-5 mr-2" />
          New Product
        </Button>
      </div>

      <DashboardStats />

      <div className="mt-8">
        <MarketTrends />
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Your Products</h2>
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default SellerDashboardPage;