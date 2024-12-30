import React, {useEffect, useState} from 'react';

interface Stat {
    label: string;
    value: string;
    change: string;
    icon: React.ComponentType;
}

const DashboardStats = () => {
    const [stats, setStats] = useState<Stat[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/dashboard-stats')
            .then((res) => res.json())
            .then((data: Stat[]) => {
                setStats(data);
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load stats');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center text-gray-400">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

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
                            <stat.icon key="w-6 h-6 text-emerald-500"/>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center">
            <span className="text-emerald-500 text-sm font-medium">
              {stat.change}
            </span>
                        <span className="text-gray-400 text-sm ml-2">from last month</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardStats;
