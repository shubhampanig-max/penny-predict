import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Target } from "lucide-react";

export function DashboardOverview() {
  const stats = [
    {
      title: "Total Balance",
      value: "$2,847.32",
      change: "+5.2%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Monthly Spending",
      value: "$1,234.56",
      change: "-12.3%",
      trend: "down",
      icon: TrendingDown,
    },
    {
      title: "Budget Remaining",
      value: "$786.44",
      change: "+18.7%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Goals Progress",
      value: "67%",
      change: "+8.2%",
      trend: "up",
      icon: Target,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="bg-gradient-card shadow-card hover:shadow-hover transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className={`text-xs ${
                stat.trend === 'up' ? 'text-secondary' : 'text-destructive'
              }`}>
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}