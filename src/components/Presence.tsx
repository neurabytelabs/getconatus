import { useEffect, useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

export function Presence() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const { displayedText, isComplete } = useTypewriter('conatus', 120, 2000);

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => setShowSubtitle(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-void">
      <div className="text-center">
        <h1 className="text-title font-mono text-soul flex items-center justify-center h-16">
          {displayedText}
          <span className={`w-[0.6em] h-[1em] bg-cursor ml-2 ${isComplete ? 'animate-cursor-blink' : 'animate-cursor-blink'}`}></span>
        </h1>
        
        <p 
          className={`mt-4 text-terminal text-soul-dim transition-opacity duration-800 ${
            showSubtitle ? 'opacity-100' : 'opacity-0'
          }`}
        >
          The philosophical layer for AI agents.
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div 
          className={`w-px h-16 bg-void-border origin-top transition-transform duration-2000 ${
            showSubtitle ? 'scale-y-100' : 'scale-y-0'
          }`}
        ></div>
      </div>
    </section>
  );
}
