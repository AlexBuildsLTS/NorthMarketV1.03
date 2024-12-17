import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', Electronics: 3800, Fashion: 2400, Other: 2400 },
  { month: 'Feb', Electronics: 3000, Fashion: 1398, Other: 2210 },
  { month: 'Mar', Electronics: 4000, Fashion: 2800, Other: 2290 },
  { month: 'Apr', Electronics: 3780, Fashion: 3908, Other: 2000 },
  { month: 'May', Electronics: 3890, Fashion: 4800, Other: 2181 },
  { month: 'Jun', Electronics: 3890, Fashion: 3800, Other: 2500 },
];

const MarketTrends = () => {
  return (
    <div className="bg-navy-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-white mb-4">Market Trends</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
            <XAxis dataKey="month" stroke="#A0AEC0" />
            <YAxis stroke="#A0AEC0" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1A202C', border: 'none' }}
              labelStyle={{ color: '#A0AEC0' }}
            />
            <Legend />
            <Line type="monotone" dataKey="Electronics" stroke="#48BB78" strokeWidth={2} />
            <Line type="monotone" dataKey="Fashion" stroke="#4299E1" strokeWidth={2} />
            <Line type="monotone" dataKey="Other" stroke="#F6AD55" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketTrends;