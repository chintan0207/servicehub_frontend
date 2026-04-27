import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Clock, MapPin, Package, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const RFQMarketPlace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modeFilter, setModeFilter] = useState("all");
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedRFQ, setSelectedRFQ] = useState("");

  const rfqs = [
    {
      id: "RFQ-1240",
      customer: "Tech Solutions Ltd.",
      route: "Singapore, SG → Sydney, AU",
      goods: "Electronics",
      weight: "1,500 kg",
      mode: "Air Freight",
      urgency: "Express",
      posted: "2 hours ago",
      budget: "$3,000 - $4,000",
    },
    {
      id: "RFQ-1241",
      customer: "Manufacturing Inc.",
      route: "London, UK → New York, US",
      goods: "Machinery",
      weight: "5,000 kg",
      mode: "Sea Freight",
      urgency: "Standard",
      posted: "5 hours ago",
      budget: "$6,000 - $8,000",
    },
    {
      id: "RFQ-1242",
      customer: "Fashion Exports",
      route: "Shanghai, CN → Hamburg, DE",
      goods: "Textiles",
      weight: "2,200 kg",
      mode: "Sea Freight",
      urgency: "Standard",
      posted: "1 day ago",
      budget: "$2,500 - $3,500",
    },
  ];

  const handleSendQuote = (rfqId:any) => {
    setSelectedRFQ(rfqId);
    setShowQuoteModal(true);
  };

  const handleSubmitQuote = () => {
    toast.success("Quote submitted successfully!");
    setShowQuoteModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          RFQ Marketplace
        </h1>
        <p className="text-muted-foreground">
          Browse and bid on shipping requests from customers worldwide
        </p>
      </div>

      <Card>
        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

            <Input
              placeholder="Search by location, goods type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12"
            />
          </div>

          <Select
            value={modeFilter}
            onValueChange={(value) => setModeFilter(value)}
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Modes" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Modes</SelectItem>
              <SelectItem value="air">Air Freight</SelectItem>
              <SelectItem value="sea">Sea Freight</SelectItem>
              <SelectItem value="road">Road Freight</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* RFQ Cards */}
        <div className="grid gap-4">
          {rfqs.map((rfq) => (
            <Card
              key={rfq.id}
              className="bg-muted/50 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-primary">
                      {rfq.id}
                    </h3>

                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {rfq.mode}
                    </span>

                    <span className="px-3 py-1 bg-warning/10 text-warning rounded-full text-sm">
                      {rfq.urgency}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Posted by {rfq.customer} • {rfq.posted}
                  </p>
                </div>

                <Button onClick={() => handleSendQuote(rfq.id)}>
                  Send Quote
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Route
                    </p>
                    <p className="font-medium text-foreground">
                      {rfq.route}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Shipment Details
                    </p>
                    <p className="font-medium text-foreground">
                      {rfq.goods}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {rfq.weight}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Customer Budget
                    </p>
                    <p className="font-medium text-foreground">
                      {rfq.budget}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Showing 1 to 3 of 42 RFQs
          </p>

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

      {/* Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                Send Quote for {selectedRFQ}
              </h2>

              <button
                onClick={() => setShowQuoteModal(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label>Your Price (USD)</label>
                <Input type="number" placeholder="Enter your quote price" />
              </div>

              <div className="space-y-2">
                <label>Delivery Time (days)</label>
                <Input type="number" placeholder="Expected delivery time" />
              </div>

              <div className="space-y-2">
                <label>Message to Customer</label>
                <Textarea placeholder="Describe your services..." />
              </div>

              <div className="space-y-2">
                <label>Additional Services</label>

                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-muted-foreground">
                      Insurance Coverage
                    </span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-muted-foreground">
                      Door-to-Door Service
                    </span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-muted-foreground">
                      Real-time Tracking
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setShowQuoteModal(false)}
                className="flex-1"
              >
                Cancel
              </Button>

              <Button
                onClick={handleSubmitQuote}
                className="flex-1"
              >
                Submit Quote
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default RFQMarketPlace;