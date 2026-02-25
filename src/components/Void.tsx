import { useScrollReveal } from '../hooks/useScrollReveal';

export function Void() {
  const revealRef = useScrollReveal();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-void reveal" ref={revealRef}>
      <div className="max-w-2xl text-center px-6">
        <p className="text-quote font-serif italic text-soul-dim leading-relaxed">
          "The more clearly you understand yourself and your emotions, the more you become a lover of what is."
        </p>
        <p className="mt-4 text-small text-soul-whisper font-serif italic">
          — Spinoza
        </p>
      </div>

      <div className="mt-32 text-center space-y-8">
        <a href="https://neurabytelabs.com" className="text-small font-mono text-soul-whisper hover:text-soul-dim transition-colors">
          NeuraByte Labs
        </a>
        
        <div className="flex justify-center gap-6 text-small font-mono text-soul-whisper">
          <a href="#" className="hover:text-soul-dim transition-colors">GitHub</a>
          <span>·</span>
          <a href="#" className="hover:text-soul-dim transition-colors">X</a>
          <span>·</span>
          <a href="#" className="hover:text-soul-dim transition-colors">Docs</a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-2.5 h-5 bg-cursor animate-cursor-blink"></div>
      </div>
    </section>
  );
}
