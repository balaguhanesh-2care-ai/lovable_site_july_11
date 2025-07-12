
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ravi S",
      role: "Son, San Jose, CA",
      content: "I finally feel in control of my parents’ health without a single late-night call or confusing report.",
      rating: 5
    },
    {
      name: "Anita Patel", 
      role: "Daughter, Ahmedabad",
      content: "My elderly mother loves the daily health check-ins. The family connection feature keeps us all informed about her wellbeing.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Trusted by Families Across India
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See what families are saying about their experience with 2care.ai
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Testimonial */}
          <div className="lg:mt-8">
            <Card className="h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-8 text-lg leading-relaxed italic font-medium">
                  "{testimonials[0].content}"
                </blockquote>
                <div className="border-t border-slate-100 pt-6">
                  <p className="font-bold text-slate-800 text-lg">{testimonials[0].name}</p>
                  <p className="text-slate-500 text-sm mt-1">{testimonials[0].role}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center YouTube Video */}
          <div className="lg:mt-0">
            <Card className="bg-white border-0 shadow-xl rounded-2xl overflow-hidden">
              <CardContent className="p-2">
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/v-tcho9xnaE?si=lgXbh37_4QhzBaCu&rel=0&showinfo=0&modestbranding=1"
                    title="2care.ai Customer Experience"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    Real Customer Experience
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Watch how 2care.ai transforms healthcare for Indian families
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Testimonial */}
          <div className="lg:mt-8">
            <Card className="h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[1].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-8 text-lg leading-relaxed italic font-medium">
                  "{testimonials[1].content}"
                </blockquote>
                <div className="border-t border-slate-100 pt-6">
                  <p className="font-bold text-slate-800 text-lg">{testimonials[1].name}</p>
                  <p className="text-slate-500 text-sm mt-1">{testimonials[1].role}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional social proof */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center space-x-8 text-slate-500">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 Average Rating</span>
            </div>
            <div className="h-4 w-px bg-slate-300"></div>
            <div className="text-sm font-medium">
              10,000+ Families Trust 2care.ai
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
