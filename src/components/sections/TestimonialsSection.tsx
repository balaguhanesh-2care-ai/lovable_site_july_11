import { Card, CardContent } from "@/components/ui/card";
import { motion, TargetAndTransition, useAnimation } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { User } from "lucide-react";
import { FloatingBlobsBackgroundDark } from "../ui/FloatingBlobsBackgroundDark";
import { usePostHog } from "posthog-js/react";

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
  paused?: boolean;
}

const TestimonialColumn = ({ testimonials, duration = 60, direction = 'up', paused = false }: TestimonialColumnProps) => {
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
    if (paused) {
      controls.stop();
    } else {
      controls.start(animationDefinition);
    }
  }, [controls, animationDefinition, paused]);

  return (
    <motion.div
      animate={controls}
      className="flex flex-col gap-8"
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
      ))}
    </motion.div>
  );
};



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
  const posthog = usePostHog();
  const [isVideoInteracted, setIsVideoInteracted] = useState(false);
  const [leftPaused, setLeftPaused] = useState(false);
  const [rightPaused, setRightPaused] = useState(false);
  const handleVideoClick = () => {
    // Fire the event only on the first interaction
    if (!isVideoInteracted) {
      posthog.capture("CTA_Click_TestimonialVideo", {
        section: "TestimonialsSection",
        video_title: "2care.ai Customer Experience",
      });
      setIsVideoInteracted(true);
    }
  };
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-5">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary-custom mb-4">
          Trusted by Families Across the Globe
        </h2>
        <p className="text-xl text-secondary-custom max-w-3xl mx-auto leading-relaxed">
          See what families are saying about their experience with 2care.ai
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Column - hidden on mobile */}
        <div
  className="hidden px-3 lg:block relative h-[500px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
  onMouseEnter={() => setLeftPaused(true)}
  onMouseLeave={() => setLeftPaused(false)}
>
  <TestimonialColumn testimonials={testimonials} direction="up" paused={leftPaused} />
</div>

        {/* Center YouTube Video */}
        <div className="mt-8 lg:mt-0">
          <Card className="bg-white/60 backdrop-blur-md border-white/20 shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-2">
              <div className="aspect-video rounded-xl overflow-hidden bg-slate-800 relative" onClick={handleVideoClick}>
                {/* Overlay to capture clicks */}
                {!isVideoInteracted && (
                  <div className="absolute inset-0 z-10 cursor-pointer"></div>
                )}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/EB7yWdg_ZKg?si=AxrnfLwaLkkEE1lE"
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
        <div
  className="hidden px-3 lg:block relative h-[500px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
  onMouseEnter={() => setRightPaused(true)}
  onMouseLeave={() => setRightPaused(false)}
>
  <TestimonialColumn testimonials={[...testimonials].reverse()} direction="down" paused={rightPaused} />
</div>
</div>
    </section>
  );
};

export default TestimonialsSection;