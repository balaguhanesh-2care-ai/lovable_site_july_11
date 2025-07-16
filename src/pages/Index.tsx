import { useEffect, useRef } from "react";
import { usePostHog } from "posthog-js/react";
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
import MacbookFrame from "@/components/MacbookFrame";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Index = () => {
  const posthog = usePostHog();
  useEffect(() => {
    posthog.capture("landing_page_viewed");
  }, []);

  const isMobile = useIsMobile();

  // Ref for the top animation section (Hero + Macbook)
  const topSectionRef = useRef(null);
  // Scroll progress for the 200vh (or 300vh) section
  const { scrollYProgress } = useScroll({
    target: topSectionRef,
    offset: ["start end", "end start"], // 0 when section bottom hits bottom, 1 when section top hits top
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Macbook animation: y from 100vh to 0vh, scale/opacity for polish
  const macbookY = useTransform(smoothProgress, [0, 0.5, 1], [isMobile ? '70vh' : '100vh', '0vh', '-30vh']);
  const macbookScale = useTransform(smoothProgress, [0, 0.7, 1], [0.8, 1, 1.1]);
  const macbookOpacity = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0]);

  // Hero fade/blur (optional, for polish)
  // const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0.5]);
  // const heroBlur = useTransform(smoothProgress, [0, 0.3], ["0px", "8px"]);

  return (
    <div className="min-h-screen bg-main-bg">
      {/* Top Animation Section (Hero + Macbook, 200vh or 300vh) */}
      <section ref={topSectionRef} style={{ height: '200vh', position: 'relative', zIndex: 3 }}>
        {/* HeroSection: always fills viewport, stays at top */}
        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          zIndex: 2,
        }}>
          <HeroSection />
        </div>
        {/* MacbookFrame: animates in over HeroSection */}
        <motion.div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            y: macbookY,
            scale: macbookScale,
            opacity: macbookOpacity,
            pointerEvents: 'none',
            zIndex: 3,
          }}
        >
          <MacbookFrame>
            <DashboardSlideshow />
          </MacbookFrame>
        </motion.div>
      </section>

      {/* Features Section (scrolls in under Macbook) */}
      <section style={{ position: 'relative', zIndex: 1 }}>
        <FeaturesSection />
      </section>

      {/* --- Normal scroll continues below --- */}
      <div className="relative z-0">
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