
import { Bell, Settings, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AdminHeader = () => {
  return (
    <header className="bg-card border-b border-succulent-mint px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-succulent-orange rounded-lg flex items-center justify-center">
              <span className="text-succulent-cream font-bold text-sm">🌵</span>
            </div>
            <h1 className="text-xl font-bold text-succulent-dark">Succulent Admin</h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search products, orders..." 
              className="pl-10 w-64 border-succulent-mint focus:border-succulent-orange"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="text-succulent-dark hover:bg-succulent-mint/20">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-succulent-dark hover:bg-succulent-mint/20">
            <Settings className="h-5 w-5" />
          </Button>
          
          <Avatar>
            <AvatarImage src="/api/placeholder/32/32" alt="Admin" />
            <AvatarFallback className="bg-succulent-orange text-succulent-cream">AD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
