import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Download, FileText, MapPin, MessageSquare, Package, User } from "lucide-react";
import { Link } from "react-router-dom"

const OrderDetail = () => {
  const orderData = {
    id: "ORD-5678",
    rfqId: "RFQ-1236",
    status: "in_transit",
    created: "April 19, 2026",
    estimatedDelivery: "April 30, 2026",
    goods: "Textiles",
    weight: "1,200 kg",
    pickupLocation: "Dubai, United Arab Emirates",
    deliveryLocation: "London, United Kingdom",
    agent: {
      name: "Global Shipping Co.",
      rating: 4.8,
      contact: "contact@globalshipping.com",
    },
  };

  const timeline = [
    { status: "Order Placed", date: "April 19, 2026 10:30 AM", completed: true },
    { status: "Picked Up", date: "April 20, 2026 2:15 PM", completed: true },
    { status: "In Transit", date: "April 21, 2026 8:00 AM", completed: true },
    { status: "Customs Clearance", date: "April 28, 2026 (Est.)", completed: false },
    { status: "Out for Delivery", date: "April 30, 2026 (Est.)", completed: false },
    { status: "Delivered", date: "April 30, 2026 (Est.)", completed: false },
  ];

  const documents = [
    { name: "Bill of Lading", type: "PDF", size: "245 KB" },
    { name: "Commercial Invoice", type: "PDF", size: "128 KB" },
    { name: "Packing List", type: "PDF", size: "95 KB" },
  ];

  const messages = [
    {
      sender: "Global Shipping Co.",
      message: "Your shipment has been picked up and is on its way to the port.",
      time: "2 days ago",
      isAgent: true,
    },
    {
      sender: "You",
      message: "Thank you for the update. Please confirm when it reaches customs.",
      time: "2 days ago",
      isAgent: false,
    },
  ];

  return (
    <div>
      <div className="space-y-6">

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-foreground">Order {orderData.id}</h1>
              <Badge variant="outline">{orderData.status}</Badge>
            </div>

            <p className="text-muted-foreground">
              RFQ Reference:{" "}
              <Link to={`/rfqs/${orderData.rfqId}`} className="text-primary hover:underline">
                {orderData.rfqId}
              </Link>
            </p>
          </div>

          <Button variant="outline">
            <Download className="w-5 h-5" />
            Download Invoice
          </Button>
        </div>

        <Card>
          <h2 className="text-xl font-semibold text-foreground mb-6">Shipment Timeline</h2>

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="relative">

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.completed ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.completed ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                  </div>

                  {index < timeline.length - 1 && (
                    <div
                      className={`absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-8 ${
                        item.completed ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}

                </div>

                <div className="flex-1 pt-2">
                  <h3 className={`font-semibold ${item.completed ? "text-foreground" : "text-muted-foreground"}`}>
                    {item.status}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">

          <Card>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Package className="w-6 h-6 text-primary" />
              Shipment Details
            </h2>

            <div className="space-y-3">
              {[
                ["Goods Type", orderData.goods],
                ["Weight", orderData.weight],
                ["Order Date", orderData.created],
                ["Est. Delivery", orderData.estimatedDelivery],
              ].map(([label, value], i) => (
                <div key={i} className="flex justify-between py-2 border-b border-border last:border-none">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <User className="w-6 h-6 text-primary" />
              Logistics Provider
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Company</span>
                <span className="text-foreground font-medium">{orderData.agent.name}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Rating</span>
                <span className="text-foreground font-medium">⭐ {orderData.agent.rating}</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Contact</span>
                <span className="text-primary font-medium">{orderData.agent.contact}</span>
              </div>
            </div>

            <Link to="/chat">
              <Button variant="outline" className="w-full mt-4">
                <MessageSquare className="w-5 h-5" />
                Send Message
              </Button>
            </Link>
          </Card>

        </div>

        <Card>
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" />
            Route
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Pickup Location</p>
              <p className="text-foreground font-medium">{orderData.pickupLocation}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">Delivery Location</p>
              <p className="text-foreground font-medium">{orderData.deliveryLocation}</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            Documents
          </h2>

          <div className="space-y-3">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{doc.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {doc.type} • {doc.size}
                    </p>
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-primary" />
            Recent Messages
          </h2>

          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex gap-3 ${msg.isAgent ? "" : "flex-row-reverse"}`}>

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    msg.isAgent ? "bg-primary/10 text-primary" : "bg-muted text-foreground"
                  }`}
                >
                  {msg.sender.substring(0, 2).toUpperCase()}
                </div>

                <div className={`flex-1 ${msg.isAgent ? "" : "text-right"}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-foreground">{msg.sender}</p>
                    <p className="text-sm text-muted-foreground">{msg.time}</p>
                  </div>

                  <div
                    className={`inline-block p-4 rounded-xl ${
                      msg.isAgent ? "bg-muted" : "bg-primary/10"
                    }`}
                  >
                    <p className="text-foreground">{msg.message}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <Link to="/chat">
            <Button variant="outline" className="w-full mt-4">
              View Full Conversation
            </Button>
          </Link>
        </Card>

      </div>
    </div>
  )
}

export default OrderDetail