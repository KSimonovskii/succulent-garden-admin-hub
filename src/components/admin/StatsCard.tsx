
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down";
}

const StatsCard = ({ title, value, change, icon: Icon, trend }: StatsCardProps) => {
  return (
    <Card className="border-succulent-mint hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-succulent-dark">{value}</p>
            <p className={`text-sm font-medium ${
              trend === "up" ? "text-green-600" : "text-red-600"
            }`}>
              {change}
            </p>
          </div>
          <div className="w-12 h-12 bg-succulent-orange/10 rounded-lg flex items-center justify-center">
            <Icon className="h-6 w-6 text-succulent-orange" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
