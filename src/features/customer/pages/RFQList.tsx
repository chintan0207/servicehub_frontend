import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const RFQList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const rfqs = [
    {
      id: "RFQ-1234",
      route: "Shanghai, CN → Los Angeles, US",
      goods: "Electronics",
      weight: "2,500 kg",
      status: "open",
      quotes: 6,
      created: "April 21, 2026",
    },
    {
      id: "RFQ-1235",
      route: "Hamburg, DE → New York, US",
      goods: "Machinery",
      weight: "8,000 kg",
      status: "pending",
      quotes: 3,
      created: "April 20, 2026",
    },
    {
      id: "RFQ-1236",
      route: "Dubai, AE → London, UK",
      goods: "Textiles",
      weight: "1,200 kg",
      status: "accepted",
      quotes: 8,
      created: "April 19, 2026",
    },
    {
      id: "RFQ-1237",
      route: "Tokyo, JP → Sydney, AU",
      goods: "Food & Beverages",
      weight: "3,500 kg",
      status: "open",
      quotes: 4,
      created: "April 18, 2026",
    },
    {
      id: "RFQ-1238",
      route: "Mumbai, IN → Singapore, SG",
      goods: "Chemicals",
      weight: "5,000 kg",
      status: "rejected",
      quotes: 2,
      created: "April 17, 2026",
    },
  ];

  return (
    <div>
      <div className="space-y-6">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">My RFQs</h1>
            <p className="text-muted-foreground">Manage all your request for quotes</p>
          </div>

          <Link to="/create-rfq">
            {/* FIXED */}
            <Button variant="default">Create New RFQ</Button>
          </Link>
        </div>

        <Card>
          <div className="flex gap-4 mb-6">

            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

              <input
                type="text"
                placeholder="Search RFQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              />
            </div>

            <div className="w-48">
              <Select
  value={statusFilter}
  onValueChange={(value:any) => setStatusFilter(value)}
>
  <SelectTrigger className="w-48">
    <SelectValue placeholder="All Status" />
  </SelectTrigger>

  <SelectContent>
    <SelectItem value="all">All Status</SelectItem>
    <SelectItem value="open">Open</SelectItem>
    <SelectItem value="pending">Pending</SelectItem>
    <SelectItem value="accepted">Accepted</SelectItem>
    <SelectItem value="rejected">Rejected</SelectItem>
  </SelectContent>
</Select>
            </div>

          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">RFQ ID</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Route</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Goods</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Weight</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Status</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Quotes</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Created</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-medium">Actions</th>
                </tr>
              </thead>

              <tbody>
                {rfqs.map((rfq) => (
                  <tr
                    key={rfq.id}
                    className="border-b border-border hover:bg-muted transition-colors"
                  >
                    <td className="py-4 px-4">
                      <span className="font-medium text-primary">{rfq.id}</span>
                    </td>

                    <td className="py-4 px-4 text-foreground">{rfq.route}</td>
                    <td className="py-4 px-4 text-muted-foreground">{rfq.goods}</td>
                    <td className="py-4 px-4 text-muted-foreground">{rfq.weight}</td>

                    <td className="py-4 px-4">
                      <Badge fontVariant="outline">{rfq.status}</Badge>
                    </td>

                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {rfq.quotes} quotes
                      </span>
                    </td>

                    <td className="py-4 px-4 text-muted-foreground">{rfq.created}</td>

                    <td className="py-4 px-4">
                      <Link to={`/rfqs/${rfq.id}`}>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">Showing 1 to 5 of 12 RFQs</p>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>

        </Card>
      </div>
    </div>
  )
}

export default RFQList