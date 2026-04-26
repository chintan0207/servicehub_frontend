import { Card } from "@/components/ui/card";
import {
  Package,
  Globe,
  TrendingUp,
  Shield,
} from "lucide-react";

const WhyShipGlobal = () => {
  return (
    <div>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose ShipGlobal?
            </h2>
            <p className="text-xl text-muted-foreground">
              The smartest way to manage your global logistics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Compare Multiple Quotes
              </h3>
              <p className="text-muted-foreground">
                Get competitive quotes from verified logistics providers worldwide
              </p>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Global Logistics Network
              </h3>
              <p className="text-muted-foreground">
                Access thousands of logistics partners across 150+ countries
              </p>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Secure Payments
              </h3>
              <p className="text-muted-foreground">
                Escrow protection and transparent pricing for peace of mind
              </p>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Real-time Tracking
              </h3>
              <p className="text-muted-foreground">
                Monitor your shipments every step of the way with live updates
              </p>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyShipGlobal;