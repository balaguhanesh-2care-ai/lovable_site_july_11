

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DashboardSlideshow from "@/components/DashboardSlideshow";

const HeroSection = () => {
  return (
    <section 
      className="text-white py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/4ad1f5f3-794d-4cde-8aea-1d5acfac05b4.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-custom">AI-Powered Healthcare for Your Family</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-4xl mx-auto text-secondary-custom">
              Monitor your loved ones' health with Maya AI Health Agent and medical professionals, no matter the distance
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-secondary-custom text-white hover:bg-secondary-custom/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold px-12 py-6 text-lg"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0', '_blank')}
              >
                Get Started <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              {/* Static Laptop mockup */}
              <div className="relative bg-gray-200 rounded-t-2xl p-6 pb-0 shadow-2xl w-[800px]">
                {/* Laptop screen bezel */}
                <div className="bg-black rounded-t-xl p-4 h-[450px] overflow-hidden">
                  <DashboardSlideshow />
                </div>
              </div>
              {/* Laptop base */}
              <div className="bg-gray-300 h-6 rounded-b-2xl mx-8 relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-1 w-20 h-3 bg-gray-400 rounded-full"></div>
              </div>
              {/* Laptop shadow */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-96 h-8 bg-black/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

