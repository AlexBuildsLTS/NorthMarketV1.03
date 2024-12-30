import {DollarSign, Package, TrendingUp, Users} from 'lucide-react';

const stats = [
  {
    label: 'Total Sales',
    value: '475',
    change: '+14%',
    icon: TrendingUp,
  },
  {
    label: 'Active Products',
    value: '367',
    change: '+14%',
    icon: Package,
  },
  {
    label: 'New Customers',
    value: '794',
    change: '+14%',
    icon: Users,
  },
  {
    label: 'Average Order',
    value: '358',
    change: '+14%',
    icon: DollarSign,
  },
];

const DashboardStats = () => {
  // @ts-ignore
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-navy-800 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
            </div>
            <div className="bg-navy-700 p-3 rounded-lg">
              <stat.icon className="w-6 h-6 text-emerald-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-emerald-500 text-sm font-medium">{stat.change}</span>
            <span className="text-gray-400 text-sm ml-2">from last month</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;