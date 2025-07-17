import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FloatingBlobsBackground } from '@/components/ui/FloatingBlobsBackground';
import { FaUserMd } from 'react-icons/fa';
import { motion } from 'framer-motion';

const RAZORPAY_BUTTON_ID = 'pl_QrhRqK9f7BNU4h'; // from RazorpayModal.tsx for ₹499

const Consult499 = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Remove any previous Razorpay scripts
    document.querySelectorAll('script[id^="razorpay-script-499"]')?.forEach(s => s.remove());
    if (formRef.current) formRef.current.innerHTML = '';
    // Inject Razorpay payment button script
    setTimeout(() => {
      if (!formRef.current) return;
      const script = document.createElement('script');
      script.async = true;
      script.id = 'razorpay-script-499';
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.setAttribute('data-payment_button_id', RAZORPAY_BUTTON_ID);
      formRef.current.appendChild(script);
    }, 0);
  }, []);

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
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/90 shadow-xl rounded-2xl border-0">
            <CardContent className="p-6 md:p-10 text-center">
              <div className="flex flex-col items-center gap-4 mb-8">
                <span className="text-3xl md:text-4xl text-primary-custom font-extrabold flex items-center gap-3 mb-2">
                  <FaUserMd className="w-8 h-8 md:w-10 md:h-10" />
                  Talk to a 2care.ai Doctor — Only ₹499
                </span>
                <h2 className="text-lg md:text-xl font-bold text-secondary-custom mb-2">
                  Get expert medical advice without the wait.
                </h2>
                <p className="text-base text-primary-custom-bold mb-2">
                  Book a private consultation with a certified 2care.ai doctor from the comfort of your home.
                </p>
                <div className="text-left text-sm md:text-base text-primary-custom space-y-2 mx-auto max-w-lg mb-4">
                  <div className="font-semibold text-secondary-custom mb-1">✅ What’s Included in Your ₹499 Consultation:</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>One-on-one video consult (15–20 minutes)</li>
                    <li>Share your medical reports in advance</li>
                    <li>Get advice on medications, treatment options, and next steps</li>
                    <li>Ask anything — symptoms, lab results, diet, second opinion</li>
                    <li>Summary and recommendations sent to your WhatsApp</li>
                  </ul>
                </div>
                <div className="text-left text-sm md:text-base text-primary-custom space-y-2 mx-auto max-w-lg mb-4">
                  <div className="font-semibold text-secondary-custom mb-1">🤝 Trusted. Private. Simple.</div>
                  <p>
                    Our doctors are handpicked for experience, empathy, and patient care.<br/>
                    We support your family with reliable guidance — no long queues, no confusion.
                  </p>
                </div>
                <div className="text-center text-base font-semibold text-secondary-custom mb-2 mt-4">
                  💳 Ready to Book?
                </div>
                <div className="w-full flex flex-col items-center">
                  <form ref={formRef}></form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default Consult499; 