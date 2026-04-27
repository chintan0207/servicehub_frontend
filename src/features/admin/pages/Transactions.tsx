import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Download } from "lucide-react";
import { useState } from "react";

const Transactions = () => {
  const [typeFilter, setTypeFilter] = useState("all");

  const transactions = [
    {
      id: "TXN-9001",
      orderId: "ORD-5678",
      customer: "Fashion Exports",
      agent: "Global Shipping Co.",
      amount: "$3,200",
      platformFee: "$160",
      status: "completed",
      date: "April 19, 2026",
    },
    {
      id: "TXN-9002",
      orderId: "ORD-5679",
      customer: "Tech Solutions Ltd.",
      agent: "Pacific Logistics",
      amount: "$4,100",
      platformFee: "$205",
      status: "pending",
      date: "April 21, 2026",
    },
    {
      id: "TXN-9003",
      orderId: "ORD-5675",
      customer: "Manufacturing Inc.",
      agent: "TransOcean Express",
      amount: "$5,500",
      platformFee: "$275",
      status: "completed",
      date: "April 18, 2026",
    },
  ];

  const totalRevenue = transactions
    .filter((t) => t.status === "completed")
    .reduce((sum, t) => sum + parseFloat(t.platformFee.replace(/[$,]/g, "")), 0);

  const pendingRevenue = transactions
    .filter((t) => t.status === "pending")
    .reduce((sum, t) => sum + parseFloat(t.platformFee.replace(/[$,]/g, "")), 0);

  const getStatusVariant = (status:any) => {
    return status === "completed" ? "default" : "secondary";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Transactions
          </h1>
          <p className="text-muted-foreground">
            Platform payment history and revenue tracking
          </p>
        </div>

        <Button variant="outline">
          <Download className="w-5 h-5 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-success mb-1">
              ${totalRevenue.toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground">
              Completed Revenue
            </p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-warning mb-1">
              ${pendingRevenue.toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground">
              Pending Revenue
            </p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary mb-1">
              {transactions.length}
            </p>
            <p className="text-sm text-muted-foreground">
              Total Transactions
            </p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-info mb-1">5%</p>
            <p className="text-sm text-muted-foreground">
              Platform Fee
            </p>
          </div>
        </Card>
      </div>

      {/* Table */}
      <Card>
        <div className="flex justify-between items-center mb-6">
          <Select
            value={typeFilter}
            onValueChange={(value) => setTypeFilter(value)}
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Transactions" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Transactions</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Transaction ID
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Order ID
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Customer
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Agent
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Amount
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Platform Fee
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Status
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((txn) => (
                <tr
                  key={txn.id}
                  className="border-b border-border hover:bg-muted/50"
                >
                  <td className="py-4 px-4">
                    <span className="font-medium text-primary">
                      {txn.id}
                    </span>
                  </td>

                  <td className="py-4 px-4 text-muted-foreground">
                    {txn.orderId}
                  </td>

                  <td className="py-4 px-4 text-foreground">
                    {txn.customer}
                  </td>

                  <td className="py-4 px-4 text-foreground">
                    {txn.agent}
                  </td>

                  <td className="py-4 px-4">
                    <span className="font-semibold text-foreground">
                      {txn.amount}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <span className="font-semibold text-success">
                      {txn.platformFee}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <Badge variant={getStatusVariant(txn.status)}>
                      {txn.status}
                    </Badge>
                  </td>

                  <td className="py-4 px-4 text-muted-foreground">
                    {txn.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Transactions;