// Install with: npm install react-icons
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FloatingBlobsBackground } from '@/components/ui/FloatingBlobsBackground';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThankYou = () => {
  return (
    <div className="min-h-screen py-12 pt-24 relative overflow-hidden flex items-center justify-center bg-main-bg">
      {/* Floating Blobs Background */}
      <div className="absolute inset-0 -z-10">
        <FloatingBlobsBackground />
      </div>
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/90 shadow-xl rounded-2xl border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex flex-col items-center gap-4 mb-8">
                <span className="text-5xl md:text-6xl text-green-500 font-extrabold flex items-center gap-3 mb-2">
                  <FaCheckCircle className="w-10 h-10 md:w-12 md:h-12" />
                  Thank You!
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary-custom mb-2">
                  ✅ Thank You for Your Payment! 🙏
                </h2>
                <p className="text-lg text-primary-custom-bold mb-2">
                  We're so glad to have you as part of the 2care.ai family.<br/>
                  Your care plan is now active — and we're here every step of the way. 💙
                </p>
                <div className="text-left text-base md:text-lg text-primary-custom space-y-2 mx-auto max-w-md mb-4">
                  <div className="font-semibold text-secondary-custom mb-1">🔍 What happens next?</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Our care team will review your profile and start setting things up.</li>
                    <li>You’ll get a WhatsApp message shortly with onboarding details.</li>
                    <li>You can now upload medical records, book doctor consults, and access AI insights.</li>
                  </ul>
                </div>
                <div className="text-left text-base md:text-lg text-primary-custom space-y-2 mx-auto max-w-md mb-4">
                  <div className="font-semibold text-secondary-custom mb-1">💬 Need help or have a question?</div>
                  <ul className="list-none pl-0 space-y-1">
                    <li>We’re just a message away:</li>
                    <li>
                      <Button className="w-full md:w-auto bg-secondary-custom hover:bg-secondary-custom/90 text-white font-bold py-2 px-6 rounded-full text-base flex items-center justify-center gap-2 mt-2 shadow transition-all duration-300">
                        👉 Submit a Query
                      </Button>
                    </li>
                    <li>
                      <Button
                        asChild
                        className="w-full md:w-auto bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-2 px-6 rounded-full text-base flex items-center justify-center gap-2 mt-2 shadow transition-all duration-300"
                      >
                        <a
                          href="https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaWhatsapp className="w-5 h-5 mr-2" />
                          WhatsApp us: +91 63648 72188
                        </a>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYou;
