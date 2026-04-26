import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useAuthStore } from "@/stores/useAuthStore"
import { ArrowRight, Plane, Ship, Train, Truck } from "lucide-react"
import { Link } from "react-router-dom"

const LiveRequests = () => {
  const { isAuthenticated } = useAuthStore()

  const requests = [
    {
      id: "RFQ20260423USINOJT0001",
      origin: { country: "Cache County, United States", flag: "🇺🇸" },
      destination: { country: "Arambol, India", flag: "🇮🇳" },
      mode: "ocean",
      postedDate: "23/04/2026 09:51 AM",
      category: "Agricultural products (Refrigerated)",
    },
    {
      id: "RFQ20260422ASAUOJT0001",
      origin: { country: "Tualauta, American Samoa", flag: "🇦🇸" },
      destination: { country: "Kavaratti, Australia", flag: "🇦🇺" },
      mode: "ocean",
      postedDate: "22/04/2026 11:15 AM",
      category: "Agricultural products (Refrigerated)",
    },
    {
      id: "RFQ20260421MXINOJT0001",
      origin: { country: "Aguascalientes, Mexico", flag: "🇲🇽" },
      destination: { country: "Valsad, India", flag: "🇮🇳" },
      mode: "rail",
      postedDate: "21/04/2026 09:14 AM",
      category: "Agricultural products (Non-refrigerated)",
    },
    {
      id: "RFQ20260420INAOOJT0003",
      origin: { country: "Batala, India", flag: "🇮🇳" },
      destination: { country: "N'zeto, Angola", flag: "🇦🇴" },
      mode: "ocean",
      postedDate: "20/04/2026 10:58 AM",
      category: "Agricultural products (Refrigerated)",
    },
    {
      id: "RFQ20260418NGTGOJT0002",
      origin: { country: "Enugu, Nigeria", flag: "🇳🇬" },
      destination: { country: "Lomé, Togo", flag: "🇹🇬" },
      mode: "road",
      postedDate: "18/04/2026 07:43 PM",
      category: "Crude oil & natural gas",
    },
    {
      id: "RFQ20260409INATOJTJ0001",
      origin: { country: "Carapur, India", flag: "🇮🇳" },
      destination: { country: "Edelstat, Austria", flag: "🇦🇹" },
      mode: "air",
      postedDate: "09/04/2026 10:58 AM",
      category: "Food & beverages (Non-refrigerated)",
    },
  ]

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case "ocean":
        return <Ship className="h-5 w-5" />
      case "air":
        return <Plane className="h-5 w-5" />
      case "road":
        return <Truck className="h-5 w-5" />
      case "rail":
        return <Train className="h-5 w-5" />
      default:
        return <Ship className="h-5 w-5" />
    }
  }

  const getModeColor = (mode: string) => {
    switch (mode) {
      case "ocean":
        return "text-[#2563EB]"
      case "air":
        return "text-[#8B5CF6]"
      case "road":
        return "text-[#F59E0B]"
      case "rail":
        return "text-[#EF4444]"
      default:
        return "text-[#2563EB]"
    }
  }
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="mb-2 text-2xl font-semibold text-foreground">
            Live Requests Worldwide{" "}
            <span className="text-primary">[{requests.length}]</span>
          </h1>

          <p className="text-sm text-muted-foreground">
            Browse active shipping requests from customers around the world
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-4 md:grid-cols-2">
          {requests.map((request) => (
            <Card key={request.id} className="p-4 transition hover:shadow-md">
              {/* TOP */}
              <div className="mb-3 flex items-start justify-between">
                <div className="flex-1">
                  {/* ORIGIN */}
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xl">{request.origin.flag}</span>
                    <p className="text-sm font-medium text-foreground">
                      {request.origin.country}
                    </p>
                  </div>

                  {/* ROUTE */}
                  <div className="my-2 flex items-center gap-2">
                    <div className="flex-1 border-t border-dashed border-border" />
                    <span className="flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      To <ArrowRight className="h-3 w-3" />
                    </span>
                    <div className="flex-1 border-t border-dashed border-border" />
                  </div>

                  {/* DESTINATION */}
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{request.destination.flag}</span>
                    <p className="text-sm font-medium text-foreground">
                      {request.destination.country}
                    </p>
                  </div>
                </div>

                {/* MODE ICON */}
                <div
                  className={`rounded-lg bg-muted p-2 ${getModeColor(request.mode)}`}
                >
                  {getModeIcon(request.mode)}
                </div>
              </div>

              {/* DETAILS */}
              <div className="grid grid-cols-2 gap-3 border-t border-border py-3">
                <div>
                  <p className="text-[11px] text-muted-foreground">
                    Request ID
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {request.id}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] text-muted-foreground">
                    Shipment Mode
                  </p>
                  <p className="flex items-center gap-1 text-sm font-medium text-foreground capitalize">
                    {getModeIcon(request.mode)}
                    {request.mode}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] text-muted-foreground">Posted On</p>
                  <p className="text-sm font-medium text-foreground">
                    {request.postedDate}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] text-muted-foreground">Category</p>
                  <p className="text-sm font-medium text-foreground">
                    {request.category}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-border pt-3">
                {isAuthenticated ? (
                  <Button size="sm" className="w-full">
                    Send Quote
                  </Button>
                ) : (
                  <Link to="/signup?type=provider">
                    <Button size="sm" className="w-full">
                      Sign Up to Send Quote
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
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

            <Button size="sm" variant="outline">
              ›
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveRequests
