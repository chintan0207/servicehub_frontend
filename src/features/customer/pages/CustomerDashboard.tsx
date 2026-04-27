import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, Package, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
    const stats = [
    { label: "Active RFQs", value: "8", icon: FileText, color: "text-primary", bg: "bg-primary/10" },
    { label: "Quotes Received", value: "24", icon: TrendingUp, color: "text-primary", bg: "bg-muted" },
    { label: "Active Orders", value: "5", icon: Package, color: "text-primary", bg: "bg-muted" },
    { label: "Pending Actions", value: "3", icon: Clock, color: "text-destructive", bg: "bg-destructive/10" },
  ];

   const recentRFQs = [
    { id: "RFQ-1234", route: "Shanghai, CN → Los Angeles, US", status: "open", quotes: 6, created: "2 hours ago" },
    { id: "RFQ-1235", route: "Hamburg, DE → New York, US", status: "pending", quotes: 3, created: "1 day ago" },
    { id: "RFQ-1236", route: "Dubai, AE → London, UK", status: "accepted", quotes: 8, created: "2 days ago" },
  ];

  return (
    <div>
      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your logistics overview.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Recent RFQ Activity</h2>
          <Link to="/customer/create-rfq">
            <Button variant="default">Create New RFQ</Button>
          </Link>
        </div>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">RFQ ID</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Route</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Status</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Quotes</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Created</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Actions</th>
                </tr>
              </thead>

              <tbody>
                {recentRFQs.map((rfq) => (
                  <tr key={rfq.id} className="border-b border-border hover:bg-muted">
                    <td className="py-4 px-4">
                      <span className="font-medium text-primary">{rfq.id}</span>
                    </td>

                    <td className="py-4 px-4 text-foreground">{rfq.route}</td>

                    <td className="py-4 px-4">
                      <Badge variant="outline">{rfq.status}</Badge>
                    </td>

                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {rfq.quotes} quotes
                      </span>
                    </td>

                    <td className="py-4 px-4 text-muted-foreground">{rfq.created}</td>

                    <td className="py-4 px-4">
                      <Link to={`/customer/rfqs/${rfq.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">

          <Card>
            <h3 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h3>

            <div className="space-y-3">
              <Link to="/customer/create-rfq" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-5 h-5" />
                  Create New RFQ
                </Button>
              </Link>

              <Link to="/customer/rfqs" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Package className="w-5 h-5" />
                  View All RFQs
                </Button>
              </Link>

              <Link to="/customer/orders" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-5 h-5" />
                  Track Shipments
                </Button>
              </Link>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-foreground mb-4">Need Help?</h3>

            <p className="text-muted-foreground mb-4">
              Our support team is available 24/7 to help with your logistics needs.
            </p>

            <Button variant="default" className="w-full">
              Contact Support
            </Button>
          </Card>

        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard