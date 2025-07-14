
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  staticText: string;
  animatedWords: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypewriterText = ({ 
  staticText, 
  animatedWords, 
  typingSpeed = 150, 
  deletingSpeed = 100, 
  pauseDuration = 2000,
  className = ''
}: TypewriterTextProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasInitiallyTyped, setHasInitiallyTyped] = useState(false);
  const [staticTextCurrent, setStaticTextCurrent] = useState('');

  useEffect(() => {
    // First, type the static text
    if (!hasInitiallyTyped && staticTextCurrent.length < staticText.length) {
      const timeout = setTimeout(() => {
        setStaticTextCurrent(staticText.substring(0, staticTextCurrent.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    // Then start the animated word loop
    if (!hasInitiallyTyped && staticTextCurrent.length === staticText.length) {
      setHasInitiallyTyped(true);
      setCurrentText('');
      return;
    }

    if (hasInitiallyTyped) {
      const currentWord = animatedWords[currentWordIndex];
      if (!isDeleting && currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else if (!isDeleting && currentText.length === currentWord.length) {
        const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        return () => clearTimeout(timeout);
      } else if (isDeleting && currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else if (isDeleting && currentText.length === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
      }
    }
  }, [currentText, isDeleting, currentWordIndex, animatedWords, typingSpeed, deletingSpeed, pauseDuration, staticText, staticTextCurrent, hasInitiallyTyped]);

  return (
    <span className={className}>
      {staticTextCurrent}
      {hasInitiallyTyped && (
        <>
          {currentText}
          <span className="animate-pulse">|</span>
        </>
      )}
    </span>
  );
};

export default TypewriterText;
