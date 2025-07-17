import { motion } from "framer-motion";
import React, { useState } from "react";

const HighlightBox = () => {
  const cornerClass = "absolute bg-secondary-custom";
  return (
    <>
      {/* Top-left corner */}
      <div className={`${cornerClass} top-0 left-0 h-1 w-5`} />
      <div className={`${cornerClass} top-0 left-0 h-5 w-1`} />
      {/* Top-right corner */}
      <div className={`${cornerClass} top-0 right-0 h-1 w-5`} />
      <div className={`${cornerClass} top-0 right-0 h-5 w-1`} />
      {/* Bottom-left corner */}
      <div className={`${cornerClass} bottom-0 left-0 h-1 w-5`} />
      <div className={`${cornerClass} bottom-0 left-0 h-5 w-1`} />
      {/* Bottom-right corner */}
      <div className={`${cornerClass} bottom-0 right-0 h-1 w-5`} />
      <div className={`${cornerClass} bottom-0 right-0 h-5 w-1`} />
    </>
  );
};

const PartnersSection = () => {
  const partners = [
    { name: "healthians", logo: "/partners/healthians.png" },
    { name: "iron_mountain", logo: "/partners/iron_mountain.png" },
    { name: "orange_health_labs", logo: "/partners/orange_health_labs.png" },
    { name: "pathlabs", logo: "/partners/pathlabs.png" },
    { name: "practo", logo: "/partners/practo.png" },
    { name: "Red_health", logo: "/partners/red_health.jpg" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const glowStyle = {
    boxShadow: '0 0 8px #40AFCA, 0 0 16px #40AFCA, 0 0 24px #40AFCA'
  };

  const desktopCells = Array(20).fill(null);
  const partnerIndices = [6, 7, 8, 11, 12, 13];
  partners.forEach((partner, index) => {
    desktopCells[partnerIndices[index]] = partner;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cols: number, rows: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const col = Math.floor((x / rect.width) * cols);
    const row = Math.floor((y / rect.height) * rows);
    setActiveIndex(row * cols + col);
  };

  return (
    <section className="py-8 md:py-16 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-custom mb-4">
            Exploring Collaborations with Trusted Partners
          </h2>
        </div>
        
        {/* DESKTOP: 4x5 Grid */}
        <div 
          className="relative max-w-5xl mx-auto hidden md:grid grid-cols-5"
          onMouseMove={(e) => handleMouseMove(e, 5, 4)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {desktopCells.map((partner, index) => (
            <div key={index} className="flex justify-center items-center aspect-video p-4">
              {partner && (
                <motion.img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter"
                  animate={{ filter: activeIndex === index ? 'grayscale(0%)' : 'grayscale(100%)' }}
                  transition={{ duration: 0.5, ease: 'easeIn' }}
                />
              )}
            </div>
          ))}
          {[...Array(3)].map((_, i) => (
             <div key={`h-${i}`} className="absolute left-0 w-full h-px overflow-hidden pointer-events-none" style={{top: `${(i + 1) * 25}%`}}>
                <motion.div className="w-full h-full bg-gradient-to-r from-transparent via-primary-custom to-transparent" style={glowStyle} initial={{ x: i % 2 === 0 ? "-100%" : "100%" }} animate={{ x: i % 2 === 0 ? "100%" : "-100%" }} transition={{ repeat: Infinity, duration: 5 + i*2, ease: "linear" }} />
             </div>
          ))}
           {[...Array(4)].map((_, i) => (
             <div key={`v-${i}`} className="absolute top-0 h-full w-px overflow-hidden pointer-events-none" style={{left: `${(i + 1) * 20}%`}}>
                <motion.div className="w-full h-full bg-gradient-to-b from-transparent via-primary-custom to-transparent" style={glowStyle} initial={{ y: i % 2 === 0 ? "-100%" : "100%" }} animate={{ y: i % 2 === 0 ? "100%" : "-100%" }} transition={{ repeat: Infinity, duration: 6 + i*2, ease: "linear" }} />
             </div>
          ))}
          {activeIndex !== null && (
            <motion.div
              className="absolute pointer-events-none p-2"
              layoutId="highlight"
              initial={false}
              animate={{ 
                top: `${Math.floor(activeIndex / 5) * 25}%`,
                left: `${(activeIndex % 5) * 20}%`,
                width: '20%',
                height: '25%'
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            >
              <div className="relative w-full h-full">
                <HighlightBox />
              </div>
            </motion.div>
          )}
        </div>

        {/* MOBILE: 2x3 Grid */}
        <div 
          className="relative max-w-2xl mx-auto grid md:hidden grid-cols-2"
          onMouseMove={(e) => handleMouseMove(e, 2, 3)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {partners.map((partner, index) => (
            <div key={partner.name} className="p-6 flex justify-center items-center aspect-[16/9]">
              <motion.img 
                src={partner.logo} 
                alt={partner.name}
                className="max-w-full max-h-full object-contain filter"
                animate={{ filter: activeIndex === index ? 'grayscale(0%)' : 'grayscale(100%)' }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
              />
            </div>
          ))}
          <div className="absolute top-1/3 left-0 w-full h-px overflow-hidden pointer-events-none"><motion.div className="w-full h-full bg-gradient-to-r from-transparent via-primary-custom to-transparent" style={glowStyle} initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} /></div>
          <div className="absolute top-2/3 left-0 w-full h-px overflow-hidden pointer-events-none"><motion.div className="w-full h-full bg-gradient-to-r from-transparent via-primary-custom to-transparent" style={glowStyle} initial={{ x: "100%" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} /></div>
          <div className="absolute top-0 left-1/2 h-full w-px overflow-hidden pointer-events-none"><motion.div className="w-full h-full bg-gradient-to-b from-transparent via-primary-custom to-transparent" style={glowStyle} initial={{ y: "-100%" }} animate={{ y: "100%" }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }} /></div>
           {activeIndex !== null && (
            <motion.div
              className="absolute pointer-events-none p-2"
              layoutId="highlight"
              initial={false}
              animate={{ 
                top: `${Math.floor(activeIndex / 2) * (100/3)}%`,
                left: `${(activeIndex % 2) * 50}%`,
                width: '50%',
                height: `${100/3}%`
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            >
               <div className="relative w-full h-full">
                <HighlightBox />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;