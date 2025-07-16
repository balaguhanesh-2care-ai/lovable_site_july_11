"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import TypewriterText from "../components/TypewriterText";

const INTRO_TEXT = "Entering into the world of Maya AI";

const sections = [
  {
    number: "01",
    emoji: "🌙",
    heading: "Personal",
    tagline: "Care that knows you — and remembers.",
    text: "At 2care, every journey starts with knowing you deeply. Our voice agents remember your family’s unique health history, daily habits, and personal preferences — so you never have to repeat yourself.",
  },
  {
    number: "02",
    emoji: "⚡️",
    heading: "Powerful",
    tagline: "More than reminders — real action.",
    text: "Behind the scenes, our agentic workflows do the heavy lifting for you. Maya AI continuously analyses every lab report, prescription, and doctor note — connecting the dots, raising red flags, and sharing clear summaries.",
  },
  {
    number: "03",
    emoji: "🌍",
    heading: "Connected",
    tagline: "Everyone stays in sync — wherever they are.",
    text: "2care acts like a trusted health concierge, keeping everyone updated — from siblings living abroad to the doctor next door. All AI-generated insights are reviewed by our internal doctor.",
  },
  {
    number: "04",
    emoji: "🗣️",
    heading: "Always Listening, Always There",
    tagline: "Care that listens to what’s unsaid — anytime.",
    text: "Our voice agents aren’t tied to a device — they’re on-call, ready to listen whenever you or your loved ones need help, day or night. And because all of this is verified by our internal medical team, you can trust every word.",
  },
  {
    number: "05",
    emoji: "🍲",
    heading: "Lifestyle, Personalized",
    tagline: "Meals, movement, and daily habits — designed just for you.",
    text: "Maya AI looks at your allergies, local food preferences, and evolving health data to suggest meal plans that truly fit. Daily routines for medication, exercise, and follow-ups are adapted to your lifestyle — not the other way around.",
  },
  {
    number: "06",
    emoji: "🔐",
    heading: "Trusted & Transparent",
    tagline: "Explainable AI. Verified by real doctors.",
    text: "Every piece of advice from Maya AI is reviewed by a qualified internal doctor. You can always ask 'Why?' and get a clear answer. Your data is safe and your consent stays protected.",
  },
  {
    number: "07",
    emoji: "🪐",
    heading: "What’s Next",
    tagline: "Smarter insights, deeper peace of mind.",
    text: "We’re building real-time integration with Bluetooth health devices, smarter alerts from daily vitals, and expanded voice agent workflows — always verified by doctors before reaching you.",
  },
];

export default function MayaAI() {
  const [showIntro, setShowIntro] = useState(true);
  const [fade, setFade] = useState(false);
  const [typeDone, setTypeDone] = useState(false);
  const [waiting, setWaiting] = useState(true);

  // Declare refs and inView hooks for each section (7 sections)
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const inView0 = useInView(ref0, { once: true, amount: 0.3 });
  const inView1 = useInView(ref1, { once: true, amount: 0.3 });
  const inView2 = useInView(ref2, { once: true, amount: 0.3 });
  const inView3 = useInView(ref3, { once: true, amount: 0.3 });
  const inView4 = useInView(ref4, { once: true, amount: 0.3 });
  const inView5 = useInView(ref5, { once: true, amount: 0.3 });
  const inView6 = useInView(ref6, { once: true, amount: 0.3 });
  const sectionRefs = [ref0, ref1, ref2, ref3, ref4, ref5, ref6];
  const sectionInViews = [inView0, inView1, inView2, inView3, inView4, inView5, inView6];

  // Wait before typing starts
  useEffect(() => {
    const timer = setTimeout(() => setWaiting(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // After typing is done, pause for 3s, then fade out
  useEffect(() => {
    if (typeDone) {
      const timer = setTimeout(() => setFade(true), 3000);
      const timer2 = setTimeout(() => setShowIntro(false), 3800);
      return () => { clearTimeout(timer); clearTimeout(timer2); };
    }
  }, [typeDone]);

  return (
    <>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: fade ? 0 : 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
          style={{ pointerEvents: fade ? 'none' : 'auto' }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
            src="/parallax.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Scanlines overlay */}
          <div className="pointer-events-none absolute inset-0 z-30 scanlines" />
          {/* Animated particles overlay */}
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
            <div className="futuristic-particles w-full h-full" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/80 z-10" />
          {/* Animated robots placeholder */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex gap-8">
            {/* TODO: Replace with animated SVGs or Lottie robots */}
            <div className="w-16 h-16 bg-cyan-300 rounded-full opacity-70 animate-bounce" />
            <div className="w-16 h-16 bg-cyan-500 rounded-full opacity-70 animate-pulse" />
          </div>
          {/* Glassmorphism panel for intro text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="relative z-50 flex flex-col items-center justify-center w-full h-full"
          >
            {waiting ? (
              <span className="futuristic-gradient-text font-orbitron text-cyan-200 text-3xl sm:text-5xl md:text-6xl font-extrabold text-center animate-pulse">|</span>
            ) : (
              <TypewriterText
                staticText=""
                animatedWords={[INTRO_TEXT]}
                typingSpeed={60}
                deletingSpeed={40}
                pauseDuration={3000}
                className="futuristic-gradient-text font-orbitron text-cyan-200 text-3xl sm:text-5xl md:text-6xl font-extrabold text-center"
                onDone={() => setTypeDone(true)}
              />
            )}
            {/* Sound effect */}
            <audio id="mayaai-intro-sound" src="/futuristic-chime.mp3" autoPlay muted />
          </motion.div>
        </motion.div>
      )}
      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center pt-4 sm:pt-6 pb-10 sm:pb-16"
        style={{ backgroundImage: "url('/bg-blobs.jpg')" }}
      >
        <div className="flex w-full justify-start items-end relative">
          {/* Robot peeking image on the right top corner above the cards */}
          <img
            src="/robot%20corner.png"
            alt="Robot corner"
            className="hidden md:block absolute z-30 w-64 lg:w-80 xl:w-[28rem] pointer-events-none select-none robot-flicker"
            style={{ top: '13rem', right: '-1rem', transform: 'translateY(-30%) rotate(15deg)' }}
          />
          <div className="flex-1 flex flex-col">
            {/* Maya AI Heading */}
            <h1 className="text-5xl font-bold text-secondary-custom text-center my-10 sm:mb-12 drop-shadow-lg">Maya AI</h1>
            <div className="relative z-10 max-w-5xl w-[96%] sm:w-[90%] mx-auto rounded-[24px] sm:rounded-[40px] overflow-hidden border border-white/20 shadow-2xl backdrop-blur-lg bg-black/80">
              {/* Video Layer inside the Card */}.
              <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
                src="/parallax.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Scrollable Content */}
              <div className="relative z-10 max-h-[90vh] overflow-y-auto scroll-smooth px-4 sm:px-10 py-6 sm:py-8 space-y-8 sm:space-y-14">
                {sections.map((section, idx) => (
                  <motion.div
                    key={idx}
                    ref={sectionRefs[idx]}
                    initial={{ opacity: 0, y: 50 }}
                    animate={sectionInViews[idx] ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="text-white text-center"
                  >
                    <div className="mb-2 font-mono text-white/80 text-sm tracking-widest flex items-center justify-center gap-2">
                      <span>{section.number}</span>
                      <span className="text-xl">{section.emoji}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-custom mb-6 drop-shadow">
                      {section.heading}
                    </h2>
                    <p className="text-base md:text-lg font-medium mb-4 italic text-indigo-100">
                      {section.tagline}
                    </p>
                    <p className="text-sm md:text-base text-white/90 max-w-3xl mx-auto">
                      {section.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}