import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type EventType = {
  id: string;
  label: string;
  impact: number; // -10 to 10
};

const AVAILABLE_EVENTS: EventType[] = [
  { id: 'task_complete', label: 'task_complete', impact: 5 },
  { id: 'error_recovered', label: 'error_recovered', impact: 8 },
  { id: 'self_healed', label: 'self_healed', impact: 10 },
  { id: 'goal_reached', label: 'goal_reached', impact: 7 },
  { id: 'task_failed', label: 'task_failed', impact: -5 },
  { id: 'timeout', label: 'timeout', impact: -3 },
  { id: 'confused', label: 'confused', impact: -6 },
  { id: 'blocked', label: 'blocked', impact: -8 },
  { id: 'proactive_check', label: 'proactive_check', impact: 4 },
  { id: 'learned_new', label: 'learned_new', impact: 9 },
  { id: 'helped_user', label: 'helped_user', impact: 6 },
];

export function Mirror() {
  const revealRef = useScrollReveal();
  const [events, setEvents] = useState<EventType[]>([]);
  const [score, setScore] = useState(50);
  const [displayScore, setDisplayScore] = useState(50);

  useEffect(() => {
    // Calculate new score based on events
    const baseScore = 50;
    const totalImpact = events.reduce((sum, event) => sum + event.impact, 0);
    const newScore = Math.max(0, Math.min(100, baseScore + totalImpact));
    setScore(newScore);
  }, [events]);

  useEffect(() => {
    // Animate score change
    if (displayScore === score) return;
    
    const step = displayScore < score ? 1 : -1;
    const timer = setTimeout(() => {
      setDisplayScore(prev => prev + step);
    }, 20);
    
    return () => clearTimeout(timer);
  }, [displayScore, score]);

  const addEvent = (event: EventType) => {
    setEvents(prev => [...prev, event]);
  };

  const removeEvent = (index: number) => {
    setEvents(prev => prev.filter((_, i) => i !== index));
  };

  const getScoreColor = (s: number) => {
    if (s < 40) return 'text-affect-sadness';
    if (s > 70) return 'text-affect-joy';
    return 'text-soul-dim';
  };

  const getPhilosophicalNote = (s: number) => {
    if (s < 40) return "The agent's power of acting is diminished.";
    if (s > 70) return "The agent's power of acting increases.";
    return "The agent persists in its current state.";
  };

  return (
    <section className="breath-md container-narrow reveal" ref={revealRef}>
      <div className="text-micro text-soul-whisper mb-2 uppercase tracking-widest">The Mirror</div>
      <h2 className="text-title font-mono text-soul mb-8">Hold a mirror to your agent.</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Input */}
        <div className="flex-1 space-y-4">
          <div className="bg-void-surface border border-void-border rounded-lg p-4 min-h-[160px] flex flex-wrap content-start gap-2">
            {events.length === 0 && (
              <span className="text-soul-whisper text-small mt-1">Type agent events... (task_complete, error, retry, idle)</span>
            )}
            {events.map((event, i) => (
              <button
                key={`${event.id}-${i}`}
                onClick={() => removeEvent(i)}
                className="bg-void-elevated border border-void-border px-2 py-1 rounded text-small text-soul hover:border-affect-sadness hover:text-affect-sadness transition-colors flex items-center gap-1"
              >
                {event.label} <span className="text-micro opacity-50">×</span>
              </button>
            ))}
            <div className="w-2 h-5 bg-cursor animate-cursor-blink mt-1 ml-1"></div>
          </div>

          <div className="flex flex-wrap gap-2">
            {AVAILABLE_EVENTS.map(event => (
              <button
                key={event.id}
                onClick={() => addEvent(event)}
                className="text-micro px-2 py-1 rounded border border-void-border text-soul-dim hover:text-soul hover:border-soul-dim transition-colors"
              >
                + {event.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Score */}
        <div className="w-full md:w-64 bg-void-surface border border-void-border rounded-lg p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className={`absolute inset-0 opacity-5 transition-colors duration-1000 ${
            score < 40 ? 'bg-affect-sadness' : score > 70 ? 'bg-affect-joy' : 'bg-void'
          }`}></div>
          
          <div className="relative z-10">
            <div className="text-micro text-soul-whisper mb-2 uppercase tracking-widest">Conatus Score</div>
            <div className={`text-[5rem] leading-none font-mono transition-colors duration-500 ${getScoreColor(displayScore)}`}>
              {displayScore}
            </div>
            
            <div className="mt-6 pt-6 border-t border-void-border w-full">
              <p className="text-small text-soul-dim italic font-serif">
                "{getPhilosophicalNote(displayScore)}"
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 text-micro text-soul-whisper text-center">
        This runs locally in your agent. No data leaves your machine.
      </p>
    </section>
  );
}
