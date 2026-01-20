
import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowLeft, Sparkles, Zap, Target, AlertCircle, Rocket, Lightbulb, Workflow, 
  Cpu, Database, Layout, RefreshCw, BarChart3, CheckCircle2, Share2, 
  Clock, TableProperties, LineChart, RotateCw, Server, Search, CheckCircle,
  Play, MousePointer2, Settings2, Globe, ArrowRight, Activity, Layers, 
  MessageSquareText, Plus, Terminal, Slack, UserCheck, Eye, ArrowDown, 
  ChevronRight, Mail, Github, Code2, Braces, Link2, Pencil, Monitor, MoveRight, Send, Linkedin, Phone, Download, Filter
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
}> = ({ title, subTitle, icon, type, active, onClick, className = "" }) => {
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
      className={`${className} transition-all duration-500 cursor-pointer ${active ? 'scale-105 z-20' : 'hover:scale-105 z-10'}`}
    >
      <div className={`relative w-full min-h-[85px] bg-[#141414] rounded-xl border-2 p-3 md:p-4 flex flex-col justify-center transition-all duration-300 shadow-2xl
        ${getColors()} ${active ? 'shadow-[0_0_30px_-5px_currentColor] border-opacity-100 bg-[#1a1a1a]' : 'border-opacity-30 hover:border-opacity-100'}
      `}>
        <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-2">
          <div className={`p-1.5 md:p-2 rounded-lg ${getIconBg()}`}>
            {React.cloneElement(icon as React.ReactElement, { size: 16, strokeWidth: 2 })}
          </div>
          <p className="text-[9px] md:text-[10px] font-black text-white tracking-wider uppercase leading-tight">{title}</p>
        </div>
        {subTitle && (
          <p className="text-[7px] md:text-[8px] font-medium text-zinc-500 tracking-wider uppercase leading-snug">
            {subTitle}
          </p>
        )}

        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#0a0a0a] border border-white/20 rounded-sm flex items-center justify-center">
           <div className="w-1 h-1 bg-white/20 rounded-full"></div>
        </div>
        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#0a0a0a] border border-white/20 rounded-sm flex items-center justify-center">
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
      setActiveStep((prev) => (prev + 1) % 10);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl p-6 md:p-12 lg:p-16">
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="relative z-10 flex flex-col gap-12 md:gap-24">
        
        {/* Creative Factory Section */}
        <div className="space-y-6 md:space-y-8">
          <div className="flex items-center justify-center md:justify-start gap-3">
             <div className="w-2 h-2 rounded-full bg-[#ff6d5a] animate-pulse"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff6d5a] opacity-70">Creative Factory (Production Loop)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            <N8NNode 
              title="Demand Entry Point" subTitle="🚀 Inputs & Context" icon={<Rocket />} 
              type="trigger" active={activeStep === 0}
            />
            <N8NNode 
              title="Gemini Flash" subTitle="🤖 Prompt Engineer" icon={<MessageSquareText />} 
              type="ai" active={activeStep === 1}
            />
            <N8NNode 
              title="Gemini Pro Vision 3" subTitle="🎨 Asset Generation" icon={<Sparkles />} 
              type="ai" active={activeStep === 2}
            />
            <N8NNode 
              title="Central Content Bank" subTitle="🗄️ Storage" icon={<Database />} 
              type="db" active={activeStep === 3}
            />
            <N8NNode 
              title="Human Gate" subTitle="✔️ Quality & Compliance" icon={<UserCheck />} 
              type="logic" active={activeStep === 4}
            />
          </div>
        </div>

        {/* Transitional Connector */}
        <div className="hidden md:flex justify-end items-center px-12 h-0">
           <div className="w-px h-16 md:h-24 bg-gradient-to-b from-[#ff6d5a] to-[#1565c0] opacity-30"></div>
        </div>
        <div className="md:hidden flex justify-center py-4">
           <ArrowDown size={24} className="text-zinc-800 animate-bounce" />
        </div>

        {/* Live Operations Section */}
        <div className="space-y-6 md:space-y-8">
          <div className="flex items-center justify-center md:justify-end gap-3">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1565c0] opacity-70">Live Operations (Optimization Loop)</span>
             <div className="w-2 h-2 rounded-full bg-[#1565c0] animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            <N8NNode 
              title="Banner Selector Agent" subTitle="🧠 Intent Selector" icon={<Search />} 
              type="logic" active={activeStep === 5}
              className="md:order-5"
            />
            <N8NNode 
              title="Smart Filtering" subTitle="🛡️ Eligibility" icon={<Filter />} 
              type="logic" active={activeStep === 6}
              className="md:order-4"
            />
            <N8NNode 
              title="Deployment Engine" subTitle="🔌 Promotion APIs" icon={<RotateCw />} 
              type="logic" active={activeStep === 7}
              className="md:order-3"
            />
            <N8NNode 
              title="BigQuery" subTitle="📊 Real-time Data" icon={<LineChart />} 
              type="analytics" active={activeStep === 8}
              className="md:order-2"
            />
            <N8NNode 
              title="Auto-Reranking" subTitle="🔄 4-Hour Optimization" icon={<RefreshCw />} 
              type="analytics" active={activeStep === 9}
              className="md:order-1"
            />
          </div>
        </div>

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8 bg-black/60 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-3xl">
         <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Autonomous Closed-Loop Pipeline</span>
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
    <div className="min-h-screen text-white bg-black selection:bg-indigo-500/40 font-sans overflow-x-hidden">
      <div className="fixed inset-0 bg-grid-subtle pointer-events-none -z-10"></div>
      
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
            Case Study: Agentic Creative Creation
          </div>
        </div>
      </nav>

      <header className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-24 pb-16 max-w-[1600px] mx-auto relative">
        <div className="reveal inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full w-fit mb-12">
          <Activity size={16} className="text-indigo-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Scaling E-Commerce Creative Ops with Autonomous Systems</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 reveal">
            <h1 className="text-[11vw] sm:text-[9vw] lg:text-[6.5vw] xl:text-[6rem] font-black font-display tracking-tighter leading-[0.85] mb-12 uppercase">
              Agentic Creative <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-transparent">Creation and Updation</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-12 md:items-center">
              <p className="text-xl md:text-2xl lg:text-3xl text-zinc-100 leading-tight font-light max-w-4xl">
                Designed and deployed a self-optimizing creative engine powered by <span className="text-white font-medium">n8n</span> and <span className="text-white font-medium">Gemini</span>, enabling autonomous creative production and optimization for high-intent discovery at scale.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-4 reveal">
            <div className="p-8 glass-card rounded-[3rem] border-white/5 flex flex-col justify-end group hover:border-indigo-500/20 transition-all bg-zinc-950/40 shadow-2xl">
              <div className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-6 flex items-center gap-2">
                <BarChart3 size={14} /> Operational Impact
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-5xl font-black font-display tracking-tighter text-white">90%</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Reduction in manual creative effort</p>
                </div>
                <div>
                  <p className="text-5xl font-black font-display tracking-tighter text-white">10×</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Increase in production capacity</p>
                </div>
                <div>
                  <p className="text-5xl font-black font-display tracking-tighter text-white">+13%</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Lift in ATC via visual freshness</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-12 reveal opacity-20 flex gap-4">
           <span className="text-[10px] font-black uppercase tracking-widest">Creative</span>
           <span className="text-[10px] font-black uppercase tracking-widest">•</span>
           <span className="text-[10px] font-black uppercase tracking-widest">Agentic AI</span>
           <span className="text-[10px] font-black uppercase tracking-widest">•</span>
           <span className="text-[10px] font-black uppercase tracking-widest">Automation</span>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-8 md:px-16 space-y-32 md:space-y-48 pb-64">
        
        <section className="reveal py-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#ff6d5a]/10 flex items-center justify-center text-[#ff6d5a]">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white">The Bottleneck</h3>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">Merchandising demand for fresh, context-aware visual assets far outpaced available design bandwidth. Manual production cycles became the primary bottleneck limiting experimentation velocity and high-intent category growth.</p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#9c27b0]/10 flex items-center justify-center text-[#9c27b0]">
                <Cpu size={24} />
              </div>
              <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white">The Solution</h3>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">Built a multi-stage agentic workflow that converts merchandising context into high-fidelity, brand-compliant visual assets — and autonomously deploys and optimizes them using real-time performance signals.</p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#ef6c00]/10 flex items-center justify-center text-[#ef6c00]">
                <Rocket size={24} />
              </div>
              <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white">The Outcome</h3>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">Creative operations transitioned from intuition-driven, static cycles to a data-informed, continuously optimizing system. 10x scale in asset generation and 13% ATC uplift driven by visual freshness.</p>
            </div>
          </div>
        </section>

        <section id="canvas-section" className="reveal space-y-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Workflow size={18} className="text-indigo-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Live Orchestration Architecture</span>
            </div>
            <h2 className="text-4xl md:text-8xl font-black font-display tracking-tighter uppercase leading-[0.8] mb-8 text-white">Autonomous <br/><span className="text-zinc-900">Workflows</span></h2>
            <p className="text-xl md:text-3xl text-zinc-300 font-light max-w-2xl leading-relaxed">
              A fully autonomous 10-step pipeline powering the shift from a manual 'Creative Factory' to real-time 'Live Operations'.
            </p>
          </div>

          <N8NCanvas />
        </section>

        <section className="reveal py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
               <div className="px-5 py-2 rounded-full border border-[#ff6d5a]/20 bg-[#ff6d5a]/5 w-fit">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#ff6d5a]">Loop 01: Creative Factory — Automated Production</span>
               </div>
               <h3 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter leading-none text-white">Intelligent <br/>Creation</h3>
               <p className="text-xl text-zinc-300 font-light leading-relaxed">
                 The production loop translates intent into structured creative prompts, followed by high-fidelity asset generation with brand safety built-in.
               </p>
               <div className="grid grid-cols-1 gap-4">
                  {[
                    "Demand Entry Point: Merchandising & Campaign Context",
                    "Prompt Engineering via Gemini Flash",
                    "High-Fidelity Asset Creation via Gemini Pro Vision 3",
                    "Centralized Asset Banking & Versioning",
                    "Human-in-the-Loop Quality Assurance"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group p-4 bg-zinc-950/40 rounded-2xl border border-white/5 hover:border-[#ff6d5a]/20 transition-all">
                       <div className="w-8 h-8 rounded-full bg-[#ff6d5a]/10 flex items-center justify-center text-[#ff6d5a] text-[10px] font-bold">{i+1}</div>
                       <span className="text-[11px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors">{item}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="space-y-12">
               <div className="px-5 py-2 rounded-full border border-[#1565c0]/20 bg-[#1565c0]/5 w-fit">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#1565c0]">Loop 02: Live Operations — Autonomous Optimization</span>
               </div>
               <h3 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter leading-none text-white">Data-Driven <br/>Updation</h3>
               <p className="text-xl text-zinc-300 font-light leading-relaxed">
                 The optimization loop ensures only the highest performing creatives are surfaced, with continuous reranking based on live interaction signals.
               </p>
               <div className="grid grid-cols-1 gap-4">
                  {[
                    "Intent-Driven Creative Selection (Selector Agent)",
                    "Smart Filtering & Eligibility Guardrails",
                    "Programmatic Deployment across App Surfaces",
                    "Real-Time Clickstream Analytics (BigQuery)",
                    "Autonomous 4-Hour Reranking Cycles"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group p-4 bg-zinc-950/40 rounded-2xl border border-white/5 hover:border-[#1565c0]/20 transition-all">
                       <div className="w-8 h-8 rounded-full bg-[#1565c0]/10 flex items-center justify-center text-[#1565c0] text-[10px] font-bold">{i+6}</div>
                       <span className="text-[11px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

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
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-800 hover:text-white transition-colors">Back to Top</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AICaseStudy;
