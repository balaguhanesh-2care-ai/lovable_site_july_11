import { Card, CardContent } from "@/components/ui/card";

const MedicalAdvisorsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-custom/5 to-tertiary-custom/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary-custom mb-4">
            Meet Our Medical Advisors
          </h2>
          <p className="text-xl text-sub max-w-3xl mx-auto leading-relaxed">
            World-class medical expertise guiding your family's health decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              <h3 className="text-xl font-bold text-secondary-custom mb-2">
                Dr. Nilesh Mehta
              </h3>
              <p className="text-primary-custom font-semibold mb-2">
                Phoenix Cancer Center
              </p>
              <p className="text-sub mb-4">Medical Oncologist</p>
              <p className="text-main">
                World-class medical expertise guiding your family's health
                decisions with safe, trusted care
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
              <h3 className="text-xl font-bold text-secondary-custom mb-2">
                Dr. Vivek Arora
              </h3>
              <p className="text-primary-custom font-semibold mb-2">
                Aurora Health Care
              </p>
              <p className="text-sub mb-4">Internal Medicine</p>
              <p className="text-main">
                Guiding evidence-based management of hypertension and diabetes
                to deliver effective patient care
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MedicalAdvisorsSection;