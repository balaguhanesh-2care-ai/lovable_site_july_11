import { useEffect, useState, useRef } from 'react';

interface TrailPosition {
  x: number;
  y: number;
  opacity: number;
}

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<TrailPosition[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Create trailing effect
  useEffect(() => {
    if (!isVisible) return;

    const updateTrail = () => {
      setTrail(prevTrail => {
        const newTrail = [...prevTrail];
        
        // Add current position to trail
        newTrail.unshift({
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: 0.15
        });

        // Update existing trail positions with fade effect
        for (let i = 1; i < newTrail.length; i++) {
          newTrail[i].opacity *= 0.85; // Faster fade
        }

        // Keep only recent positions (shorter trail)
        return newTrail.slice(0, 8).filter(pos => pos.opacity > 0.01);
      });

      animationFrameRef.current = requestAnimationFrame(updateTrail);
    };

    animationFrameRef.current = requestAnimationFrame(updateTrail);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor glow */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          opacity: 0.15,
        }}
      >
        {/* Primary glow - largest */}
        <div
          className="absolute w-24 h-24 rounded-full"
          style={{
            background: `radial-gradient(circle, #45b7d1 0%, transparent 70%)`,
            filter: 'blur(15px)',
          }}
        />
        {/* Secondary glow - medium */}
        <div
          className="absolute w-16 h-16 rounded-full"
          style={{
            left: '25%',
            top: '25%',
            background: `radial-gradient(circle, #3fc4e2 0%, transparent 60%)`,
            filter: 'blur(10px)',
          }}
        />
        {/* Accent glow - smallest */}
        <div
          className="absolute w-12 h-12 rounded-full"
          style={{
            left: '37.5%',
            top: '37.5%',
            background: `radial-gradient(circle, #2b4570 0%, transparent 50%)`,
            filter: 'blur(8px)',
          }}
        />
      </div>

      {/* Trail elements */}
      {trail.map((position, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-40"
          style={{
            left: position.x - 30,
            top: position.y - 30,
            opacity: position.opacity,
            transform: `scale(${0.6 - index * 0.05})`,
          }}
        >
          <div
            className="absolute w-16 h-16 rounded-full"
            style={{
              background: `radial-gradient(circle, #45b7d1 0%, transparent 60%)`,
              filter: 'blur(12px)',
            }}
          />
          <div
            className="absolute w-10 h-10 rounded-full"
            style={{
              left: '18.75%',
              top: '18.75%',
              background: `radial-gradient(circle, #3fc4e2 0%, transparent 50%)`,
              filter: 'blur(8px)',
            }}
          />
        </div>
      ))}
    </>
  );
};

export default CursorGlow;
