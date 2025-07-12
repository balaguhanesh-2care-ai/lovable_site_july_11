
import { useState } from 'react';

interface ProblemNode {
  id: string;
  x: number;
  y: number;
  problem: string;
  solution: string;
}

const ProblemSolutionNetwork = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const problems: ProblemNode[] = [
    {
      id: 'P1',
      x: 15,
      y: 60,
      problem: 'Remote Health Monitoring',
      solution: 'AI-powered 24/7 health tracking and real-time alerts for families living apart'
    },
    {
      id: 'P2',
      x: 50,
      y: 25,
      problem: 'Emergency Response Delays',
      solution: 'Instant emergency detection and immediate medical professional response'
    },
    {
      id: 'P3',
      x: 25,
      y: 80,
      problem: 'Healthcare Access Barriers',
      solution: 'Remote consultations and comprehensive medical support from qualified professionals'
    },
    {
      id: 'P4',
      x: 75,
      y: 70,
      problem: 'Health Data Management',
      solution: 'Centralized health records with AI analysis and family sharing capabilities'
    },
    {
      id: 'P5',
      x: 85,
      y: 35,
      problem: 'Medication Compliance',
      solution: 'Smart reminders and monitoring to ensure proper medication adherence'
    }
  ];

  const connections = [
    { from: 'P1', to: 'P2' },
    { from: 'P1', to: 'P3' },
    { from: 'P2', to: 'P4' },
    { from: 'P2', to: 'P5' },
    { from: 'P3', to: 'P4' },
    { from: 'P4', to: 'P5' }
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const getConnectionPath = (from: ProblemNode, to: ProblemNode) => {
    const controlX1 = from.x + (to.x - from.x) * 0.3;
    const controlY1 = from.y + (to.y - from.y) * 0.1;
    const controlX2 = from.x + (to.x - from.x) * 0.7;
    const controlY2 = from.y + (to.y - from.y) * 0.9;
    
    return `M ${from.x} ${from.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${to.x} ${to.y}`;
  };

  return (
    <div className="max-w-6xl mx-auto relative mt-16">
      <div 
        className="relative h-96 md:h-[500px] bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/20 backdrop-blur-sm overflow-hidden"
        onMouseMove={handleMouseMove}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
        }}
      >
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary-custom))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--tertiary-custom))" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {connections.map((connection, index) => {
            const fromNode = problems.find(p => p.id === connection.from);
            const toNode = problems.find(p => p.id === connection.to);
            if (!fromNode || !toNode) return null;
            
            return (
              <path
                key={index}
                d={getConnectionPath(fromNode, toNode)}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{
                  filter: hoveredNode === connection.from || hoveredNode === connection.to 
                    ? 'drop-shadow(0 0 8px hsl(var(--primary-custom)))' 
                    : 'none'
                }}
              />
            );
          })}
        </svg>

        {/* Problem Nodes */}
        {problems.map((problem) => (
          <div
            key={problem.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer ${
              hoveredNode === problem.id ? 'z-20' : 'z-10'
            }`}
            style={{
              left: `${problem.x}%`,
              top: `${problem.y}%`
            }}
            onMouseEnter={() => setHoveredNode(problem.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {hoveredNode === problem.id ? (
              // Expanded view
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-2xl border-2 border-primary-custom/50 min-w-[280px] max-w-[320px] animate-scale-in">
                <div 
                  className="absolute inset-0 rounded-xl opacity-75 animate-pulse"
                  style={{
                    background: 'linear-gradient(45deg, hsl(var(--primary-custom))/20, hsl(var(--tertiary-custom))/20)',
                    filter: 'blur(8px)'
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary-custom text-white rounded-full text-sm font-bold mb-3 mx-auto">
                    {problem.id}
                  </div>
                  <h4 className="font-bold text-secondary-custom mb-2 text-center text-sm">
                    Problem:
                  </h4>
                  <p className="text-sub text-sm mb-3 text-center">
                    {problem.problem}
                  </p>
                  <h4 className="font-bold text-primary-custom mb-2 text-center text-sm">
                    Solution we offer:
                  </h4>
                  <p className="text-sub text-sm text-center">
                    {problem.solution}
                  </p>
                </div>
              </div>
            ) : (
              // Default node view
              <div 
                className="flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-2 border-gray-300 text-secondary-custom font-bold text-sm transition-all duration-300 hover:scale-110 hover:border-primary-custom hover:shadow-lg"
                style={{
                  boxShadow: hoveredNode ? '0 0 20px hsl(var(--primary-custom))/30' : 'none'
                }}
              >
                {problem.id}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSolutionNetwork;
