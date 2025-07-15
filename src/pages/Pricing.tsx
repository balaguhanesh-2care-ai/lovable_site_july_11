
import { useState, useEffect } from "react";
import { usePostHog } from "posthog-js/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import RazorpayButton from "@/components/RazorpayButton";
import { Separator } from "@/components/ui/separator";

const Pricing = () => {
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture("Visit_Pricing_Page");
  }, []);

  const handlePaymentClick = (planName: string) => {
    const isPremium = planName === 'Premium';
    const eventProperties = {
      plan: planName,
      billing_period: isPremium ? billingPeriod : 'one-time',
      location: 'PricingPage'
    };

    // Capture general CTA and Pay Now events
    posthog.capture("CTA_Click_GetStarted", eventProperties);
    posthog.capture("User_clicks_paynow", eventProperties);

    // Capture specific payment click event
    if (isPremium) {
      if (billingPeriod === 'monthly') {
        posthog.capture('Click_Payment_SubscriptionMonthly', eventProperties);
      } else { // annual
        posthog.capture('Click_Payment_SubscriptionYearly', eventProperties);
      }
    } else { // One-time doctor payment
      posthog.capture('Click_Payment_OneTimeDoctor', eventProperties);
    }
  };

  const [knowMoreOpen, setKnowMoreOpen] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState("monthly");

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

  const getPrice = (plan: string, period: string) => {
    if (plan === "free") return "₹0";
    if (period === "monthly") return "₹3999";
    return "₹44000";
  };

  const getPriceDetails = (plan: string, period: string) => {
    if (plan === "free") {
      return { current: "₹0", original: "", duration: "", perDay: "" };
    }
    if (period === "monthly") {
      return {
        current: "₹3999",
        original: "₹7999",
        duration: "for 3 months",
        perDay: "₹133 per day",
      };
    }
    // annual
    return {
      current: "₹44,000",
      original: "₹88,000",
      duration: "for 1 year",
      perDay: "₹120 per day",
    };
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-custom mb-6">
            Complete Health Care
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary-custom mb-6">
            Maya AI Health Agent + Personal Doctor Attention
          </h2>
          <p className="text-xl md:text-2xl text-sub max-w-4xl mx-auto">
            Doctor-supervised and AI monitoring for chronic conditions, no matter the distance
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <ToggleGroup 
            type="single" 
            value={billingPeriod} 
            onValueChange={(value) => value && setBillingPeriod(value)}
            className="bg-gray-100 rounded-lg p-1"
          >
            <ToggleGroupItem 
              value="monthly" 
              className="data-[state=on]:bg-primary-custom data-[state=on]:text-white px-6 py-2 rounded-md transition-all"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="annual" 
              className="data-[state=on]:bg-primary-custom data-[state=on]:text-white px-6 py-2 rounded-md transition-all"
            >
              Annual
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Pricing Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Forever Plan */}
            <Card className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up hover:border-primary-custom">
              <CardHeader className="text-center pb-4">
              {/* ({getPriceDetails("free", billingPeriod).current}) */}
                <CardTitle className="text-2xl font-bold text-secondary-custom mb-2">Free Forever </CardTitle>
                <p className="text-sub mb-4">WhatsApp + AI Analysis</p>
                
                <div className="mt-4 space-y-2">
                  <div className="text-sm font-medium text-secondary-custom">What we provide?</div>
                  <div className="space-y-1 text-left">
                    <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                      <Check className="w-4 h-4 text-green-500 transition-transform hover:scale-110" />
                      <span className="text-sm font-bold">Simplified Medical Report Analysis</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                      <Check className="w-4 h-4 text-green-500 transition-transform hover:scale-110" />
                      <span className="text-sm font-bold">Your personalised electronic medical records (storage)</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                      <Check className="w-4 h-4 text-green-500 transition-transform hover:scale-110" />
                      <span className="text-sm font-bold">24/7 AI health assistance in WhatsApp</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 flex flex-col justify-center items-center">
                <Separator />
                <p className="text-center text-sub">
                  For one time doctor's appointments.
                </p>
                {/* <Button className="w-full bg-primary-custom hover:bg-primary-custom/90 text-white transition-all duration-300 hover:scale-105">
                  Get Started
                </Button> */}
                <div className="flex justify-center w-full" onClick={() => handlePaymentClick('Free Forever')}>
                  <RazorpayButton type="payment" buttonId="pl_QrhRqK9f7BNU4h" />
                </div>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl hover:border-primary-custom transition-all duration-300 hover:-translate-y-2 animate-slide-up">
              {/* Full-width ribbon badge at the top */}
              <div className="bg-gradient-to-r from-primary-custom to-tertiary-custom text-white text-center py-3 rounded-t-xl">
              <span className="text-sm font-semibold">Most Popular</span>
              </div>
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl font-bold text-secondary-custom">Premium</CardTitle>
                <div className="my-2">
                    <span className="text-4xl font-extrabold text-secondary-custom">{getPriceDetails("premium", billingPeriod).current}</span>
                    <span className="text-2xl text-gray-400 line-through ml-2">{getPriceDetails("premium", billingPeriod).original}</span>
                </div>
                <p className="text-sub text-sm mb-4">{`${getPriceDetails("premium", billingPeriod).duration} / ${getPriceDetails("premium", billingPeriod).perDay}`}</p>
                
                <p className="text-sub mb-4">Everything in Free Forever + Dashboard + Unlimited Doctor Consults+ Lab Tests</p>
                
                <div className="mt-4 space-y-2">
                  <div className="text-sm font-medium text-secondary-custom">What we provide?</div>
                  <div className="space-y-1 text-left">
                    <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                      <Check className="w-4 h-4 text-green-500 transition-transform hover:scale-110" />
                      <span className="text-sm font-bold">Unlimited Doctor Consultations</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                      <Check className="w-4 h-4 text-green-500 transition-transform hover:scale-110" />
                      <span className="text-sm font-bold">Full Body Lab Test included worth ₹3000</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                      <Check className="w-4 h-4 text-green-500 transition-transform hover:scale-110" />
                      <span className="text-sm font-bold">Health Dashboard for Trends, Vitals, Alerts & Insights</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 flex justify-center items-center">
                {/* <Button className="w-full bg-gradient-to-r from-primary-custom to-tertiary-custom hover:opacity-90 text-white transition-all duration-300 hover:scale-105">
                  Get Started
                </Button> */}
                <div className="flex justify-center w-full" onClick={() => handlePaymentClick('Premium')}>
                  <RazorpayButton type="subscription" buttonId="pl_Qrid48TjVkOoXD" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Single Know More Section */}
          <div className="max-w-5xl mx-auto mt-8">
            <Collapsible open={knowMoreOpen} onOpenChange={setKnowMoreOpen}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full bg-primary-custom hover:bg-primary-custom/90 text-white border-primary-custom hover:border-primary-custom/90 transition-all duration-300 hover:scale-105 py-4"
                >
                  <span className="font-medium text-lg">KNOW MORE</span>
                  {knowMoreOpen ? (
                    <ChevronUp className="w-5 h-5 ml-2 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 ml-2 transition-transform duration-300" />
                  )}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="mt-4">
                <Card className="border-2 border-light-outline hover:border-primary-custom transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b-2 border-gray-200">
                            <th className="text-left py-4 px-2 font-semibold text-secondary-custom">Features</th>
                            <th className="text-center py-4 px-2 font-semibold text-secondary-custom">Free Forever</th>
                            <th className="text-center py-4 px-2 font-semibold text-primary-custom">Premium</th>
                          </tr>
                        </thead>
                        <tbody>
                          {features.map((feature, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                              <td className="py-3 px-2 text-sm text-main">{feature.name}</td>
                              <td className="py-3 px-2 text-center">
                                {feature.free.included ? (
                                  <div className="flex flex-col items-center space-y-1">
                                    <Check className="w-4 h-4 text-green-500 transition-transform hover:scale-110" />
                                    {feature.free.details && (
                                      <span className="text-xs text-sub">{feature.free.details}</span>
                                    )}
                                  </div>
                                ) : (
                                  <div className="flex flex-col items-center space-y-1">
                                    <X className="w-4 h-4 text-red-500 transition-transform hover:scale-110" />
                                    {feature.free.details && (
                                      <span className="text-xs text-sub">{feature.free.details}</span>
                                    )}
                                  </div>
                                )}
                              </td>
                              <td className="py-3 px-2 text-center">
                                {feature.premium.included ? (
                                  <div className="flex flex-col items-center space-y-1">
                                    <Check className="w-4 h-4 text-green-500 transition-transform hover:scale-110" />
                                    {feature.premium.details && (
                                      <span className="text-xs text-primary-custom font-medium">{feature.premium.details}</span>
                                    )}
                                  </div>
                                ) : (
                                  <div className="flex flex-col items-center space-y-1">
                                    <X className="w-4 h-4 text-red-500 transition-transform hover:scale-110" />
                                    {feature.premium.details && (
                                      <span className="text-xs text-sub">{feature.premium.details}</span>
                                    )}
                                  </div>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>

        {/* Risk-free guarantee */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-secondary-custom mb-4">Risk-free: Cancel anytime in the first 14 days for a full refund</h3>
            </CardContent>
          </Card>
        </section>

        {/* Trusted by Families Testimonials */}
        <TestimonialsSection />

        {/* Contact Section */}
        <section>
          <Card className="gradient-card text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay connected and up-to-date with your parents' healthcare today.</h2>
              <h3 className="text-xl mb-4">Have Questions?</h3>
              <p className="text-lg mb-6">Contact our support team.</p>
              <div className="text-2xl font-bold hover:scale-110 transition-transform duration-300 cursor-pointer">+91 78999 53477</div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
