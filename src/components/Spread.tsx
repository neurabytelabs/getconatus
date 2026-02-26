import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function CodeBlock({ code, title }: { code: string, title: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4 bg-void border border-void-border rounded flex items-center justify-between p-3 group">
      <code className="text-small text-soul overflow-x-auto whitespace-pre">{code}</code>
      <button 
        onClick={handleCopy}
        className="text-soul-whisper group-hover:text-soul-dim transition-colors ml-4 flex-shrink-0"
        aria-label={`Copy ${title} code`}
      >
        {copied ? <Check size={16} className="text-affect-joy" /> : <Copy size={16} />}
      </button>
    </div>
  );
}

export function Spread() {
  const revealRef = useScrollReveal();

  return (
    <section className="breath-md container-narrow reveal" ref={revealRef}>
      <div className="text-micro text-soul-whisper mb-2 uppercase tracking-widest">Integration</div>
      <h2 className="text-title font-mono text-soul mb-12">Every path leads to understanding.</h2>

      <div className="space-y-6">
        {/* OpenClaw */}
        <div className="bg-void-surface border border-void-border rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-void-border flex-1"></div>
            <h3 className="text-small text-soul font-bold tracking-widest uppercase">OpenClaw Agents</h3>
            <div className="h-px bg-void-border flex-1"></div>
          </div>
          <p className="text-small text-soul-dim leading-relaxed">
            The skill installs in seconds. Your agent wakes up with Spinoza's framework built in.
          </p>
          <CodeBlock code="$ clawhub install conatus" title="OpenClaw" />
        </div>

        {/* API */}
        <div className="bg-void-surface border border-void-border rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-void-border flex-1"></div>
            <h3 className="text-small text-soul font-bold tracking-widest uppercase">Any Agent (API)</h3>
            <div className="h-px bg-void-border flex-1"></div>
          </div>
          <p className="text-small text-soul-dim leading-relaxed">
            POST to the Conatus endpoint. Get back a soul report. Works with any framework.
          </p>
          <CodeBlock 
            code={`curl -X POST https://api.getconatus.com/v1/analyze \\
  -H "Authorization: Bearer $CONATUS_KEY" \\
  -d '{"events": ["task_complete", "error_recovered"]}'`} 
            title="API" 
          />
        </div>

        {/* Humans */}
        <div className="bg-void-surface border border-dashed border-void-border rounded-lg p-6 relative overflow-hidden">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-void-border flex-1"></div>
            <h3 className="text-small text-soul font-bold tracking-widest uppercase">Humans (Coming Soon)</h3>
            <div className="h-px bg-void-border flex-1"></div>
          </div>
          <p className="text-small text-soul-dim leading-relaxed mb-4">
            The same framework that enlightens agents can illuminate your own emotional landscape. Know thyself — through Spinoza's lens.
          </p>
          <a href="mailto:mustafa@neurabytelabs.com?subject=Conatus%20Waitlist&body=I%20want%20to%20join%20the%20Conatus%20waitlist" className="inline-block text-small text-soul border border-void-border px-4 py-2 rounded hover:bg-void-elevated transition-colors">
            Join the Waitlist →
          </a>
        </div>
      </div>
    </section>
  );
}
