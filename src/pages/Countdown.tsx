// Install with: npm install react-countdown
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FloatingBlobsBackground } from '@/components/ui/FloatingBlobsBackground';
import { FaWhatsapp, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';

const LAUNCH_DATE = new Date('2025-08-01T10:00:00+05:30');

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <span className="text-3xl md:text-4xl font-bold text-green-600">We Are Live!</span>
    );
  } else {
    return (
      <div className="flex justify-center gap-4 mb-8">
        {[
          { label: 'Days', value: days },
          { label: 'Hours', value: hours },
          { label: 'Minutes', value: minutes },
          { label: 'Seconds', value: seconds },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-mono font-bold text-primary-custom bg-[#f1f7fd] rounded-xl px-4 py-2 shadow">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm text-secondary-custom mt-1 font-semibold uppercase tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    );
  }
};

const CountdownPage = () => {
  return (
<div className="min-h-screen py-12 pt-32 relative overflow-hidden flex items-center justify-center bg-main-bg">
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
                <span className="text-5xl md:text-6xl text-secondary-custom font-extrabold flex items-center gap-3 mb-2">
                  <FaClock className="text-primary-custom w-10 h-10 md:w-12 md:h-12" />
                  Countdown
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary-custom mb-2">
                  ⏳ We&apos;re Building Something Amazing for You!
                </h2>
                <p className="text-lg text-primary-custom-bold mb-2">
                  Thank you for your patience — our Patient &amp; Family Dashboards are almost ready!
                </p>
                <ul className="text-left text-base md:text-lg text-primary-custom space-y-2 mx-auto max-w-md mb-4">
                  <li>✅ View all medical records in one place</li>
                  <li>✅ Track vitals, trends &amp; alerts</li>
                  <li>✅ Book doctor consults &amp; lab tests with 1 click</li>
                  <li>✅ Get smart insights from Maya AI — your personal health assistant</li>
                </ul>
                <p className="text-primary-custom-bold text-base md:text-lg mb-2">
                  👀 Stay tuned — going live soon!
                </p>
                <p className="text-primary-custom text-base md:text-lg mb-4">
                  In the meantime, feel free to connect with us on WhatsApp for updates:
                  <br />
                  <span className="font-bold text-secondary-custom text-lg">📱 +91 63648 72188</span>
                </p>
              </div>
              {/* Countdown Clock */}
              <Countdown date={LAUNCH_DATE} renderer={renderer} />
              {/* WhatsApp Button */}
              <Button
                asChild
                className="w-full md:w-auto bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 px-6 rounded-full text-lg flex items-center justify-center gap-2 mt-2 shadow-lg transition-all duration-300"
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-6 h-6 mr-2" />
                  Connect on WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default CountdownPage; 