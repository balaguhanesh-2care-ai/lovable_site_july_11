import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, MessageSquare, Phone, Calendar, FileText, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import AnimatedSolutionsShowcase from "@/components/AnimatedSolutionsShowcase";

const cardData = [
  {
    key: "ai",
    bg: "/white-gradient.jpg",
    content: (
      <>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#2b4570' }}>AI Health Monitoring</h2>
        <p className="text-lg font-bold text-center mb-8 max-w-2xl mx-auto" style={{ color: '#2b4570' }}>Advanced AI technology to monitor your loved ones' health in real-time</p>
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/e0fb920d-1e48-4fc5-a603-7238d40ef9ad.png" 
            alt="AI Health Monitoring Dashboard"
            className="rounded-2xl shadow-lg max-w-4xl w-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      </>
    )
  },
  {
    key: "maya",
    bg: "/white-gradient.jpg",
    content: (
      <>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#2b4570' }}>Maya - Your Personal AI WhatsApp Health Agent</h2>
        <p className="text-lg font-bold text-center mb-8 max-w-2xl mx-auto" style={{ color: '#2b4570' }}>24/7 AI-powered health assistance through WhatsApp for seamless communication</p>
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/863a2faf-3bb7-4a3e-b7ce-a5329f90eae1.png" 
            alt="Maya AI WhatsApp Agent"
            className="rounded-2xl shadow-lg max-w-4xl w-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      </>
    )
  },
  {
    key: "poc",
    bg: "/white-gradient.jpg",
    content: (
      <>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#2b4570' }}>Personal Care With Medical Point of Contact</h2>
        <p className="text-lg font-bold text-center mb-8 max-w-2xl mx-auto" style={{ color: '#2b4570' }}>Dedicated medical professionals providing personalized healthcare support</p>
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/f6808022-934a-4482-8940-af4d36ec82c8.png" 
            alt="Medical POC Dashboard"
            className="rounded-2xl shadow-lg max-w-4xl w-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      </>
    )
  },
  {
    key: "conv",
    bg: "/white-gradient.jpg",
    content: (
      <>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#2b4570' }}>Seamless Conversational AI Experience for Your Parents</h2>
        <p className="text-lg font-bold text-center mb-8 max-w-2xl mx-auto" style={{ color: '#2b4570' }}>Natural language interaction designed specifically for elderly care</p>
        <div className="text-center">
          <img 
            src="/lovable-uploads/f9b65802-261c-4324-b1a4-36d9670f9343.png" 
            alt="Conversational AI Experience"
            className="rounded-2xl shadow-lg mx-auto max-w-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      </>
    )
  }
];

const Solutions = () => {
  const [topIndex, setTopIndex] = useState(0);

  // Auto-looping scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTopIndex((prev) => (prev + 1) % cardData.length);
    }, 3500); // Change card every 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  const aiHealthFeatures = [
    { icon: <Activity className="w-5 h-5" />, text: "Real-time vital sign monitoring" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "AI-powered health trend analysis" },
    { icon: <Activity className="w-5 h-5" />, text: "Personalized health insights" },
    { icon: <Calendar className="w-5 h-5" />, text: "Customizable health tracking dashboards" }
  ];

  const mayaFeatures = [
    { icon: <MessageSquare className="w-5 h-5" />, text: "24/7 WhatsApp-based health assistant" },
    { icon: <Phone className="w-5 h-5" />, text: "Multi-language support for elderly care" },
    { icon: <FileText className="w-5 h-5" />, text: "AI-powered medical report analysis" },
    { icon: <MessageSquare className="w-5 h-5" />, text: "Medication reminders and health tips" }
  ];

  const medicalPocFeatures = [
    { icon: <Phone className="w-5 h-5" />, text: "Dedicated medical professional support" },
    { icon: <Activity className="w-5 h-5" />, text: "Regular health check-ins and consultations" },
    { icon: <Calendar className="w-5 h-5" />, text: "Scheduled wellness monitoring" },
    { icon: <Phone className="w-5 h-5" />, text: "Emergency response coordination" }
  ];

  const platformFeatures = [
    { title: "Customized Vital Monitoring", image: "/lovable-uploads/9a9d9580-d25f-4620-b250-03f494970ed8.png" },
    { title: "Centralized Health Records", image: "/lovable-uploads/a1bd954a-2031-405e-94f8-286c3ba3f062.png" },
    { title: "Lab Appointment Booking", image: "/lovable-uploads/00fc7a11-e1c7-40fe-9c00-b65d858b5cbe.png" },
    { title: "Appointment Management", image: "/lovable-uploads/806c00b5-ce2d-479a-95b8-5527dfe632c2.png" },
    { title: "Prescription Management", image: "/lovable-uploads/9d3c08bc-28cc-4026-a688-3c605d5e87c0.png" },
    { title: "Medical Progress Notes", image: "/lovable-uploads/32917b9d-d7f3-4f0e-bc3a-28874bbc5a59.png" }
  ];

  // Duplicate features for carousel effect
  const featuresRow1 = [...platformFeatures, ...platformFeatures];
  const featuresRow2 = [...platformFeatures, ...platformFeatures];

  const [aiRef, aiInView] = useInView();
  const [mayaRef, mayaInView] = useInView();
  const [pocRef, pocInView] = useInView();
  const [convRef, convInView] = useInView();

  return (
    <div className="min-h-screen bg-main-bg">
      {/* Responsive bubbles in the background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute w-10 h-10 sm:w-16 sm:h-16 bg-blue-300 rounded-full blur-2xl opacity-40 animate-bubble-1" style={{ top: '12%', left: '8%' }} />
        <div className="absolute w-7 h-7 sm:w-10 sm:h-10 bg-yellow-200 rounded-full blur-2xl opacity-30 animate-bubble-2" style={{ top: '60%', left: '18%' }} />
        <div className="absolute w-8 h-8 sm:w-12 sm:h-12 bg-blue-200 rounded-full blur-2xl opacity-30 animate-bubble-3" style={{ top: '30%', right: '12%' }} />
        <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full blur-2xl opacity-20 animate-bubble-4" style={{ bottom: '18%', left: '30%' }} />
        <div className="absolute w-10 h-10 sm:w-14 sm:h-14 bg-blue-100 rounded-full blur-2xl opacity-30 animate-bubble-5" style={{ bottom: '10%', right: '20%' }} />
      </div>
      {/* Heading section */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-custom mb-4">
            Our Solutions & Services
          </h1>
          <p className="text-xl text-sub max-w-4xl mx-auto leading-relaxed">
            Comprehensive healthcare management powered by Maya AI Health Agent and qualified medical professionals. From real-time vital monitoring to 24/7 support, we simplify healthcare for your family.
          </p>
        </div>
      </div>

      {/* Animated Platform Features Section */}
      <div className="mt-[-1.5rem]">{/* negative margin to pull up the section */}
        <AnimatedSolutionsShowcase />
      </div>

    </div>
  );
};

export default Solutions;
