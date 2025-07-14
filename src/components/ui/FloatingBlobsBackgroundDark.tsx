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
        filter: 'blur(120px)',
        opacity: 0.3, // Dimmed the blobs
      }}
      animate={animation.animate}
      transition={animation.transition}
    />
  );
};

export const FloatingBlobsBackgroundDark = () => {
  const animations = [
    // Removed the blob that matched the new background color
    {
      color: '#7D8BB7', // Sub text
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
      color: '#45B7D1', // Primary (for a bit of pop)
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
  ];

  return (
    // Used the Secondary color for a lighter, more subtle dark background
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 bg-[#2B4570]">
      <div className="relative w-full h-full">
        {animations.map((anim, index) => (
          <Blob key={index} animation={anim} color={anim.color} />
        ))}
      </div>
    </div>
  );
};