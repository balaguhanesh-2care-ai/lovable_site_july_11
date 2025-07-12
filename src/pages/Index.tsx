
import LetsConnect from "@/components/LetsConnect";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CircularHealthFeatures from "@/components/CircularHealthFeatures";
import MedicalAdvisorsSection from "@/components/sections/MedicalAdvisorsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CallToActionSection from "@/components/sections/CallToActionSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CircularHealthFeatures />
      <MedicalAdvisorsSection />
      <PartnersSection />
      <TestimonialsSection />
      <CallToActionSection />
      <LetsConnect />
    </div>
  );
};

export default Index;
