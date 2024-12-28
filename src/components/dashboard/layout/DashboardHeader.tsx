import React from 'react';
import { Search } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <header className="bg-navy-800 border-b border-navy-700 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-white">Manage Transactions</h1>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-64 px-4 py-2 pl-10 rounded-lg bg-navy-900 border border-navy-700 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;