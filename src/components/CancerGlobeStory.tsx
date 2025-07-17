import React, { useEffect, useRef, useState } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import { motion } from 'framer-motion';

interface LocationPoint {
  lat: number;
  lng: number;
  name: string;
}

interface ArcData {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: [string, string];
}

const CancerGlobeStory: React.FC = () => {
  const globeRef = useRef<GlobeMethods>(null);

  const [points, setPoints] = useState<LocationPoint[]>([]);
  const [arcs, setArcs] = useState<ArcData[]>([]);

  useEffect(() => {
    const locations: Record<string, LocationPoint> = {
      Germany: { lat: 51.1657, lng: 10.4515, name: 'Saket - Germany' },
      Ireland: { lat: 53.1424, lng: -7.6921, name: 'Pawan - Ireland' },
      USA: { lat: 37.0902, lng: -95.7129, name: 'Family - USA' },
      India: { lat: 20.5937, lng: 78.9629, name: 'Father - India' },
      Brazil: { lat: -14.235, lng: -51.9253, name: 'Friend - Brazil' },
      Tokyo: { lat: 35.6895, lng: 139.6917, name: 'Support - Tokyo' },
      Australia: { lat: -25.2744, lng: 133.7751, name: 'Care - Australia' }
    };

    setPoints(Object.values(locations));

    const arcPairs: [string, string][] = [
      ['Germany', 'India'],
      ['Ireland', 'India'],
      ['USA', 'India'],
      ['Brazil', 'India'],
      ['Tokyo', 'India'],
      ['Australia', 'India']
    ];

    const arcList: ArcData[] = [];

    // Duplicate each arc 3 times to simulate constant flow
    arcPairs.forEach(([from, to]) => {
      for (let i = 0; i < 3; i++) {
        arcList.push({
          startLat: locations[from].lat,
          startLng: locations[from].lng,
          endLat: locations[to].lat,
          endLng: locations[to].lng,
          color: ['#3FC4E2', '#45B7D1']
        });
      }
    });

    setArcs(arcList);

    if (globeRef.current) {
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controls.enableZoom = false;
      }
      globeRef.current.pointOfView({ altitude: 1.7 }, 0);
    }
  }, []);

  return (
    <section
      className="w-full h-[600px] relative overflow-hidden rounded-xl my-10"
      style={{ backgroundColor: '#1A2A44' }}
      // style={{
      //   WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 6%, black 12%, black 88%, rgba(0,0,0,0.7) 94%, transparent 100%)',
      //   maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 6%, black 12%, black 88%, rgba(0,0,0,0.7) 94%, transparent 100%)'
      // }}
    >
      {/* Left animated bullet points */}
      
      <div className="absolute inset-y-0 left-6 flex flex-col justify-center z-20 text-left">
      <h2 className='mb-0 font-bold text-2xl text-primary-custom'>As we tried to care from continents apart, </h2>
      <h2 className='text-primary-custom'>these were the hurdles we could not escape. </h2>
        {[
          '• Missed diagnoses from complex medical reports',
          '• Difficulty in assessing severity of situations',
          '• Fragmented health records'
        ].map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(69, 183, 209, 0.8)' }}
            className="text-white font-semibold px-5 py-1 mb-0 mt-3 rounded-xl cursor-pointer shadow-lg transition duration-300 hover:bg-primary-custom hover:text-white"
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Globe with enhanced arcs */}
      <div className="absolute inset-0 z-10">
        <Globe
          ref={globeRef}
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0, 0, 0, 0)"
          showAtmosphere={true}
          atmosphereColor="#45B7D1"
          atmosphereAltitude={0.2}
          pointsData={points}
          pointLat="lat"
          pointLng="lng"
          pointColor={() => '#3FC4E2'}
          pointAltitude={0.03}
          pointLabel={(d: LocationPoint) => d.name}
          arcsData={arcs}
          arcColor="color"
          arcAltitude={(arc: ArcData) =>
            Math.abs(arc.startLat - arc.endLat) > 50 ? 0.3 : 0.2
          }
          arcStroke={0.7}
          arcDashLength={0.3}
          arcDashGap={0.7}
          arcDashInitialGap={() => Math.random() * 2}
          arcDashAnimateTime={3000}
        />
      </div>
    </section>
  );
};

export default CancerGlobeStory;
