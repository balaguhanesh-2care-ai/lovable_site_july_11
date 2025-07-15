import { useState, useEffect } from "react";
import { usePostHog } from "posthog-js/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, Lightbulb } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import FeatureRequestForm from "@/components/FeatureRequestForm";

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
      title: "Regular Monitoring",
      description: "Stay proactive with regular vital monitoring to maintain wellness and prevent potential health issues.",
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

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-custom mb-4">
            Keep Up With Our Updates
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We are creating new things just for you!
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={selectedFilter === "prototype" ? "default" : "outline"}
              onClick={() => setSelectedFilter("prototype")}
              className={selectedFilter === "prototype" ? "bg-primary-custom hover:bg-primary-custom/90" : ""}
            >
              <Check className="w-4 h-4 mr-2" />
              Prototype
            </Button>
            <Button
              variant={selectedFilter === "coming-up" ? "default" : "outline"}
              onClick={() => setSelectedFilter("coming-up")}
              className={selectedFilter === "coming-up" ? "bg-primary-custom hover:bg-primary-custom/90" : ""}
            >
              <Clock className="w-4 h-4 mr-2" />
              Coming Up
            </Button>
          </div>

          {/* Request Feature */}
          <Card className="max-w-md mx-auto border-2 border-primary-custom">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-primary-custom" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-custom mb-2">Request a Feature</h3>
              <p className="text-gray-600 mb-4">Have an idea? Let us know what you'd like to see!</p>
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-primary-custom hover:bg-primary-custom/90 text-white">
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
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-custom"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {filteredUpdates.map((update, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-custom rounded-full flex items-center justify-center text-white relative z-10">
                    {update.icon}
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 card-hover border-2 border-light-outline hover:border-primary-custom">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <Badge variant="outline" className="mb-2 text-primary-custom border-primary-custom">
                            {update.month}
                          </Badge>
                          <h3 className="text-xl font-semibold text-secondary-custom">{update.title}</h3>
                        </div>
                        <Badge 
                          variant={update.status === "prototype" ? "default" : "secondary"}
                          className={update.status === "prototype" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                        >
                          {update.status === "prototype" ? "Live" : "Coming Soon"}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{update.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdates;
