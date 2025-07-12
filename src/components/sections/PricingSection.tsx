
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ChevronDown, ChevronUp, Phone } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const PricingSection = () => {
  const [freeKnowMoreOpen, setFreeKnowMoreOpen] = useState(false);
  const [premiumKnowMoreOpen, setPremiumKnowMoreOpen] = useState(false);

  const features = [
    {
      name: "Doctor Appointment Reminders",
      free: { included: true, details: "(WhatsApp)" },
      premium: { included: true, details: "(WhatsApp & Dashboard)" }
    },
    {
      name: "Simplified Medical Report Analysis",
      free: { included: true },
      premium: { included: true }
    },
    {
      name: "Your personalised electronic medical records (storage)",
      free: { included: true },
      premium: { included: true }
    },
    {
      name: "24/7 AI health assistance in WhatsApp",
      free: { included: true },
      premium: { included: true }
    },
    {
      name: "Doctor Consultation",
      free: { included: false, details: "₹499/appointment" },
      premium: { included: true, details: "Unlimited Doctor Consultations" }
    },
    {
      name: "Full Body Lab Test",
      free: { included: false },
      premium: { included: true, details: "Full Body Lab Test included worth ₹5000" }
    },
    {
      name: "Health Dashboard for Trends, Vitals, Alerts & Insights",
      free: { included: false },
      premium: { included: true, details: "(including alerts)" }
    },
    {
      name: "Weekly Health Summary",
      free: { included: false },
      premium: { included: true }
    },
    {
      name: "Schedule External Doctor Appointments & Lab Tests",
      free: { included: false },
      premium: { included: true }
    },
    {
      name: "Emergency virtual Support",
      free: { included: false },
      premium: { included: true }
    },
    {
      name: "Multi-specialist Coordination",
      free: { included: false },
      premium: { included: true }
    },
    {
      name: "Suggest Doctor for Second Opinion",
      free: { included: false },
      premium: { included: true }
    },
    {
      name: "Support Tickets",
      free: { included: false, details: "Basic" },
      premium: { included: true, details: "Priority" }
    }
  ];

  const ContactButton = () => (
    <div className="flex items-center space-x-2 text-primary-custom hover:text-secondary-custom cursor-pointer transition-colors">
      <Phone className="w-4 h-4" />
      <span className="text-xs">Schedule a call to understand our offering</span>
    </div>
  );

  return (
    <section className="py-16 bg-main-bg">
      <div className="container mx-auto px-4">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Forever Plan */}
          <Card className="relative overflow-hidden border-2 border-light-outline hover:border-primary-custom transition-all duration-300 hover:shadow-lg">
            <div className="absolute top-4 right-4">
              <ContactButton />
            </div>
            
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-secondary-custom mb-2">Free Forever</CardTitle>
              <p className="text-sub mb-4">For individuals starting out</p>
              
              <div className="space-y-1">
                <div className="text-4xl font-bold text-primary-custom">₹0</div>
                <div className="text-sub">Free forever</div>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="text-sm font-medium text-secondary-custom">What we provide?</div>
                <div className="space-y-1 text-left">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">WhatsApp + AI Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Simplified Medical Report Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Your personalised electronic medical records (storage)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">24/7 AI health assistance in WhatsApp</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <Collapsible open={freeKnowMoreOpen} onOpenChange={setFreeKnowMoreOpen}>
                <CollapsibleTrigger className="flex items-center justify-center w-full py-2 text-primary-custom hover:text-secondary-custom transition-colors">
                  <span className="font-medium">Know More</span>
                  {freeKnowMoreOpen ? (
                    <ChevronUp className="w-4 h-4 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-2" />
                  )}
                </CollapsibleTrigger>
                
                <CollapsibleContent className="mt-4 space-y-3 border-t pt-4">
                  <div className="text-sm font-medium text-secondary-custom mb-3">Features Comparison</div>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <div className="flex-1 pr-4">
                        <span className="text-sm text-main">{feature.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {feature.free.included ? (
                          <div className="flex items-center space-x-1">
                            <Check className="w-4 h-4 text-green-500" />
                            {feature.free.details && (
                              <span className="text-xs text-sub">{feature.free.details}</span>
                            )}
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1">
                            <X className="w-4 h-4 text-red-500" />
                            {feature.free.details && (
                              <span className="text-xs text-sub">{feature.free.details}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
              
              <Button 
                className="w-full bg-primary-custom hover:bg-primary-custom/90 text-white"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0', '_blank')}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative overflow-hidden border-2 border-primary-custom scale-105 shadow-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-primary-custom to-tertiary-custom text-white px-4 py-1">
                Most Popular
              </Badge>
            </div>
            
            <div className="absolute top-4 right-4">
              <ContactButton />
            </div>
            
            <CardHeader className="text-center pb-4 pt-8">
              <CardTitle className="text-2xl font-bold text-secondary-custom mb-2">Premium</CardTitle>
              <p className="text-sub mb-4">For professional individuals and small teams</p>
              
              <div className="space-y-1">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-4xl font-bold text-primary-custom">₹3999</span>
                  <span className="text-lg text-sub">/month</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg text-primary-custom">(₹44000/year)</span>
                </div>
                <div className="text-sub">per seat / month, billed annually</div>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="text-sm font-medium text-secondary-custom">What we provide?</div>
                <div className="space-y-1 text-left">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">Everything in Free Forever + Dashboard + Unlimited Doctor Consults+ Lab Tests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Unlimited Doctor Consultations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Full Body Lab Test included worth ₹3000</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Health Dashboard for Trends, Vitals, Alerts & Insights</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <Collapsible open={premiumKnowMoreOpen} onOpenChange={setPremiumKnowMoreOpen}>
                <CollapsibleTrigger className="flex items-center justify-center w-full py-2 text-primary-custom hover:text-secondary-custom transition-colors">
                  <span className="font-medium">Know More</span>
                  {premiumKnowMoreOpen ? (
                    <ChevronUp className="w-4 h-4 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-2" />
                  )}
                </CollapsibleTrigger>
                
                <CollapsibleContent className="mt-4 space-y-3 border-t pt-4">
                  <div className="text-sm font-medium text-secondary-custom mb-3">Features Comparison</div>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <div className="flex-1 pr-4">
                        <span className="text-sm text-main">{feature.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {feature.premium.included ? (
                          <div className="flex items-center space-x-1">
                            <Check className="w-4 h-4 text-green-500" />
                            {feature.premium.details && (
                              <span className="text-xs text-primary-custom font-medium">{feature.premium.details}</span>
                            )}
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1">
                            <X className="w-4 h-4 text-red-500" />
                            {feature.premium.details && (
                              <span className="text-xs text-sub">{feature.premium.details}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
              
              <Button 
                className="w-full bg-gradient-to-r from-primary-custom to-tertiary-custom hover:opacity-90 text-white"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0', '_blank')}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
