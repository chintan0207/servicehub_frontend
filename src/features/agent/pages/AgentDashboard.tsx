import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, FileText, Package, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AgentDashboard = () => {
  const stats = [
    {
      label: "Available RFQs",
      value: "42",
      icon: FileText,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      label: "Quotes Sent",
      value: "18",
      icon: TrendingUp,
      color: "text-warning",
      bg: "bg-warning/10",
    },
    {
      label: "Active Orders",
      value: "7",
      icon: Package,
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      label: "Monthly Revenue",
      value: "$45K",
      icon: DollarSign,
      color: "text-info",
      bg: "bg-info/10",
    },
  ];

  const chartData = [
    { month: "Jan", revenue: 32000 },
    { month: "Feb", revenue: 38000 },
    { month: "Mar", revenue: 42000 },
    { month: "Apr", revenue: 45000 },
  ];

  const recentRFQs = [
    {
      id: "RFQ-1240",
      route: "Singapore, SG → Sydney, AU",
      goods: "Electronics",
      weight: "1,500 kg",
      posted: "2 hours ago",
    },
    {
      id: "RFQ-1241",
      route: "London, UK → New York, US",
      goods: "Machinery",
      weight: "5,000 kg",
      posted: "5 hours ago",
    },
    {
      id: "RFQ-1242",
      route: "Shanghai, CN → Hamburg, DE",
      goods: "Textiles",
      weight: "2,200 kg",
      posted: "1 day ago",
    },
  ];

  return (
    <div>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Agent Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your logistics operations and grow your business
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center`}
                  >
                    <Icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Charts + Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Revenue Overview
            </h2>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                  }}
                />
                <Bar
                  dataKey="revenue"
                  fill="hsl(var(--primary))"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Quick Actions
            </h2>

            <div className="space-y-3">
              <Link to="/agent/marketplace" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-5 h-5" />
                  Browse RFQ Marketplace
                </Button>
              </Link>

              <Link to="/agent/quotes" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-5 h-5" />
                  View My Quotes
                </Button>
              </Link>

              <Link to="/agent/orders" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Package className="w-5 h-5" />
                  Manage Orders
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* RFQ Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">
              New RFQ Opportunities
            </h2>

            <Link to="/agent/marketplace">
              <Button variant="outline">View All</Button>
            </Link>
          </div>

          <div className="grid gap-4">
            {recentRFQs.map((rfq) => (
              <Card key={rfq.id} className="hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-primary">
                        {rfq.id}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {rfq.posted}
                      </span>
                    </div>

                    <p className="text-foreground mb-3">{rfq.route}</p>

                    <div className="flex gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Goods</p>
                        <p className="font-medium text-foreground">
                          {rfq.goods}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">Weight</p>
                        <p className="font-medium text-foreground">
                          {rfq.weight}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button variant="default">Send Quote</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;