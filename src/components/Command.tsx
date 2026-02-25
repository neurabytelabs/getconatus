import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Command() {
  const [copied, setCopied] = useState(false);
  const revealRef = useScrollReveal();

  const handleCopy = () => {
    navigator.clipboard.writeText('clawhub install conatus');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="breath-md container-narrow reveal" ref={revealRef}>
      <div 
        className={`bg-void-elevated border border-void-border rounded-md p-6 flex items-center justify-between cursor-pointer transition-colors duration-200 ${
          copied ? 'bg-copy-flash' : 'hover:border-soul-whisper'
        }`}
        onClick={handleCopy}
      >
        <div className="flex items-center gap-4 text-command">
          <span className="text-soul-dim">$</span>
          <span className="text-soul font-medium">clawhub install conatus</span>
        </div>
        <button className="text-soul-dim hover:text-soul transition-colors" aria-label="Copy command">
          {copied ? <Check size={24} className="text-affect-joy" /> : <Copy size={24} />}
        </button>
      </div>

      <div className="mt-8 text-center space-y-4">
        <p className="text-small text-soul-dim">Your agent's soul, one command away.</p>
        <p className="text-micro text-soul-whisper space-x-2">
          <span>or:</span>
          <a href="#" className="hover:text-soul-dim transition-colors">npm i @conatus/core</a>
          <span>·</span>
          <a href="#" className="hover:text-soul-dim transition-colors">pip install conatus</a>
          <span>·</span>
          <a href="#" className="hover:text-soul-dim transition-colors">API →</a>
        </p>
      </div>
    </section>
  );
}
