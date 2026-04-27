import { Card } from "@/components/ui/card";
import { DollarSign, Package, TrendingUp, Users } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AdminDashboard = () => {
  const stats = [
    {
      label: "Total Users",
      value: "12,458",
      change: "+12%",
      icon: Users,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      label: "Active Orders",
      value: "1,247",
      change: "+8%",
      icon: Package,
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      label: "Monthly Revenue",
      value: "$245K",
      change: "+23%",
      icon: DollarSign,
      color: "text-info",
      bg: "bg-info/10",
    },
    {
      label: "Platform Growth",
      value: "18.5%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-warning",
      bg: "bg-warning/10",
    },
  ];

  const revenueData = [
    { month: "Jan", revenue: 180000 },
    { month: "Feb", revenue: 195000 },
    { month: "Mar", revenue: 220000 },
    { month: "Apr", revenue: 245000 },
  ];

  const userGrowth = [
    { month: "Jan", customers: 4200, agents: 850 },
    { month: "Feb", customers: 5100, agents: 920 },
    { month: "Mar", customers: 6300, agents: 1050 },
    { month: "Apr", customers: 7800, agents: 1180 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">
          Platform overview and key metrics
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center`}
                >
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>

                <span className="text-sm text-success font-medium">
                  {stat.change}
                </span>
              </div>

              <p className="text-muted-foreground text-sm mb-1">
                {stat.label}
              </p>

              <p className="text-3xl font-bold text-foreground">
                {stat.value}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Revenue Trend
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="month"
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis stroke="hsl(var(--muted-foreground))" />

              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                }}
              />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            User Growth
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userGrowth}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="month"
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis stroke="hsl(var(--muted-foreground))" />

              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                }}
              />

              <Bar
                dataKey="customers"
                fill="hsl(var(--primary))"
                radius={[8, 8, 0, 0]}
              />

              <Bar
                dataKey="agents"
                fill="hsl(var(--success))"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Top Performing Agents
          </h3>

          <div className="space-y-3">
            {[
              { name: "Global Shipping Co.", revenue: "$45,200", orders: 23 },
              { name: "Pacific Logistics", revenue: "$38,900", orders: 19 },
              { name: "TransOcean Express", revenue: "$32,500", orders: 15 },
            ].map((agent, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-xl"
              >
                <div>
                  <p className="font-medium text-foreground">
                    {agent.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {agent.orders} orders
                  </p>
                </div>

                <p className="font-semibold text-success">
                  {agent.revenue}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Recent Activity
          </h3>

          <div className="space-y-3">
            {[
              { action: "New user registered", time: "5 min ago" },
              { action: "Order completed", time: "12 min ago" },
              { action: "Quote accepted", time: "25 min ago" },
              { action: "New RFQ posted", time: "1 hour ago" },
            ].map((activity, index) => (
              <div
                key={index}
                className="pb-3 border-b border-border last:border-0"
              >
                <p className="text-foreground mb-1">
                  {activity.action}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.time}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            System Health
          </h3>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Server Uptime
                </span>
                <span className="text-sm font-medium text-success">
                  99.9%
                </span>
              </div>
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-success"
                  style={{ width: "99.9%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  API Response
                </span>
                <span className="text-sm font-medium text-success">
                  125ms
                </span>
              </div>
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-success"
                  style={{ width: "95%" }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Database Load
                </span>
                <span className="text-sm font-medium text-warning">
                  68%
                </span>
              </div>
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-warning"
                  style={{ width: "68%" }}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;