import DashboardLayout from '../../components/dashboard/layout/DashboardLayout';
import TrendingProductsChart from '../../components/dashboard/charts/TrendingProductsChart';
import MonthlyProfitChart from '../../components/dashboard/charts/MonthlyProfitChart';
import TransactionsTable from '../../components/dashboard/TransactionsTable';

const DashboardPage = () => {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <TrendingProductsChart/>
                    <MonthlyProfitChart/>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Recent Transactions</h2>
                    <TransactionsTable/>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;