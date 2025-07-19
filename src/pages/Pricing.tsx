
import { useState, useEffect } from "react";
import { usePostHog } from "posthog-js/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Check, XCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import RazorpayEmbed from "@/components/RazorpayEmbed";
import { Separator } from "@/components/ui/separator";
import { RazorpayModal } from "@/components/RazorpayModal";
import { Shield, CheckCircle, Star, Crown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly" | "free">("monthly");

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
        duration: "for 1 month",
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-custom mt-10">
              AI-Powered Health Care
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary-custom mb-6">
              Anytime, Anywhere. Choose your plan now.
          </h2>
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
          <div   className="
    relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100
    transition-all duration-300
    hover:border-cyan-400
    hover:shadow-[0_8px_32px_0_rgba(34,211,238,0.35)]
    hover:-translate-y-2
    group
  ">
            <div className="relative p-8">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  <Sparkles className="h-8 w-8 text-cyan-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Free Forever</h3>
                <p className="text-cyan-600 font-medium">WhatsApp + AI Analysis</p>
              </div>
              
              <div className="mb-6">
                <Separator className="mb-4"/>
                <h4 className="text-lg font-semibold text-gray-800 mb-6 text-center">What we provide?</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-semibold">Simplified Medical Report Analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-semibold">Your personalised electronic medical records (storage)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-semibold">24/7 AI health assistance in WhatsApp</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-semibold">Doctor Consultation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-semibold">Full Body Lab Test</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-semibold">Health Dashboard for Trends, Vitals, Alerts & Insights</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-cyan-200 rounded-xl p-4 mb-6 bg-gradient-to-r from-cyan-50 to-blue-50">
                <div className="text-center">
                  <h4 className="text-cyan-700 font-semibold mb-2">Need a Doctor Now?</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Book a one-time doctor appointment for just <span className="font-bold text-cyan-600">₹499</span>
                  </p>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-primary-custom text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-primary-custom transition-all duration-300 hover:shadow-lg"
                  onClick={() => {
                    setSelectedPlan("free");
                    setModalOpen(true);
                    handlePaymentClick('Free Forever');
                  }}>
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
<div
  className="
    relative bg-white rounded-2xl shadow-xl border-2 border-gray-100
    transition-all duration-300
    hover:border-cyan-400
    hover:shadow-[0_8px_32px_0_rgba(34,211,238,0.35)]
    hover:-translate-y-2
    group
  "
>
  {/* Premium Badge */}
  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
  <div
    className={
      `px-6 py-2 rounded-full border-2 shadow-lg transition-all duration-300
      ${billingPeriod === 'annual'
        ? 'bg-cyan-500 text-white border-white shadow-[0_0_24px_6px_rgba(34,211,238,0.7)]'
        : 'bg-white text-cyan-500 border-cyan-500'
      }`
    }
  >
    <div className="flex items-center space-x-2">
      <Star className={`w-4 h-4 ${billingPeriod === 'annual' ? 'text-white' : 'text-cyan-500'}`} />
      <span className="text-sm font-semibold">Most Popular</span>
    </div>
  </div>
</div>

  {/* Main Card */}
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
    {/* Subtle background */}
    <div className="absolute inset-0 bg-gray-50 opacity-30"></div>

    <div className="relative z-10 p-8">
      {/* Header */}
      <div className="text-center mb-8">
      <div className="flex justify-center mb-4">
  <div className={`p-3 rounded-full transition-all duration-500 ${billingPeriod === 'annual' ? 'bg-cyan-500' : 'bg-white'}`}>
    <motion.div
      initial={false}
      animate={
        billingPeriod === 'annual'
          ? { scale: 1.25, rotate: 15, filter: 'drop-shadow(0 0 16px #22d3ee)' }
          : { scale: 1, rotate: 0, filter: 'none' }
      }
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Sparkles
        className={`w-8 h-8 transition-colors duration-500 ${billingPeriod === 'annual' ? 'text-white' : 'text-cyan-500'}`}
      />
    </motion.div>
  </div>
</div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Premium</h2>
        
        <div className="mb-4">
          <span className="text-5xl font-extrabold text-gray-800 ">
            {getPriceDetails("premium", billingPeriod).current}
          </span>
          <span className="text-2xl text-gray-400 line-through ml-3">
            {getPriceDetails("premium", billingPeriod).original}
          </span>
        </div>
        
        <p className="text-cyan-600 font-medium mb-4">
          {`${getPriceDetails("premium", billingPeriod).duration} / ${getPriceDetails("premium", billingPeriod).perDay}`}
        </p>
        
        <p className="text-gray-600 text-sm mb-6">
          Everything in Free Forever + Dashboard + Unlimited Doctor Consults+ Lab Tests
        </p>
      </div>

      {/* Features */}
      <div className="mb-8">
      <Separator className="mb-4"/>
        <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">What we provide?</h3>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <span className="text-sm font-semibold text-gray-800">
              Unlimited Doctor Consultations
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <span className="text-sm font-semibold text-gray-800">
              Full Body Lab Test included worth ₹3000
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <span className="text-sm font-semibold text-gray-800">
              Health Dashboard for Trends, Vitals, Alerts & Insights
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <span className="text-sm font-semibold text-gray-800">
            Emergency virtual Support
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <span className="text-sm font-semibold text-gray-800">
            Schedule External Doctor Appointments & Lab Tests
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <span className="text-sm font-semibold text-gray-800">
            Weekly Health Summary
            </span>
          </div>

        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center">
  <button
    onClick={() => {
      setSelectedPlan(billingPeriod === "monthly" ? "monthly" : "yearly");
      setModalOpen(true);
      handlePaymentClick('Premium');
    }}
    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
  >
    <div className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    <div className="relative">
      <span className="text-lg">Pay Now</span>
    </div>
  </button>
</div>
    </div>
  </div>
</div>
</div>

<motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)" }}
          className="relative mt-10 bg-gradient-to-r from-cyan-500 to-secondary-custom rounded-xl p-4 text-white overflow-hidden mx-auto max-w-xs sm:max-w-sm md:max-w-md cursor-pointer"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="relative flex items-center justify-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <div className="text-center">
              <h3 className="text-lg font-bold mb-1">14-Day Money-Back Guarantee</h3>
              <p className="text-white text-xs">Cancel anytime within 14 days for a full refund</p>
            </div>
          </div>
        </motion.div>
          {/* Single Know More Section */}
          <div className="max-w-5xl mx-auto mt-8">
            <Collapsible open={knowMoreOpen} onOpenChange={setKnowMoreOpen}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full bg-primary-custom hover:bg-primary-custom/90 text-white border-primary-custom hover:border-primary-custom/90 transition-all duration-300 hover:scale-105 py-4"
                >
                  <span className="font-bold text-2xl">KNOW MORE</span>
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
                                    <XCircle className="w-4 h-4 text-red-500 transition-transform hover:scale-110" />
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
                                    <XCircle className="w-4 h-4 text-red-500 transition-transform hover:scale-110" />
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

        
      

        {/* Trusted by Families Testimonials */}
        <TestimonialsSection />

        {/* Contact Section */}
        <section>
          <Card className="gradient-card text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay connected and up-to-date with your parents' healthcare today.</h2>
              <h3 className="text-xl mb-4">Have Questions?</h3>
              <p className="text-lg mb-6">Contact our support team.</p>
              <div className="text-2xl font-bold hover:scale-110 transition-transform duration-300 cursor-pointer">+91 6364872188</div>
            </CardContent>
          </Card>
        </section>
      </div>
      {modalOpen && (
  <RazorpayModal open={modalOpen} onClose={() => setModalOpen(false)} planType={selectedPlan} />
)}
    </div>
  );
};

export default Pricing;
