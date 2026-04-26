import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Clock, DollarSign, Globe, MapPin } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { Star } from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";

export const ServiceDetails = () => {
  const { id } = useParams();

    const service = {
    id: id || "SRV-001",
    name: "Tata Consultancy Services (TCS)",
    category: "International Transport",
    image: "https://images.unsplash.com/photo-1634638022229-5a52221886dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    rating: 4.8,
    reviews: 124,
    provider: "Ocean Logistics Ltd.",
    description:
      "Full container load (FCL) ocean freight services with door-to-door delivery. We specialize in containerized cargo transportation across major trade routes with reliable transit times and competitive pricing.",
    serviceType: "FCL - Full Container Load",
    coverageArea: "Mumbai, India → Northern Africa",
    transitTime: "15-20 days",
    pricing: "On request / Negotiable",
    paymentOptions: "Escrow / Advance Payment",
    listingValidity: "Valid through Jul 31, 2026",
  };

   const scopes = [
    "Service Type: Ocean or Sea cargo transport",
    "Availability: Global coverage",
    "Export related Operations included",
    "Customs clearance services available",
  ];
    const goodsCategories = [
    "Agriculture / Agricultural Equipment / Agri-Machinery",
    "Automotives and parts / Branded Cars / Passenger Vehicles",
    "Building Material / Construction Machines / Heavy Equipment",
  ];
   const features = [
    "24/7 Customer Support",
    "Real-time Tracking",
    "Customs Clearance Assistance",
    "Door-to-Door Delivery",
    "Insurance Coverage Available",
    "Container Consolidation Services",
    "Storage & Warehousing",
    "Export Documentation Support",
  ];

  const { isAuthenticated } = useAuthStore();

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden p-0">
              <img src={service.image} alt={service.name} className="w-full h-80 object-cover" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-success/10 text-success rounded-full text-sm font-semibold mb-3">
                      NEW
                    </span>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{service.name}</h1>
                    <p className="text-lg text-muted-foreground">{service.category}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-warning text-warning" />
                    <span className="text-xl font-bold text-foreground">{service.rating}</span>
                    <span className="text-muted-foreground">({service.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <Globe className="w-5 h-5" />
                  <span>Provided by {service.provider}</span>
                </div>

                <p className="text-foreground leading-relaxed">{service.description}</p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Scope & Details of the Service
              </h2>
              <div className="space-y-3">
                {scopes.map((scope, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{scope}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-foreground mb-4">Goods Categories</h2>
              <div className="space-y-2">
                {goodsCategories.map((category, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">{category}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Features</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <h3 className="text-xl font-bold text-foreground mb-4">Service Information</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Service Category</p>
                  <p className="font-semibold text-foreground">{service.category}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Service Type</p>
                  <p className="font-semibold text-foreground">{service.serviceType}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Coverage Area</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <p className="font-semibold text-foreground">{service.coverageArea}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Transit Time</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <p className="font-semibold text-foreground">{service.transitTime}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pricing</p>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <p className="font-semibold text-foreground">{service.pricing}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Payment Options</p>
                  <p className="font-semibold text-foreground">{service.paymentOptions}</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">{service.listingValidity}</p>
                </div>
              </div>

              <div className="space-y-3">
                {isAuthenticated ? (
                  <>
                    <Button variant="default" className="w-full">Request a Quote</Button>
                    <Button variant="outline" className="w-full">Contact Provider</Button>
                  </>
                ) : (
                  <>
                    <Link to="/signup">
                      <Button variant="default" className="w-full">Sign Up to Request Quote</Button>
                    </Link>
                    <Link to="/login">
                      <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                  </>
                )}
              </div>
            </Card>

            <Card className="bg-muted border-border">
              <h3 className="font-bold text-foreground mb-3">Our Service Guarantee</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Verified logistics providers</p>
                <p>✓ Secure payment protection</p>
                <p>✓ 24/7 customer support</p>
                <p>✓ Real-time tracking</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}