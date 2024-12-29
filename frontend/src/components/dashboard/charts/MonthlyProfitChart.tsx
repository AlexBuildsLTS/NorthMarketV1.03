import React from 'react';
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const data = [
  { month: 'Jan', profit: 4000 },
  { month: 'Feb', profit: 3000 },
  { month: 'Mar', profit: 2000 },
  { month: 'Apr', profit: 2780 },
  { month: 'May', profit: 1890 },
  { month: 'Jun', profit: 2390 },
];

const MonthlyProfitChart = () => {
  return (
    <div className="bg-navy-800 rounded-lg p-4">
      <h2 className="text-lg font-semibold text-white mb-4">Monthly Gross Profit</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
            <XAxis dataKey="month" stroke="#A0AEC0" />
            <YAxis stroke="#A0AEC0" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1A202C', border: 'none' }}
              labelStyle={{ color: '#A0AEC0' }}
            />
            <Bar dataKey="profit" fill="#48BB78" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyProfitChart;