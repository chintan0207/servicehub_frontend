import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const BusinessesWorldwide = () => {
  return (
    <div>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join thousands of companies that rely on ShipGlobal for their international
                shipping needs. From small businesses to enterprise logistics operations.
              </p>

              <div className="flex gap-12 mb-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
                  <div className="text-muted-foreground">On-time Delivery</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1634638022229-5a52221886dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="Container ship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <Card className="hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "ShipGlobal has transformed how we handle international logistics..."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sarah Martinez</div>
                  <div className="text-sm text-muted-foreground">
                    Supply Chain Director
                  </div>
                </div>
              </div>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "The real-time tracking and communication tools make it easy..."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center text-success-foreground font-semibold">
                  JC
                </div>
                <div>
                  <div className="font-semibold text-foreground">James Chen</div>
                  <div className="text-sm text-muted-foreground">
                    E-commerce Owner
                  </div>
                </div>
              </div>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "As a logistics provider, ShipGlobal connects us with quality customers..."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold">
                  AP
                </div>
                <div>
                  <div className="font-semibold text-foreground">Anna Patel</div>
                  <div className="text-sm text-muted-foreground">
                    Logistics Agent
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessesWorldwide;