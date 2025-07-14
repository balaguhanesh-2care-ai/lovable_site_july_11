import QrCode from '../QrCode';
import { motion } from 'framer-motion';

const QRCodeSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0";

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left mb-8 md:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              How to get started?
            </h2>
            <p className="text-lg mb-2 text-gray-600">
              (1) You can click on the WhatsApp icon on the bottom left of the website.
            </p>
            <p className="text-lg mb-2 text-gray-600">
              (2) Reach us out through WhatsApp number <span className='font-bold'>+91 63648 72188</span>
            </p>
            <p className="text-lg text-gray-600 font-bold">
              (3) Scan the QR code to connect with us.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
           <QrCode value={whatsappLink} size={200} />
            
            {/* Wrapper to handle the rotation and scaling */}
            <div className="absolute inset-0 rotate-[-45deg] scale-[1.5]">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;