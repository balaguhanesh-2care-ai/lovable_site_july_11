import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const features = [
  {
    icon: <Heart className="w-8 h-8 text-primary-custom" />,
    title: "AI Health Monitoring",
    description: "Advanced AI technology to monitor your loved ones' health in real-time",
    bg: "bg-gradient-to-br from-primary-custom/20 to-tertiary-custom/20",
    iconBg: "bg-primary-custom/20",
  },
  {
    icon: <Shield className="w-8 h-8 text-tertiary-custom" />,
    title: "24/7 Medical Support",
    description: "Round-the-clock medical assistance with qualified healthcare professionals",
    bg: "bg-gradient-to-br from-tertiary-custom/20 to-secondary-custom/20",
    iconBg: "bg-tertiary-custom/20",
  },
  {
    icon: <Clock className="w-8 h-8 text-secondary-custom" />,
    title: "Emergency Response",
    description: "Instant alerts and emergency support when your family needs it most",
    bg: "bg-gradient-to-br from-secondary-custom/20 to-primary-custom/10",
    iconBg: "bg-secondary-custom/20",
  },
  {
    icon: <Users className="w-8 h-8 text-[#3FC4E2]" />,
    title: "Family Connection",
    description: "Stay connected with your parents' health journey from anywhere",
    bg: "bg-gradient-to-br from-[#3FC4E2]/20 to-primary-custom/10",
    iconBg: "bg-[#3FC4E2]/20",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: custom * 0.18,
      duration: 0.6,
      type: "spring" as const,
      stiffness: 80,
      damping: 18,
    },
  }),
};

const FeaturesSection = () => {
  return (
    <motion.section
      className="h-full w-full flex flex-col items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <motion.div style={{ opacity: 1 }} className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary-custom mb-4">
            Why Choose 2care.ai?
          </h2>
          <p className="text-lg md:text-xl text-sub max-w-3xl mx-auto leading-relaxed">
            Complete healthcare solution combining <span className="text-primary-custom font-semibold">AI technology</span> with <span className="text-tertiary-custom font-semibold">human expertise</span>
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={
                `group hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border-2 border-light-outline hover:border-primary-custom/30 ${feature.bg}`
              }
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <Card className="bg-transparent shadow-none border-none h-full">
                <CardContent className="p-6 md:p-8 text-center h-full flex flex-col">
                  <div className="mb-6 flex justify-center">
                    <div className={`p-4 rounded-full ${feature.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-secondary-custom mb-3 group-hover:text-primary-custom transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sub flex-grow leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;