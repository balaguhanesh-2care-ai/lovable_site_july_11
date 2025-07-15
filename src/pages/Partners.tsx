import { useState, useEffect } from "react";
import { usePostHog } from "posthog-js/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Zap, Heart, TrendingUp, IndianRupee, Settings } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PartnershipForm from "@/components/PartnershipForm";

const Partners = () => {
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture("Visit_Partners_Page");
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const partnershipSteps = [
    {
      icon: <Users className="w-12 h-12 text-primary-custom" />,
      title: "Reach Out",
      description: "Fill out our simple partnership inquiry form with your organization's details. Our team will contact you within 24 hours to discuss potential collaboration."
    },
    {
      icon: <Zap className="w-12 h-12 text-primary-custom" />,
      title: "Connect",
      description: "Schedule a personalized demo where we'll show you how 2care.ai works and discuss how we can customize our platform to meet your specific needs."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary-custom" />,
      title: "Grow",
      description: "After agreeing on partnership terms, we'll help you integrate our platform into your workflow, train your staff, and start connecting you with families who need your services."
    }
  ];

  const whyPartnerFeatures = [
    {
      icon: <Users className="w-12 h-12 text-primary-custom" />,
      title: "Reach Out",
      description: "Connect with an untapped market of NRI families seeking quality care for their parents"
    },
    {
      icon: <Zap className="w-12 h-12 text-primary-custom" />,
      title: "World Class Tech Infrastructure",
      description: "Offer technology-enabled care coordination powered by AI as a competitive advantage"
    },
    {
      icon: <Heart className="w-12 h-12 text-primary-custom" />,
      title: "Continuity of Care",
      description: "Seamless transition for elderly patients between hospital and home care"
    }
  ];

  const offeringsFeatures = [
    {
      icon: <Users className="w-12 h-12 text-primary-custom" />,
      title: "Get More Quality Customers",
      description: "Access a growing network of families seeking trusted healthcare providers"
    },
    {
      icon: <IndianRupee className="w-12 h-12 text-primary-custom" />,
      title: "Direct Revenue Impact",
      description: "Increase your revenue through our referral system and expanded client base"
    },
    {
      icon: <Settings className="w-12 h-12 text-primary-custom" />,
      title: "Have AI Tech Layer to Your Services",
      description: "Enhance your existing services with cutting-edge AI technology"
    }
  ];

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-custom mb-4">
              Join Us for a World Where Distance Never Stands Between Family and Care
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Our partners drive growth and impact for themselves and their patients with exclusive access inside 2care.ai technology and tools. Join us as home healthcare providers, geriatric clinics, multi-specialty hospitals, nursing homes, and ambulance services.
            </p>
            <DialogTrigger asChild>
              <Button className="bg-primary-custom hover:bg-primary-custom/90 text-white px-8 py-3 text-lg">
                Apply for Partnership
              </Button>
            </DialogTrigger>
          </div>

        {/* How To Partner With Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-custom mb-4 text-center">How to Partner With Us</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">Simple steps to join our healthcare network</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipSteps.map((step, index) => (
              <Card key={index} className="text-center border-2 border-light-outline hover:border-primary-custom transition-all duration-300 card-hover">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">{step.icon}</div>
                  <h3 className="text-xl font-bold text-secondary-custom mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-custom mb-4 text-center">Why Partner With Us</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">Unlock new opportunities and enhance your healthcare services</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyPartnerFeatures.map((feature, index) => (
              <Card key={index} className="text-center border-2 border-light-outline hover:border-primary-custom transition-all duration-300 card-hover">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-secondary-custom mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What 2care.ai Offers To You */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-custom mb-4 text-center">What 2care.ai Offers to You</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">Comprehensive benefits for our healthcare partners</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offeringsFeatures.map((offering, index) => (
              <Card key={index} className="text-center border-2 border-light-outline hover:border-primary-custom transition-all duration-300 card-hover group">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">{offering.icon}</div>
                  <h3 className="text-xl font-bold text-secondary-custom mb-4">{offering.title}</h3>
                  <p className="text-gray-600">{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="bg-gradient-to-r from-primary-custom to-tertiary-custom text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Healthcare Together?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join our growing network of healthcare partners and make a difference in families' lives
              </p>
              <DialogTrigger asChild>
                <Button className="bg-white text-primary-custom hover:bg-gray-100 px-8 py-3 text-lg">
                  Start Partnership Application
                </Button>
              </DialogTrigger>
            </CardContent>
          </Card>
        </section>
      </div>
    <DialogContent className="sm:max-w-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-secondary-custom">Partnership Application</DialogTitle>
          </DialogHeader>
          <PartnershipForm onSuccess={() => setIsModalOpen(false)} />
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default Partners;
