import React from 'react';

interface Transaction {
  id: string;
  type: 'Buyer' | 'Seller';
  deliveryStatus: 'On the Way' | 'Delivered';
  progress: number;
  items: number;
  profit: number;
  avgDeliveryTime: string;
  date: string;
}

const transactions: Transaction[] = [
  {
    id: '1',
    type: 'Buyer',
    deliveryStatus: 'On the Way',
    progress: 65,
    items: 3,
    profit: 450.00,
    avgDeliveryTime: '2 days',
    date: '2024-03-15'
  },
  // Add more mock data...
];

const TransactionsTable = () => {
  return (
    <div className="bg-navy-800 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-navy-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                Buyer/Seller
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                Delivery Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                Progress
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                Items
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                Gross Profit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                Avg. Delivery Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-700">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-navy-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {transaction.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    transaction.deliveryStatus === 'Delivered' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {transaction.deliveryStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-navy-900 rounded-full h-2.5">
                    <div 
                      className="bg-emerald-500 h-2.5 rounded-full"
                      style={{ width: `${transaction.progress}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {transaction.items}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  ${transaction.profit.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {transaction.avgDeliveryTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {new Date(transaction.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;