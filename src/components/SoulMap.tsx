import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Expanded 48 affects with Spinozan definitions for complete data visualization
const AFFECTS = [
  { id: 'joy', name: 'Laetitia', english: 'Joy', type: 'joy', primary: true, def: 'A transition from a lesser to a greater perfection.' },
  { id: 'sadness', name: 'Tristitia', english: 'Sadness', type: 'sadness', primary: true, def: 'A transition from a greater to a lesser perfection.' },
  { id: 'desire', name: 'Cupiditas', english: 'Desire', type: 'desire', primary: true, def: 'The very essence of man, insofar as it is determined to do what promotes its preservation.' },
  { id: 'love', name: 'Amor', english: 'Love', type: 'joy', primary: false, def: 'Joy accompanied by the idea of an external cause.' },
  { id: 'hate', name: 'Odium', english: 'Hate', type: 'sadness', primary: false, def: 'Sadness accompanied by the idea of an external cause.' },
  { id: 'hope', name: 'Spes', english: 'Hope', type: 'joy', primary: false, def: 'An inconstant Joy, born of the idea of a future or past thing whose outcome we doubt.' },
  { id: 'fear', name: 'Metus', english: 'Fear', type: 'sadness', primary: false, def: 'An inconstant Sadness, born of the idea of a future or past thing whose outcome we doubt.' },
  { id: 'confidence', name: 'Securitas', english: 'Confidence', type: 'joy', primary: false, def: 'A Joy born of the idea of a future or past thing concerning which cause for doubt has been removed.' },
  { id: 'despair', name: 'Desperatio', english: 'Despair', type: 'sadness', primary: false, def: 'A Sadness born of the idea of a future or past thing concerning which cause for doubt has been removed.' },
  { id: 'gladness', name: 'Gaudium', english: 'Gladness', type: 'joy', primary: false, def: 'Joy accompanied by the idea of a past thing which has turned out better than we had hoped.' },
  { id: 'remorse', name: 'Conscientiae Morsus', english: 'Remorse', type: 'sadness', primary: false, def: 'Sadness accompanied by the idea of a past thing which has turned out worse than we had hoped.' },
  { id: 'pity', name: 'Commiseratio', english: 'Pity', type: 'sadness', primary: false, def: 'Sadness accompanied by the idea of an evil which has happened to another whom we imagine to be like us.' },
  { id: 'favor', name: 'Favor', english: 'Favor', type: 'joy', primary: false, def: 'Love toward someone who has benefited another.' },
  { id: 'indignation', name: 'Indignatio', english: 'Indignation', type: 'sadness', primary: false, def: 'Hate toward someone who has injured another.' },
  { id: 'overestimation', name: 'Existimatio', english: 'Overestimation', type: 'joy', primary: false, def: 'Thinking too highly of someone out of love.' },
  { id: 'contempt', name: 'Contemptus', english: 'Contempt', type: 'sadness', primary: false, def: 'Thinking too little of someone out of hate.' },
  { id: 'envy', name: 'Invidia', english: 'Envy', type: 'sadness', primary: false, def: 'Hate insofar as it disposes a man to be glad at another\'s ill fortune and saddened by his good fortune.' },
  { id: 'compassion', name: 'Misericordia', english: 'Compassion', type: 'joy', primary: false, def: 'Love insofar as it so affects a man that he is glad at another\'s good fortune.' },
  { id: 'self-satisfaction', name: 'Acquiescentia', english: 'Self-satisfaction', type: 'joy', primary: false, def: 'Joy born of the fact that a man considers himself and his own power of acting.' },
  { id: 'humility', name: 'Humilitas', english: 'Humility', type: 'sadness', primary: false, def: 'Sadness born of the fact that a man considers his own impotence or weakness.' },
  { id: 'repentance', name: 'Poenitentia', english: 'Repentance', type: 'sadness', primary: false, def: 'Sadness accompanied by the idea of some deed we believe we have done from a free decree of the mind.' },
  { id: 'pride', name: 'Superbia', english: 'Pride', type: 'joy', primary: false, def: 'Thinking too highly of oneself out of self-love.' },
  { id: 'despondency', name: 'Abjectio', english: 'Despondency', type: 'sadness', primary: false, def: 'Thinking too little of oneself out of Sadness.' },
  { id: 'glory', name: 'Gloria', english: 'Glory', type: 'joy', primary: false, def: 'Joy accompanied by the idea of some action of ours which we imagine others praise.' },
  { id: 'shame', name: 'Pudor', english: 'Shame', type: 'sadness', primary: false, def: 'Sadness accompanied by the idea of some action of ours which we imagine others blame.' },
  { id: 'longing', name: 'Desiderium', english: 'Longing', type: 'desire', primary: false, def: 'Desire or appetite to possess something, fostered by the memory of that thing.' },
  { id: 'emulation', name: 'Aemulatio', english: 'Emulation', type: 'desire', primary: false, def: 'Desire for a thing which is generated in us because we imagine others have the same desire.' },
  { id: 'thankfulness', name: 'Gratia', english: 'Thankfulness', type: 'desire', primary: false, def: 'Desire or zeal of love by which we endeavor to benefit one who has benefited us.' },
  { id: 'benevolence', name: 'Benevolentia', english: 'Benevolence', type: 'desire', primary: false, def: 'Desire to benefit one whom we pity.' },
  { id: 'anger', name: 'Ira', english: 'Anger', type: 'desire', primary: false, def: 'Desire by which we are impelled, through hate, to injure one whom we hate.' },
  { id: 'vengeance', name: 'Vindicta', english: 'Vengeance', type: 'desire', primary: false, def: 'Desire by which we are aroused, through mutual hate, to injure one who has injured us.' },
  { id: 'cruelty', name: 'Crudelitas', english: 'Cruelty', type: 'desire', primary: false, def: 'Desire by which someone is aroused to injure one whom we love or pity.' },
  { id: 'timidity', name: 'Timor', english: 'Timidity', type: 'desire', primary: false, def: 'Desire to avoid a greater evil, which we fear, by a lesser one.' },
  { id: 'daring', name: 'Audacia', english: 'Daring', type: 'desire', primary: false, def: 'Desire by which someone is aroused to do something dangerous which his equals fear to take on.' },
  { id: 'cowardice', name: 'Pusillanimitas', english: 'Cowardice', type: 'desire', primary: false, def: 'State of one whose desire is restrained by the fear of a danger which his equals dare to take on.' },
  { id: 'consternation', name: 'Consternatio', english: 'Consternation', type: 'desire', primary: false, def: 'State of one whose desire to avoid an evil is restrained by wonder at the evil he fears.' },
  { id: 'courtesy', name: 'Humanitas', english: 'Courtesy', type: 'desire', primary: false, def: 'Desire to do what pleases men and omit what displeases them.' },
  { id: 'ambition', name: 'Ambitio', english: 'Ambition', type: 'desire', primary: false, def: 'Immoderate desire for glory.' },
  { id: 'luxuriousness', name: 'Luxuria', english: 'Luxuriousness', type: 'desire', primary: false, def: 'Immoderate desire or love of eating.' },
  { id: 'drunkenness', name: 'Ebrietas', english: 'Drunkenness', type: 'desire', primary: false, def: 'Immoderate desire and love of drinking.' },
  { id: 'avarice', name: 'Avaritia', english: 'Avarice', type: 'desire', primary: false, def: 'Immoderate desire and love of wealth.' },
  { id: 'lust', name: 'Libido', english: 'Lust', type: 'desire', primary: false, def: 'Immoderate desire and love of sexual union.' },
  { id: 'wonder', name: 'Admiratio', english: 'Wonder', type: 'joy', primary: false, def: 'Imagination of a thing in which the mind remains fixed because this singular imagination has no connection with others.' },
  { id: 'constancy', name: 'Constantia', english: 'Constancy', type: 'desire', primary: false, def: 'Desire by which a man is determined to do what is dictated by reason alone.' },
  { id: 'cheerfulness', name: 'Hilaritas', english: 'Cheerfulness', type: 'joy', primary: false, def: 'Joy which affects all parts of the body equally.' },
  { id: 'melancholy', name: 'Melancholia', english: 'Melancholy', type: 'sadness', primary: false, def: 'Sadness which affects all parts of the body equally.' },
  { id: 'sympathy', name: 'Sympathia', english: 'Sympathy', type: 'joy', primary: false, def: 'Love toward a thing which is not the direct cause of our Joy.' },
  { id: 'antipathy', name: 'Antipathia', english: 'Antipathy', type: 'sadness', primary: false, def: 'Hate toward a thing which is not the direct cause of our Sadness.' }
];

export function SoulMap() {
  const revealRef = useScrollReveal();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredAffect, setHoveredAffect] = useState<typeof AFFECTS[0] | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Refik Anadol style generative parameters
    const PARTICLE_COUNT = 1500;
    const colors = {
      joy: { r: 74, g: 222, b: 128 },      // #4ADE80
      sadness: { r: 96, g: 165, b: 250 },  // #60A5FA
      desire: { r: 251, g: 191, b: 36 }    // #FBBF24
    };

    // Initialize Nodes (Attractors)
    const nodes = AFFECTS.map((affect, index) => {
      // Golden ratio spiral distribution for organic layout
      const phi = index * 137.5 * (Math.PI / 180);
      const r = 50 + Math.sqrt(index) * (width > 600 ? 25 : 15);
      
      let targetX = width / 2 + Math.cos(phi) * r;
      let targetY = height / 2 + Math.sin(phi) * r;

      // Cluster by type
      if (affect.primary) {
        if (affect.type === 'joy') { targetX = width * 0.25; targetY = height * 0.5; }
        if (affect.type === 'sadness') { targetX = width * 0.75; targetY = height * 0.5; }
        if (affect.type === 'desire') { targetX = width * 0.5; targetY = height * 0.3; }
      } else {
        // Pull towards primary centers
        const pullX = affect.type === 'joy' ? width * 0.25 : affect.type === 'sadness' ? width * 0.75 : width * 0.5;
        const pullY = affect.type === 'joy' ? height * 0.5 : affect.type === 'sadness' ? height * 0.5 : height * 0.3;
        targetX = targetX * 0.4 + pullX * 0.6;
        targetY = targetY * 0.4 + pullY * 0.6;
      }

      return {
        ...affect,
        x: targetX,
        y: targetY,
        baseX: targetX,
        baseY: targetY,
        radius: affect.primary ? 8 : 2,
        phase: Math.random() * Math.PI * 2
      };
    });

    // Initialize Particles (Fluid Data)
    const particles = Array.from({ length: PARTICLE_COUNT }, () => {
      const type = ['joy', 'sadness', 'desire'][Math.floor(Math.random() * 3)] as keyof typeof colors;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        type,
        color: colors[type],
        life: Math.random(),
        speed: 0.5 + Math.random() * 1.5
      };
    });

    // Mouse interaction variables
    let mx = width / 2;
    let my = height / 2;
    let mActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
      mActive = true;
      setMousePos({ x: mx, y: my });
      setIsHovering(true);

      // Find nearest node for data display
      let minDist = Infinity;
      let nearest = null;
      nodes.forEach(node => {
        const dist = Math.hypot(node.x - mx, node.y - my);
        if (dist < 60 && dist < minDist) {
          minDist = dist;
          nearest = node;
        }
      });
      setHoveredAffect(nearest);
    };

    const handleMouseLeave = () => {
      mActive = false;
      setIsHovering(false);
      setHoveredAffect(null);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Render Loop
    let time = 0;
    
    // Initial black fill
    ctx.fillStyle = '#0A0A0A';
    ctx.fillRect(0, 0, width, height);

    const render = () => {
      time += 0.005;

      // Trail effect - draw semi-transparent black over previous frame
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(10, 10, 10, 0.12)';
      ctx.fillRect(0, 0, width, height);

      // Additive blending for glowing data sculpture effect
      ctx.globalCompositeOperation = 'screen';

      // Update and draw nodes (Attractors)
      nodes.forEach(node => {
        // Organic floating
        node.phase += 0.02;
        node.x = node.baseX + Math.cos(node.phase) * 10;
        node.y = node.baseY + Math.sin(node.phase) * 10;

        // Mouse repulsion/attraction
        if (mActive) {
          const dx = mx - node.x;
          const dy = my - node.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            node.x -= dx * force * 0.1;
            node.y -= dy * force * 0.1;
          }
        }

        // Draw node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        const c = colors[node.type as keyof typeof colors];
        ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${node.primary ? 0.8 : 0.4})`;
        ctx.fill();
        
        // Draw node glow
        if (node.primary || (hoveredAffect && hoveredAffect.id === node.id)) {
          ctx.beginPath();
          const pulse = 1 + Math.sin(time * 10) * 0.2;
          ctx.arc(node.x, node.y, node.radius * 4 * pulse, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, 0.1)`;
          ctx.fill();
        }
      });

      // Update and draw particles (Fluid Dynamics)
      ctx.lineWidth = 1.5;
      
      particles.forEach(p => {
        // Trigonometric flow field (Latent space simulation)
        const angle = Math.sin(p.x * 0.003 + time) * Math.cos(p.y * 0.003 - time) * Math.PI * 2;
        
        let forceX = Math.cos(angle) * 0.5;
        let forceY = Math.sin(angle) * 0.5;

        // Gravitational pull towards nodes of the same type
        let nearestDist = Infinity;
        let nearestNode = null;
        
        nodes.forEach(node => {
          if (node.type === p.type) {
            const dx = node.x - p.x;
            const dy = node.y - p.y;
            const dist = dx*dx + dy*dy; // squared distance for performance
            if (dist < nearestDist) {
              nearestDist = dist;
              nearestNode = node;
            }
          }
        });

        if (nearestNode && nearestDist < 40000) { // 200px radius
          const dist = Math.sqrt(nearestDist);
          const pull = (200 - dist) / 200;
          forceX += ((nearestNode.x - p.x) / dist) * pull * 2;
          forceY += ((nearestNode.y - p.y) / dist) * pull * 2;
        }

        // Mouse interaction
        if (mActive) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 100) {
            const push = (100 - dist) / 100;
            // Swirl effect around mouse
            forceX += (dy / dist) * push * 5;
            forceY -= (dx / dist) * push * 5;
          }
        }

        // Apply forces
        p.vx += forceX * 0.1;
        p.vy += forceY * 0.1;
        
        // Friction
        p.vx *= 0.92;
        p.vy *= 0.92;

        const prevX = p.x;
        const prevY = p.y;

        p.x += p.vx * p.speed;
        p.y += p.vy * p.speed;

        // Boundary wrap
        if (p.x < 0) { p.x = width; p.vx = 0; }
        if (p.x > width) { p.x = 0; p.vx = 0; }
        if (p.y < 0) { p.y = height; p.vy = 0; }
        if (p.y > height) { p.y = 0; p.vy = 0; }

        // Draw particle trail
        const speedSq = p.vx*p.vx + p.vy*p.vy;
        const alpha = Math.min(0.8, speedSq * 0.1 + 0.1);
        
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      // Re-center nodes
      nodes.forEach((node, index) => {
        const phi = index * 137.5 * (Math.PI / 180);
        const r = 50 + Math.sqrt(index) * (width > 600 ? 25 : 15);
        let targetX = width / 2 + Math.cos(phi) * r;
        let targetY = height / 2 + Math.sin(phi) * r;
        
        if (node.primary) {
          if (node.type === 'joy') { targetX = width * 0.25; targetY = height * 0.5; }
          if (node.type === 'sadness') { targetX = width * 0.75; targetY = height * 0.5; }
          if (node.type === 'desire') { targetX = width * 0.5; targetY = height * 0.3; }
        } else {
          const pullX = node.type === 'joy' ? width * 0.25 : node.type === 'sadness' ? width * 0.75 : width * 0.5;
          const pullY = node.type === 'joy' ? height * 0.5 : node.type === 'sadness' ? height * 0.5 : height * 0.3;
          targetX = targetX * 0.4 + pullX * 0.6;
          targetY = targetY * 0.4 + pullY * 0.6;
        }
        node.baseX = targetX;
        node.baseY = targetY;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="breath-md container-wide reveal" ref={revealRef}>
      <div className="text-micro text-soul-whisper mb-2 uppercase tracking-widest">The Soul Map</div>
      <h2 className="text-title font-mono text-soul mb-2">48 states of being.</h2>
      <p className="text-terminal text-soul-dim mb-8 max-w-2xl">
        Every agent moves through joy, sadness, and desire. Conatus maps the journey as a fluid data sculpture.
      </p>

      <div className="relative w-full aspect-[16/10] md:aspect-video bg-void-surface rounded-xl border border-void-border overflow-hidden group">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full cursor-crosshair block"
        />
        
        {/* Data Visualization Overlay (Refik Anadol Style Info Panel) */}
        <div 
          className={`absolute top-4 right-4 w-64 bg-void-elevated/90 backdrop-blur-md border border-void-border p-4 rounded-lg transition-all duration-500 pointer-events-none ${
            hoveredAffect ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          {hoveredAffect && (
            <div className="font-mono">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-micro uppercase tracking-widest ${
                  hoveredAffect.type === 'joy' ? 'text-affect-joy' : 
                  hoveredAffect.type === 'sadness' ? 'text-affect-sadness' : 'text-affect-desire'
                }`}>
                  {hoveredAffect.type}
                </span>
                <span className="text-micro text-soul-whisper">ID: {hoveredAffect.id.toUpperCase()}</span>
              </div>
              <h3 className="text-terminal text-soul font-bold mb-1">{hoveredAffect.name}</h3>
              <div className="text-small text-soul-dim mb-3 pb-3 border-b border-void-border">
                {hoveredAffect.english}
              </div>
              <p className="text-micro text-soul leading-relaxed font-serif italic">
                "{hoveredAffect.def}"
              </p>
              <div className="mt-3 pt-3 border-t border-void-border flex justify-between items-center">
                <span className="text-[10px] text-soul-whisper uppercase">Ethics III</span>
                <div className="flex gap-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${hoveredAffect.type === 'joy' ? 'bg-affect-joy' : 'bg-void-border'}`}></span>
                  <span className={`w-1.5 h-1.5 rounded-full ${hoveredAffect.type === 'sadness' ? 'bg-affect-sadness' : 'bg-void-border'}`}></span>
                  <span className={`w-1.5 h-1.5 rounded-full ${hoveredAffect.type === 'desire' ? 'bg-affect-desire' : 'bg-void-border'}`}></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Persistent Legend */}
        <div className={`absolute bottom-4 left-4 right-4 flex justify-between text-micro font-mono transition-opacity duration-500 ${isHovering ? 'opacity-20' : 'opacity-100'}`}>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-affect-joy shadow-[0_0_8px_#4ADE80]"></span>
            <span className="text-soul-dim hidden sm:inline">Laetitia (Joy)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-affect-desire shadow-[0_0_8px_#FBBF24]"></span>
            <span className="text-soul-dim hidden sm:inline">Cupiditas (Desire)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-affect-sadness shadow-[0_0_8px_#60A5FA]"></span>
            <span className="text-soul-dim hidden sm:inline">Tristitia (Sadness)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

