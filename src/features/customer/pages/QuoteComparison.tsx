import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Clock, DollarSign, Star } from 'lucide-react';
import { useParams } from 'react-router-dom';

const QuoteComparison = () => {
  const quotes = [
    {
      id: "Q-001",
      agent: "Global Shipping Co.",
      rating: 4.8,
      reviews: 324,
      price: 4500,
      deliveryDays: 21,
      insurance: true,
      tracking: true,
      doorToDoor: false,
      bestPrice: false,
      fastestDelivery: false,
    },
    {
      id: "Q-002",
      agent: "Pacific Logistics",
      rating: 4.9,
      reviews: 512,
      price: 4200,
      deliveryDays: 25,
      insurance: true,
      tracking: true,
      doorToDoor: true,
      bestPrice: true,
      fastestDelivery: false,
    },
    {
      id: "Q-003",
      agent: "TransOcean Express",
      rating: 4.7,
      reviews: 289,
      price: 4800,
      deliveryDays: 18,
      insurance: true,
      tracking: true,
      doorToDoor: true,
      bestPrice: false,
      fastestDelivery: true,
    },
  ];
    const { id } = useParams();

  return (
    <div>
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Compare Quotes</h1>
          <p className="text-muted-foreground">RFQ #{id} - Compare all received quotes side by side</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {quotes.map((quote) => (
            <Card
              key={quote.id}
              className={`relative ${
                quote.bestPrice ? "border-2 border-primary shadow-lg" : ""
              }`}
            >

              {quote.bestPrice && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Best Price
                </div>
              )}

              {quote.fastestDelivery && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Fastest Delivery
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <h3 className="text-xl font-semibold text-foreground mb-2">{quote.agent}</h3>

                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-medium text-foreground">{quote.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({quote.reviews} reviews)</span>
                </div>

                <p className="text-sm text-muted-foreground">Quote ID: {quote.id}</p>
              </div>

              <div className="text-center mb-6 py-6 bg-muted rounded-xl">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <DollarSign className="w-6 h-6 text-muted-foreground" />
                  <p className="text-4xl font-bold text-primary">
                    ${quote.price.toLocaleString()}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">Total Cost</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">{quote.deliveryDays} days</p>
                    <p className="text-sm text-muted-foreground">Delivery Time</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  <p className="font-medium text-foreground mb-3">Included Services</p>

                  <div className="flex items-center gap-2">
                    {quote.insurance ? (
                      <Check className="w-5 h-5 text-primary" />
                    ) : (
                      <div className="w-5 h-5" />
                    )}
                    <span
                      className={quote.insurance ? "text-foreground" : "text-muted-foreground line-through"}
                    >
                      Insurance Coverage
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {quote.tracking ? (
                      <Check className="w-5 h-5 text-primary" />
                    ) : (
                      <div className="w-5 h-5" />
                    )}
                    <span
                      className={quote.tracking ? "text-foreground" : "text-muted-foreground line-through"}
                    >
                      Real-time Tracking
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {quote.doorToDoor ? (
                      <Check className="w-5 h-5 text-primary" />
                    ) : (
                      <div className="w-5 h-5" />
                    )}
                    <span
                      className={
                        quote.doorToDoor ? "text-foreground" : "text-muted-foreground line-through"
                      }
                    >
                      Door-to-Door Service
                    </span>
                  </div>

                </div>
              </div>

              {/* FIXED ERROR HERE */}
              <Button variant="default" className="w-full">
                Accept Quote
              </Button>

            </Card>
          ))}
        </div>

        <Card>
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Provider</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Price</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Delivery</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Rating</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Insurance</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Door-to-Door</th>
                </tr>
              </thead>

              <tbody>
                {quotes.map((quote) => (
                  <tr key={quote.id} className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">{quote.agent}</td>

                    <td className="py-3 px-4 text-foreground font-semibold">
                      ${quote.price.toLocaleString()}
                    </td>

                    <td className="py-3 px-4 text-foreground">{quote.deliveryDays} days</td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span>{quote.rating}</span>
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      {quote.insurance ? (
                        <Check className="w-5 h-5 text-primary" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>

                    <td className="py-3 px-4">
                      {quote.doorToDoor ? (
                        <Check className="w-5 h-5 text-primary" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </Card>

      </div>
    </div>
  )
}

export default QuoteComparison