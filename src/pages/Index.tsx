
import { useState } from "react";
import LetsConnect from "@/components/LetsConnect";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CircularHealthFeatures from "@/components/CircularHealthFeatures";
import MedicalAdvisorsSection from "@/components/sections/MedicalAdvisorsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import QRCodeSection from "@/components/sections/QRCodeSection";
import DashboardSlideshow from "@/components/DashboardSlideshow";
import { ChevronDown, ChevronUp } from "lucide-react";

const LaptopSection = () => (
  <section className="py-10 sm:py-16 md:py-20 bg-white flex justify-center">
    <div className="flex justify-center w-full px-2 sm:px-4 md:px-8">
      <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col items-center">
        {/* MacBook Screen */}
        <div className="relative bg-gradient-to-br from-gray-200 via-slate-100 to-gray-400 border-[6px] sm:border-8 border-gray-300 rounded-[22px] sm:rounded-[28px] shadow-2xl w-full aspect-[16/10] flex flex-col items-center overflow-hidden">
          {/* MacBook Bezel */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/90 rounded-[16px] sm:rounded-[22px] z-10 pointer-events-none" style={{border: '2px solid #222', boxSizing: 'border-box'}} />
          {/* MacBook Camera */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-gray-500 rounded-full z-20" />
          {/* MacBook Screen Content */}
          <div className="relative w-full h-full flex items-center justify-center z-20">
            <div className="absolute inset-0 w-full h-full">
              {/* Subtle Mac wallpaper gradient */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#f7b733] via-[#fc4a1a] to-[#4ABDAC] opacity-70" />
              <DashboardSlideshow />
            </div>
          </div>
        </div>
        {/* MacBook Pro Label */}
        <div className="text-center w-full -mt-3 sm:-mt-4">
          <span className="block text-xs sm:text-sm text-gray-500 font-medium tracking-widest select-none">MacBook Pro</span>
        </div>
        {/* MacBook Keyboard Base */}
        <div className="bg-gradient-to-t from-gray-400 to-gray-200 h-6 sm:h-8 w-[90%] mx-auto rounded-b-[18px] sm:rounded-b-[24px] shadow-lg relative -mt-1 flex items-end justify-center">
          {/* Trackpad */}
          <div className="absolute left-1/2 bottom-1 transform -translate-x-1/2 w-12 sm:w-20 h-2 sm:h-3 bg-gray-300 rounded-lg opacity-60" />
        </div>
        {/* MacBook Shadow */}
        <div className="absolute left-1/2 -bottom-6 sm:-bottom-8 transform -translate-x-1/2 w-40 sm:w-96 h-4 sm:h-8 bg-black/20 rounded-full blur-lg z-0" />
      </div>
    </div>
  </section>
);

const Index = () => {
  const [showRest, setShowRest] = useState(false);
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section with Down Arrow */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-transparent transition-opacity duration-700 ${showRest ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{ minHeight: '100vh', height: '100vh', width: '100vw' }}
      >
        <HeroSection />
        <button
          className="fixed bottom-6 right-6 bg-white/80 hover:bg-white text-primary-custom rounded-full p-3 shadow-lg transition-all duration-300 animate-float-down z-50"
          aria-label="Scroll down"
          onClick={() => setShowRest(true)}
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
      {/* Rest of Homepage (fades in) */}
      <div className={`transition-opacity duration-700 ${showRest ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button
          className="fixed bottom-6 right-6 bg-white/80 hover:bg-white text-primary-custom rounded-full p-3 shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll up"
          onClick={() => setShowRest(false)}
        >
          <ChevronUp className="w-8 h-8" />
        </button>
        <LaptopSection />
        <FeaturesSection />
        <CircularHealthFeatures />
        <QRCodeSection />
        <MedicalAdvisorsSection />
        <PartnersSection />
        <TestimonialsSection />
        <CallToActionSection />
        <LetsConnect />
      </div>
    </div>
  );
};

export default Index;

<style>{`
@keyframes float-down {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}
.animate-float-down {
  animation: float-down 1.6s ease-in-out infinite;
}
`}</style>
