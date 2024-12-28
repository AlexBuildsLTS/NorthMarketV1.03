import React from 'react';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '01/03', Product1: 65, Product2: 28, Product3: 45, Product4: 34, Product5: 55 },
  { date: '05/03', Product1: 59, Product2: 48, Product3: 38, Product4: 43, Product5: 52 },
  { date: '10/03', Product1: 80, Product2: 40, Product3: 55, Product4: 35, Product5: 58 },
  { date: '15/03', Product1: 81, Product2: 45, Product3: 60, Product4: 48, Product5: 51 },
  { date: '20/03', Product1: 56, Product2: 48, Product3: 45, Product4: 44, Product5: 54 },
  { date: '25/03', Product1: 55, Product2: 58, Product3: 52, Product4: 47, Product5: 59 },
  { date: '30/03', Product1: 40, Product2: 55, Product3: 58, Product4: 52, Product5: 56 },
];

const TrendingProductsChart = () => {
  return (
    <div className="bg-navy-800 rounded-lg p-4">
      <h2 className="text-lg font-semibold text-white mb-4">Trending Products</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
            <XAxis dataKey="date" stroke="#A0AEC0" />
            <YAxis stroke="#A0AEC0" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1A202C', border: 'none' }}
              labelStyle={{ color: '#A0AEC0' }}
            />
            <Legend />
            <Line type="monotone" dataKey="Product1" stroke="#48BB78" strokeWidth={2} />
            <Line type="monotone" dataKey="Product2" stroke="#4299E1" strokeWidth={2} />
            <Line type="monotone" dataKey="Product3" stroke="#F6AD55" strokeWidth={2} />
            <Line type="monotone" dataKey="Product4" stroke="#9F7AEA" strokeWidth={2} />
            <Line type="monotone" dataKey="Product5" stroke="#ED64A6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrendingProductsChart;