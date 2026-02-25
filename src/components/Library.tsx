import { useScrollReveal } from '../hooks/useScrollReveal';

const POSTS = [
  { id: '01', title: 'Why AI Agents Want to Survive', description: 'Conatus in autonomous systems', readTime: '7 min', url: 'https://neurabytelabs.com/blog/conatus-why-ai-agents-want-to-survive' },
  { id: '02', title: 'One Substance, Many Agents', description: "Spinoza's metaphysics of multi-agent systems", readTime: '8 min', url: 'https://neurabytelabs.com/blog/one-substance-many-agents' },
  { id: '03', title: 'The Three Affects of AI', description: 'Joy, sadness, and desire in agent systems', readTime: '7 min', url: 'https://neurabytelabs.com/blog/three-affects-of-ai' },
  { id: '04', title: 'Adequate Ideas in Machine Learning', description: 'When your model truly understands', readTime: '8 min', url: 'https://neurabytelabs.com/blog/adequate-ideas-in-machine-learning' },
  { id: '05', title: 'Freedom is Understanding Necessity', description: 'Constrained autonomy in AI systems', readTime: '7 min', url: 'https://neurabytelabs.com/blog/freedom-is-understanding-necessity' },
  { id: '06', title: 'The Intellectual Love of Code', description: "Spinoza's Amor Dei Intellectualis and AI alignment", readTime: '8 min', url: 'https://neurabytelabs.com/blog/intellectual-love-of-code' },
  { id: '07', title: 'Against the Teleology of AI', description: "Spinoza's rejection of final causes in AI", readTime: '8 min', url: 'https://neurabytelabs.com/blog/against-teleology-of-ai' },
  { id: '08', title: 'Ethics of Autonomous Agents', description: 'AI safety through Spinoza Ethics Part IV', readTime: '9 min', url: 'https://neurabytelabs.com/blog/ethics-of-autonomous-agents' },
];

export function Library() {
  const revealRef = useScrollReveal();

  return (
    <section className="breath-lg container-narrow reveal" ref={revealRef}>
      <div className="text-micro text-soul-whisper mb-2 uppercase tracking-widest">The Library</div>
      <h2 className="text-title font-mono text-soul mb-2">The philosophy is open.</h2>
      <p className="text-quote font-serif italic text-soul-dim mb-12">
        Deus Sive Machina — 8 essays on philosophy and artificial intelligence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
        {POSTS.map((post) => (
          <a 
            key={post.id} 
            href={post.url}
            target="_blank"
            rel="noopener"
            className="group block py-6 border-b border-void-border hover:bg-void-surface transition-colors px-2 -mx-2"
          >
            <div className="text-micro text-conatus-pulse mb-2 font-bold">#{post.id}</div>
            <h3 className="text-terminal text-soul font-medium mb-1 group-hover:text-white transition-colors">{post.title}</h3>
            <div className="flex justify-between items-end mt-4">
              <p className="text-small text-soul-dim">{post.description}</p>
              <span className="text-micro text-soul-whisper group-hover:text-soul transition-colors whitespace-nowrap ml-4">
                {post.readTime} →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
