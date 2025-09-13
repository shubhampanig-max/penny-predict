import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface BudgetCategory {
  name: string;
  spent: number;
  budget: number;
  color: string;
}

const budgetData: BudgetCategory[] = [
  { name: 'Food & Dining', spent: 234.56, budget: 400, color: 'bg-accent' },
  { name: 'Transportation', spent: 89.32, budget: 150, color: 'bg-primary' },
  { name: 'Entertainment', spent: 145.88, budget: 200, color: 'bg-secondary' },
  { name: 'Education', spent: 567.23, budget: 800, color: 'bg-destructive' },
  { name: 'Shopping', spent: 78.90, budget: 100, color: 'bg-muted-foreground' },
];

export function BudgetProgress() {
  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">Budget Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {budgetData.map((category) => {
          const percentage = (category.spent / category.budget) * 100;
          const isOverBudget = percentage > 100;
          
          return (
            <div key={category.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">{category.name}</span>
                <span className={`text-sm font-semibold ${
                  isOverBudget ? 'text-destructive' : 'text-muted-foreground'
                }`}>
                  ${category.spent.toFixed(2)} / ${category.budget.toFixed(2)}
                </span>
              </div>
              <Progress 
                value={Math.min(percentage, 100)} 
                className="h-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{percentage.toFixed(1)}% used</span>
                <span className={isOverBudget ? 'text-destructive font-semibold' : ''}>
                  ${(category.budget - category.spent).toFixed(2)} remaining
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}