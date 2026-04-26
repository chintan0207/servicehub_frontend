import  { useState } from 'react';
import {
  Ship,
  Warehouse,
  Plane,
  Truck,
  Train,
  Package,
  Search,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Herosection = () => {
     const categories = [
    { name: "Warehousing", icon: Warehouse, count: "245 services" },
    { name: "Air", icon: Plane, count: "189 services" },
    { name: "Ocean", icon: Ship, count: "432 services" },
    { name: "Road", icon: Truck, count: "356 services" },
    { name: "Rail", icon: Train, count: "128 services" },
    { name: "Intermodal", icon: Package, count: "97 services" },
  ];
   const [fromLocation, setFromLocation] = useState("");
   const [toLocation, setToLocation] = useState("");
    const navigate = useNavigate();
   const handleSearch = () => {
    if (fromLocation && toLocation) {
      navigate("/services");
    }
  };
  return (
    <div>
        <section
        className="relative overflow-hidden min-h-[600px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1634638022229-5a52221886dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-800/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            All logistics services, everywhere
          </h1>

          <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <label className="absolute -top-2 left-4 bg-white px-2 text-sm text-[#64748B]">
                  From
                </label>
                <input
                  type="text"
                  placeholder="Origin city or country"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                />
              </div>

              <div className="flex-1 relative">
                <label className="absolute -top-2 left-4 bg-white px-2 text-sm text-[#64748B]">
                  To
                </label>
                <input
                  type="text"
                  placeholder="Destination city or country"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-[#E2E8F0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                />
              </div>

              <button
                onClick={handleSearch}
                className="px-8 py-4 bg-[#FF6B35] hover:bg-[#ff5722] text-white rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => navigate("/services")}
                className="bg-white/90 hover:bg-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 transition-all"
              >
                <category.icon className="w-5 h-5 text-[#2563EB]" />
                <div className="text-left">
                  <p className="font-semibold text-[#0F172A]">{category.name}</p>
                  <p className="text-xs text-[#64748B]">{category.count}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Herosection
