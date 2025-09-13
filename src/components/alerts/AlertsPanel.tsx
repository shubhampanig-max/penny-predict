import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Target, DollarSign } from "lucide-react";

interface AlertItem {
  id: string;
  type: 'warning' | 'info' | 'success' | 'error';
  title: string;
  description: string;
  category: string;
  timestamp: string;
}

const alerts: AlertItem[] = [
  {
    id: '1',
    type: 'warning',
    title: 'Budget Limit Approaching',
    description: 'You\'ve spent 90% of your Food & Dining budget this month.',
    category: 'Budget',
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    type: 'error',
    title: 'Overspent in Education',
    description: 'You\'ve exceeded your education budget by $45.23.',
    category: 'Budget',
    timestamp: '1 day ago'
  },
  {
    id: '3',
    type: 'success',
    title: 'Goal Milestone Reached',
    description: 'Congratulations! You\'ve reached 75% of your Emergency Fund goal.',
    category: 'Goals',
    timestamp: '3 days ago'
  },
  {
    id: '4',
    type: 'info',
    title: 'Spending Pattern Change',
    description: 'Your spending this week is 15% lower than usual.',
    category: 'Analytics',
    timestamp: '1 week ago'
  }
];

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'warning':
      return <AlertTriangle className="h-4 w-4" />;
    case 'error':
      return <AlertTriangle className="h-4 w-4" />;
    case 'success':
      return <Target className="h-4 w-4" />;
    case 'info':
      return <TrendingUp className="h-4 w-4" />;
    default:
      return <DollarSign className="h-4 w-4" />;
  }
};

const getAlertColor = (type: string) => {
  switch (type) {
    case 'warning':
      return 'border-accent/50 bg-accent/10';
    case 'error':
      return 'border-destructive/50 bg-destructive/10';
    case 'success':
      return 'border-secondary/50 bg-secondary/10';
    case 'info':
      return 'border-primary/50 bg-primary/10';
    default:
      return 'border-muted';
  }
};

const getBadgeColor = (category: string) => {
  switch (category) {
    case 'Budget':
      return 'bg-accent/10 text-accent-foreground';
    case 'Goals':
      return 'bg-secondary/10 text-secondary';
    case 'Analytics':
      return 'bg-primary/10 text-primary';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export function AlertsPanel() {
  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <Alert key={alert.id} className={`${getAlertColor(alert.type)} border`}>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                {getAlertIcon(alert.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground">{alert.title}</h4>
                  <Badge className={getBadgeColor(alert.category)}>
                    {alert.category}
                  </Badge>
                </div>
                <AlertDescription className="text-sm text-muted-foreground">
                  {alert.description}
                </AlertDescription>
                <p className="text-xs text-muted-foreground mt-2">{alert.timestamp}</p>
              </div>
            </div>
          </Alert>
        ))}
      </CardContent>
    </Card>
  );
}