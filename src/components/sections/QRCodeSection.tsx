import QrCode from '../QrCode';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { useState, useEffect } from 'react';

const QRCodeSection = () => {
  const [ref, inView] = useInView(0.3);
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
    <motion.section
      ref={ref}
      initial={{ x: -200, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="py-10 md:py-20 bg-primary-custom/5"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 text-secondary-custom">
              How to get started?
            </h2>
            <p className="text-md mb-2 text-sub">
              (1) You can click on the <span className="text-primary-custom font-semibold">WhatsApp icon</span> on the bottom left of the website.
            </p>
            <p className="text-md mb-2 text-sub">
              (2) Reach us out through WhatsApp number <span className='font-bold text-primary-custom'>+91 63648 72188</span>
            </p>
            <p className="text-md text-sub font-bold">
              (3) Scan the QR code to connect with us.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl shadow-xl border-2 border-primary-custom bg-white p-4 z-10">
              <QrCode value={whatsappLink} size={200} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default QRCodeSection;