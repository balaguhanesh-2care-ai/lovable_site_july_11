"use client";

import AnimatedSolutionsShowcase from "@/components/AnimatedSolutionsShowcase";

export default function SolutionsPage() {
  return (
    <main className="w-full">
      {/* Heading section */}
      <div className="container mx-auto px-4 pt-12 pb-2">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-custom mb-5 mt-10">
            Our Solutions & Services
          </h1>
          <p className="text-lg text-sub max-w-4xl mx-auto leading-relaxed">
            Comprehensive healthcare management powered by Maya AI Health Agent and qualified medical professionals. From real-time vital monitoring to 24/7 support, we simplify healthcare for your family.
          </p>
        </div>

        {/* 👇 DEMO SECTION STARTS HERE */}
        <div className="mt-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-secondary-custom mb-3">
          Watch Our Platform Overview!
          </h2>
          <p className="text-center text-sub mb-5 max-w-2xl mx-auto">
            See how our AI-powered platform transforms healthcare for your loved ones.
          </p>
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/KqudCo3Yljw?si=EGy9W8d95_8dlJ1B"
              title="Watch Our Platform Overview!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Animated Platform Features Section */}
      <div className="mt-0">
        <AnimatedSolutionsShowcase />
      </div>
    </main>
  );
}
