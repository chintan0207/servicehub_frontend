import { useState } from "react"
import {
  Ship,
  Warehouse,
  Plane,
  Truck,
  Train,
  Package,
  Search,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const Herosection = () => {
  const categories = [
    { name: "Warehousing", icon: Warehouse, count: "245 services" },
    { name: "Air", icon: Plane, count: "189 services" },
    { name: "Ocean", icon: Ship, count: "432 services" },
    { name: "Road", icon: Truck, count: "356 services" },
    { name: "Rail", icon: Train, count: "128 services" },
    { name: "Intermodal", icon: Package, count: "97 services" },
  ]

  const [fromLocation, setFromLocation] = useState("")
  const [toLocation, setToLocation] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    if (fromLocation && toLocation) {
      navigate(
        `/services?from=${encodeURIComponent(fromLocation)}&to=${encodeURIComponent(toLocation)}`
      )
    }
  }

  return (
    <section
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1634638022229-5a52221886dc?auto=format&fit=crop&w=1920')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-800/60" />

      <div className="relative z-10 w-full max-w-5xl space-y-8 px-6 text-center">
        <h1 className="text-3xl font-bold text-primary-foreground md:text-5xl">
          All logistics services,
          <br /> everywhere
        </h1>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1 space-y-1 text-left">
                <label className="text-sm text-muted-foreground">From</label>
                <Input
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  placeholder="Origin city or country"
                />
              </div>

              <div className="flex-1 space-y-1 text-left">
                <label className="text-sm text-muted-foreground">To</label>
                <Input
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  placeholder="Destination city or country"
                />
              </div>

              <div className="flex items-end">
                <Button onClick={handleSearch} className="w-full md:w-auto">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.name}
                variant="secondary"
                className="flex h-auto items-center gap-3 px-5 py-3"
                onClick={() => navigate("/services")}
              >
                <Icon className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="text-sm font-medium">{category.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {category.count}
                  </p>
                </div>
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Herosection
