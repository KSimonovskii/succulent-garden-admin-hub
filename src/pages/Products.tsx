
import { useState } from "react";
import { Search, Edit, Trash2, Filter } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AddProductDialog from "@/components/admin/AddProductDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Product {
  id: string;
  name: string;
  price: string;
  stock: number;
  image: string;
  category: string;
  description: string;
  status: "active" | "inactive";
}

const initialProducts: Product[] = [
  { id: "1", name: "Echeveria Elegans", price: "$12.99", stock: 25, image: "🌹", category: "Echeveria", description: "Beautiful rosette succulent", status: "active" },
  { id: "2", name: "Jade Plant", price: "$18.50", stock: 15, image: "🌿", category: "Crassula", description: "Classic jade plant", status: "active" },
  { id: "3", name: "Barrel Cactus", price: "$22.75", stock: 8, image: "🌵", category: "Cactus", description: "Desert barrel cactus", status: "active" },
  { id: "4", name: "String of Pearls", price: "$16.25", stock: 12, image: "🫧", category: "Senecio", description: "Trailing succulent", status: "inactive" },
  { id: "5", name: "Aloe Vera", price: "$14.99", stock: 20, image: "🌱", category: "Aloe", description: "Medicinal aloe plant", status: "active" },
  { id: "6", name: "Hen and Chicks", price: "$10.50", stock: 30, image: "🌸", category: "Sempervivum", description: "Clustering succulent", status: "active" },
  { id: "7", name: "Snake Plant", price: "$24.99", stock: 18, image: "🌿", category: "Sansevieria", description: "Low maintenance plant", status: "active" },
  { id: "8", name: "Prickly Pear", price: "$19.75", stock: 6, image: "🌵", category: "Cactus", description: "Edible cactus variety", status: "inactive" },
];

const Products = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesStatus = selectedStatus === "all" || product.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleProductAdded = (newProduct: Product) => {
    setProducts(prev => [...prev, newProduct]);
  };

  return (
    <div className="min-h-screen bg-succulent-cream flex">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        
        <main className="flex-1 p-6 space-y-6 animate-fade-in">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-succulent-dark">Products</h1>
              <p className="text-muted-foreground">Manage your succulent inventory</p>
            </div>
            <AddProductDialog onProductAdded={handleProductAdded} />
          </div>

          {/* Filters Section */}
          <Card className="border-succulent-mint">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-succulent-mint focus:border-succulent-orange"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-[180px] border-succulent-mint">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full sm:w-[180px] border-succulent-mint">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Products Grid */}
          <Card className="border-succulent-mint">
            <CardHeader>
              <CardTitle className="text-succulent-dark">
                Product Inventory ({filteredProducts.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="border border-succulent-mint rounded-lg p-4 hover:shadow-md transition-shadow bg-card">
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-3xl">{product.image}</div>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-succulent-dark hover:bg-succulent-mint/20">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-succulent-dark mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs bg-succulent-mint/20 text-succulent-dark">
                        {product.category}
                      </Badge>
                      <Badge 
                        variant={product.status === "active" ? "default" : "secondary"}
                        className={`text-xs ${
                          product.status === "active" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {product.status}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-succulent-orange">{product.price}</span>
                      <span className={`text-sm font-medium ${
                        product.stock < 10 ? "text-red-600" : "text-green-600"
                      }`}>
                        Stock: {product.stock}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🌵</div>
                  <h3 className="text-lg font-semibold text-succulent-dark mb-2">No products found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Products;
