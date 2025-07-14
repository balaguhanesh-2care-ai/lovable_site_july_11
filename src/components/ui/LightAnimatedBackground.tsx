import { motion } from "framer-motion";

export const LightAnimatedBackground = () => {
  const blob1 =
    "M400,300Q420,350,370,380Q320,410,270,400Q220,390,180,350Q140,310,150,250Q160,190,200,160Q240,130,290,120Q340,110,370,150Q400,190,400,240Q400,290,400,300Z";
  const blob2 =
    "M380,290Q390,330,350,360Q310,390,260,380Q210,370,180,330Q150,290,160,240Q170,190,200,160Q230,130,280,120Q330,110,360,140Q390,170,380,220Q370,270,380,290Z";

  return (
    <svg
      viewBox="0 0 800 600"
      className="absolute top-0 left-0 w-full h-full -z-10 opacity-50"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="vibrantGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" /> 
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      <motion.path
        fill="url(#vibrantGradient)"
        d={blob1}
        animate={{ d: [blob1, blob2, blob1] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
    </svg>
  );
};