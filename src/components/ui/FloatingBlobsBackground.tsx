import { motion } from 'framer-motion';

const Blob = ({ animation, color }) => {
  return (
    <motion.div
      className="absolute"
      style={{
        width: 'clamp(300px, 40vw, 600px)',
        height: 'clamp(300px, 40vw, 600px)',
        borderRadius: '50%',
        backgroundColor: color,
        filter: 'blur(120px)', // Increased blur for a softer, more blended look
        opacity: 0.4, // Dimmed intensity for a lighter feel
      }}
      animate={animation.animate}
      transition={animation.transition}
    />
  );
};

export const FloatingBlobsBackground = () => {
  // Using lighter colors and spreading the animations across the whole screen
  const animations = [
    {
      color: '#45B7D1', // Primary
      animate: {
        x: ['-20%', '80%', '10%', '-20%'],
        y: ['-20%', '60%', '110%', '-20%'],
        rotate: [0, 90, -45, 0],
      },
      transition: {
        duration: 40,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
    {
      color: '#3FC4E2', // Tertiary
      animate: {
        x: ['100%', '10%', '-10%', '100%'],
        y: ['20%', '90%', '-10%', '20%'],
        rotate: [0, -90, 60, 0],
      },
      transition: {
        duration: 35,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
        delay: 5,
      },
    },
    {
      color: '#7D8BB7', // Using light Sub text color
      animate: {
        x: ['30%', '90%', '-15%', '30%'],
        y: ['110%', '20%', '60%', '110%'],
        rotate: [0, 120, -120, 0],
      },
      transition: {
        duration: 30,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
        delay: 2,
      },
    },
    {
      color: '#45B7D1',
      animate: {
        x: ['-10%', '110%', '40%', '-10%'],
        y: ['100%', '-15%', '50%', '100%'],
        rotate: [0, -100, 100, 0],
      },
      transition: {
        duration: 45,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
        delay: 7,
      },
    },
  ];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 bg-[#EEF5F6]">
      <div className="relative w-full h-full">
        {animations.map((anim, index) => (
          <Blob key={index} animation={anim} color={anim.color} />
        ))}
      </div>
    </div>
  );
};