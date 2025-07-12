
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Clock, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-primary-custom" />,
      title: "AI Health Monitoring",
      description: "Advanced AI technology to monitor your loved ones' health in real-time"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-custom" />,
      title: "24/7 Medical Support", 
      description: "Round-the-clock medical assistance with qualified healthcare professionals"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-custom" />,
      title: "Emergency Response",
      description: "Instant alerts and emergency support when your family needs it most"
    },
    {
      icon: <Users className="w-8 h-8 text-primary-custom" />,
      title: "Family Connection",
      description: "Stay connected with your parents' health journey from anywhere"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-custom mb-4">
            Why Choose 2care.ai?
          </h2>
          <p className="text-xl text-sub max-w-3xl mx-auto leading-relaxed">
            Complete healthcare solution combining AI technology with human expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-light-outline hover:border-primary-custom/30">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-primary-custom/10 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary-custom mb-4 group-hover:text-primary-custom transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sub flex-grow leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
