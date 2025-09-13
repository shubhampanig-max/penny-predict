import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  type: 'income' | 'expense';
}

const transactions: Transaction[] = [
  {
    id: '1',
    description: 'Grocery Store',
    amount: -67.82,
    category: 'Food & Dining',
    date: '2024-01-15',
    type: 'expense'
  },
  {
    id: '2',
    description: 'Part-time Job',
    amount: 450.00,
    category: 'Income',
    date: '2024-01-14',
    type: 'income'
  },
  {
    id: '3',
    description: 'Textbooks',
    amount: -234.99,
    category: 'Education',
    date: '2024-01-13',
    type: 'expense'
  },
  {
    id: '4',
    description: 'Coffee Shop',
    amount: -12.45,
    category: 'Food & Dining',
    date: '2024-01-12',
    type: 'expense'
  },
  {
    id: '5',
    description: 'Student Loan Refund',
    amount: 1200.00,
    category: 'Income',
    date: '2024-01-10',
    type: 'income'
  }
];

const categoryColors: Record<string, string> = {
  'Food & Dining': 'bg-accent/10 text-accent-foreground',
  'Education': 'bg-primary/10 text-primary',
  'Income': 'bg-secondary/10 text-secondary',
  'Transportation': 'bg-destructive/10 text-destructive',
  'Entertainment': 'bg-muted text-muted-foreground'
};

export function RecentTransactions() {
  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-foreground">{transaction.description}</h4>
                  <span className={`text-sm font-semibold ${
                    transaction.type === 'income' ? 'text-secondary' : 'text-foreground'
                  }`}>
                    {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center mt-1 space-x-2">
                  <Badge className={categoryColors[transaction.category] || categoryColors['Entertainment']}>
                    {transaction.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{transaction.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}