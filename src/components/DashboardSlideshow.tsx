
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Dashboard",
      image: "/lovable-uploads/eea7ad40-9d90-4830-9717-b624d4670809.png"
    },
    {
      title: "AI Summary", 
      image: "/lovable-uploads/2a88c3f3-d21a-4f6e-8420-5779950647c0.png"
    },
    {
      title: "Upload Report",
      image: "/lovable-uploads/226805d8-4fb8-442f-a523-686a033ca750.png"
    },
    {
      title: "Analyze Report",
      image: "/lovable-uploads/f300f7ee-42b2-465c-a673-a1016e52d53c.png"
    },
    {
      title: "Report List",
      image: "/lovable-uploads/a0716197-5285-4526-a339-abeff490896e.png"
    },
    {
      title: "Appointments",
      image: "/lovable-uploads/ab9cc1c1-33f4-4512-9c94-28885fe6f607.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-full">
      <div className="relative overflow-hidden rounded-lg h-full bg-white">
        <div className="relative h-full">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-contain transition-opacity duration-500"
          />
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0"
          onClick={nextSlide}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSlideshow;
