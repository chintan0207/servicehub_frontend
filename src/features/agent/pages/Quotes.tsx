import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";

const Quotes = () => {
  const [statusFilter, setStatusFilter] = useState("all");

  const quotes = [
    {
      id: "Q-101",
      rfqId: "RFQ-1234",
      customer: "Tech Solutions Ltd.",
      route: "Shanghai, CN → Los Angeles, US",
      price: "$4,500",
      deliveryDays: 21,
      status: "pending",
      sentOn: "April 21, 2026",
    },
    {
      id: "Q-102",
      rfqId: "RFQ-1236",
      customer: "Fashion Exports",
      route: "Dubai, AE → London, UK",
      price: "$3,200",
      deliveryDays: 18,
      status: "accepted",
      sentOn: "April 19, 2026",
    },
    {
      id: "Q-103",
      rfqId: "RFQ-1238",
      customer: "Manufacturing Inc.",
      route: "Mumbai, IN → Singapore, SG",
      price: "$2,800",
      deliveryDays: 15,
      status: "rejected",
      sentOn: "April 17, 2026",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          My Quotes
        </h1>
        <p className="text-muted-foreground">
          Track all your submitted quotes and their status
        </p>
      </div>

      {/* Table Card */}
      <Card>
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            {/* shadcn Select */}
            <Select
              value={statusFilter}
              onValueChange={(value) => setStatusFilter(value)}
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="text-right">
            <p className="text-sm text-muted-foreground">
              Total Quotes
            </p>
            <p className="text-2xl font-bold text-foreground">
              {quotes.length}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Quote ID
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  RFQ
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Customer
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Route
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Price
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Delivery
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Status
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Sent On
                </th>
              </tr>
            </thead>

            <tbody>
              {quotes.map((quote) => (
                <tr
                  key={quote.id}
                  className="border-b border-border hover:bg-muted/50"
                >
                  <td className="py-4 px-4">
                    <span className="font-medium text-primary">
                      {quote.id}
                    </span>
                  </td>

                  <td className="py-4 px-4 text-muted-foreground">
                    {quote.rfqId}
                  </td>

                  <td className="py-4 px-4 text-foreground">
                    {quote.customer}
                  </td>

                  <td className="py-4 px-4 text-muted-foreground">
                    {quote.route}
                  </td>

                  <td className="py-4 px-4">
                    <span className="font-semibold text-foreground">
                      {quote.price}
                    </span>
                  </td>

                  <td className="py-4 px-4 text-muted-foreground">
                    {quote.deliveryDays} days
                  </td>

                  <td className="py-4 px-4">
                    <Badge variant="outline">{quote.status}</Badge>
                  </td>

                  <td className="py-4 px-4 text-muted-foreground">
                    {quote.sentOn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <div className="text-center">
            <div className="w-16 h-16 bg-warning/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-warning">
                {quotes.filter((q) => q.status === "pending").length}
              </span>
            </div>
            <p className="text-muted-foreground">Pending Quotes</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-success">
                {quotes.filter((q) => q.status === "accepted").length}
              </span>
            </div>
            <p className="text-muted-foreground">Accepted Quotes</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-destructive">
                {quotes.filter((q) => q.status === "rejected").length}
              </span>
            </div>
            <p className="text-muted-foreground">Rejected Quotes</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Quotes;