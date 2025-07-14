import React from 'react';

const MacbookFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-[90%] md:w-[80%] lg:w-[70%] aspect-video mx-auto bg-slate-900 rounded-2xl shadow-2xl shadow-black/60 p-1.5 md:p-2.5">
      <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
        {/* Screen Content */}
        {children}
      </div>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 md:w-40 h-4 md:h-5 bg-slate-900 rounded-b-lg flex justify-center items-center">
        <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-700 rounded-full" />
      </div>
    </div>
  );
};

export default MacbookFrame;