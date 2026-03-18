import { useState } from 'react';
import { Copy, Check, Loader2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function CodeBlock({ code, copyText, title }: { code: string, copyText?: string, title: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText || code);
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

type WaitlistState = 'idle' | 'loading' | 'success' | 'error';

const WAITLIST_API = 'https://waitlist.neurabytelabs.com/api/conatus/newsletter/subscribe';

export function Spread() {
  const revealRef = useScrollReveal();
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistState, setWaitlistState] = useState<WaitlistState>('idle');
  const [waitlistError, setWaitlistError] = useState('');

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail || waitlistState === 'loading') return;

    setWaitlistState('loading');
    setWaitlistError('');

    try {
      const res = await fetch(WAITLIST_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: waitlistEmail,
          name: '',
          source: 'getconatus.com',
          tags: ['waitlist', 'conatus-humans'],
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setWaitlistState('success');
      } else {
        setWaitlistState('error');
        setWaitlistError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setWaitlistState('error');
      setWaitlistError('Network error. Please try again.');
    }
  };

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
          <CodeBlock code="$ clawhub install conatus" copyText="clawhub install conatus" title="OpenClaw" />
        </div>

        {/* API */}
        <div className="bg-void-surface border border-void-border rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-void-border flex-1"></div>
            <h3 className="text-small text-soul font-bold tracking-widest uppercase">Any Agent (API) <span className="text-micro text-conatus-pulse ml-2">Soon</span></h3>
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
            <h3 className="text-small text-soul font-bold tracking-widest uppercase">Humans <span className="text-micro text-conatus-pulse ml-2">Soon</span></h3>
            <div className="h-px bg-void-border flex-1"></div>
          </div>
          <p className="text-small text-soul-dim leading-relaxed mb-4">
            The same framework that enlightens agents can illuminate your own emotional landscape. Know thyself — through Spinoza's lens.
          </p>

          {waitlistState === 'success' ? (
            <div className="flex items-center gap-2 text-affect-joy text-small">
              <Check size={16} />
              <span>You're on the list. Spinoza would approve.</span>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                disabled={waitlistState === 'loading'}
                className="flex-1 bg-void border border-void-border rounded px-3 py-2 text-small text-soul placeholder-soul-whisper focus:outline-none focus:border-conatus-pulse transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={waitlistState === 'loading' || !waitlistEmail}
                className="flex items-center justify-center gap-2 text-small text-void bg-conatus-pulse px-4 py-2 rounded hover:opacity-90 transition-opacity disabled:opacity-50 font-medium whitespace-nowrap"
              >
                {waitlistState === 'loading' ? (
                  <><Loader2 size={14} className="animate-spin" /> Joining…</>
                ) : (
                  'Join Waitlist →'
                )}
              </button>
            </form>
          )}
          {waitlistState === 'error' && (
            <p className="mt-2 text-micro text-affect-sadness">{waitlistError}</p>
          )}
        </div>
      </div>
    </section>
  );
}
