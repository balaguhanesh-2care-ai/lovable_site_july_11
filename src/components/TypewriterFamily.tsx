import { useState, useEffect } from 'react';

const TypewriterFamily = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [familyIndex, setFamilyIndex] = useState(0);

  const familyOptions = ["Your Family", "Our Family"];
  const baseText = "for ";

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < baseText.length) {
          setDisplayText(baseText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Start typing family text
          const currentFamily = familyOptions[familyIndex];
          if (displayText.length < baseText.length + currentFamily.length) {
            setDisplayText(baseText + currentFamily.slice(0, displayText.length - baseText.length + 1));
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        }
      } else {
        // Deleting phase
        if (displayText.length > baseText.length) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Switch to next family option
          setIsDeleting(false);
          setFamilyIndex((familyIndex + 1) % familyOptions.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, familyIndex, baseText, familyOptions]);

  return (
    <div className="text-center">
      <h1
        className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 leading-tight drop-shadow-lg text-center text-white"
      >
        <span className="block text-white">AI-Powered Healthcare</span>
        <span className="block text-white">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
      </h1>
    </div>
  );
};

export default TypewriterFamily; 