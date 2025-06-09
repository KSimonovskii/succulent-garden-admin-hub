
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
  { month: "Jan", sales: 2400 },
  { month: "Feb", sales: 1398 },
  { month: "Mar", sales: 9800 },
  { month: "Apr", sales: 3908 },
  { month: "May", sales: 4800 },
  { month: "Jun", sales: 3800 },
  { month: "Jul", sales: 4300 },
];

const SalesChart = () => {
  return (
    <Card className="border-succulent-mint">
      <CardHeader>
        <CardTitle className="text-succulent-dark">Sales Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--succulent-mint))" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--succulent-dark))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--succulent-dark))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--succulent-cream))",
                  border: "1px solid hsl(var(--succulent-mint))",
                  borderRadius: "8px"
                }}
              />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="hsl(var(--succulent-orange))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--succulent-orange))", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
