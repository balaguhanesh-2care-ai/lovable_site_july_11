
const PartnersSection = () => {
  const partners = [
    { name: "healthians", logo: "/partners/healthians.png" },
    { name: "iron_mountain", logo: "/partners/iron_mountain.png" },
    { name: "orange_health_labs", logo: "/partners/orange_health_labs.png" },
    { name: "pathlabs", logo: "/partners/pathlabs.png" },
    { name: "practo", logo: "/partners/practo.png" },
    { name: "Red_health", logo: "/partners/red_health.jpg" },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-custom mb-4">
            Exploring Colloborations with Trusted Partners like
          </h2>
        </div>
        
        {/* Moving ribbon */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-2 w-48 h-24 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-2 w-48 h-24 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
