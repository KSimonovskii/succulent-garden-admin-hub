
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Order {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: "pending" | "completed" | "shipped";
  date: string;
}

const orders: Order[] = [
  { id: "#001", customer: "Sarah Chen", product: "Echeveria Collection", amount: "$45.99", status: "completed", date: "2024-01-15" },
  { id: "#002", customer: "Mike Johnson", product: "Jade Plant", amount: "$23.50", status: "shipped", date: "2024-01-14" },
  { id: "#003", customer: "Emily Davis", product: "Succulent Care Kit", amount: "$67.80", status: "pending", date: "2024-01-14" },
  { id: "#004", customer: "Alex Rodriguez", product: "Mini Cactus Set", amount: "$32.25", status: "completed", date: "2024-01-13" },
  { id: "#005", customer: "Lisa Wang", product: "Aloe Vera Plant", amount: "$18.75", status: "shipped", date: "2024-01-12" },
];

const getStatusColor = (status: Order["status"]) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 hover:bg-green-100";
    case "shipped":
      return "bg-blue-100 text-blue-800 hover:bg-blue-100";
    case "pending":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100";
  }
};

const RecentOrdersTable = () => {
  return (
    <Card className="border-succulent-mint">
      <CardHeader>
        <CardTitle className="text-succulent-dark">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-succulent-mint/30">
                <th className="text-left py-3 px-4 font-medium text-succulent-dark">Order ID</th>
                <th className="text-left py-3 px-4 font-medium text-succulent-dark">Customer</th>
                <th className="text-left py-3 px-4 font-medium text-succulent-dark">Product</th>
                <th className="text-left py-3 px-4 font-medium text-succulent-dark">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-succulent-dark">Status</th>
                <th className="text-left py-3 px-4 font-medium text-succulent-dark">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-succulent-mint/20 hover:bg-succulent-mint/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-succulent-dark">{order.id}</td>
                  <td className="py-3 px-4 text-foreground">{order.customer}</td>
                  <td className="py-3 px-4 text-foreground">{order.product}</td>
                  <td className="py-3 px-4 font-medium text-succulent-orange">{order.amount}</td>
                  <td className="py-3 px-4">
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentOrdersTable;
