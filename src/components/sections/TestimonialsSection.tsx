
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonialsLeft = [
  {
    name: "Ravi Sharma",
    role: "Son, Bengaluru",
    content: "I finally feel in control of my parents’ health without a single late-night call or confusing report.",
    rating: 5
  },
  {
    name: "Priya Menon",
    role: "Daughter, Kochi",
    content: "The daily health updates give me peace of mind even when I’m far from home.",
    rating: 5
  },
  {
    name: "Amitabh Singh",
    role: "Son, Lucknow",
    content: "Emergency alerts are a lifesaver. The support team is always available!",
    rating: 5
  },
  {
    name: "Sonal Gupta",
    role: "Daughter, Pune",
    content: "My mother loves the regular check-ins. The family connection feature is wonderful.",
    rating: 5
  },
  {
    name: "Vikram Iyer",
    role: "Son, Chennai",
    content: "2care.ai made it easy to manage my father’s health from another city.",
    rating: 4
  }
];

const testimonialsRight = [
  {
    name: "Anita Patel",
    role: "Daughter, Ahmedabad",
    content: "The family connection feature keeps us all informed about my mother’s wellbeing.",
    rating: 5
  },
  {
    name: "Deepak Joshi",
    role: "Son, Indore",
    content: "The AI health monitoring is accurate and easy to use. Highly recommended!",
    rating: 5
  },
  {
    name: "Meera Nair",
    role: "Daughter, Thiruvananthapuram",
    content: "I can track my parents’ health anytime. The reports are simple to understand.",
    rating: 5
  },
  {
    name: "Rahul Deshmukh",
    role: "Son, Nagpur",
    content: "24/7 support is real! The team responds instantly in emergencies.",
    rating: 5
  },
  {
    name: "Kavita Reddy",
    role: "Daughter, Hyderabad",
    content: "The app is user-friendly and the support is excellent. My family feels safer.",
    rating: 4
  }
];

const marqueeAnimation = `animate-[marquee-vertical_18s_linear_infinite]`;
const marqueeReverseAnimation = `animate-[marquee-vertical-reverse_18s_linear_infinite]`;

// Add keyframes for vertical marquee in global CSS if not present
// @keyframes marquee-vertical { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
// @keyframes marquee-vertical-reverse { 0% { transform: translateY(-50%); } 100% { transform: translateY(0); } }

const TestimonialsSection = () => {
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
          {/* Left Vertical Ribbon */}
          <div className="hidden lg:block max-h-[420px] overflow-hidden relative">
            <div className={`flex flex-col gap-6 ${marqueeAnimation} will-change-transform`}>
              {[...testimonialsLeft, ...testimonialsLeft].map((t, idx) => (
                <Card key={idx} className="bg-white border-0 shadow-xl rounded-2xl overflow-visible">
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <blockquote className="text-slate-700 mb-4 text-base leading-relaxed italic font-medium">
                      {t.content}
                    </blockquote>
                    <div className="border-t border-slate-100 pt-4">
                      <p className="font-bold text-slate-800 text-base">{t.name}</p>
                      <p className="text-slate-500 text-xs mt-1">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
          {/* Right Vertical Ribbon */}
          <div className="hidden lg:block max-h-[420px] overflow-hidden relative">
            <div className={`flex flex-col gap-6 ${marqueeReverseAnimation} will-change-transform`}>
              {[...testimonialsRight, ...testimonialsRight].map((t, idx) => (
                <Card key={idx} className="bg-white border-0 shadow-xl rounded-2xl overflow-visible">
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <blockquote className="text-slate-700 mb-4 text-base leading-relaxed italic font-medium">
                      {t.content}
                    </blockquote>
                    <div className="border-t border-slate-100 pt-4">
                      <p className="font-bold text-slate-800 text-base">{t.name}</p>
                      <p className="text-slate-500 text-xs mt-1">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* Additional social proof */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-500">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-slate-800">4.9/5 Average Rating</span>
            </div>
            <div className="hidden sm:block h-8 w-px bg-slate-300"></div>
            <div className="text-2xl font-bold text-slate-800 text-center">
              10,000+ Families Trust 2care.ai
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;