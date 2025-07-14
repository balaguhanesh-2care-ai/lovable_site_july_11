import { useState, useEffect } from "react";
import { Activity, FileText, Heart, AlertTriangle, History, Shield, Bot, Stethoscope } from "lucide-react";

const features = [
  { icon: Activity, label: "Customised Vitals" },
  { icon: FileText, label: "AI Report Summary" },
  { icon: Heart, label: "Daily Health Monitoring" },
  { icon: AlertTriangle, label: "Risk Alerts" },
  { icon: History, label: "Care History" },
  { icon: Shield, label: "24/7 Care" },
  { icon: Bot, label: "AI Maya" },
  { icon: Stethoscope, label: "Doctor Check-ins" },
];

const CardStackAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<'enter' | 'stay' | 'exit'>('enter');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (phase === 'enter') {
      timer = setTimeout(() => setPhase('stay'), 600);
    } else if (phase === 'stay') {
      timer = setTimeout(() => setPhase('exit'), 2400);
    } else if (phase === 'exit') {
      timer = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
        setPhase('enter');
      }, 600);
    }
    return () => clearTimeout(timer);
  }, [phase]);

  const { icon: Icon, label } = features[activeIndex];

  // Animation classes
  let cardAnim = '';
  if (phase === 'enter') cardAnim = 'card-slide-in';
  else if (phase === 'stay') cardAnim = 'card-slide-stay';
  else if (phase === 'exit') cardAnim = 'card-slide-out';

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[420px] py-16 w-full overflow-hidden" style={{
      background: 'radial-gradient(ellipse at 50% 40%, #e6f6ff 60%, #fafdff 100%)',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      {/* Soft pulse behind logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-blue-200/40 blur-2xl animate-pulse z-0" />
      {/* Center logo */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-md animate-pulse" />
          <img
            src="/lovable-uploads/c0b20459-77f5-436c-a4c2-5abc339a3735.png"
            alt="2care.ai Logo"
            className="w-24 h-24 object-contain drop-shadow-xl"
          />
        </div>
        {/* Animated card stack */}
        <div
          className={`absolute left-1/2 ${isMobile ? 'top-0' : 'top-1/2'} ${isMobile ? '-translate-x-1/2 -translate-y-[120%]' : '-translate-x-1/2 -translate-y-1/2'} z-20 pointer-events-none`}
          style={{ minWidth: 220, maxWidth: 320 }}
        >
          <div
            className={`rounded-2xl border border-blue-200/70 bg-white/70 backdrop-blur-lg shadow-xl px-6 py-4 flex items-center gap-3 ${cardAnim}`}
            style={{
              boxShadow: '0 4px 32px 0 rgba(60, 180, 255, 0.10)',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 500,
              fontSize: '1.15rem',
              color: '#1a365d',
              letterSpacing: '0.01em',
            }}
          >
            {Icon && <Icon className="w-7 h-7 text-blue-400 flex-shrink-0" />}
            <span className="whitespace-nowrap" style={{ fontFamily: 'Nunito, Inter, sans-serif', fontWeight: 700 }}>{label}</span>
          </div>
        </div>
      </div>
      {/* Custom animation keyframes for card stack */}
      <style>{`
        .card-slide-in {
          opacity: 0;
          transform: translateX(-100%) scale(0.95);
          animation: cardIn 0.6s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .card-slide-stay {
          opacity: 1;
          transform: translateX(0) scale(1);
          transition: opacity 0.2s, transform 0.2s;
        }
        .card-slide-out {
          opacity: 1;
          transform: translateX(0) scale(1);
          animation: cardOut 0.6s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes cardIn {
          0% { opacity: 0; transform: translateX(-100%) scale(0.95); }
          80% { opacity: 1; transform: translateX(8%) scale(1.04); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes cardOut {
          0% { opacity: 1; transform: translateX(0) scale(1); }
          100% { opacity: 0; transform: translateX(100%) scale(0.95); }
        }
      `}</style>
    </section>
  );
};

export default CardStackAnimation;