import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CursorGlow from "@/components/CursorGlow";
import TypewriterFamily from "@/components/TypewriterFamily";
import { usePostHog } from "posthog-js/react";

const HeroSection = () => {
  const posthog = usePostHog();

  const handleGetStartedClick = () => {
    posthog.capture("CTA_Click_GetStarted", {
      location: "HeroSection",
      plan: "default", // or specify which plan this defaults to
      action: "open_whatsapp_chat"
    });
    window.open('https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0', '_blank');
  };
  return (
    <>
      <CursorGlow />
      <section 
        className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen w-full overflow-x-hidden"
        style={{ minHeight: '100vh', height: '100vh', width: '100vw' }}
      >
        {/* Galaxy Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          poster="/placeholder.svg"
          style={{ pointerEvents: 'none' }}
        >
          <source src="/galaxy.mp4" type="video/mp4" />
        </video>
        {/* Fading Overlay Layer */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{
          background: 'linear-gradient(180deg, rgba(20,30,50,0.85) 0%, rgba(20,30,50,0.45) 40%, rgba(20,30,50,0.15) 100%)'
        }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col justify-center items-center h-full">
          <div className="max-w-6xl mx-auto w-full flex flex-col justify-center items-center h-full">
            <div className="text-center mb-8 flex flex-col justify-center items-center h-full pt-8 sm:pt-12 md:pt-16 lg:pt-10 pb-10 sm:pb-16">
              <TypewriterFamily />
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 leading-relaxed max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-4xl mx-auto text-white">
              Monitor your loved ones' health with Maya AI Health Agent and medical professionals, no matter the distance!
              </p>
              <Button 
                size="lg" 
                className="w-full max-w-xs sm:max-w-fit bg-secondary-custom text-white hover:bg-secondary-custom/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold px-8 py-4 sm:px-12 sm:py-6 text-base sm:text-lg"
                onClick={handleGetStartedClick}
              >
                Get Started <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
