import QrCode from '../QrCode';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { FloatingBlobsBackground } from '../ui/FloatingBlobsBackground';

const Sparkles = () => {
  const sparkleCount = 100;
  const sparkles = useMemo(() => {
    return Array.from({ length: sparkleCount }).map((_, i) => {
      const size = Math.random() * 8 + 2;
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;
      const duration = Math.random() * 2 + 2;
      const delay = Math.random() * 2;
      return {
        id: i,
        top,
        left,
        size,
        duration,
        delay,
      };
    });
  }, []);

  return (
    <>
      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full bg-secondary-custom"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};


const QRCodeSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0";
  const [videoMaskVisible, setVideoMaskVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    if (videoMaskVisible) {
      controls.start({
        pathLength: 1,
        transition: { duration: 10, ease: 'linear' }
      });
    }
  }, [videoMaskVisible, controls]);

  return (
    <section className="py-20 relative overflow-hidden rounded-lg padding-3 border border-white/20" style={{ boxShadow: "0 0 32px 8px rgba(64,175,202,0.25), 0 0 0 8px rgba(255,255,255,0.08) inset", backdropFilter: "blur(8px)" }}>

      <FloatingBlobsBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left mb-8 md:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-custom">
              How to get started?
            </h2>
            <p className="text-lg mb-2 text-secondary-custom">
              (1) You can click on the WhatsApp icon on the bottom left of the website.
            </p>
            <p className="text-lg mb-2 text-secondary-custom">
              (2) Reach us out through WhatsApp number <span className='font-bold'>+91 63648 72188</span>
            </p>
            <p className="text-lg text-secondary-custom font-bold">
              (3) Scan the QR code to connect with us.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <QrCode value={whatsappLink} size={200} />
            </div>
            
            {/* Video mask reveal */}
            {videoMaskVisible && (
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 1 }}
                animate={{ opacity: videoMaskVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <video
                  src="/videos/glitch_qr.mp4"
                  autoPlay
                  muted
                  playsInline
                  onEnded={() => setVideoMaskVisible(false)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                  <svg className="w-24 h-24" viewBox="0 0 100 100">
                    <motion.path
                      d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.2)"
                      strokeWidth="10"
                    />
                    <motion.path
                      d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                      fill="none"
                      stroke="white"
                      strokeWidth="10"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={controls}
                    />
                  </svg>
                  <p className="text-white text-lg font-semibold mt-4">Loading...</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;