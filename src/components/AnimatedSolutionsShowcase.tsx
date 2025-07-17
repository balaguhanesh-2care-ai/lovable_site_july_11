import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mainCards = [
  {
    title: "AI Health Monitoring",
    image: "/lovable-uploads/e0fb920d-1e48-4fc5-a603-7238d40ef9ad.png",
  },
  {
    title: "Maya – Your Personal AI WhatsApp Health Agent",
    image: "/lovable-uploads/863a2faf-3bb7-4a3e-b7ce-a5329f90eae1.png",
  },
  {
    title: "Personal Care With Medical Point of Contact",
    image: "/lovable-uploads/f6808022-934a-4482-8940-af4d36ec82c8.png",
  },
  {
    title: "Seamless Conversational AI Experience for Your Parents",
    image: "/lovable-uploads/f9b65802-261c-4324-b1a4-36d9670f9343.png",
  },
];

const featureGrid = [
  {
    title: "Customized Vital Monitoring",
    image: "/lovable-uploads/9a9d9580-d25f-4620-b250-03f494970ed8.png",
  },
  {
    title: "Watch Our Platform Overview",
    youtube: true,
    videoUrl: "https://www.youtube.com/embed/KqudCo3Yljw?si=EGy9W8d95_8dlJ1B",
  },
  {
    title: "Centralized Health Records",
    image: "/lovable-uploads/a1bd954a-2031-405e-94f8-286c3ba3f062.png",
  },
  {
    title: "Lab Appointment Booking",
    image: "/lovable-uploads/00fc7a11-e1c7-40fe-9c00-b65d858b5cbe.png",
  },
  {
    title: "Appointment Management",
    image: "/lovable-uploads/806c00b5-ce2d-479a-95b8-5527dfe632c2.png",
  },
  
  {
    title: "Medical Progress Notes",
    image: "/lovable-uploads/32917b9d-d7f3-4f0e-bc3a-28874bbc5a59.png",
  },
];

const AnimatedSolutionsShowcase: React.FC = () => {
  const [showFeatures, setShowFeatures] = useState(false);

  const handleClick = () => setShowFeatures(true);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-white py-12">
      {/* Main Cards */}
      <AnimatePresence>
        {!showFeatures && (
          <motion.div
            className="w-full px-4 flex justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={handleClick}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-xl cursor-pointer">
              {mainCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-gray-200 shadow-xl rounded-2xl flex flex-col justify-between overflow-hidden min-h-[300px] md:min-h-[400px] transform transition-transform hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full max-h-[400px] object-contain"
                  />
                  <div className="text-center text-lg font-bold text-gray-800 py-6 px-4">
                    {card.title}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comprehensive Features Section */}
      <AnimatePresence>
        {showFeatures && (
          <motion.div
            className="w-full px-4 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <motion.h2
              className="text-xl md:text-4xl font-extrabold text-center text-[#1A3557] mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1.02 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Comprehensive Platform Features
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-screen-xl">
              {featureGrid.map((feature, idx) => {
                const isHighlighted = feature.youtube;
                return (
                  <motion.div
                    key={feature.title}
                    className={`relative bg-white border border-gray-200 shadow-xl rounded-2xl flex flex-col items-center justify-between h-full min-h-[350px] overflow-hidden transform transition-transform duration-300 ease-in-out ${
                      isHighlighted
                        ? 'border-4 border-cyan-400 shadow-[0_0_32px_0_rgba(34,211,238,0.35),0_0_0_6px_rgba(224,242,254,0.7)] scale-105 z-10 opacity-85'
                        : ''
                    }`}
                    initial={{ opacity: 0, scale: isHighlighted ? 1.05 : 0.85 }}
                    animate={{ opacity: isHighlighted ? 0.85 : 1, scale: isHighlighted ? 1.08 : 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: isHighlighted ? 1.12 : 1.08, boxShadow: isHighlighted ? '0 0 48px 0 rgba(34,211,238,0.45), 0 0 0 8px #e0f2fe' : '0 0 32px 0 rgba(66, 165, 245, 0.25), 0 0 0 4px #e0f2fe', opacity: isHighlighted ? 0.8 : 0.5 }}
                  >
                    <div className="w-full h-[280px] flex justify-center items-center px-4 pt-6">
                      {feature.youtube ? (
                        <iframe
                          src={feature.videoUrl}
                          title={feature.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full rounded-xl"
                        ></iframe>
                      ) : (
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="h-full w-full object-contain"
                        />
                      )}
                    </div>
                    <div className="text-center text-lg font-bold text-gray-800 p-6">
                      {feature.title}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedSolutionsShowcase;