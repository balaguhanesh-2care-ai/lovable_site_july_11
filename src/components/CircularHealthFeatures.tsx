import { useState } from "react";
import { Activity, FileText, Heart, AlertTriangle, Phone, Stethoscope, Bot, History, Shield } from "lucide-react";

interface FeatureData {
  id: string;
  icon: any;
  title: string;
  position: { top: string; left: string };
  labelPosition: { top: string; left: string; textAlign: string };
  problem: string;
  solution: string;
}

// Calculate positions in a perfect circle
const radius = 120;
const features: FeatureData[] = [
  {
    id: "vitals",
    icon: Activity,
    title: "Customised vitals",
    position: { 
      top: `calc(50% + ${Math.sin(0 * Math.PI / 4) * radius}px)`, 
      left: `calc(50% + ${Math.cos(0 * Math.PI / 4) * radius}px)` 
    },
    labelPosition: { top: "0", left: "0", textAlign: "center" },
    problem: "Vital signs monitoring can be inconsistent and delayed",
    solution: "Real-time personalized vital tracking tailored to your health profile"
  },
  {
    id: "reports",
    icon: FileText,
    title: "AI Report Summary",
    position: { 
      top: `calc(50% + ${Math.sin(1 * Math.PI / 4) * radius}px)`, 
      left: `calc(50% + ${Math.cos(1 * Math.PI / 4) * radius}px)` 
    },
    labelPosition: { top: "0", left: "0", textAlign: "center" },
    problem: "Medical reports are complex and hard to understand",
    solution: "AI-powered summaries that explain your health data in simple terms"
  },
  {
    id: "monitoring",
    icon: Heart,
    title: "Daily health monitoring",
    position: { 
      top: `calc(50% + ${Math.sin(2 * Math.PI / 4) * radius}px)`, 
      left: `calc(50% + ${Math.cos(2 * Math.PI / 4) * radius}px)` 
    },
    labelPosition: { top: "0", left: "0", textAlign: "center" },
    problem: "Health tracking requires constant manual input",
    solution: "Automated daily monitoring with intelligent health insights"
  },
  {
    id: "alerts",
    icon: AlertTriangle,
    title: "Get timely alerts",
    position: { 
      top: `calc(50% + ${Math.sin(3 * Math.PI / 4) * radius}px)`, 
      left: `calc(50% + ${Math.cos(3 * Math.PI / 4) * radius}px)` 
    },
    labelPosition: { top: "0", left: "0", textAlign: "center" },
    problem: "Missing critical health changes due to late notifications",
    solution: "Instant alerts for important health changes and anomalies"
  },
  {
    id: "emergency",
    icon: Phone,
    title: "Emergency response system",
    position: { 
      top: `calc(50% + ${Math.sin(4 * Math.PI / 4) * radius}px)`, 
      left: `calc(50% + ${Math.cos(4 * Math.PI / 4) * radius}px)` 
    },
    labelPosition: { top: "0", left: "0", textAlign: "center" },
    problem: "Emergency situations lack immediate professional response",
    solution: "24/7 emergency response system with instant medical assistance"
  },
  {
    id: "checkins",
    icon: Stethoscope,
    title: "Doctor check-ins",
    position: { 
      top: `calc(50% + ${Math.sin(5 * Math.PI / 4) * radius}px)`, 
      left: `calc(50% + ${Math.cos(5 * Math.PI / 4) * radius}px)` 
    },
    labelPosition: { top: "0", left: "0", textAlign: "center" },
    problem: "Infrequent doctor visits miss ongoing health concerns",
    solution: "Regular virtual check-ins with qualified healthcare professionals"
  },
  {
    id: "maya",
    icon: Bot,
    title: "AI Maya: Personalised Health Agent",
    position: { 
      top: `calc(50% + ${Math.sin(6 * Math.PI / 4) * radius}px)`, 
      left: `calc(50% + ${Math.cos(6 * Math.PI / 4) * radius}px)` 
    },
    labelPosition: { top: "0", left: "0", textAlign: "center" },
    problem: "Generic health advice doesn't fit individual needs",
    solution: "Personalized AI health agent trained on your specific health data"
  },
  {
    id: "records",
    icon: History,
    title: "Historical data records",
    position: { 
      top: `calc(50% + ${Math.sin(7 * Math.PI / 4) * radius}px)`, 
      left: `calc(50% + ${Math.cos(7 * Math.PI / 4) * radius}px)` 
    },
    labelPosition: { top: "0", left: "0", textAlign: "center" },
    problem: "Health history is scattered across different providers",
    solution: "Comprehensive historical data in one secure, accessible location"
  },
  {
    id: "care",
    icon: Shield,
    title: "Always on care 24/7",
    position: { 
      top: `calc(50% + ${Math.sin(8 * Math.PI / 8) * radius}px)`, 
      left: `calc(50% + ${Math.cos(8 * Math.PI / 8) * radius}px)` 
    },
    labelPosition: { top: "0", left: "0", textAlign: "center" },
    problem: "Health concerns arise outside of regular healthcare hours",
    solution: "Round-the-clock monitoring and care availability"
  }
];

const FeatureCircle = ({ feature, isHovered, onHover, onLeave }: {
  feature: FeatureData;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const Icon = feature.icon;
  
  return (
    <>
      {/* Feature Circle */}
      <div
        className="absolute cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2"
        style={feature.position}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {/* Hover container with improved positioning */}
        {isHovered && (
          <div className="fixed top-8 left-1/2 transform -translate-x-1/2 w-80 p-6 backdrop-blur-lg bg-white/95 border border-primary-custom/20 rounded-xl shadow-2xl z-[9999] animate-scale-in">
            <div className="text-lg font-bold text-primary-custom mb-3">{feature.title}</div>
            <div className="text-sm font-medium text-secondary-custom mb-2">Problem:</div>
            <div className="text-xs text-sub mb-3">{feature.problem}</div>
            <div className="text-sm font-medium text-primary-custom mb-2">Our Solution:</div>
            <div className="text-xs text-sub">{feature.solution}</div>
          </div>
        )}
        
        {/* Circle */}
        <div 
          className={`relative w-16 h-16 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300 z-1 ${
            isHovered 
              ? 'border-blue-400 scale-110' 
              : 'border-blue-400 hover:border-blue-500'
          }`}
        >
          <Icon className={`w-5 h-5 transition-colors duration-300 ${
            isHovered ? 'text-blue-500' : 'text-sub'
          }`} />
        </div>
      </div>

    </>
  );
};

const CircularHealthFeatures = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-orange-400/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Text content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-custom mb-6">
                  Comprehensive Health Ecosystem
                </h2>
                <p className="text-xl text-sub leading-relaxed mb-8">
                  Experience the future of healthcare with our integrated AI-powered health management system. 
                  From real-time monitoring to emergency response, we provide complete peace of mind.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-custom flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-sub">Personalized health insights powered by AI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-custom flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-sub">24/7 continuous monitoring and support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary-custom flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-sub">Seamless integration with healthcare providers</span>
                </div>
              </div>
            </div>

            {/* Right side - Circular features */}
            <div className="w-full lg:w-1/2 relative h-96 lg:h-[500px] overflow-visible">
              {/* Central circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-white border-3 border-blue-400 flex items-center justify-center shadow-lg shadow-blue-400/50 z-5">
                {/* Blue glow effect */}
                <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-md animate-pulse"></div>
                <img 
                  src="/lovable-uploads/c0b20459-77f5-436c-a4c2-5abc339a3735.png" 
                  alt="2care.ai Logo"
                  className="w-20 h-20 lg:w-28 lg:h-28 object-contain"
                />
              </div>

              {/* Feature circles - hidden on small screens, shown on medium+ */}
              <div className="hidden md:block">
                {features.map((feature) => (
                  <FeatureCircle
                    key={feature.id}
                    feature={feature}
                    isHovered={hoveredFeature === feature.id}
                    onHover={() => setHoveredFeature(feature.id)}
                    onLeave={() => setHoveredFeature(null)}
                  />
                ))}

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-1">
                  <defs>
                    <radialGradient id="connectionGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#45b7d1" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3fc4e2" stopOpacity="0.2" />
                    </radialGradient>
                  </defs>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="120"
                    fill="none"
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    strokeDasharray="8,4"
                    className="animate-pulse-slow"
                  />
                </svg>
              </div>

              {/* Mobile grid layout */}
              <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
                {features.slice(0, 8).map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.id}
                      className="flex flex-col items-center p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-custom/50 transition-all duration-300"
                      onMouseEnter={() => setHoveredFeature(feature.id)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5 text-primary-custom" />
                      </div>
                      <span className="text-xs text-primary-custom font-medium text-center leading-tight">
                        {feature.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularHealthFeatures;