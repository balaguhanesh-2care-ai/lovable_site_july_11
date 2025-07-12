
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-custom via-tertiary-custom to-secondary-custom text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Healthcare Journey?
          </h2>
          <p className="text-lg mb-2 opacity-90">
            Join thousands of families who trust 2care.ai
          </p>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            for comprehensive healthcare management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary-custom hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold px-8 py-4">
              <Link to="/pricing">
                View Pricing Plans <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white bg-secondary-custom hover:bg-secondary-custom/90 hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold px-8 py-4">
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
