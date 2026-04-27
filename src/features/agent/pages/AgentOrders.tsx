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
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";
import { toast } from "sonner";

const AgentOrders = () => {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("");

  const orders = [
    {
      id: "ORD-5678",
      customer: "Fashion Exports",
      route: "Dubai, AE → London, UK",
      status: "in_transit",
      estimatedDelivery: "April 30, 2026",
      revenue: "$3,200",
    },
    {
      id: "ORD-5680",
      customer: "Tech Solutions Ltd.",
      route: "Singapore, SG → Sydney, AU",
      status: "accepted",
      estimatedDelivery: "May 8, 2026",
      revenue: "$4,100",
    },
    {
      id: "ORD-5675",
      customer: "Manufacturing Inc.",
      route: "Tokyo, JP → Los Angeles, US",
      status: "delivered",
      deliveredOn: "April 18, 2026",
      revenue: "$5,500",
    },
  ];

  const handleUpdateStatus = (orderId:any) => {
    setSelectedOrder(orderId);
    setShowStatusModal(true);
  };

  const handleSubmitStatus = () => {
    toast.success("Order status updated successfully!");
    setShowStatusModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          My Orders
        </h1>
        <p className="text-muted-foreground">
          Manage and track all your active shipments
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary mb-1">
              {orders.filter((o) => o.status === "accepted").length}
            </p>
            <p className="text-sm text-muted-foreground">New Orders</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-warning mb-1">
              {orders.filter((o) => o.status === "in_transit").length}
            </p>
            <p className="text-sm text-muted-foreground">In Transit</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-success mb-1">
              {orders.filter((o) => o.status === "delivered").length}
            </p>
            <p className="text-sm text-muted-foreground">Delivered</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-info mb-1">
              $
              {orders
                .reduce(
                  (sum, o) =>
                    sum + parseInt(o.revenue.replace(/[$,]/g, "")),
                  0
                )
                .toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">
              Total Revenue
            </p>
          </div>
        </Card>
      </div>

      {/* Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Order ID
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Customer
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Route
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Status
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Delivery Date
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Revenue
                </th>
                <th className="text-left py-4 px-4 text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-border hover:bg-muted/50"
                >
                  <td className="py-4 px-4">
                    <span className="font-medium text-primary">
                      {order.id}
                    </span>
                  </td>

                  <td className="py-4 px-4 text-foreground">
                    {order.customer}
                  </td>

                  <td className="py-4 px-4 text-muted-foreground">
                    {order.route}
                  </td>

                  <td className="py-4 px-4">
                    <Badge variant="outline">{order.status}</Badge>
                  </td>

                  <td className="py-4 px-4 text-muted-foreground">
                    {order.status === "delivered"
                      ? order.deliveredOn
                      : order.estimatedDelivery}
                  </td>

                  <td className="py-4 px-4">
                    <span className="font-semibold text-success">
                      {order.revenue}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleUpdateStatus(order.id)}
                    >
                      Update Status
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Modal */}
      {showStatusModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                Update Order Status
              </h2>

              <button
                onClick={() => setShowStatusModal(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Order ID:{" "}
                <span className="text-primary font-medium">
                  {selectedOrder}
                </span>
              </p>

              {/* shadcn Select */}
              <div className="space-y-2">
                <label>New Status</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="picked_up">Picked Up</SelectItem>
                    <SelectItem value="in_transit">In Transit</SelectItem>
                    <SelectItem value="customs">
                      Customs Clearance
                    </SelectItem>
                    <SelectItem value="out_for_delivery">
                      Out for Delivery
                    </SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Textarea */}
              <div className="space-y-2">
                <label>Update Note (Optional)</label>
                <Textarea placeholder="Add any notes..." />
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setShowStatusModal(false)}
                className="flex-1"
              >
                Cancel
              </Button>

              <Button
                onClick={handleSubmitStatus}
                className="flex-1"
              >
                Update Status
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AgentOrders;