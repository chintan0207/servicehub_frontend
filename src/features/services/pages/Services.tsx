import { Button } from "@/components/ui/button"
import { Search, Ship } from "lucide-react"
import ServiceCard from "../components/ServiceCard"
import { Input } from "@/components/ui/input"

const Services = () => {
  const services = [
    {
      id: "SRV-001",
      name: "Tata Consultancy Services (TCS)",
      category: "International Transport",
      image:
        "https://images.unsplash.com/photo-1634638022229-5a52221886dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      badge: "NEW",
      origin: "Mumbai, India",
      destination: "Multiple Ports",
      provider: "Ocean Logistics",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: "SRV-002",
      name: "Agent Test Company",
      category: "Customs Services",
      image:
        "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      badge: "PRO",
      origin: "Dubai, UAE",
      destination: "European Union",
      provider: "Euro Transit",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: "SRV-003",
      name: "Logistics 360",
      category: "Warehousing",
      image:
        "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      badge: "TOP",
      origin: "Singapore",
      destination: "ASEAN Region",
      provider: "Storage Plus",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: "SRV-004",
      name: "Shine Global Freight",
      category: "Air Freight",
      image:
        "https://images.unsplash.com/photo-1713098965471-d324f294a71d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      badge: "NEW",
      origin: "Hong Kong",
      destination: "Americas",
      provider: "Air Solutions",
      rating: 4.6,
      reviews: 92,
    },
    {
      id: "SRV-005",
      name: "Express Cargo Solutions",
      category: "Road Transport",
      image:
        "https://images.unsplash.com/photo-1773096324746-c08da58bc620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      badge: "VERIFIED",
      origin: "Berlin, Germany",
      destination: "Europe",
      provider: "Road Masters",
      rating: 4.8,
      reviews: 201,
    },
    {
      id: "SRV-006",
      name: "Pacific Container Services",
      category: "Sea Freight",
      image:
        "https://images.unsplash.com/photo-1632517306067-b54ab4d1f98d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
      badge: "TOP",
      origin: "Los Angeles, USA",
      destination: "Asia-Pacific",
      provider: "Pacific Shipping",
      rating: 4.9,
      reviews: 178,
    },
  ]

 return (
   <div className="min-h-screen bg-background">
     <div className="mx-auto max-w-7xl px-6 py-8">
       {/* HEADER */}
       <div className="mb-6">
         <h1 className="mb-2 text-2xl font-semibold text-foreground">
           Featured Services
         </h1>

         <p className="mb-4 text-sm text-muted-foreground">
           Browse trusted logistics providers and services worldwide
         </p>

         {/* SEARCH */}
         <div className="relative max-w-xl">
           <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

           <Input
             type="text"
             placeholder="Search services, providers, locations..."
             className="h-10 rounded-lg pl-10"
           />
         </div>
       </div>

       {/* GRID */}
       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
         {services.map((service) => (
           <ServiceCard key={service.id} {...service} />
         ))}
       </div>

       {/* PAGINATION */}
       <div className="mt-8 flex justify-center">
         <div className="flex items-center gap-1.5">
           <Button size="sm" variant="outline">
             ‹
           </Button>

           {[1, 2, 3, 4, 5].map((page) => (
             <Button
               key={page}
               size="sm"
               variant={page === 1 ? "default" : "outline"}
               className="h-8 w-8 p-0"
             >
               {page}
             </Button>
           ))}

           <span className="px-2 text-xs text-muted-foreground">...</span>

           <Button size="sm" variant="outline" className="h-8 w-8 p-0">
             59
           </Button>

           <Button size="sm" variant="outline">
             ›
           </Button>
         </div>
       </div>
     </div>
   </div>
 )
}

export default Services
