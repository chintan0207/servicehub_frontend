import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge, Package } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [activeTab, setActiveTab] = useState<"active" | "completed">("active");

  const activeOrders = [
    {
      id: "ORD-5678",
      rfqId: "RFQ-1236",
      route: "Dubai, AE → London, UK",
      status: "in_transit",
      agent: "Global Shipping Co.",
      estimatedDelivery: "April 30, 2026",
    },
    {
      id: "ORD-5679",
      rfqId: "RFQ-1240",
      route: "Tokyo, JP → Sydney, AU",
      status: "accepted",
      agent: "Pacific Logistics",
      estimatedDelivery: "May 5, 2026",
    },
  ];

  const completedOrders = [
    {
      id: "ORD-5670",
      rfqId: "RFQ-1220",
      route: "Shanghai, CN → Los Angeles, US",
      status: "delivered",
      agent: "TransOcean Express",
      deliveredOn: "April 15, 2026",
    },
    {
      id: "ORD-5671",
      rfqId: "RFQ-1221",
      route: "Mumbai, IN → Singapore, SG",
      status: "delivered",
      agent: "Asia Freight Services",
      deliveredOn: "April 10, 2026",
    },
  ];

  const orders = activeTab === "active" ? activeOrders : completedOrders;

  return (
    <div>
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">My Orders</h1>
          <p className="text-muted-foreground">Track and manage your shipments</p>
        </div>

        <div className="flex gap-4 border-b border-border">
          <button
            onClick={() => setActiveTab("active")}
            className={`px-6 py-3 font-medium transition-colors border-b-2 ${
              activeTab === "active"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Active Orders ({activeOrders.length})
          </button>

          <button
            onClick={() => setActiveTab("completed")}
            className={`px-6 py-3 font-medium transition-colors border-b-2 ${
              activeTab === "completed"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Completed ({completedOrders.length})
          </button>
        </div>

        <div className="grid gap-4">
          {orders.map((order) => (
            <Card key={order.id} className="hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{order.id}</h3>
                    <Badge fontVariant="outline">{order.status}</Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">{order.route}</p>

                  <div className="flex gap-8">
                    <div>
                      <p className="text-sm text-muted-foreground">RFQ Reference</p>
                      <p className="font-medium text-primary">{order.rfqId}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Logistics Provider</p>
                      <p className="font-medium text-foreground">{order.agent}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">
                        {activeTab === "active" ? "Estimated Delivery" : "Delivered On"}
                      </p>

                      <p className="font-medium text-foreground">
                        {activeTab === "active"
                          ? (order as (typeof activeOrders)[0]).estimatedDelivery
                          : (order as (typeof completedOrders)[0]).deliveredOn}
                      </p>
                    </div>
                  </div>
                </div>

                <Link to={`/customer/orders/${order.id}`}>
                  <Button variant="default">View Details</Button>
                </Link>

              </div>
            </Card>
          ))}
        </div>

        {orders.length === 0 && (
          <Card className="text-center py-16">
            <div className="max-w-md mx-auto">

              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-10 h-10 text-muted-foreground" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                No Orders Found
              </h3>

              <p className="text-muted-foreground mb-6">
                {activeTab === "active"
                  ? "You don't have any active orders at the moment."
                  : "You don't have any completed orders yet."}
              </p>

              <Link to="/customer/rfqs">
                <Button variant="default">View Your RFQs</Button>
              </Link>

            </div>
          </Card>
        )}

      </div>
    </div>
  )
}

export default Orders