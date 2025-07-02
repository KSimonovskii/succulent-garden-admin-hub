
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Package, label: "Products", href: "/products" },
  { icon: ShoppingCart, label: "Orders", href: "/orders" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside className={cn(
      "bg-succulent-dark text-succulent-cream transition-all duration-300 relative flex flex-col",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 bg-succulent-orange hover:bg-succulent-orange/80 text-succulent-cream rounded-full w-6 h-6 p-0 z-10"
      >
        {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
      </Button>
      
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-succulent-orange rounded-lg flex items-center justify-center">
            <span className="text-succulent-cream font-bold text-sm">🌿</span>
          </div>
          {!isCollapsed && <span className="font-bold text-lg">Succulent Shop</span>}
        </div>
      </div>
      
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={index}>
                <Link
                  to={item.href}
                  className={cn(
                    "w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors",
                    isActive 
                      ? "bg-succulent-orange text-succulent-cream" 
                      : "text-succulent-mint hover:bg-succulent-mint/10 hover:text-succulent-cream"
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span className="font-medium">{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
