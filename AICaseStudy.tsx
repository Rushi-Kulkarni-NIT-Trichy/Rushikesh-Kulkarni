
import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowLeft, Sparkles, Zap, Target, AlertCircle, Rocket, Lightbulb, Workflow, 
  Cpu, Database, Layout, RefreshCw, BarChart3, CheckCircle2, Share2, 
  Clock, TableProperties, LineChart, RotateCw, Server, Search, CheckCircle,
  Play, MousePointer2, Settings2, Globe, ArrowRight, Activity, Layers, 
  MessageSquareText, Plus, Terminal, Slack, UserCheck, Eye, ArrowDown, 
  ChevronRight, Mail, Github, Code2, Braces, Link2, Pencil, Monitor, MoveRight, Send, Linkedin, Phone, Download
} from 'lucide-react';

interface AICaseStudyProps {
  onBack: () => void;
}

const N8NNode: React.FC<{ 
  title: string; 
  subTitle?: string;
  icon: React.ReactNode; 
  type: 'trigger' | 'ai' | 'db' | 'logic' | 'live' | 'analytics';
  active?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}> = ({ title, subTitle, icon, type, active, onClick, style, className = "" }) => {
  const getColors = () => {
    switch(type) {
      case 'trigger': return 'border-[#ff6d5a] text-[#ff6d5a]';
      case 'ai': return 'border-[#9c27b0] text-[#9c27b0]';
      case 'db': return 'border-[#1565c0] text-[#1565c0]';
      case 'logic': return 'border-[#455a64] text-[#455a64]';
      case 'live': return 'border-[#2e7d32] text-[#2e7d32]';
      case 'analytics': return 'border-[#ef6c00] text-[#ef6c00]';
      default: return 'border-zinc-700 text-zinc-400';
    }
  };

  const getIconBg = () => {
    switch(type) {
      case 'trigger': return 'bg-[#ff6d5a]/10';
      case 'ai': return 'bg-[#9c27b0]/10';
      case 'db': return 'bg-[#1565c0]/10';
      case 'logic': return 'bg-[#455a64]/10';
      case 'live': return 'bg-[#2e7d32]/10';
      case 'analytics': return 'bg-[#ef6c00]/10';
      default: return 'bg-zinc-800/50';
    }
  }

  return (
    <div 
      onClick={onClick}
      className={`${className} transition-all duration-500 cursor-pointer ${active ? 'scale-105 z-50' : 'hover:scale-105 z-10'}`}
      style={style}
    >
      <div className={`relative w-full md:w-[220px] min-h-[85px] bg-[#141414] rounded-xl border-2 p-4 flex flex-col justify-center transition-all duration-300 shadow-2xl
        ${getColors()} ${active ? 'shadow-[0_0_40px_-10px_currentColor] border-opacity-100 bg-[#1a1a1a]' : 'border-opacity-30 hover:border-opacity-100'}
      `}>
        <div className="flex items-center gap-3 mb-2">
          <div className={`p-2 rounded-lg ${getIconBg()}`}>
            {React.cloneElement(icon as React.ReactElement, { size: 18, strokeWidth: 2 })}
          </div>
          <p className="text-[11px] font-black text-white tracking-tight uppercase leading-tight">{title}</p>
        </div>
        {subTitle && (
          <p className="text-[9px] font-medium text-zinc-500 tracking-wider uppercase leading-snug">
            {subTitle}
          </p>
        )}

        {/* Port Visuals (n8n Style) */}
        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0a0a0a] border border-white/20 rounded-sm flex items-center justify-center">
           <div className="w-1 h-1 bg-white/20 rounded-full"></div>
        </div>
        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0a0a0a] border border-white/20 rounded-sm flex items-center justify-center">
           <div className="w-1 h-1 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const N8NCanvas: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 9);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-auto md:h-[850px] bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl p-6 md:p-0">
      {/* n8n Dotted Grid */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      {/* Desktop Connectors */}
      <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <text x="60" y="60" className="text-[10px] font-black fill-[#ff6d5a] uppercase tracking-[0.5em] opacity-50">Creative Factory (Production)</text>
        <rect x="40" y="80" width="940" height="280" rx="40" fill="none" stroke="#ff6d5a" strokeWidth="1" strokeDasharray="10 10" opacity="0.1" />

        <text x="60" y="420" className="text-[10px] font-black fill-[#1565c0] uppercase tracking-[0.5em] opacity-50">Live Operations & Loop</text>
        <rect x="40" y="440" width="940" height="360" rx="40" fill="none" stroke="#1565c0" strokeWidth="1" strokeDasharray="10 10" opacity="0.1" />

        {/* CONNECTIONS: Factory */}
        <path d="M 230 200 H 300" stroke="white" strokeWidth="2" strokeOpacity="0.1" />
        <path d="M 520 200 H 590" stroke="white" strokeWidth="2" strokeOpacity="0.1" />
        <path d="M 810 200 H 880" stroke="white" strokeWidth="2" strokeOpacity="0.1" />

        {/* Connection D to E (approved assets) */}
        <path d="M 990 240 Q 1030 240, 1030 380 Q 1030 520, 990 520" stroke="#1565c0" strokeWidth="3" strokeDasharray="8 4" fill="none" opacity="0.4" />

        {/* CONNECTIONS: Live Ops Loop */}
        <path d="M 770 520 H 700" stroke="white" strokeWidth="2" strokeOpacity="0.1" />
        <path d="M 480 520 H 410" stroke="white" strokeWidth="2" strokeOpacity="0.1" />
        <path d="M 190 520 Q 130 520, 130 580 V 620 Q 130 680, 190 680" stroke="white" strokeWidth="2" strokeOpacity="0.1" fill="none" />
        <path d="M 410 680 H 770" stroke="#ef6c00" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.4" />

        {/* FEEDBACK LOOP: Rerank Engine back to Selector */}
        <path d="M 990 680 Q 1120 680, 1120 520 Q 1120 360, 1010 360 Q 900 360, 890 470" stroke="#ef6c00" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.3" />

        {/* Animated Particles */}
        <circle r="4" fill="#ff6d5a" filter="url(#glow)">
          <animateMotion dur="8s" repeatCount="indefinite" path="M 120 200 H 990 Q 1030 240, 1030 380 Q 1030 520, 990 520 H 120" />
        </circle>
      </svg>

      {/* STACKED LAYOUT (RESPONSIVE) */}
      <div className="flex flex-col md:block gap-2 relative z-10 h-full">
        {/* Loop 1: Factory */}
        <div className="md:hidden text-[10px] font-black uppercase tracking-[0.5em] text-[#ff6d5a] opacity-50 mb-4 mt-4 text-center">Creative Factory</div>
        
        <div className="flex flex-col items-center md:block">
          <N8NNode 
            title="Start Merch Template" subTitle="🚀 Demand Entry Point" icon={<Rocket />} 
            type="trigger" className="md:absolute w-full" style={{ left: '60px', top: '155px' }} 
            active={activeStep === 0}
          />
          <ArrowDown size={16} className="md:hidden text-[#ff6d5a] my-2 opacity-50" />
          <N8NNode 
            title="Gemini Flash" subTitle="🤖 Prompt Engineer" icon={<MessageSquareText />} 
            type="ai" className="md:absolute w-full" style={{ left: '330px', top: '155px' }} 
            active={activeStep === 1}
          />
          <ArrowDown size={16} className="md:hidden text-[#9c27b0] my-2 opacity-50" />
          <N8NNode 
            title="Gemini Pro Vision 3" subTitle="🎨 Asset Generation" icon={<Sparkles />} 
            type="ai" className="md:absolute w-full" style={{ left: '620px', top: '155px' }} 
            active={activeStep === 2}
          />
          <ArrowDown size={16} className="md:hidden text-[#9c27b0] my-2 opacity-50" />
          <N8NNode 
            title="Content Bank" subTitle="🗄️ Human Approval Gate" icon={<UserCheck />} 
            type="db" className="md:absolute w-full" style={{ left: '910px', top: '155px' }} 
            active={activeStep === 3}
          />
        </div>

        <div className="md:hidden h-px bg-white/10 my-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] px-4">
             <ChevronRight className="rotate-90 text-[#1565c0]" size={20} />
          </div>
        </div>

        {/* Loop 2: Live Ops */}
        <div className="md:hidden text-[10px] font-black uppercase tracking-[0.5em] text-[#1565c0] opacity-50 mb-4 text-center">Live Operations</div>
        
        <div className="flex flex-col items-center md:block">
          <N8NNode 
            title="Banner Selector Agent" subTitle="🧠 Smart Filters Logic" icon={<Search />} 
            type="logic" className="md:absolute w-full" style={{ left: '800px', top: '475px' }} 
            active={activeStep === 4}
          />
          <ArrowDown size={16} className="md:hidden text-[#455a64] my-2 opacity-50" />
          <N8NNode 
            title="Promotion & Page APIs" subTitle="🔌 Deployment Engine" icon={<RotateCw />} 
            type="logic" className="md:absolute w-full" style={{ left: '510px', top: '475px' }} 
            active={activeStep === 5}
          />
          <ArrowDown size={16} className="md:hidden text-[#455a64] my-2 opacity-50" />
          <N8NNode 
            title="LIVE Homepage Slots" subTitle="🟢 User Interaction" icon={<Monitor />} 
            type="live" className="md:absolute w-full" style={{ left: '220px', top: '475px' }} 
            active={activeStep === 6}
          />
          <ArrowDown size={16} className="md:hidden text-[#2e7d32] my-2 opacity-50" />
          <N8NNode 
            title="BigQuery" subTitle="📊 Performance Tracking" icon={<LineChart />} 
            type="analytics" className="md:absolute w-full" style={{ left: '220px', top: '635px' }} 
            active={activeStep === 7}
          />
          <ArrowDown size={16} className="md:hidden text-[#ef6c00] my-2 opacity-50" />
          <N8NNode 
            title="Auto-Reranking Engine" subTitle="🔄 4-Hour Optimization" icon={<RefreshCw />} 
            type="analytics" className="md:absolute w-full" style={{ left: '800px', top: '635px' }} 
            active={activeStep === 8}
          />
        </div>
      </div>

      {/* Legend & Interface Overlays */}
      <div className="absolute bottom-10 left-12 hidden md:flex items-center gap-6 bg-black/40 backdrop-blur-xl border border-white/5 px-6 py-3 rounded-2xl">
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#ff6d5a] animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Live Simulation</span>
         </div>
         <div className="w-px h-4 bg-white/10"></div>
         <div className="flex items-center gap-2">
            <Zap size={14} className="text-[#9c27b0]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Agentic Orchestration</span>
         </div>
      </div>
    </div>
  );
};

const AICaseStudy: React.FC<AICaseStudyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const RESUME_LINK = "https://drive.google.com/file/d/1oyjWuzTJyDAR_A-Fu4Wt8QzsGl1GT5Uv/view?usp=sharing";

  return (
    <div className="min-h-screen text-white bg-black selection:bg-indigo-500/40 font-sans">
      <div className="fixed inset-0 bg-grid-subtle pointer-events-none -z-10"></div>
      
      {/* Premium Navbar */}
      <nav className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-fit">
        <div className="flex items-center gap-4 p-1.5 bg-black/70 backdrop-blur-3xl border border-white/10 rounded-full shadow-2xl">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer"
          >
            <ArrowLeft size={14} /> Back
          </button>
          <div className="w-px h-4 bg-white/10"></div>
          <div className="px-4 text-[10px] font-black uppercase tracking-widest text-indigo-400 hidden sm:block">
            Case Study: Agentic Creative Factory
          </div>
        </div>
      </nav>

      {/* Hero Landing Section */}
      <header className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-24 pb-16 max-w-[1600px] mx-auto relative">
        <div className="reveal inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full w-fit mb-12">
          <Activity size={16} className="text-indigo-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Revolutionizing E-Commerce Creative Ops</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-9 reveal">
            <h1 className="text-[12vw] sm:text-[10vw] lg:text-[7vw] xl:text-[8rem] font-black font-display tracking-tighter leading-[0.8] mb-12 uppercase">
              Creative <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-transparent">Autonomy</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-12 md:items-center">
              <p className="text-xl md:text-4xl text-zinc-100 leading-tight font-light max-w-4xl">
                Architecting a self-optimizing closed-loop engine using <span className="text-white font-medium">n8n</span> and <span className="text-white font-medium">Gemini</span>. Scaling high-intent browse discovery autonomously.
              </p>
              <div className="shrink-0 flex gap-4">
                <button onClick={() => {
                  const el = document.getElementById('canvas-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }} className="p-6 rounded-full bg-white text-black hover:bg-zinc-800 transition-all shadow-2xl">
                  <ArrowDown size={32} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 reveal">
            <div className="p-10 glass-card rounded-[3rem] border-white/5 flex flex-col justify-end h-full group hover:border-indigo-500/20 transition-all">
              <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-8">Executive Impact</div>
              <p className="text-7xl font-black font-display tracking-tighter text-white mb-2">90%</p>
              <p className="text-[11px] font-black uppercase tracking-widest text-zinc-400">Manual Production Effort saved</p>
            </div>
          </div>
        </div>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 reveal opacity-40 animate-bounce">
           <ArrowDown size={20} />
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-8 md:px-16 space-y-32 md:space-y-48 pb-64">
        
        {/* The Value Proposition Grid */}
        <section className="reveal py-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#ff6d5a]/10 flex items-center justify-center text-[#ff6d5a]">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white">The Bottleneck</h3>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">Merchandising demand for fresh assets far exceeded design capacity. Creative production was the primary inhibitor to category growth.</p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#9c27b0]/10 flex items-center justify-center text-[#9c27b0]">
                <Cpu size={24} />
              </div>
              <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white">The Solution</h3>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">A multi-stage agentic workflow that translates context into high-fidelity visual assets using Gemini Pro Vision and programmatic logic.</p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#ef6c00]/10 flex items-center justify-center text-[#ef6c00]">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white">The Outcome</h3>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">13% ATC lift through visual freshness and 10x output scale. Real-time data feeds now drive creative decisions, not just intuition.</p>
            </div>
          </div>
        </section>

        {/* N8N CANVAS SECTION */}
        <section id="canvas-section" className="reveal space-y-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Workflow size={18} className="text-indigo-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">The Live Architecture</span>
            </div>
            <h2 className="text-4xl md:text-8xl font-black font-display tracking-tighter uppercase leading-[0.8] mb-8 text-white">Agentic <br/><span className="text-zinc-900">Orchestration</span></h2>
            <p className="text-xl md:text-3xl text-zinc-300 font-light max-w-2xl leading-relaxed">
              An immersive visualization of the 9-step pipeline. Transitioning from manual 'Creative Factory' production to autonomous 'Live Ops' optimization.
            </p>
          </div>

          <N8NCanvas />
        </section>

        {/* Detailed Breakdown: Two Loops */}
        <section className="reveal py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Loop 1: Factory */}
            <div className="space-y-12">
               <div className="px-5 py-2 rounded-full border border-[#ff6d5a]/20 bg-[#ff6d5a]/5 w-fit">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#ff6d5a]">Loop 01: Creative Factory</span>
               </div>
               <h3 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter leading-none text-white">Automated <br/>Asset Generation</h3>
               <p className="text-xl text-zinc-300 font-light leading-relaxed">
                 Using Gemini Flash as a 'Prompt Engineer' to refine merchandising themes, the pipeline utilizes Gemini Pro Vision 3 to generate high-fidelity, brand-compliant banners in seconds instead of days.
               </p>
               <div className="space-y-6">
                  {[
                    "Prompt Engineering via Gemini Flash",
                    "High-Fidelity Asset Gen via Pro Vision 3",
                    "Centralized Content Banking",
                    "Mandatory Human-in-the-Loop Governance"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                       <div className="w-2 h-2 rounded-full bg-[#ff6d5a]/30 group-hover:bg-[#ff6d5a] transition-all"></div>
                       <span className="text-[11px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors">{item}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Loop 2: Live Ops */}
            <div className="space-y-12">
               <div className="px-5 py-2 rounded-full border border-[#1565c0]/20 bg-[#1565c0]/5 w-fit">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#1565c0]">Loop 02: Live Operations</span>
               </div>
               <h3 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter leading-none text-white">Autonomous <br/>Optimization</h3>
               <p className="text-xl text-zinc-300 font-light leading-relaxed">
                 Approved assets are picked up by the Selector Agent. Interaction data from BigQuery feeds the Reranking Engine, which updates app surfaces every 4 hours based on real-time performance.
               </p>
               <div className="space-y-6">
                  {[
                    "Smart Filtering via Selector Agent",
                    "Programmatic API Deployment",
                    "Real-time Click-Stream Tracking",
                    "Autonomous 4-Hour Reranking Cycle"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                       <div className="w-2 h-2 rounded-full bg-[#1565c0]/30 group-hover:bg-[#1565c0] transition-all"></div>
                       <span className="text-[11px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* Action Button at the very bottom */}
        <div className="reveal mt-32 flex justify-center">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 px-12 py-6 bg-white text-black rounded-full text-[12px] font-black uppercase tracking-widest hover:bg-zinc-800 hover:text-white transition-all shadow-2xl active:scale-95"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Portfolio
          </button>
        </div>

      </main>

      <footer className="py-12 px-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-900">© {new Date().getFullYear()} Rushikesh Kulkarni</p>
          <div className="flex gap-10">
            <a href={RESUME_LINK} target="_blank" className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-800 hover:text-white transition-colors flex items-center gap-2">Resume <Download size={14} /></a>
            <button onClick={onBack} className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-800 hover:text-white transition-colors">Back to Top</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AICaseStudy;
