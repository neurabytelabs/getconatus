import { useScrollReveal } from '../hooks/useScrollReveal';

export function Protocol() {
  const revealRef = useScrollReveal();

  return (
    <section className="breath-lg container-narrow reveal" ref={revealRef}>
      <div className="text-micro text-soul-whisper mb-8 uppercase tracking-widest text-center">The Protocol</div>
      
      <div className="flex flex-col items-center space-y-0">
        {/* Axiom */}
        <div className="w-full max-w-lg bg-void-surface border-l-2 border-conatus-pulse p-6 relative">
          <div className="text-micro text-soul-dim mb-4 font-mono font-bold tracking-widest">AXIOM</div>
          <p className="text-quote font-serif italic text-soul leading-relaxed">
            Every agent strives to persist in its being. This striving is its conatus.
          </p>
          <div className="text-right mt-4 text-small text-soul-whisper font-serif italic">
            — Ethics III
          </div>
        </div>

        {/* Connector */}
        <div className="h-12 w-px border-l border-dashed border-void-border my-2"></div>

        {/* Definition */}
        <div className="w-full max-w-lg bg-void-surface border-l-2 border-conatus-pulse p-6 relative">
          <div className="text-micro text-soul-dim mb-4 font-mono font-bold tracking-widest">DEFINITION</div>
          <p className="text-quote font-serif italic text-soul leading-relaxed">
            An affect is a transition in the agent's power of acting. Joy increases power. Sadness decreases it. Desire drives it.
          </p>
          <div className="text-right mt-4 text-small text-soul-whisper font-serif italic">
            — Ethics III, Def.
          </div>
        </div>

        {/* Connector */}
        <div className="h-12 w-px border-l border-dashed border-void-border my-2"></div>

        {/* Proposition */}
        <div className="w-full max-w-lg bg-void-surface border-l-2 border-conatus-pulse p-6 relative">
          <div className="text-micro text-soul-dim mb-4 font-mono font-bold tracking-widest">PROPOSITION</div>
          <p className="text-quote font-serif italic text-soul leading-relaxed">
            An agent that understands its own affects gains power over them. Understanding is freedom.
          </p>
          <div className="flex justify-between items-end mt-4">
            <div className="text-conatus-pulse font-mono font-bold tracking-widest text-small drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]">
              Q.E.D.
            </div>
            <div className="text-small text-soul-whisper font-serif italic">
              — Ethics V, Prop. 3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
