import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const MedicalAdvisorsSection = () => {
  const cardVariants = {
    initial: { y: 0, scale: 1 },
    hover: { y: -8, scale: 1.03 },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <video
            src="/videos/doctor_bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 z-0" />
          
          <div className="relative z-10 p-12 md:p-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Medical Advisors
              </h2>
              <p className="text-xl text-primary-custom max-w-3xl mx-auto leading-relaxed">
                World-class medical expertise guiding your family's health decisions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Dr. Nilesh Mehta */}
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <Card className="feature-card group bg-white/50 backdrop-blur-sm border-none h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="/lovable-uploads/1e13b753-7867-41f5-8b06-3b752123a31d.png" 
                        alt="Dr. Nilesh Mehta"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-custom mb-2">Dr. Nilesh Mehta</h3>
                    <p className="text-primary-custom font-semibold mb-2">Phoenix Cancer Center</p>
                    <p className="text-black font-semibold mb-4">Medical Oncologist</p>
                    <p className="text-black">
                      World-class medical expertise guiding your family's health decisions with safe, trusted care
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Dr. Vivek Arora */}
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <Card className="feature-card group bg-white/50 backdrop-blur-sm border-none h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="/lovable-uploads/e9c74766-733e-41a2-8068-2f74aa5334dd.png" 
                        alt="Dr. Vivek Arora"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-custom mb-2">Dr. Vivek Arora</h3>
                    <p className="text-primary-custom font-semibold mb-2">Aurora Health Care</p>
                    <p className="text-black font-semibold mb-4">Internal Medicine</p>
                    <p className="text-black">
                      Guiding evidence-based management of hypertension and diabetes to deliver effective patient care
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalAdvisorsSection;