
import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import LetsConnect from "@/components/LetsConnect";
import CancerGlobeStory from "@/components/CancerGlobeStory";
import { motion } from 'framer-motion';
import { FloatingBlobsBackground } from '@/components/ui/FloatingBlobsBackground';

const OurStory = () => {
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture("Visit_OurStory_Page");
  }, []);
  return (
    <div className="min-h-screen py-12 relative overflow-hidden">
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
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-custom mb-5 mt-10">
              Our Story
            </h1>
            <p className="text-lg text-sub mx-auto">
              When our father was diagnosed with cancer in 2020, our lives changed in an instant. 
              What followed was a journey of uncertainty, love, and relentless effort—made even harder
               by the distance that separated us. Saket was in Germany, Pawan in Ireland, and our father
                was in India.

                <div className="relative my-3">
                  {/* Top Blur */}
                  <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-[#162447] via-[#162447]/80 to-transparent rounded-t-lg pointer-events-none z-10 blur-sm" />
                  {/* Main Content */}
                  <p className="bg-[#162447] rounded-lg border border-[#1f4068] text-white font-semibold px-3 py-2 relative z-20">
                    We weren’t just battling a disease; we were battling 
                    <span className="block text-xs italic mt-1">"borders, time zones, and fragmented information."</span>
                  </p>
                  {/* Bottom Blur */}
                  <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#162447] via-[#162447]/80 to-transparent rounded-b-lg pointer-events-none z-10 blur-sm" />
                </div>
                
              Despite being far away, we were determined to stay close—to 
              be there for every update, every scan, every moment. But we quickly realized that the tools
              we needed simply didn’t exist. This experience, filled with anxiety, missed details, 
              and helplessness, became the spark for something greater. It wasn’t just about our story
              anymore—it became a mission to ensure no family feels lost when it matters most. That’s 
              how 2care.ai was born: not as a product, but as 
              <div className="relative my-2">
                {/* Top Blur */}
                <div className="absolute top-0 left-0 w-full h-5 bg-gradient-to-b from-[#162447] via-[#162447]/80 to-transparent rounded-t-lg pointer-events-none z-10 blur-sm" />
                {/* Main Content */}
                <p className="bg-[#162447] rounded-lg font-semibold px-2 py-2 text-white relative z-20">
                  "a promise to families like ours, everywhere"
                </p>
                {/* Bottom Blur */}
                <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-[#162447] via-[#162447]/80 to-transparent rounded-b-lg pointer-events-none z-10 blur-sm" />
              </div>
            </p>
          </motion.div>

          {/* Father's Cancer Journey */}


<motion.section
  className="mb-16"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
>

  <div className="prose prose-lg max-w-none text-sub space-y-1">
    {/* 🌍 GLOBE SECTION */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
    >
      <CancerGlobeStory />
    </motion.div>

    {/* Emotional Questions */}
    <motion.div
      className="space-y-3 mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6 }}
    >
      <p className="text-base text-center">
        Losing our father was an incredibly difficult experience —
        one filled with <span className="font-semibold">questions</span> and <span className=" font-semibold">regrets</span>.
      </p>
      <ul className="list-disc space-y-1 mx-auto flex flex-col items-center justify-cente mb-5">
        <div className="">
          <li><strong>What if</strong> we had recognized the symptoms earlier?</li>
          <li><strong>What if</strong> we had real-time vitals from afar?</li>
          <li><strong>What if</strong> we had understood those medical reports better?</li>
        </div>
      </ul>
    </motion.div>

    {/* Vision */}
    <div className="mt-4">
    <motion.p
      className="text-xl font-bold text-secondary-custom mt-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.9 }}
    >
      That’s why we created <span className="text-[#3FC4E2]">2care.ai</span>
    </motion.p>
    </div>
    

    <motion.p
      className="text-sub text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.1 }}
    >
      A platform born from personal pain — built to help you care, connect, and make sense of health journeys, no matter how far.

When our own family struggled to navigate fragmented records, missed diagnoses, and medical uncertainty across continents, we knew something had to change.
<p className="font-bold mt-4"> Because love knows no borders — and neither should healthcare </p>

    </motion.p>

  </div>
</motion.section>


          {/* Highlighted Quote */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
                poster="/blue-gradient.jpg"
                style={{ pointerEvents: 'none' }}
              >
                <source src="/blue-gradient.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 z-0" style={{ background: 'rgba(20,30,50,0.45)' }} />
              <Card className="bg-transparent text-white relative z-10 shadow-none">
                <CardContent className="p-12 text-center">
                  <Quote className="w-16 h-16 mx-auto mb-6 opacity-80" />
                  <blockquote className="text-2xl md:text-3xl font-bold">
                    "Oh dad, you are our inspiration!"
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Medical Advisors */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl text-center md:text-3xl font-bold text-secondary-custom mb-6">Meet Our Medical Advisors</h2>
            <p className="text-base text-center text-sub mb-8">World-class medical expertise guiding your family's health decisions</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dr. Nilesh Mehta */}
              <Card className="feature-card group">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src="/lovable-uploads/1e13b753-7867-41f5-8b06-3b752123a31d.png" 
                      alt="Dr. Nilesh Mehta"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-custom mb-4">Dr. Nilesh Mehta</h3>
                  <p className="text-primary-custom font-semibold mb-2">Phoenix Cancer Center</p>
                  <p className="text-sub mb-4">Medical Oncologist</p>
                  <p className="text-main">
                    World-class medical expertise guiding your family's health decisions with safe, trusted care
                  </p>
                </CardContent>
              </Card>

              {/* Dr. Vivek Arora */}
              <Card className="feature-card group">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src="/lovable-uploads/e9c74766-733e-41a2-8068-2f74aa5334dd.png" 
                      alt="Dr. Vivek Arora"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-custom mb-4">Dr. Vivek Arora</h3>
                  <p className="text-primary-custom font-semibold mb-2">Aurora Health Care</p>
                  <p className="text-sub mb-4">Internal Medicine</p>
                  <p className="text-main">
                    Guiding evidence-based management of hypertension and diabetes to deliver effective patient care
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        </motion.div>
      </motion.div>

      {/* Let's Connect Section */}
      <LetsConnect />
    </div>
  );
};

export default OurStory;
