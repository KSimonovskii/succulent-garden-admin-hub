
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Plus } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  stock: number;
  image: string;
  category: string;
}

const products: Product[] = [
  { id: "1", name: "Echeveria Elegans", price: "$12.99", stock: 25, image: "🌹", category: "Echeveria" },
  { id: "2", name: "Jade Plant", price: "$18.50", stock: 15, image: "🌿", category: "Crassula" },
  { id: "3", name: "Barrel Cactus", price: "$22.75", stock: 8, image: "🌵", category: "Cactus" },
  { id: "4", name: "String of Pearls", price: "$16.25", stock: 12, image: "🫧", category: "Senecio" },
  { id: "5", name: "Aloe Vera", price: "$14.99", stock: 20, image: "🌱", category: "Aloe" },
  { id: "6", name: "Hen and Chicks", price: "$10.50", stock: 30, image: "🌸", category: "Sempervivum" },
];

const ProductGrid = () => {
  return (
    <Card className="border-succulent-mint">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-succulent-dark">Product Inventory</CardTitle>
        <Button className="bg-succulent-orange hover:bg-succulent-orange/80 text-succulent-cream">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border border-succulent-mint rounded-lg p-4 hover:shadow-md transition-shadow">
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
              <Badge variant="secondary" className="text-xs mb-2 bg-succulent-mint/20 text-succulent-dark">
                {product.category}
              </Badge>
              
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
      </CardContent>
    </Card>
  );
};

export default ProductGrid;
