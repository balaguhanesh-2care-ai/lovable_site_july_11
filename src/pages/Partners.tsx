import { useState, useEffect } from "react";
import { usePostHog } from "posthog-js/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Zap, Heart, TrendingUp, IndianRupee, Settings } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PartnershipForm from "@/components/PartnershipForm";
import { FloatingBlobsBackground } from "@/components/ui/FloatingBlobsBackground";
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

import clsx from "clsx";

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
    },
    // Duplicates
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
    },
    // Duplicates
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
    },
    // Duplicates
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
      <div className="relative min-h-screen py-12 overflow-hidden">
        <FloatingBlobsBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-custom my-10">
              Join Us for a World Where
              <br />
              <span className="block text-2xl md:text-3xl font-semibold mt-2 text-secondary-custom/90">
                Distance Never Stands Between Family and Care!
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Our partners drive growth and impact for themselves and their patients with exclusive access inside 2care.ai technology and tools. Join us as home healthcare providers, geriatric clinics, multi-specialty hospitals, nursing homes, and ambulance services.
            </p>
            <DialogTrigger asChild>
              <Button className="bg-primary-custom hover:bg-primary-custom/90 text-white px-8 py-3 text-lg">
                Apply for Partnership
              </Button>
            </DialogTrigger>
          </div>

          {[{
            title: "How to Partner With Us",
            subtitle: "Simple steps to join our healthcare network",
            data: partnershipSteps
          }, {
            title: "Why Partner With Us",
            subtitle: "Unlock new opportunities and enhance your healthcare services",
            data: whyPartnerFeatures
          }, {
            title: "What 2care.ai Offers to You",
            subtitle: "Comprehensive benefits for our healthcare partners",
            data: offeringsFeatures
          }].map((section, index) => (
            <section className="mb-20" key={index}>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-custom mb-6 text-center">{section.title}</h2>
              <p className="text-base text-gray-600 text-center mb-12 max-w-2xl mx-auto">{section.subtitle}</p>
              <Swiper
                modules={[Autoplay, EffectCoverflow]}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 30,        // reduce for less dramatic tilt
                  stretch: 0,      // reduce or negative to tighten spacing
                  depth: 100,        // reduce depth
                  modifier: 1,
                  slideShadows: false
                }}
                spaceBetween={30}  // negative = slides overlap more
                loop={true}
                autoplay={{ delay: 500, disableOnInteraction: false }}
                speed={900}
                slidesPerView={3}
                centeredSlides={true}
                className="w-full max-w-[1100px] mx-auto"
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 16 },
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
              >


                {section.data.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white border-2 border-light-outline shadow-xl">
                      <CardContent className="flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8 text-center">
                        <div className="flex justify-center mb-4 sm:mb-6">{item.icon}</div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-secondary-custom mb-2 sm:mb-4">{item.title}</h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </SwiperSlide>

                ))}
              </Swiper>
            </section>
          ))}

          <section>
            <div className="relative rounded-2xl overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
                poster="/blue-gradient.jpg"
                style={{ pointerEvents: 'none' }}
              >
                <source src="videos/blue-gradient.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 z-0" style={{ background: 'rgba(20,30,50,0.45)' }} />
              <Card className="bg-transparent text-white relative z-10 shadow-none">
                <CardContent className="p-12 text-center">
                  <h2 className="text-2xl font-bold mb-4">Ready to Transform Healthcare With Us?</h2>
                  <p className="text-lg mb-8 opacity-90">
                    Join our growing network of healthcare partners and make a difference in families' lives
                  </p>
                  <DialogTrigger asChild>
                  <Button className="bg-primary-custom hover:bg-primary-custom/90 text-white px-8 py-3 text-lg">
                      Start Partnership Application
                    </Button>
                  </DialogTrigger>
                </CardContent>
              </Card>
            </div>
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