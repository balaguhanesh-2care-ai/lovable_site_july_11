import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from "framer-motion";
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
import { FloatingBlobsBackground } from "@/components/ui/FloatingBlobsBackground";
import { usePostHog } from "posthog-js/react";

const Index = () => {
  const posthog = usePostHog();
  useEffect(() => {
    posthog.capture("landing_page_viewed", {
      // You can add properties here if you want to segment by them later
      // For example, you could check the user agent to see if it's a bot
    });
  }, []);
  
  const isMobile = useIsMobile();
  
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  // --- TIMELINE BREAKDOWN ---
  // Scene 1 - Macbook In: 0 -> 20%
  // PAUSE: 20% -> 30% (User scrolls, but the scene is static)
  // Cross-fade to Scene 2 (Features): 30% -> 35%
  // Scene 2 - Features Animation: 35% -> 55%
  // Slide transition to Scene 3 (Circular): 55% -> 60%
  // Scene 3 - Circular Health Pinned: 60% -> 80%
  // Scene 4 - Slide transition to QR Code: 80% -> 95%
  // QR Code Pinned: 95% -> 100%

  // --- Adaptive Animation Values ---
  const laptopInitialScale = isMobile ? 0.5 : 0.7;
  const laptopFinalScale = 1.0; // Ends at 100% size
  const laptopInitialY = isMobile ? '70vh' : '100vh';

  // --- SCENE 1: HERO & MACBOOK ---
  const heroBlurValue = useTransform(smoothProgress, [0.0, 0.25], [0, 16]);
  const heroBlur = useMotionTemplate`blur(${heroBlurValue}px)`;
  
  const laptopScale = useTransform(
    smoothProgress,
    [0.0, 0.30], 
    [laptopInitialScale, laptopFinalScale]
  );
  const laptopY = useTransform(smoothProgress, [0.0, 0.30], [laptopInitialY, "0vh"]);
  
  // Opacity for the entire Macbook scene (fades out during transition)
  const macbookGroupOpacity = useTransform(smoothProgress, [0.25, 0.30], [1, 0]);

  // --- SCENE 2: FEATURES ---
  // Fades in, animates, then slides up and out.
  const featuresOpacity = useTransform(smoothProgress, [0.25, 0.30], [0, 1]);
  const featuresY = useTransform(smoothProgress, [0.50, 0.60], ["0%", "-100%"]);
  const featuresProgress = useTransform(smoothProgress, [0.30, 0.60], [0, 1]);

  // --- SCENE 3: CIRCULAR HEALTH ---
  // Slides in from the bottom, is pinned, then slides out to the left.
  const circularHealthY = useTransform(smoothProgress, [0.50, 0.60], ["100%", "0%"]);
  const circularHealthX = useTransform(smoothProgress, [0.70, 0.75], ["0%", "-100%"]);
  const circularHealthOpacity = useTransform(smoothProgress, [0.70, 0.75], [1, 0]);
  
  // --- SCENE 4: QR CODE ---
  // Fades in, slides from the right, then blurs and fades out.
  const qrCodeX = useTransform(smoothProgress, [0.70, 0.75], ["100%", "0%"]);
  const qrCodeOpacity = useTransform(smoothProgress, [0.70, 0.75, 0.85, 0.90], [0, 1, 1, 0]);
  const qrCodeBlurValue = useTransform(smoothProgress, [0.85, 0.90], [0, 16]);

  // --- SCENE 5: MEDICAL ADVISORS ---
  // Fades and scales in from below, like the initial Macbook animation.
  const medicalAdvisorsOpacity = useTransform(smoothProgress, [0.85, 0.90], [0, 1]);
  const medicalAdvisorsScale = useTransform(smoothProgress, [0.85, 0.95], [0.7, 1]);
  const medicalAdvisorsY = useTransform(smoothProgress, [0.85, 0.95], ["40vh", "0vh"]);

  // --- Pointer Events Control ---
  // Disable pointer events on scenes that are not active to prevent them from
  // blocking clicks on the scenes below.
  const featuresPointerEvents = useTransform(smoothProgress, (p) => (p >= 0.25 && p < 0.60 ? 'auto' : 'none'));
  const circularHealthPointerEvents = useTransform(smoothProgress, (p) => (p >= 0.50 && p < 0.75 ? 'auto' : 'none'));
  const qrCodePointerEvents = useTransform(smoothProgress, (p) => (p >= 0.70 && p < 0.90 ? 'auto' : 'none'));
  const medicalAdvisorsPointerEvents = useTransform(smoothProgress, (p) => (p >= 0.85 ? 'auto' : 'none'));

  return (
    <div className="min-h-screen bg-main-bg">
      <div ref={scrollRef} className="relative h-[800vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          
          {/* SCENE 1: Macbook */}
          <motion.div style={{ opacity: macbookGroupOpacity }} className="absolute inset-0">
            <motion.div style={{ filter: heroBlur }} className="absolute inset-0">
              <HeroSection />
            </motion.div>
            <motion.div 
              style={{ scale: laptopScale, y: laptopY }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <MacbookFrame>
                <DashboardSlideshow />
              </MacbookFrame>
            </motion.div>
          </motion.div>

          {/* SCENE 2: Features */}
          <motion.div style={{ opacity: featuresOpacity, y: featuresY, pointerEvents: featuresPointerEvents }} className="absolute inset-0 h-full">
             <FeaturesSection />
          </motion.div>
          
          {/* SCENE 3: Circular Health */}
          <motion.div 
            style={{ 
              y: circularHealthY, 
              x: circularHealthX, 
              opacity: circularHealthOpacity,
              pointerEvents: circularHealthPointerEvents
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <CircularHealthFeatures />
          </motion.div>
          
          {/* SCENE 4: QR Code */}
          <motion.div 
            style={{ 
              opacity: qrCodeOpacity, 
              x: qrCodeX, 
              filter: qrCodeBlurValue,
              pointerEvents: qrCodePointerEvents
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <QRCodeSection />
          </motion.div>

          {/* SCENE 5: Medical Advisors */}
          <motion.div 
            style={{ 
              opacity: medicalAdvisorsOpacity, 
              scale: medicalAdvisorsScale,
              y: medicalAdvisorsY,
              pointerEvents: medicalAdvisorsPointerEvents
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <MedicalAdvisorsSection />
          </motion.div>
        </div>
      </div>


      <div className="relative z-10 bg-main-bg">
        <PartnersSection />
        <TestimonialsSection />
        <CallToActionSection />
        <LetsConnect />
      </div>
    </div>
  );
};

export default Index;