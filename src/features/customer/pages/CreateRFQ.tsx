import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, CheckCircle, MapPin, Package } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateRFQ = () => {
  const steps = [
    { number: 1, title: "Shipment Details", icon: Package },
    { number: 2, title: "Locations", icon: MapPin },
    { number: 3, title: "Preferences", icon: Calendar },
    { number: 4, title: "Review", icon: CheckCircle },
  ];

  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    goodsType: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    pickupCity: "",
    pickupCountry: "",
    dropCity: "",
    dropCountry: "",
    mode: "",
    urgency: "",
    additionalNotes: "",
  });

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleSubmit = () => {
    toast.success("RFQ submitted successfully!");
    navigate("/customer/rfqs");
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto space-y-8">

        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Create RFQ</h1>
          <p className="text-muted-foreground">Request quotes from logistics providers</p>
        </div>

        <div className="flex items-center justify-between mb-8">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div key={s.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      step >= s.number
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm mt-2 text-muted-foreground">{s.title}</span>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      step > s.number ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        <Card className="px-4">

          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">
                Shipment Details
              </h2>

              <div className="space-y-2">
                <label className="text-sm font-medium">Goods Type</label>

                <Select
                  value={formData.goodsType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, goodsType: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select goods type..." />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="machinery">Machinery</SelectItem>
                    <SelectItem value="textiles">Textiles</SelectItem>
                    <SelectItem value="food">Food & Beverages</SelectItem>
                    <SelectItem value="chemicals">Chemicals</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Weight (kg)</label>
                <Input
                  type="number"
                  placeholder="Enter total weight"
                  value={formData.weight}
                  onChange={(e) =>
                    setFormData({ ...formData, weight: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Length (cm)</label>
                  <Input
                    type="number"
                    placeholder="Length"
                    value={formData.length}
                    onChange={(e) =>
                      setFormData({ ...formData, length: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Width (cm)</label>
                  <Input
                    type="number"
                    placeholder="Width"
                    value={formData.width}
                    onChange={(e) =>
                      setFormData({ ...formData, width: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Height (cm)</label>
                  <Input
                    type="number"
                    placeholder="Height"
                    value={formData.height}
                    onChange={(e) =>
                      setFormData({ ...formData, height: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">
                Pickup & Delivery Locations
              </h2>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Pickup Location</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">City</label>
                    <Input
                      placeholder="Shanghai"
                      value={formData.pickupCity}
                      onChange={(e) =>
                        setFormData({ ...formData, pickupCity: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Country</label>
                    <Input
                      placeholder="China"
                      value={formData.pickupCountry}
                      onChange={(e) =>
                        setFormData({ ...formData, pickupCountry: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Delivery Location</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">City</label>
                    <Input
                      placeholder="Los Angeles"
                      value={formData.dropCity}
                      onChange={(e) =>
                        setFormData({ ...formData, dropCity: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Country</label>
                    <Input
                      placeholder="United States"
                      value={formData.dropCountry}
                      onChange={(e) =>
                        setFormData({ ...formData, dropCountry: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">
                Delivery Preferences
              </h2>

              <div className="space-y-2">
                <label className="text-sm font-medium">Shipping Mode</label>

                <Select
                  value={formData.mode}
                  onValueChange={(value) =>
                    setFormData({ ...formData, mode: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select shipping mode..." />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="air">Air Freight</SelectItem>
                    <SelectItem value="sea">Sea Freight</SelectItem>
                    <SelectItem value="road">Road Freight</SelectItem>
                    <SelectItem value="rail">Rail Freight</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Urgency</label>

                <Select
                  value={formData.urgency}
                  onValueChange={(value) =>
                    setFormData({ ...formData, urgency: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select urgency level..." />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="standard">Standard (3-4 weeks)</SelectItem>
                    <SelectItem value="express">Express (1-2 weeks)</SelectItem>
                    <SelectItem value="urgent">Urgent (3-5 days)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Additional Notes</label>
                <Textarea
                  placeholder="Any special requirements or instructions..."
                  value={formData.additionalNotes}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      additionalNotes: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">
                Review & Submit
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Shipment Details</h3>
                  <div className="bg-muted p-4 rounded-xl space-y-2">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Goods:</span>{" "}
                      <span className="text-foreground font-medium">{formData.goodsType}</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Weight:</span>{" "}
                      <span className="text-foreground font-medium">{formData.weight} kg</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Dimensions:</span>{" "}
                      <span className="text-foreground font-medium">
                        {formData.length} × {formData.width} × {formData.height} cm
                      </span>
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Route</h3>
                  <div className="bg-muted p-4 rounded-xl space-y-2">
                    <p className="text-sm">
                      <span className="text-muted-foreground">From:</span>{" "}
                      <span className="text-foreground font-medium">
                        {formData.pickupCity}, {formData.pickupCountry}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">To:</span>{" "}
                      <span className="text-foreground font-medium">
                        {formData.dropCity}, {formData.dropCountry}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Preferences</h3>
                  <div className="bg-muted p-4 rounded-xl space-y-2">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Mode:</span>{" "}
                      <span className="text-foreground font-medium">{formData.mode}</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Urgency:</span>{" "}
                      <span className="text-foreground font-medium">{formData.urgency}</span>
                    </p>
                  </div>
                </div>

                {formData.additionalNotes && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Additional Notes</h3>
                    <div className="bg-muted p-4 rounded-xl">
                      <p className="text-sm text-foreground">{formData.additionalNotes}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={step === 1}
              className={step === 1 ? "invisible" : ""}
            >
              Previous
            </Button>

            {step < 4 ? (
              <Button onClick={handleNext}>
                Next Step
              </Button>
            ) : (
              <Button onClick={handleSubmit}>
                Submit RFQ
              </Button>
            )}
          </div>

        </Card>
      </div>
    </div>
  )
}

export default CreateRFQ