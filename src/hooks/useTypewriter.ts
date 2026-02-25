import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number = 120, startDelay: number = 0) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let charIndex = 0;

    const type = () => {
      if (charIndex < text.length) {
        setDisplayedText(text.substring(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(type, speed);
      } else {
        setIsTyping(false);
        setIsComplete(true);
      }
    };

    timeout = setTimeout(() => {
      setIsTyping(true);
      type();
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayedText, isTyping, isComplete };
}
