import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Clock, Users } from "lucide-react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const featuresData = [
  {
    icon: <Heart className="w-8 h-8 text-primary-custom" />,
    title: "AI Health Monitoring",
    description: "Advanced AI technology to monitor your loved ones' health in real-time",
    backgroundImage: "/pictures/ai_conn.jpg"
  },
  {
    icon: <Shield className="w-8 h-8 text-primary-custom" />,
    title: "24/7 Medical Support", 
    description: "Round-the-clock medical assistance with qualified healthcare professionals",
    backgroundImage: "/pictures/code_face_human.jpg"
  },
  {
    icon: <Clock className="w-8 h-8 text-primary-custom" />,
    title: "Emergency Response",
    description: "Instant alerts and emergency support when your family needs it most",
    backgroundImage: "/pictures/things.jpg"
  },
  {
    icon: <Users className="w-8 h-8 text-primary-custom" />,
    title: "Family Connection",
    description: "Stay connected with your parents' health journey from anywhere",
    backgroundImage: "/pictures/water_molecules.jpg"
  }
];

interface FeaturesSectionProps {
  scrollYProgress: MotionValue<number>;
}
const FeaturesSection = ({ scrollYProgress }: FeaturesSectionProps) => {
  const isMobile = useIsMobile();

  // --- Adaptive Parameters ---
  const cardWidthRem = isMobile ? 20 : 24; // w-80 on mobile, w-96 on desktop
  const cardSpacingRem = isMobile ? 1.5 : 2; // space-x-6 on mobile, space-x-8 on desktop

  // --- Animation Hooks ---
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // --- New, more reliable calculation ---
  // 1. Calculate the padding needed to center the first card
  const firstCardCenterOffset = cardWidthRem / 2;
  const initialPaddingLeft = `calc(50% - ${firstCardCenterOffset}rem)`;

  // 2. Calculate the total horizontal distance the strip needs to travel
  const totalTravelDistance = (featuresData.length - 1) * (cardWidthRem + cardSpacingRem);
  
  // 3. Transform the scroll progress into a simple pixel translation
  const cardsX = useTransform(scrollYProgress, [0.1, 0.95], [0, -totalTravelDistance * 16]); // Convert rem to px for transform


  return (
    <motion.section style={{ scale, opacity }} className="h-full w-full flex items-center">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary-custom mb-4">Why Choose 2care.ai?</h2>
          <p className="text-lg md:text-xl text-sub max-w-3xl mx-auto leading-relaxed">
            Complete healthcare solution combining AI technology with human expertise
          </p>
        </div>
        {/* The initial centering is now handled by padding on this container */}
        <div className="w-full overflow-hidden h-[350px]">
          <motion.div style={{ x: cardsX }} className={`inline-flex h-full items-center ${isMobile ? 'space-x-6' : 'space-x-8'}`}>
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border-2 border-light-outline flex-shrink-0 ${isMobile ? 'w-80' : 'w-96'}`}
                style={{
                  backgroundImage: `url(${feature.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />
                <div className="relative h-full">
                  <CardContent className="p-6 md:p-8 text-center h-full flex flex-col justify-center items-center text-white">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-base text-white/80 flex-grow leading-relaxed">{feature.description}</p>
                  </CardContent>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;