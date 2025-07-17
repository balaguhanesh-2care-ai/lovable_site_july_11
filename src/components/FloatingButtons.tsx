
import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import RequestDemoCallForm from './RequestDemoCallForm';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const isPricingPage = location.pathname === '/pricing';

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0', '_blank');
  };

  const openScheduleCall = () => {
    // Add scheduling functionality here
    window.open('https://app.youform.com/forms/wjdo6f77', '_blank');
    // console.log("Schedule call clicked");
  };

  return (
    <>
      {/* WhatsApp Button */}
      <Button
        onClick={openWhatsApp}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        size="icon"
      >
        {/* <MessageCircle className="w-6 h-6" /> */}
        <FaWhatsapp className="w-10 h-10" />
      </Button>

      {/* Schedule Call Button - Only on Pricing Page */}
      {isPricingPage && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button
              className="fixed bottom-6 left-24 z-50 w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              size="icon"
              title="Schedule a call to understand our offering"
            >
              <Phone className="w-6 h-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Request for Demo Call</DialogTitle>
            </DialogHeader>
            <RequestDemoCallForm onSuccess={() => setIsModalOpen(false)} />
          </DialogContent>
        </Dialog>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary-custom hover:bg-primary-custom/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
          size="icon"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </>
  );
};

export default FloatingButtons;
