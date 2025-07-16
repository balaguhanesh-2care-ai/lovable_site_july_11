import { useEffect, useRef, useState } from "react";
import { usePostHog } from "posthog-js/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Lightbulb, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import FeatureRequestForm from "@/components/FeatureRequestForm";
import { useInView } from "@/hooks/useInView";
import { Link } from "react-router-dom";

const MAX_UPDATES = 15; // Set to the max number of updates you expect

const ProductUpdates = () => {
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture("Visit_ProductUpdates_Page");
  }, []);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updates = [
    {
      month: "July'25",
      title: "WhatsApp Support For Parents",
      description: "Care for your loved ones from afar. Maya AI sends reminders, chats in their language, and simplifies health reports – all on WhatsApp.",
      status: "prototype",
      icon: <Check className="w-5 h-5" />
    },
    {
      month: "July'25",
      title: "AI Summary",
      description: "Maya, your personal AI health agent, provides a concise overview of the entire dashboard, summarizing vitals, reports, and medical advice for quick insights, saving you time and helping you feel more informed and in control.",
      status: "prototype",
      icon: <Check className="w-5 h-5" />
    },
    {
      month: "July'25",
      title: "Weekly Health AI Summary",
      description: "Receive comprehensive weekly health summaries powered by AI, providing insights into health trends, patterns, and recommendations for your family members' wellbeing.",
      status: "prototype",
      icon: <Check className="w-5 h-5" />
    },
    {
      month: "July'25",
      title: "Emergency Virtual Patient Support",
      description: "24/7 emergency virtual support system that connects patients with healthcare professionals instantly during critical situations, ensuring immediate assistance when needed most.",
      status: "prototype",
      icon: <Check className="w-5 h-5" />
    },
    {
      month: "July'25",
      title: "Partnership with Major Diagnostic Companies",
      description: "Seamless integration with leading diagnostic laboratories for direct report access, automated result interpretation, and streamlined healthcare data management.",
      status: "prototype",
      icon: <Check className="w-5 h-5" />
    },
    {
      month: "July'25",
      title: "Regular Monitoring",
      description: "Stay proactive with regular vital monitoring to maintain wellness and prevent potential health issues with continuous health tracking and alerts.",
      status: "prototype",
      icon: <Check className="w-5 h-5" />
    },
    {
      month: "Aug'25",
      title: "Patients Dashboard",
      description: "Understand and proactively monitor your family member's health, gaining peace of mind with quick access to vitals, dedicated Medical POC's updates, reports, alerts & notifications, doctor's advice",
      status: "coming-up",
      icon: <Clock className="w-5 h-5" />
    },
    {
      month: "Aug'25",
      title: "Vital Tracking",
      description: "Understand and proactively monitor your family member's health, gaining peace of mind with quick access to vitals, dedicated Medical POC's updates, reports, alerts & notifications, doctor's advice",
      status: "coming-up",
      icon: <Clock className="w-5 h-5" />
    },
    {
      month: "Aug'25",
      title: "Medical POC & Updates",
      description: "Assigned medically qualified professionals provide proactive care with medical check-ins, vital monitoring, and act as health companions for your family members, so you know your loved ones are cared for and never alone.",
      status: "coming-up",
      icon: <Clock className="w-5 h-5" />
    },
    {
      month: "Aug'25",
      title: "Alerts",
      description: "Maya, your personal AI health agent and medical POC, evaluates health data to provide timely and relevant updates, giving you reassurance that you'll always be alerted to critical health events",
      status: "coming-up",
      icon: <Clock className="w-5 h-5" />
    },
    {
      month: "Aug'25",
      title: "Share Profile",
      description: "Easily share a summary of your loved one's health with family or doctors via Whatsapp/email for collaborative care",
      status: "coming-up",
      icon: <Clock className="w-5 h-5" />
    },
    {
      month: "Aug'25",
      title: "Manage Multiple Profiles",
      description: "Proactively monitor your loved ones' health with ease, accessing every family member's profile from a single, unified dashboard",
      status: "coming-up",
      icon: <Clock className="w-5 h-5" />
    },
    {
      month: "Aug'25",
      title: "Centralized Report Management",
      description: "Effortlessly upload and organize health reports via Gmail or Google Drive, keeping your loved ones' medical information safe and accessible.",
      status: "coming-up",
      icon: <Clock className="w-5 h-5" />
    },
    {
      month: "Aug'25",
      title: "Customised Vitals",
      description: "Want to monitor specific health metrics? Create your own custom vital board to track the vitals that matter to you, anytime and in any way you prefer.",
      status: "coming-up",
      icon: <Clock className="w-5 h-5" />
    },
    {
      month: "Aug'25",
      title: "Analysis & Trends",
      description: "Track and analyze your vital trends for a comprehensive view of your health.",
      status: "coming-up",
      icon: <Clock className="w-5 h-5" />
    }
  ];

  const filteredUpdates = selectedFilter === "all" ? updates : updates.filter(update => update.status === selectedFilter);

  // FIX: Use a fixed number of useInView hooks
  const inViewPairs = [
    useInView(0.3),
    useInView(0.3),
    useInView(0.3),
    useInView(0.3),
    useInView(0.3),
    useInView(0.3),
    useInView(0.3),
    useInView(0.3),
    useInView(0.3),
    useInView(0.3),
    useInView(0.3),
    useInView(0.3),
    useInView(0.3),
    useInView(0.3),
    useInView(0.3)
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-secondary-custom mb-10 drop-shadow-lg mt-10">
            Keep Up With Our Updates
          </h1>
          <p className="text-xl text-gray-600 mb-4 font-light">
            We are creating new things just for you!
          </p>
          {/* Filter Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-6">
            <Button
              variant={selectedFilter === "prototype" ? "default" : "outline"}
              onClick={() => setSelectedFilter("prototype")}
              className={`transition-all duration-200 ${selectedFilter === "prototype" ? "bg-green-500 text-white scale-105 shadow-lg" : "hover:bg-green-100 hover:text-green-800"}`}
            >
              <Check className="w-4 h-4 mr-2" />
              Prototype
            </Button>
            <Button
              variant={selectedFilter === "coming-up" ? "default" : "outline"}
              onClick={() => setSelectedFilter("coming-up")}
              className={`transition-all duration-200 ${selectedFilter === "coming-up" ? "bg-yellow-400 text-white scale-105 shadow-lg" : "hover:bg-yellow-100 hover:text-yellow-800"}`}
            >
              <Clock className="w-4 h-4 mr-2" />
              Coming Up
            </Button>
            <Link to="/maya-ai">
              <Button
                variant="outline"
                className="flex items-center border-primary-custom text-primary-custom hover:bg-blue-100 hover:text-blue-800 transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                Maya AI
              </Button>
            </Link>
          </div>
          {/* Request Feature */}
          <Card className="max-w-md mx-auto border-none shadow-2xl bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-3">
                <Lightbulb className="w-10 h-10 text-primary-custom animate-pulse drop-shadow-lg" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-custom mb-6">Request a Feature</h3>
              <p className="text-gray-500 mb-4 font-light">Have an idea? Let us know what you'd like to see! Your feedback helps us build a better experience for you.</p>
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-primary-custom hover:bg-blue-700 text-white transition-transform transform hover:scale-105 shadow-md">
                    Request Feature
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Share Your Idea</DialogTitle>
                  </DialogHeader>
                  <FeatureRequestForm onSuccess={() => setIsModalOpen(false)} />
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-custom via-blue-200 to-blue-100 rounded-full"></div>
            {/* Timeline Items */}
            <div className="space-y-16">
              {filteredUpdates.map((update, index) => {
                const [ref, inView] = inViewPairs[index];
                // Alternate left/right for desktop
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    ref={ref}
                    className={`relative flex flex-col sm:flex-row items-center sm:items-stretch ${isLeft ? "sm:justify-start" : "sm:justify-end"} group transition-all duration-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute sm:static left-1/2 sm:left-auto transform sm:transform-none -translate-x-1/2 sm:translate-x-0 z-10 flex-shrink-0 w-12 h-12 ${update.status === "prototype" ? "bg-green-500" : "bg-yellow-400"} rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white transition-all duration-300 group-hover:scale-110`}>
                      {update.icon}
                    </div>
                    {/* Content */}
                    <div className={`w-full sm:w-1/2 ${isLeft ? "sm:pr-12 sm:pl-0" : "sm:pl-12 sm:pr-0"} mt-16 sm:mt-0`}> 
                      <Card className="flex-1 card-hover border-none shadow-xl bg-white/80 hover:shadow-2xl transition-all duration-300">
                        <CardContent className="p-8">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <div>
                              <Badge variant="outline" className="mb-2 text-primary-custom border-primary-custom bg-white/70">
                                {update.month}
                              </Badge>
                              <h3 className="text-xl font-semibold text-secondary-custom mb-4">{update.title}</h3>
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge 
                                variant={update.status === "prototype" ? "default" : "secondary"}
                                className={update.status === "prototype" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                              >
                                {update.status === "prototype" ? "Live" : "Coming Soon"}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-gray-600 font-light text-base">{update.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdates;
