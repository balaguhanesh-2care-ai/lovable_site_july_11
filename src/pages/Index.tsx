import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LetsConnect from "@/components/LetsConnect";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CircularHealthFeatures from "@/components/CircularHealthFeatures";
import MedicalAdvisorsSection from "@/components/sections/MedicalAdvisorsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import QRCodeSection from "@/components/sections/QRCodeSection";
import DashboardSlideshow from "@/components/DashboardSlideshow";
import { useIsMobile } from "@/hooks/use-mobile";
import MacbookFrame from "@/components/MacbookFrame";

const Index = () => {
  const isMobile = useIsMobile();
  
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // --- TIMELINE BREAKDOWN ---
  // Scene 1 - Macbook In: 0% -> 25%
  // PAUSE: 25% -> 45% (User scrolls, but the scene is static)
  // Cross-fade to Scene 2: 45% -> 50%
  // Scene 2 - Features Animation: 50% -> 100%

  // --- Adaptive Animation Values ---
  const laptopInitialScale = isMobile ? 0.5 : 0.7;
  const laptopFinalScale = 1.0; // Ends at 100% size
  const laptopInitialY = isMobile ? '70vh' : '100vh';

  // --- SCENE 1 ANIMATIONS ---
  // Hero text fades out very early.
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  // Macbook animation now finishes at 25% of the timeline.
  const laptopScale = useTransform(scrollYProgress, [0.05, 0.25], [laptopInitialScale, laptopFinalScale]);
  const laptopY = useTransform(scrollYProgress, [0.05, 0.25], [laptopInitialY, "0vh"]);
  
  // --- SCENE TRANSITION ANIMATIONS ---
  // The Macbook scene stays fully visible until 45%, then fades out.
  const macbookGroupOpacity = useTransform(scrollYProgress, [0.45, 0.5], [1, 0]);
  // The Features scene starts fading in at 45%.
  const featuresGroupOpacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  
  // --- SCENE 2 ANIMATIONS ---
  // The progress for the features animation is now mapped to the second half of the timeline.
  const featuresProgress = useTransform(scrollYProgress, [0.5, 1.0], [0, 1]);

  return (
    <div className="min-h-screen bg-main-bg">
      <div ref={scrollRef} className="relative h-[800vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          
        <motion.div style={{ opacity: macbookGroupOpacity }}>
            <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
              <HeroSection />
            </motion.div>
            <motion.div 
              style={{ scale: laptopScale, y: laptopY }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <MacbookFrame>
                <DashboardSlideshow />
              </MacbookFrame>
            </motion.div>
          </motion.div>

          <motion.div style={{ opacity: featuresGroupOpacity }} className="h-full">
            <FeaturesSection scrollYProgress={featuresProgress} />
          </motion.div>

          
        </div>
      </div>

      <div className="relative z-10 bg-main-bg">
      <CircularHealthFeatures />
        <QRCodeSection />
        <MedicalAdvisorsSection />
        <PartnersSection />
        <TestimonialsSection />
        <CallToActionSection />
        <LetsConnect />
      </div>
    </div>
  );
};

export default Index;