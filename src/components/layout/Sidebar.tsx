import { NavLink, useLocation } from 'react-router-dom';
import {
  Home,
  LayoutDashboard,
  Settings,
  Users,
  FileText,
  BarChart3,
  Package,
  Zap,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/store/uiStore';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Users', href: '/users', icon: Users, badge: '12' },
  { name: 'Products', href: '/products', icon: Package },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export const Sidebar = () => {
  const location = useLocation();
  const { sidebarOpen } = useUIStore();

  return (
    <aside
      className={cn(
        'fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 border-r border-border bg-card transition-transform duration-300 ease-in-out',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      )}
    >
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="mb-4 p-4 border-b">
          <div className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm group-hover:shadow-lg transition-shadow">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl gradient-text">StartKit</span>
          </div>
        </div>

        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all group',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'hover:bg-accent hover:translate-x-1'
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="flex-1">{item.name}</span>
                {item.badge && (
                  <Badge variant={isActive ? "secondary" : "default"} className="ml-auto">
                    {item.badge}
                  </Badge>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto p-4 border-t">
          <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border relative overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="absolute top-2 right-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            </div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              Upgrade to Pro
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Get access to all premium features and priority support
            </p>
            <Button className="w-full" size="sm">
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};
