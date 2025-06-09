
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import StatsCard from "@/components/admin/StatsCard";
import RecentOrdersTable from "@/components/admin/RecentOrdersTable";
import ProductGrid from "@/components/admin/ProductGrid";
import SalesChart from "@/components/admin/SalesChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-succulent-cream flex">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        
        <main className="flex-1 p-6 space-y-6 animate-fade-in">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Revenue"
              value="$12,426"
              change="+12.5% from last month"
              icon={DollarSign}
              trend="up"
            />
            <StatsCard
              title="Products Sold"
              value="1,249"
              change="+8.2% from last month"
              icon={Package}
              trend="up"
            />
            <StatsCard
              title="Total Orders"
              value="856"
              change="+3.1% from last month"
              icon={ShoppingCart}
              trend="up"
            />
            <StatsCard
              title="Customers"
              value="2,845"
              change="+15.3% from last month"
              icon={Users}
              trend="up"
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SalesChart />
            <ProductGrid />
          </div>

          {/* Recent Orders */}
          <RecentOrdersTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
