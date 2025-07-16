import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Clock, Users } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const features = [
  {
    icon: <Heart className="w-8 h-8 text-primary-custom" />, title: "AI Health Monitoring", description: "Advanced AI technology to monitor your loved ones' health in real-time"
  },
  {
    icon: <Shield className="w-8 h-8 text-primary-custom" />, title: "24/7 Medical Support", description: "Round-the-clock medical assistance with qualified healthcare professionals"
  },
  {
    icon: <Clock className="w-8 h-8 text-primary-custom" />, title: "Emergency Response", description: "Instant alerts and emergency support when your family needs it most"
  },
  {
    icon: <Users className="w-8 h-8 text-primary-custom" />, title: "Family Connection", description: "Stay connected with your parents' health journey from anywhere"
  }
];

const CARD_ANIMATION_DELAY = 0.4; // seconds
const CARD_ANIMATION_DURATION = 0.6; // seconds
const PAUSE_AFTER_ALL_VISIBLE = 1.2; // seconds

const FeaturesSection = () => {
  const controlsArray = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  useEffect(() => {
    let isCancelled = false;
    const timeoutIds: NodeJS.Timeout[] = [];

    async function animateLoop() {
      while (!isCancelled) {
        // Animate in one by one
        for (let i = 0; i < controlsArray.length; i++) {
          controlsArray[i].start({
            opacity: 1,
            scale: 1,
            transition: { duration: CARD_ANIMATION_DURATION, delay: 0 }
          });
          await new Promise(res => timeoutIds.push(setTimeout(res, CARD_ANIMATION_DELAY * 1000)));
        }
        // Pause with all visible
        await new Promise(res => timeoutIds.push(setTimeout(res, PAUSE_AFTER_ALL_VISIBLE * 1000)));
        // Instantly reset all
        for (let i = 0; i < controlsArray.length; i++) {
          controlsArray[i].set({ opacity: 0, scale: 0.8 });
        }
        // Short pause before next loop
        await new Promise(res => timeoutIds.push(setTimeout(res, 400)));
      }
    }
    // Initialize all hidden
    for (let i = 0; i < controlsArray.length; i++) {
      controlsArray[i].set({ opacity: 0, scale: 0.8 });
    }
    animateLoop();
    return () => {
      isCancelled = true;
      timeoutIds.forEach(clearTimeout);
    };
  }, [controlsArray]);

  return (
    <motion.section style={{ scale:1 }} className="h-full w-full flex items-center">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div style={{ opacity:1 }} className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary-custom mb-4">Why Choose 2care.ai?</h2>
          <p className="text-lg md:text-xl text-sub max-w-3xl mx-auto leading-relaxed">
            Complete healthcare solution combining AI technology with human expertise
          </p>
        </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              animate={controlsArray[index]}
              initial={{ opacity: 0, scale: 0.8 }}
              className=""
            >
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-light-outline hover:border-primary-custom/30">
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
            </motion.div>
          ))}
      </div>
    </motion.section>
  );
};

export default FeaturesSection;