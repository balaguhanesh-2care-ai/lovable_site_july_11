
import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import LetsConnect from "@/components/LetsConnect";

const OurStory = () => {
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture("Visit_OurStory_Page");
  }, []);
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-custom mb-8 mt-10">
              Our Story
            </h1>
            <p className="text-lg text-sub max-w-2xl mx-auto">
              Born from personal experience, built for families worldwide
            </p>
          </div>

          {/* Father's Cancer Journey */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-custom mb-6">Our Father's Cancer Journey</h2>
            <p className="text-base text-sub mb-6">A personal experience that inspired our mission</p>
            <div className="prose prose-lg max-w-none text-sub space-y-6">
              <p>
                When our father was diagnosed with cancer in 2020, we experienced firsthand challenges of coordinating care from overseas. Saket was in Germany and Pawan was in Ireland. We faced many challenges:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li>• Missed diagnoses from complex medical reports</li>
                <li>• Difficulty in assessing severity of situations</li>
                <li>• Fragmented health records</li>
              </ul>
              
              <p>
                Losing our father was an incredibly difficult experience—one filled with questions and regrets. We often wondered:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li>• What if we had recognized the symptoms sooner?</li>
                <li>• What if we had been able to monitor his vital signs more effectively?</li>
                <li>• What if we had understood the medical jargon and test results better?</li>
              </ul>
              
              <p>
                Inspired by our own journey, we created 2care.ai to make healthcare easy, accessible, and efficient.
              </p>
              
              <p className="font-semibold text-secondary-custom">
                Our platform empowers you to seamlessly manage your loved ones' health from anywhere.
              </p>
              
              <p>
                Today, our mission is to help millions of families stay connected to their own and their parents' healthcare journeys - no matter where they are. Born from personal experience, 2care.ai is built by founders who truly understand these challenges.
              </p>
            </div>
          </section>

          {/* Highlighted Quote */}
          <section className="mb-16">
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
          </section>

          {/* Medical Advisors */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-custom mb-6">Meet Our Medical Advisors</h2>
            <p className="text-base text-sub mb-8">World-class medical expertise guiding your family's health decisions</p>
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
          </section>
        </div>
      </div>

      {/* Let's Connect Section */}
      <LetsConnect />
    </div>
  );
};

export default OurStory;
