import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Calendar } from "lucide-react";

interface Goal {
  id: string;
  title: string;
  target: number;
  current: number;
  deadline: string;
  category: string;
}

const goals: Goal[] = [
  {
    id: '1',
    title: 'Emergency Fund',
    target: 2000,
    current: 1340,
    deadline: '2024-06-01',
    category: 'Savings'
  },
  {
    id: '2',
    title: 'New Laptop',
    target: 1200,
    current: 450,
    deadline: '2024-04-15',
    category: 'Electronics'
  },
  {
    id: '3',
    title: 'Summer Trip',
    target: 800,
    current: 520,
    deadline: '2024-05-30',
    category: 'Travel'
  }
];

export function GoalsTracker() {
  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-semibold text-foreground">
          <Target className="mr-2 h-5 w-5 text-primary" />
          Financial Goals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal) => {
          const percentage = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          
          return (
            <div key={goal.id} className="p-4 rounded-lg bg-muted/30 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-foreground">{goal.title}</h4>
                  <p className="text-sm text-muted-foreground">{goal.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">${goal.current.toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground">of ${goal.target.toFixed(2)}</p>
                </div>
              </div>
              
              <Progress value={percentage} className="h-3" />
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">
                  {percentage.toFixed(1)}% complete
                </span>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-1 h-3 w-3" />
                  {goal.deadline}
                </div>
              </div>
              
              {remaining > 0 && (
                <p className="text-sm text-accent">
                  ${remaining.toFixed(2)} remaining to reach goal
                </p>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}