
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, MessageSquare, Phone, Calendar, FileText, TrendingUp, Users, Shield, Heart, Clock } from "lucide-react";

const Solutions = () => {
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

  return (
    <div className="min-h-screen py-12 bg-main-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-custom mb-4">
            Our Solutions & Services
          </h1>
          <p className="text-xl text-sub max-w-4xl mx-auto leading-relaxed">
            Comprehensive healthcare management powered by Maya AI Health Agent and qualified medical professionals. From real-time vital monitoring to 24/7 support, we simplify healthcare for your family.
          </p>
        </div>

        {/* AI Health Monitoring */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-custom mb-4 text-center">AI Health Monitoring</h2>
              <p className="text-lg text-sub text-center mb-8 max-w-2xl mx-auto">Advanced AI technology to monitor your loved ones' health in real-time</p>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/e0fb920d-1e48-4fc5-a603-7238d40ef9ad.png" 
                  alt="AI Health Monitoring Dashboard"
                  className="rounded-2xl shadow-lg max-w-4xl w-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Maya AI WhatsApp Agent */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-custom mb-4 text-center">Maya - Your Personal AI WhatsApp Health Agent</h2>
              <p className="text-lg text-sub text-center mb-8 max-w-2xl mx-auto">24/7 AI-powered health assistance through WhatsApp for seamless communication</p>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/863a2faf-3bb7-4a3e-b7ce-a5329f90eae1.png" 
                  alt="Maya AI WhatsApp Agent"
                  className="rounded-2xl shadow-lg max-w-4xl w-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Personal Care with Medical POC */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-custom mb-4 text-center">Personal Care With Medical Point of Contact</h2>
              <p className="text-lg text-sub text-center mb-8 max-w-2xl mx-auto">Dedicated medical professionals providing personalized healthcare support</p>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/f6808022-934a-4482-8940-af4d36ec82c8.png" 
                  alt="Medical POC Dashboard"
                  className="rounded-2xl shadow-lg max-w-4xl w-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Conversational AI Experience */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-custom mb-4 text-center">
              Seamless Conversational AI Experience for Your Parents
            </h2>
            <p className="text-lg text-sub text-center mb-8 max-w-2xl mx-auto">Natural language interaction designed specifically for elderly care</p>
            <div className="text-center">
              <img 
                src="/lovable-uploads/f9b65802-261c-4324-b1a4-36d9670f9343.png" 
                alt="Conversational AI Experience"
                className="rounded-2xl shadow-lg mx-auto max-w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-custom mb-4">
              Comprehensive Platform Features
            </h2>
            <p className="text-xl text-sub max-w-3xl mx-auto">
              Everything you need to manage your family's healthcare in one integrated platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-light-outline hover:border-primary-custom/30 bg-white">
                <CardContent className="p-6">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-bold text-secondary-custom text-center">{feature.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solutions;
