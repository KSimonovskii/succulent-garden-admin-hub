
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AddProductDialogProps {
  onProductAdded: (product: any) => void;
}

const AddProductDialog = ({ onProductAdded }: AddProductDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    image: "🌿"
  });
  const { toast } = useToast();

  const categories = ["Echeveria", "Crassula", "Cactus", "Senecio", "Aloe", "Sempervivum", "Sansevieria"];
  const emojis = ["🌿", "🌵", "🌹", "🌱", "🌸", "🫧"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.stock || !formData.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const newProduct = {
      id: Date.now().toString(),
      name: formData.name,
      price: `$${parseFloat(formData.price).toFixed(2)}`,
      stock: parseInt(formData.stock),
      category: formData.category,
      description: formData.description,
      image: formData.image,
      status: "active" as const
    };

    onProductAdded(newProduct);
    
    toast({
      title: "Success",
      description: "Product added successfully!",
    });

    setFormData({
      name: "",
      price: "",
      stock: "",
      category: "",
      description: "",
      image: "🌿"
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-succulent-orange hover:bg-succulent-orange/80 text-succulent-cream">
          <Plus className="h-4 w-4 mr-2" />
          Add New Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-succulent-dark">Add New Product</DialogTitle>
          <DialogDescription>
            Create a new succulent product for your inventory.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-succulent-dark">Product Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Echeveria Elegans"
              className="border-succulent-mint focus:border-succulent-orange"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price" className="text-succulent-dark">Price *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="12.99"
                className="border-succulent-mint focus:border-succulent-orange"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stock" className="text-succulent-dark">Stock *</Label>
              <Input
                id="stock"
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                placeholder="25"
                className="border-succulent-mint focus:border-succulent-orange"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-succulent-dark">Category *</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger className="border-succulent-mint focus:border-succulent-orange">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image" className="text-succulent-dark">Display Emoji</Label>
            <Select value={formData.image} onValueChange={(value) => setFormData({ ...formData, image: value })}>
              <SelectTrigger className="border-succulent-mint focus:border-succulent-orange">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {emojis.map(emoji => (
                  <SelectItem key={emoji} value={emoji}>
                    <span className="text-2xl">{emoji}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-succulent-dark">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Beautiful succulent description..."
              className="border-succulent-mint focus:border-succulent-orange"
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="border-succulent-mint text-succulent-dark hover:bg-succulent-mint/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-succulent-orange hover:bg-succulent-orange/80 text-succulent-cream"
            >
              Add Product
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductDialog;
