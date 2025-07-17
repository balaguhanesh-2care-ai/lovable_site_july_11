import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { usePostHog } from "posthog-js/react";

const CallToActionSection = () => {
  const posthog = usePostHog();

  const handlePricingClick = () => {
    posthog.capture("cta_view_pricing_click", {
      section: "CallToActionSection",
      location: "homepage_bottom_cta",
    });
  };

  const handleLearnMoreClick = () => {
    posthog.capture("cta_learn_more_click", {
      section: "CallToActionSection",
      location: "homepage_bottom_cta",
    });
  };

  return (
    <section 
      className="py-20 relative text-white overflow-hidden"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        // poster="public\videos\blue-gradient.mp4"
        style={{ pointerEvents: 'none' }}
      >
        <source src="videos/blue-gradient.mp4" type="video/mp4" />
      </video>
      {/* Overlay to reduce video intensity */}
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(20,30,50,0.45)' }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Healthcare Journey?
          </h2>
          <p className="text-lg opacity-90 mb-5">
            Join thousands of families who trust 2care.ai for comprehensive healthcare management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary-custom hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold px-8 py-4" onClick={handlePricingClick}>
              <Link to="/pricing">
                View Pricing Plans <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold px-8 py-4" onClick={handleLearnMoreClick}>
              <Link to="/solutions">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;