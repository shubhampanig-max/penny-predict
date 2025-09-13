import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  CreditCard, 
  PieChart, 
  Settings,
  Bell
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigation = [
  { id: 'dashboard', name: 'Dashboard', icon: PieChart },
  { id: 'expenses', name: 'Expenses', icon: CreditCard },
  { id: 'budget', name: 'Budget', icon: DollarSign },
  { id: 'goals', name: 'Goals', icon: Target },
  { id: 'analytics', name: 'Analytics', icon: TrendingUp },
  { id: 'alerts', name: 'Alerts', icon: Bell },
  { id: 'settings', name: 'Settings', icon: Settings },
];

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="flex h-full w-64 flex-col bg-card shadow-card">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <DollarSign className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">FinanceManager</span>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                activeTab === item.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
}