import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { RecentTransactions } from '@/components/dashboard/RecentTransactions';
import { BudgetProgress } from '@/components/budget/BudgetProgress';
import { GoalsTracker } from '@/components/goals/GoalsTracker';
import { SpendingChart } from '@/components/analytics/SpendingChart';
import { AlertsPanel } from '@/components/alerts/AlertsPanel';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Overview of your financial health</p>
            </div>
            <DashboardOverview />
            <div className="grid gap-6 lg:grid-cols-2">
              <RecentTransactions />
              <BudgetProgress />
            </div>
          </div>
        );
      case 'expenses':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Expenses</h1>
              <p className="text-muted-foreground">Track and categorize your spending</p>
            </div>
            <RecentTransactions />
          </div>
        );
      case 'budget':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Budget</h1>
              <p className="text-muted-foreground">Monitor your spending limits</p>
            </div>
            <BudgetProgress />
          </div>
        );
      case 'goals':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Goals</h1>
              <p className="text-muted-foreground">Track your financial objectives</p>
            </div>
            <GoalsTracker />
          </div>
        );
      case 'analytics':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
              <p className="text-muted-foreground">Insights into your spending patterns</p>
            </div>
            <SpendingChart />
          </div>
        );
      case 'alerts':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Alerts</h1>
              <p className="text-muted-foreground">Important notifications and updates</p>
            </div>
            <AlertsPanel />
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Settings</h1>
              <p className="text-muted-foreground">Customize your experience</p>
            </div>
            <div className="p-8 text-center text-muted-foreground">
              Settings panel coming soon...
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <DashboardOverview />
            <div className="grid gap-6 lg:grid-cols-2">
              <RecentTransactions />
              <BudgetProgress />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gradient-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}