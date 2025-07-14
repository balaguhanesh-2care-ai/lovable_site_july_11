import { Card, CardContent } from "@/components/ui/card";
import { motion, TargetAndTransition, useAnimation } from "framer-motion";
import React, { useEffect, useMemo } from "react";
import { User } from "lucide-react";
import { FloatingBlobsBackgroundDark } from "../ui/FloatingBlobsBackgroundDark";

const testimonials = [
  {
    name: "Ravi S",
    role: "Son, San Jose, CA",
    content: "I finally feel in control of my parents’ health without a single late-night call or confusing report.",
    avatar: "",
  },
  {
    name: "Anita Patel",
    role: "Daughter, Ahmedabad",
    content: "My elderly mother loves the daily health check-ins. The family connection feature keeps us all informed about her wellbeing.",
    avatar: "",
  },
  {
    name: "Priya Sharma",
    role: "Caregiver, Mumbai",
    content: "This service is a lifesaver. It simplifies managing multiple medications and appointments.",
    avatar: "",
  },
  {
    name: "Amit Kumar",
    role: "Son, Delhi",
    content: "The peace of mind this provides is invaluable. I can check on my father's vitals from anywhere.",
    avatar: "",
  },
  {
    name: "Sunita Reddy",
    role: "Daughter, Bangalore",
    content: "The AI alerts are incredibly accurate and have helped us prevent a couple of emergencies.",
    avatar: "",
  },
  {
    name: "Vikram Singh",
    role: "Son, Kolkata",
    content: "A must-have for anyone with elderly parents living alone. The user interface is so simple for them to use.",
    avatar: "",
  },
];

type Testimonial = typeof testimonials[number];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="bg-white/60 backdrop-blur-md border-white/20 text-slate-800 shadow-lg rounded-xl transition-all duration-300 group hover:bg-primary-custom hover:text-white hover:scale-105 hover:shadow-xl">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-custom flex items-center justify-center group-hover:bg-white transition-colors">
            {testimonial.avatar ? (
              <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
            ) : (
              <User className="w-5 h-5 text-white group-hover:text-primary-custom transition-colors" />
            )}
          </div>
          <div className="flex-grow">
            <p className="font-bold">{testimonial.name}</p>
            <p className="text-sm text-gray-500 mb-2 group-hover:text-gray-200 transition-colors">{testimonial.role}</p>
            <p className="text-slate-700 leading-relaxed group-hover:text-gray-100 transition-colors">{testimonial.content}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
interface TestimonialColumnProps {
  testimonials: Testimonial[];
  duration?: number;
  direction?: 'up' | 'down';
}

const TestimonialColumn = ({ testimonials, duration = 60, direction = 'up' }: TestimonialColumnProps) => {
  const controls = useAnimation();

  const animationDefinition: TargetAndTransition = useMemo(() => ({
    y: direction === 'up' ? ['0%', '-50%'] : ['-50%', '0%'],
    transition: {
      y: {
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  }), [direction, duration]);

  useEffect(() => {
    controls.start(animationDefinition);
  }, [controls, animationDefinition]);

  return (
    <motion.div
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start(animationDefinition)}
      className="flex flex-col gap-8"
      animate={controls}
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
      ))}
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Trusted by Families Across the Globe
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          See what families are saying about their experience with 2care.ai
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Column - hidden on mobile */}
        <div className="hidden px-3 lg:block relative h-[500px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <TestimonialColumn testimonials={testimonials} direction="up" />
        </div>

        {/* Center YouTube Video */}
        <div className="mt-8 lg:mt-0">
          <Card className="bg-white/60 backdrop-blur-md border-white/20 shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-2">
              <div className="aspect-video rounded-xl overflow-hidden bg-slate-800">
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
                  Watch how 2care.ai transforms healthcare for families
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - hidden on mobile */}
        <div className="hidden px-3 lg:block relative h-[500px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <TestimonialColumn testimonials={[...testimonials].reverse()} direction="down" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;