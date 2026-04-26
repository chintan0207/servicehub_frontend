/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, MapPin, Star } from "lucide-react"
import { Link } from "react-router-dom"

const badgeVariantMap: Record<string, string> = {
  NEW: "bg-primary text-primary-foreground",
  PRO: "bg-secondary text-secondary-foreground",
  TOP: "bg-accent text-accent-foreground",
  VERIFIED: "bg-muted text-foreground",
}

const ServiceCard = (service: any) => {
  return (
    <Card className="overflow-hidden p-0 transition hover:shadow-md">
      {/* IMAGE */}
      <div className="relative h-45 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="h-full w-full object-cover"
        />

        {/* BADGE */}
        <span
          className={`absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
            badgeVariantMap[service.badge] ||
            "bg-primary text-primary-foreground"
          }`}
        >
          {service.badge}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        {/* TITLE */}
        <div className="mb-2">
          <h3 className="text-base leading-tight font-semibold text-foreground">
            {service.name}
          </h3>
          <p className="text-xs text-muted-foreground">{service.category}</p>
        </div>

        {/* LOCATION */}
        <div className="mb-3 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-muted-foreground">Origin:</span>
            <span className="font-medium text-foreground">
              {service.origin}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-muted-foreground">Destination:</span>
            <span className="font-medium text-foreground">
              {service.destination}
            </span>
          </div>
        </div>

        {/* RATING */}
        <div className="mb-3 flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-foreground">
              {service.rating}
            </span>
            <span className="text-xs text-muted-foreground">
              ({service.reviews})
            </span>
          </div>

          <span className="text-xs text-muted-foreground">
            by {service.provider}
          </span>
        </div>

        {/* CTA */}
        <Link to={`/services/${service.id}`}>
          <Button size="sm" className="w-full">
            View Details
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>
    </Card>
  )
}

export default ServiceCard
