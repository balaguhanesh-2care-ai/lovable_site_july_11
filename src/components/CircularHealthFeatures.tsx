import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, FileText, Heart, AlertTriangle, Phone, Stethoscope, Bot, History, Shield } from "lucide-react";

interface FeatureData {
  id: string;
  icon: React.ElementType;
  title: string;
  problem: string;
  solution: string;
}

const features: FeatureData[] = [
  { id: "vitals", icon: Activity, title: "Customised Vitals", problem: "Vital signs monitoring can be inconsistent and delayed.", solution: "Real-time personalized vital tracking tailored to your health profile." },
  { id: "reports", icon: FileText, title: "AI Report Summary", problem: "Medical reports are complex and hard to understand.", solution: "AI-powered summaries that explain your health data in simple terms." },
  { id: "monitoring", icon: Heart, title: "Daily Health Monitoring", problem: "Health tracking requires constant manual input.", solution: "Automated daily monitoring with intelligent health insights." },
  { id: "alerts", icon: AlertTriangle, title: "Get Timely Alerts", problem: "Missing critical health changes due to late notifications.", solution: "Instant alerts for important health changes and anomalies." },
  { id: "emergency", icon: Phone, title: "Emergency Response System", problem: "Emergency situations lack immediate professional response.", solution: "24/7 emergency response system with instant medical assistance." },
  { id: "checkins", icon: Stethoscope, title: "Doctor Check-ins", problem: "Infrequent doctor visits miss ongoing health concerns.", solution: "Regular virtual check-ins with qualified healthcare professionals." },
  { id: "maya", icon: Bot, title: "AI Maya: Personalised Health Agent", problem: "Generic health advice doesn't fit individual needs.", solution: "Personalized AI health agent trained on your specific health data." },
  { id: "records", icon: History, title: "Historical Data Records", problem: "Health history is scattered across different providers.", solution: "Comprehensive historical data in one secure, accessible location." },
  { id: "care", icon: Shield, title: "Always on Care 24/7", problem: "Health concerns arise outside of regular healthcare hours.", solution: "Round-the-clock monitoring and care availability." }
];

const cardVariants = {
  initial: {
    x: 70,
    y: -20,
    scale: 0.84,
    rotate: 10,
    opacity: 0,
  },
  animate: (position: number) => ({
    x: position * 35,
    y: position * -10,
    scale: 1 - position * 0.08,
    rotate: position * 5,
    opacity: 1,
    zIndex: features.length - position,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  }),
  exit: {
    x: -70,
    y: 20,
    scale: 0.8,
    opacity: 0,
    rotate: -10,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

const FeatureCardContent = ({ feature }: { feature: FeatureData }) => {
  const Icon = feature.icon;
  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-custom/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary-custom" />
        </div>
        <h3 className="text-md font-bold text-secondary-custom">{feature.title}</h3>
      </div>
      <div className="space-y-3">
        <div>
          <p className="text-sm font-semibold text-secondary-custom mb-1">Problem</p>
          <p className="text-sm text-sub leading-relaxed">{feature.problem}</p>
        </div>
        <div className="border-t border-gray-100 my-2"></div>
        <div>
          <p className="text-sm font-semibold text-primary-custom mb-1">Solution</p>
          <p className="text-sm text-sub leading-relaxed font-medium">{feature.solution}</p>
        </div>
      </div>
    </>
  );
};

const CircularHealthFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-orange-50/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left side - Text content */}
            <div className="w-full lg:w-5/12 space-y-8 text-center lg:text-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-custom mb-6">
                  A Comprehensive Health Ecosystem
                </h2>
                <p className="text-lg text-sub leading-relaxed mb-8">
                  Experience the future of healthcare with our integrated AI system. From real-time monitoring to emergency response, we provide complete peace of mind.
                </p>
              </div>
              <div className="space-y-4 inline-block lg:block">
                 <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-custom flex items-center justify-center"><span className="text-white text-sm font-bold">✓</span></div>
                  <span className="text-sub">Personalized health insights powered by AI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-custom flex items-center justify-center"><span className="text-white text-sm font-bold">✓</span></div>
                  <span className="text-sub">24/7 continuous monitoring and support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-custom flex items-center justify-center"><span className="text-white text-sm font-bold">✓</span></div>
                  <span className="text-sub">Seamless integration with healthcare providers</span>
                </div>
              </div>
            </div>

            {/* Right side - Animated Card Stack */}
            <div className="w-full lg:w-6/12 flex items-center justify-center">
              <div className="relative h-[380px] w-full max-w-xs mx-auto">
                <AnimatePresence initial={false}>
                  {features.map((feature, index) => {
                    const stackPosition = (features.length + index - activeIndex) % features.length;
                    if (stackPosition >= 3) return null;

                    return (
                      <motion.div
                        key={feature.id}
                        custom={stackPosition}
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute w-full p-6 bg-white rounded-2xl border"
                        style={{
                          transformOrigin: 'bottom left',
                          boxShadow: stackPosition === 0 ? '0 25px 50px -12px rgba(63, 196, 226, 0.4)' : '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
                          borderColor: stackPosition === 0 ? 'rgba(63, 196, 226, 0.5)' : 'rgba(229, 231, 235, 1)'
                        }}
                      >
                        <FeatureCardContent feature={feature} />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularHealthFeatures;