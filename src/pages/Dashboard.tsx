import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight, Eye } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { cn } from '@/lib/utils';

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1% from last month',
    icon: DollarSign,
    trend: 'up',
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: '+180.1% from last month',
    icon: Users,
    trend: 'up',
  },
  {
    title: 'Conversion Rate',
    value: '12.5%',
    change: '+4.3% from last month',
    icon: TrendingUp,
    trend: 'up',
  },
  {
    title: 'Activity',
    value: '573',
    change: '+201 since last hour',
    icon: Activity,
    trend: 'up',
  },
];

export default function Dashboard() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in-up">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
          <p className="text-muted-foreground mt-2">
            Here's what's happening with your business today.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const TrendIcon = stat.trend === 'up' ? ArrowUpRight : ArrowDownRight;
            return (
              <Card key={index} className="glass hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <stat.icon className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <Badge variant={stat.trend === 'up' ? 'default' : 'destructive'} className="flex items-center gap-1">
                      <TrendIcon className="h-3 w-3" />
                      {stat.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 glass">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>Your business performance at a glance</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Chart Component Placeholder
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3 glass">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your team</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'John Doe', action: 'completed onboarding', time: '2 hours ago', color: 'bg-blue-500' },
                  { name: 'Jane Smith', action: 'upgraded to Pro', time: '4 hours ago', color: 'bg-purple-500' },
                  { name: 'Mike Johnson', action: 'created new project', time: '6 hours ago', color: 'bg-green-500' },
                  { name: 'Sarah Wilson', action: 'invited team member', time: '8 hours ago', color: 'bg-orange-500' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors group">
                    <div className={cn("h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold text-sm", item.color)}>
                      {item.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        <span className="font-semibold">{item.name}</span> {item.action}
                      </p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
