import QrCode from '../QrCode';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

const QRCodeSection = () => {
  const [ref, inView] = useInView(0.3);
  const whatsappLink = "https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0";

  return (
    <motion.section
      ref={ref}
      initial={{ x: -200, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="py-20 bg-primary-custom/5"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
          <div className="text-center md:text-left mb-8 md:mb-0 max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-custom">
              How to get started?
            </h2>
            <p className="text-lg mb-2 text-sub">
              (1) You can click on the <span className="text-primary-custom font-semibold">WhatsApp icon</span> on the bottom left of the website.
            </p>
            <p className="text-lg mb-2 text-sub">
              (2) Reach us out through WhatsApp number <span className='font-bold text-primary-custom'>+91 63648 72188</span>
            </p>
            <p className="text-lg text-sub font-bold">
              (3) Scan the QR code to connect with us.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl shadow-xl border-2 border-primary-custom bg-white p-4">
              <QrCode value={whatsappLink} size={200} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default QRCodeSection;