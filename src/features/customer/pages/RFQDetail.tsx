import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge, Calendar, MapPin, Package, TrendingUp, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const RFQDetail = () => {
  const { id } = useParams();

  const rfqData = {
    id: id || "RFQ-1234",
    status: "open",
    created: "April 21, 2026 at 2:30 PM",
    goods: "Electronics",
    weight: "2,500 kg",
    dimensions: "120 × 80 × 100 cm",
    pickupLocation: "Shanghai, China",
    deliveryLocation: "Los Angeles, United States",
    mode: "Sea Freight",
    urgency: "Standard (3-4 weeks)",
    notes: "Handle with care. Temperature controlled shipping required.",
  };

  const quotes = [
    {
      id: "Q-001",
      agent: "Global Shipping Co.",
      rating: 4.8,
      price: "$4,500",
      deliveryDays: 21,
      message: "We offer temperature controlled containers for your electronics.",
    },
    {
      id: "Q-002",
      agent: "Pacific Logistics",
      rating: 4.9,
      price: "$4,200",
      deliveryDays: 25,
      message: "Best rates with door-to-door service included.",
    },
    {
      id: "Q-003",
      agent: "TransOcean Express",
      rating: 4.7,
      price: "$4,800",
      deliveryDays: 18,
      message: "Express shipping with insurance coverage.",
    },
  ];

  return (
    <div>
      <div className="space-y-6">

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-foreground">{rfqData.id}</h1>
              <Badge fontVariant="outline">{rfqData.status}</Badge>
            </div>
            <p className="text-muted-foreground">Created on {rfqData.created}</p>
          </div>

          <Link to={`/customer/compare/${id}`}>
            <Button variant="outline">
              <TrendingUp className="w-5 h-5" />
              Compare Quotes
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <Card>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Package className="w-6 h-6 text-primary" />
              Shipment Details
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Goods Type</span>
                <span className="text-foreground font-medium">{rfqData.goods}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Weight</span>
                <span className="text-foreground font-medium">{rfqData.weight}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Dimensions</span>
                <span className="text-foreground font-medium">{rfqData.dimensions}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Shipping Mode</span>
                <span className="text-foreground font-medium">{rfqData.mode}</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Urgency</span>
                <span className="text-foreground font-medium">{rfqData.urgency}</span>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Route Information
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Pickup Location</p>
                <p className="text-foreground font-medium">{rfqData.pickupLocation}</p>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full border-t-2 border-dashed border-border relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground text-sm mb-1">Delivery Location</p>
                <p className="text-foreground font-medium">{rfqData.deliveryLocation}</p>
              </div>
            </div>
          </Card>

        </div>

        {rfqData.notes && (
          <Card>
            <h2 className="text-xl font-semibold text-foreground mb-3">Additional Notes</h2>
            <p className="text-muted-foreground">{rfqData.notes}</p>
          </Card>
        )}

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Received Quotes ({quotes.length})
          </h2>

          <div className="grid gap-4">
            {quotes.map((quote) => (
              <Card key={quote.id} className="hover:shadow-md transition-shadow">

                <div className="flex items-start justify-between">
                  <div className="flex-1">

                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{quote.agent}</h3>

                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-sm text-muted-foreground">{quote.rating}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{quote.message}</p>

                    <div className="flex gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Delivery Time</p>
                        <p className="font-semibold text-foreground">{quote.deliveryDays} days</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">Quote ID</p>
                        <p className="font-semibold text-foreground">{quote.id}</p>
                      </div>
                    </div>

                  </div>

                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary mb-4">{quote.price}</p>

                    {/* FIXED ERROR */}
                    <Button variant="default">Accept Quote</Button>
                  </div>

                </div>

              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default RFQDetail