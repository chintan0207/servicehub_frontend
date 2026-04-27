import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CheckCircle, Search, XCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const users = [
    {
      id: "U-1001",
      name: "Tech Solutions Ltd.",
      email: "contact@techsolutions.com",
      role: "customer",
      status: "active",
      joined: "March 15, 2026",
      orders: 12,
    },
    {
      id: "U-1002",
      name: "Global Shipping Co.",
      email: "info@globalshipping.com",
      role: "agent",
      status: "pending",
      joined: "April 10, 2026",
      orders: 23,
    },
    {
      id: "U-1003",
      name: "Fashion Exports",
      email: "hello@fashionexports.com",
      role: "customer",
      status: "active",
      joined: "February 20, 2026",
      orders: 8,
    },
    {
      id: "U-1004",
      name: "Pacific Logistics",
      email: "contact@pacificlogistics.com",
      role: "agent",
      status: "active",
      joined: "January 5, 2026",
      orders: 19,
    },
  ];

  const handleApprove = (userId:any) => {
    toast.success(`User ${userId} approved successfully!`);
  };

  const handleReject = (userId:any) => {
    toast.error(`User ${userId} rejected.`);
  };

  const getRoleVariant = (role:any) => {
    return role === "customer" ? "secondary" : "default";
  };

  const getStatusVariant = (status:any) => {
    return status === "active" ? "default" : "secondary";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          User Management
        </h1>
        <p className="text-muted-foreground">
          Manage platform users and approve new agent registrations
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary mb-1">
              {users.filter((u) => u.role === "customer").length}
            </p>
            <p className="text-sm text-muted-foreground">Customers</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-success mb-1">
              {
                users.filter(
                  (u) => u.role === "agent" && u.status === "active"
                ).length
              }
            </p>
            <p className="text-sm text-muted-foreground">
              Active Agents
            </p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-warning mb-1">
              {users.filter((u) => u.status === "pending").length}
            </p>
            <p className="text-sm text-muted-foreground">
              Pending Approval
            </p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-info mb-1">
              {users.length}
            </p>
            <p className="text-sm text-muted-foreground">
              Total Users
            </p>
          </div>
        </Card>
      </div>

      {/* Table */}
      <Card>
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

            <Input
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12"
            />
          </div>

          <Select
            value={roleFilter}
            onValueChange={(value) => setRoleFilter(value)}
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Users" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              <SelectItem value="customer">Customers</SelectItem>
              <SelectItem value="agent">Agents</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-muted-foreground">
                  User ID
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Name
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Email
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Role
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Status
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Joined
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Orders
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-border hover:bg-muted/50"
                >
                  <td className="py-4 px-4">
                    <span className="font-medium text-primary">
                      {user.id}
                    </span>
                  </td>

                  <td className="py-4 px-4 text-foreground font-medium">
                    {user.name}
                  </td>

                  <td className="py-4 px-4 text-muted-foreground">
                    {user.email}
                  </td>

                  <td className="py-4 px-4">
                    <Badge variant={getRoleVariant(user.role)}>
                      {user.role}
                    </Badge>
                  </td>

                  <td className="py-4 px-4">
                    <Badge variant={getStatusVariant(user.status)}>
                      {user.status}
                    </Badge>
                  </td>

                  <td className="py-4 px-4 text-muted-foreground">
                    {user.joined}
                  </td>

                  <td className="py-4 px-4 text-foreground">
                    {user.orders}
                  </td>

                  <td className="py-4 px-4">
                    {user.status === "pending" ? (
                      <div className="flex gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="text-success hover:bg-success/10"
                          onClick={() => handleApprove(user.id)}
                        >
                          <CheckCircle className="w-4 h-4" />
                        </Button>

                        <Button
                          size="icon"
                          variant="outline"
                          className="text-destructive hover:bg-destructive/10"
                          onClick={() => handleReject(user.id)}
                        >
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    )}
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

export default UserManagement;