import { NavLink, useLocation } from 'react-router-dom';
import {
  Home,
  LayoutDashboard,
  Settings,
  Users,
  FileText,
  BarChart3,
  Package,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/store/uiStore';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Users', href: '/users', icon: Users },
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
        <div className="mb-4">
          <h2 className="text-xl font-bold gradient-text">StartKit</h2>
          <p className="text-xs text-muted-foreground mt-1">Production Ready SAAS</p>
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto">
          <div className="glass rounded-lg p-4">
            <h3 className="text-sm font-semibold mb-2">Upgrade to Pro</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Get access to premium features and unlimited resources.
            </p>
            <button className="w-full rounded-md bg-gradient-to-r from-primary to-accent px-3 py-2 text-xs font-medium text-primary-foreground transition-all hover:shadow-lg">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
