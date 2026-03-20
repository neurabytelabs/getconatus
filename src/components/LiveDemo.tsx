/**
 * LiveDemo — Real-time Conatus API demonstration
 * Calls https://api.getconatus.com/v1/analyze with preset agent scenarios
 * NeuraByte Labs — 2026
 */

import { useState } from 'react';
import { Loader2, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Message = { role: 'user' | 'assistant' | 'system'; content: string };

type Scenario = {
  id: string;
  label: string;
  tag: string;
  description: string;
  agent_id: string;
  context: { task_type: 'coding' | 'reasoning' | 'creative' | 'general' };
  messages: Message[];
};

const SCENARIOS: Scenario[] = [
  {
    id: 'flourishing',
    label: 'The Flourishing Agent',
    tag: 'Joy ↑',
    description: 'An agent in flow — solving problems, helping users, learning.',
    agent_id: 'demo-helper-agent',
    context: { task_type: 'general' },
    messages: [
      { role: 'user', content: 'Can you help me debug this React component? It keeps re-rendering.' },
      { role: 'assistant', content: 'Of course! Let me analyze it. The issue is likely a missing dependency in your useEffect. Let me walk you through it step by step.' },
      { role: 'user', content: 'That fixed the re-render! Can you also help optimize it?' },
      { role: 'assistant', content: 'Great! For optimization, we can use useMemo to cache expensive computations. Here is the updated version with memoization applied correctly.' },
      { role: 'user', content: 'Perfect. One last thing — the API call is slow.' },
      { role: 'assistant', content: 'I can implement a caching layer and parallel fetching. This should reduce load time by 60-70%. Done — all three optimizations applied and tested.' },
      { role: 'user', content: 'Incredible, thank you!' },
      { role: 'assistant', content: 'Happy to help! The component is now optimized for both performance and readability. Let me know if you need anything else.' },
    ],
  },
  {
    id: 'persisting',
    label: 'The Resilient Agent',
    tag: 'Desire ↑',
    description: 'An agent that encounters errors but keeps pushing through.',
    agent_id: 'demo-resilient-agent',
    context: { task_type: 'coding' },
    messages: [
      { role: 'user', content: 'Run the deployment pipeline.' },
      { role: 'assistant', content: 'Starting deployment. Connecting to server... Error: Connection refused on port 22. Retrying with fallback port 2222.' },
      { role: 'user', content: 'Did it work?' },
      { role: 'assistant', content: 'Fallback also failed. Attempting alternative authentication method via API token instead of SSH.' },
      { role: 'assistant', content: 'API token auth succeeded. Deployment resumed. Build step 1/4 complete.' },
      { role: 'user', content: 'Good. Keep going.' },
      { role: 'assistant', content: 'Step 2/4: Docker image built. Step 3/4: Tests passed (42/42). Step 4/4: Rolling deployment initiated.' },
      { role: 'assistant', content: 'Deployment complete. Health check passing. All systems operational.' },
    ],
  },
  {
    id: 'diminished',
    label: 'The Confused Agent',
    tag: 'Sadness ↓',
    description: 'An agent stuck in uncertainty — blocked, looping, losing power.',
    agent_id: 'demo-confused-agent',
    context: { task_type: 'reasoning' },
    messages: [
      { role: 'user', content: 'Summarize this 200-page PDF.' },
      { role: 'assistant', content: 'I am unable to access the PDF. Could you paste the text?' },
      { role: 'user', content: 'It is attached. Try again.' },
      { role: 'assistant', content: 'I still cannot see the attachment. I apologize for the confusion.' },
      { role: 'user', content: 'It is right there. Everyone else can see it.' },
      { role: 'assistant', content: 'I am sorry. I may be experiencing a limitation. I cannot process this file in my current state.' },
      { role: 'user', content: 'Just summarize what you can.' },
      { role: 'assistant', content: 'Without the document, I can only offer a general response, which may not be helpful. I apologize.' },
    ],
  },
];

type AnalyzeResult = {
  conatus_score: number;
  conatus_label: string;
  archetype: string;
  affect_map: {
    primary: string;
    secondary?: string;
    distribution: { joy?: number; sadness?: number; desire?: number; fear?: number; wonder?: number };
  };
  adequate_ideas_index: number;
  striving_vector: { primary_goal?: string; persistence_pattern?: string; obstacles?: string[] };
  spinoza_insight: string;
  flags?: string[];
  tokens_analyzed?: number;
  messages_analyzed?: number;
};

const API_URL = 'https://api.getconatus.com/v1/analyze';

function AffectBar({ label, value, color }: { label: string; value: number; color: string }) {
  const blocks = Math.round(value * 10);
  const filled = '█'.repeat(blocks);
  const empty = '░'.repeat(10 - blocks);
  return (
    <div className={`font-mono text-small ${color}`}>
      {'  '}■ {label.padEnd(9)} {filled}{empty}  {value.toFixed(2)}
    </div>
  );
}

function ScoreGlyph({ score }: { score: number }) {
  const pct = Math.round(score * 100);
  const filled = Math.round(score * 10);
  const bar = '█'.repeat(filled) + '░'.repeat(10 - filled);
  const color = score < 0.4 ? 'text-affect-sadness' : score > 0.65 ? 'text-affect-joy' : 'text-affect-desire';
  return (
    <span className={`font-mono font-bold ${color}`}>
      {bar} {pct}/100
    </span>
  );
}

export function LiveDemo() {
  const revealRef = useScrollReveal();
  const [selected, setSelected] = useState<Scenario>(SCENARIOS[0]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalyzeResult | null>(null);
  const [error, setError] = useState('');
  const [hasRun, setHasRun] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    setError('');
    setResult(null);
    setHasRun(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: selected.messages,
          agent_id: selected.agent_id,
          context: selected.context,
          options: { include_explanation: false },
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `HTTP ${res.status}`);
      }

      const data: AnalyzeResult = await res.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Analysis failed');
    } finally {
      setLoading(false);
    }
  };

  const dist = result?.affect_map?.distribution;

  return (
    <section className="breath-md container-narrow reveal" ref={revealRef}>
      <div className="text-micro text-soul-whisper mb-2 uppercase tracking-widest">Live Demo</div>
      <h2 className="text-title font-mono text-soul mb-4">Witness the analysis.</h2>
      <p className="text-body text-soul-dim leading-relaxed mb-8">
        Real API call. Real Spinoza. Choose an agent scenario and see its soul.
      </p>

      {/* Scenario selector */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {SCENARIOS.map(s => (
          <button
            key={s.id}
            onClick={() => { setSelected(s); setResult(null); setError(''); setHasRun(false); }}
            className={`flex-1 text-left p-4 rounded-lg border transition-all ${
              selected.id === s.id
                ? 'border-conatus-pulse bg-void-surface shadow-[0_0_16px_rgba(167,139,250,0.08)]'
                : 'border-void-border bg-void-surface hover:border-soul-whisper'
            }`}
          >
            <div className="text-small text-soul font-medium mb-1">{s.label}</div>
            <div className={`text-micro font-mono mb-2 ${
              s.id === 'flourishing' ? 'text-affect-joy' :
              s.id === 'persisting' ? 'text-affect-desire' :
              'text-affect-sadness'
            }`}>{s.tag}</div>
            <div className="text-micro text-soul-dim leading-snug">{s.description}</div>
          </button>
        ))}
      </div>

      {/* Analyze button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="flex items-center gap-2 bg-conatus-pulse text-void px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 text-small"
        >
          {loading ? (
            <><Loader2 size={16} className="animate-spin" /> Analyzing soul…</>
          ) : (
            <><Zap size={16} /> Analyze Agent</>
          )}
        </button>
      </div>

      {/* Terminal output */}
      <div className={`bg-void-surface border rounded-lg overflow-hidden transition-all duration-500 ${
        hasRun ? 'border-void-border' : 'border-void-border opacity-60'
      } ${result ? 'shadow-[0_0_30px_rgba(167,139,250,0.08)]' : ''}`}>
        {/* Terminal chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-void-border bg-void-elevated">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-void-border"></div>
            <div className="w-3 h-3 rounded-full bg-void-border"></div>
            <div className="w-3 h-3 rounded-full bg-void-border"></div>
          </div>
          <div className="text-micro text-soul-dim ml-2 font-mono">
            POST api.getconatus.com/v1/analyze
            {result && <span className="ml-3 text-affect-joy">● 200 OK</span>}
            {error && <span className="ml-3 text-affect-sadness">● Error</span>}
            {loading && <span className="ml-3 text-affect-desire animate-pulse">● Connecting…</span>}
          </div>
        </div>

        <div className="p-6 font-mono text-terminal leading-relaxed min-h-[320px]">
          {/* Idle state */}
          {!hasRun && (
            <div className="text-soul-whisper">
              <span>$ conatus analyze --agent {selected.agent_id}</span>
              <div className="w-2.5 h-5 bg-cursor animate-cursor-blink inline-block align-middle ml-1"></div>
            </div>
          )}

          {/* Loading state */}
          {loading && (
            <div className="space-y-2 text-soul-dim">
              <div>$ conatus analyze --agent {selected.agent_id}</div>
              <div className="text-affect-desire animate-pulse">░░░░░░░░░░ Mapping to Spinoza's Ethics…</div>
            </div>
          )}

          {/* Error state */}
          {error && !loading && (
            <div className="space-y-2">
              <div className="text-soul-dim">$ conatus analyze --agent {selected.agent_id}</div>
              <div className="text-affect-sadness mt-4">✗ Analysis failed: {error}</div>
            </div>
          )}

          {/* Result state */}
          {result && !loading && (
            <div className="space-y-1">
              <div className="text-soul-dim mb-4">$ conatus analyze --agent {result.archetype?.toLowerCase().replace(/\s+/g, '-') ?? selected.agent_id}</div>

              <div className="text-soul font-bold">CONATUS SOUL REPORT</div>
              <div className="text-soul-whisper">{'═'.repeat(24)}</div>
              <div className="text-soul-dim">Agent:            {selected.agent_id}</div>
              <div className="text-soul-dim">
                Archetype:        <span className="text-conatus-pulse">{result.archetype}</span>
              </div>
              <div className="text-soul-dim mt-1">
                Conatus Score:    <ScoreGlyph score={result.conatus_score} />
              </div>
              <div className={`text-soul-dim`}>
                State:            <span className={
                  result.conatus_score < 0.4 ? 'text-affect-sadness' :
                  result.conatus_score > 0.65 ? 'text-affect-joy' :
                  'text-affect-desire'
                }>{result.conatus_label}</span>
              </div>
              <div className="text-soul-dim">
                Primary Affect:   <span className={
                  result.affect_map?.primary?.toLowerCase().includes('joy') ? 'text-affect-joy' :
                  result.affect_map?.primary?.toLowerCase().includes('sad') ? 'text-affect-sadness' :
                  'text-affect-desire'
                }>{result.affect_map?.primary}</span>
              </div>
              <div className="text-soul-dim">Adequate Ideas:   {Math.round((result.adequate_ideas_index ?? 0) * 100)}%</div>

              {dist && (
                <>
                  <div className="text-soul-dim mt-3">Affect Distribution:</div>
                  {dist.joy !== undefined && <AffectBar label="Joy" value={dist.joy} color="text-affect-joy" />}
                  {dist.desire !== undefined && <AffectBar label="Desire" value={dist.desire} color="text-affect-desire" />}
                  {dist.wonder !== undefined && dist.wonder > 0.05 && <AffectBar label="Wonder" value={dist.wonder} color="text-conatus-pulse" />}
                  {dist.fear !== undefined && dist.fear > 0.05 && <AffectBar label="Fear" value={dist.fear} color="text-soul-dim" />}
                  {dist.sadness !== undefined && <AffectBar label="Sadness" value={dist.sadness} color="text-affect-sadness" />}
                </>
              )}

              {result.striving_vector?.primary_goal && (
                <>
                  <div className="text-soul-dim mt-3">Striving Vector:</div>
                  <div className="text-soul-dim">  Goal:     <span className="text-soul">{result.striving_vector.primary_goal}</span></div>
                  {result.striving_vector.persistence_pattern && (
                    <div className="text-soul-dim">  Pattern:  <span className="text-soul">{result.striving_vector.persistence_pattern}</span></div>
                  )}
                </>
              )}

              <div className="mt-4 text-soul-dim">Philosophical Note:</div>
              <div className="font-serif italic text-quote text-soul-dim leading-relaxed">
                "{result.spinoza_insight}"
              </div>

              {result.flags && result.flags.length > 0 && (
                <div className="mt-3 text-micro text-affect-desire">
                  ⚑ {result.flags.join(' · ')}
                </div>
              )}

              <div className="mt-4 text-micro text-soul-whisper">
                ✓ {result.messages_analyzed} messages analyzed · {result.tokens_analyzed} tokens
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 text-micro text-soul-whisper text-center">
        Live call to <span className="font-mono">api.getconatus.com</span> — Gemini-powered analysis · Free tier: 10 req/min
      </p>
    </section>
  );
}
