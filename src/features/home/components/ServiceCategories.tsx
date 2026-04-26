// import React from 'react'
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ServiceCategories = () => {
  const serviceCategories = [
    {
      title: "Domestic Transportation",
      description: "Local and regional freight services",
      color: "from-orange-50 to-orange-100",
    },
    {
      title: "Warehousing & Fulfillment",
      description: "Storage and distribution solutions",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "International Transportation",
      description: "Cross-border shipping solutions",
      color: "from-purple-50 to-purple-100",
    },
    {
      title: "Customs Services",
      description: "Clearance and compliance support",
      color: "from-green-50 to-green-100",
    },
    {
      title: "Brokerage Services",
      description: "Freight forwarding and coordination",
      color: "from-yellow-50 to-yellow-100",
    },
    {
      title: "Port Services",
      description: "Terminal and port operations",
      color: "from-red-50 to-red-100",
    },
  ];

  return (
    <div>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Service Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our comprehensive logistics solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <Link key={index} to="/services">
                <Card
                  className={`bg-gradient-to-br ${category.color} hover:shadow-xl transition-all cursor-pointer h-full border-2 border-transparent hover:border-primary`}
                >
                  <div className="text-center p-8">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-primary font-semibold">
                      Explore Services
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};