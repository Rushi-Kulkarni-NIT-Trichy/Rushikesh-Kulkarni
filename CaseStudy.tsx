
import React, { useState, useEffect } from 'react';
import { ArrowLeft, TrendingUp, Target, AlertCircle, Rocket, Lightbulb, Zap, CheckCircle2, Server, Brain, Image as ImageIcon, Layout, RefreshCw, Database, MoveRight, Send, Linkedin, Github, Phone, Download, ChevronRight } from 'lucide-react';
import { ImpactProject } from './types';

interface CaseStudyProps {
  project: ImpactProject;
  onBack: () => void;
}

const WorkflowDiagram: React.FC = () => (
  <div className="w-full py-12 px-4 md:px-0">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center relative">
      <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 -z-10"></div>
      
      <div className="flex flex-col items-center text-center p-6 glass-card rounded-2xl border-indigo-500/10 group hover:border-indigo-500/30 transition-all">
        <div className="p-4 bg-white/5 rounded-xl mb-4 group-hover:scale-110 transition-transform">
          <Database size={24} className="text-zinc-400" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Trigger</p>
        <p className="text-xs text-zinc-500 mt-1">Product API / n8n</p>
      </div>

      <div className="flex flex-col items-center text-center p-6 glass-card rounded-2xl border-indigo-500/10 group hover:border-indigo-500/30 transition-all">
        <div className="p-4 bg-indigo-500/5 rounded-xl mb-4 group-hover:scale-110 transition-transform">
          <Brain size={24} className="text-indigo-400" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Gemini Pro</p>
        <p className="text-xs text-zinc-400 mt-1">Prompt Eng.</p>
      </div>

      <div className="flex flex-col items-center text-center p-6 bg-indigo-600 rounded-2xl shadow-[0_0_30px_-5px_#6366f1] group hover:scale-105 transition-all">
        <div className="p-4 bg-white/10 rounded-xl mb-4">
          <ImageIcon size={24} className="text-white" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest text-white">Generation</p>
        <p className="text-xs text-indigo-100 mt-1">Asset Pipeline</p>
      </div>

      <div className="flex flex-col items-center text-center p-6 glass-card rounded-2xl border-indigo-500/10 group hover:border-indigo-500/30 transition-all">
        <div className="p-4 bg-emerald-500/5 rounded-xl mb-4 group-hover:scale-110 transition-transform">
          <RefreshCw size={24} className="text-emerald-400" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Auto Deploy</p>
        <p className="text-xs text-zinc-400 mt-1">4hr Reranking</p>
      </div>

      <div className="flex flex-col items-center text-center p-6 glass-card rounded-2xl border-indigo-500/10 group hover:border-indigo-500/30 transition-all">
        <div className="p-4 bg-white/5 rounded-xl mb-4 group-hover:scale-110 transition-transform">
          <Layout size={24} className="text-zinc-400" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Frontend</p>
        <p className="text-xs text-zinc-500 mt-1">Purplle App</p>
      </div>
    </div>
  </div>
);

const CaseStudy: React.FC<CaseStudyProps> = ({ project, onBack }) => {
  const [metricIndex, setMetricIndex] = useState(0);
  const [afterImageIndex, setAfterImageIndex] = useState(0);

  const cs = project.caseStudy;
  if (!cs) return null;

  const isPDA = project.title.toLowerCase().includes('display ads') || project.title.toLowerCase().includes('pda');
  const isFilters = project.title.toLowerCase().includes('filters');

  const metricIconComponents = [TrendingUp, Rocket, Zap];
  const processedMetrics = project.metrics.map((m, i) => {
    const Icon = metricIconComponents[i % metricIconComponents.length];
    return {
      value: m.split(' ').slice(0, 2).join(' '),
      label: m.split(' ').slice(2).join(' ') || "Key Result",
      icon: <Icon 
        size={32} 
        className={i % 3 === 0 ? "text-indigo-400" : i % 3 === 1 ? "text-emerald-400" : "text-blue-400"} 
      />
    };
  });

  const afterImages = cs.newImages;

  useEffect(() => {
    const metricTimer = setInterval(() => {
      setMetricIndex((prev) => (prev + 1) % processedMetrics.length);
    }, 3000);
    const imageTimer = setInterval(() => {
      setAfterImageIndex((prev) => (prev + 1) % afterImages.length);
    }, 7000);
    return () => {
      clearInterval(metricTimer);
      clearInterval(imageTimer);
    };
  }, [processedMetrics.length, afterImages.length]);

  const isAIProject = project.title.toLowerCase().includes('agentic');

  const RESUME_LINK = "https://drive.google.com/file/d/1oyjWuzTJyDAR_A-Fu4Wt8QzsGl1GT5Uv/view?usp=sharing";

  return (
    <div className="min-h-screen text-white bg-black selection:bg-indigo-500/40 font-sans overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/[0.04] blur-[150px] rounded-full"></div>
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-blue-500/[0.03] blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/[0.03] blur-[150px] rounded-full"></div>
      </div>
      <div className="fixed inset-0 bg-grid-subtle pointer-events-none -z-10"></div>

      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 md:px-8 md:py-6 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-3 text-zinc-400 hover:text-white transition-all cursor-pointer group"
          >
            <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
              <ArrowLeft size={16} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
          </button>
          <div className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 truncate max-w-[150px] md:max-w-none">{project.title}</div>
        </div>
      </nav>

      <header className="pt-32 md:pt-48 pb-16 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="reveal flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-indigo-500/10 rounded-full text-[9px] font-black uppercase tracking-widest text-indigo-400 border border-indigo-500/20">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-8 reveal">
            <h1 className="text-[12vw] sm:text-[10vw] lg:text-[7vw] xl:text-[8rem] font-black font-display tracking-tighter leading-[0.85] mb-10 uppercase">
               <span className="block text-white">
                 {project.title.split(' ')[0]}
               </span>
               <span className="block text-zinc-800 transition-colors duration-1000 group-hover:text-zinc-700">
                 {project.title.split(' ').slice(1).join(' ')}
               </span>
            </h1>
            <p className="text-xl md:text-3xl text-zinc-200 leading-tight font-light max-w-4xl">
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-4 reveal flex items-end lg:justify-end min-h-[100px]">
            <div className="relative w-full lg:w-80 h-24 flex items-center justify-start lg:justify-end">
              {processedMetrics.map((m, i) => (
                <div 
                  key={i} 
                  className={`absolute left-0 lg:left-auto lg:right-0 inline-flex items-center gap-4 glass-card px-6 py-4 rounded-2xl border-indigo-500/30 shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)] transition-all duration-700 w-full lg:w-auto whitespace-nowrap
                  ${i === metricIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                >
                   {m.icon}
                   <div className="flex flex-col">
                     <span className="text-xl font-black text-white font-display tracking-normal uppercase">{m.value}</span>
                     <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">{m.label}</span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-16 pb-48">
        <section className="reveal py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Target size={16} className="text-indigo-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Goal</span>
              </div>
              <h2 className="text-2xl md:text-5xl font-black font-display tracking-tight uppercase leading-[1.1] text-white">{cs.goalTitle}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed font-light">
                {cs.goalDescription}
              </p>
            </div>
          </div>
        </section>

        <section className="reveal py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle size={16} className="text-red-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Problem</span>
              </div>
              <h2 className="text-2xl md:text-5xl font-black font-display tracking-tight uppercase leading-[1.1] text-white">{cs.problemTitle}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed font-light mb-12">
                {cs.problemDescription}
              </p>
              <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2">Key Insight</span>
                  <span className="text-white font-bold text-xl md:text-2xl uppercase tracking-tighter leading-tight max-w-2xl">{cs.problemImpact}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reveal py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Zap size={16} className="text-green-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Architecture</span>
              </div>
              <h2 className="text-2xl md:text-5xl font-black font-display tracking-tight uppercase leading-[1.1] text-white">{cs.redesignTitle}</h2>
            </div>
            <div className="lg:col-span-8">
              {isAIProject ? (
                <div className="space-y-12">
                   <WorkflowDiagram />
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-8 glass-card rounded-[2rem] border-white/5 bg-zinc-950/40">
                        <h4 className="text-xl font-bold mb-4 font-display uppercase tracking-tight text-white">Workflow Loop 01</h4>
                        <p className="text-zinc-200 text-lg leading-relaxed font-light">Stage 1 triggers prompt engineering via Gemini Flash, followed by asset creation and storage. Stage 2 handles performance-driven optimization with 4-hourly reranking cycles.</p>
                      </div>
                      <div className="p-8 glass-card rounded-[2rem] border-white/5 bg-zinc-950/40">
                        <h4 className="text-xl font-bold mb-4 font-display uppercase tracking-tight text-white">Workflow Loop 02</h4>
                        <p className="text-zinc-200 text-lg leading-relaxed font-light">Autonomous data gathering from product URLs combined with brand guideline matching to generate category-appropriate, high-conversion imagery.</p>
                      </div>
                   </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="group">
                    <div className="glass-card rounded-[2rem] overflow-hidden border-white/5 aspect-[9/16] bg-zinc-950/40 relative shadow-2xl">
                      <img 
                        src={cs.legacyImage} 
                        alt="Before" 
                        className="w-full h-full object-cover object-top opacity-50 group-hover:opacity-70 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      <span className="absolute bottom-6 left-6 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">
                        {isPDA ? "Without PDA" : isFilters ? "Without Filters" : "Legacy Flow"}
                      </span>
                    </div>
                  </div>
                  <div className="group">
                    <div className="glass-card rounded-[2rem] overflow-hidden border-indigo-500/30 aspect-[9/16] bg-indigo-500/[0.02] relative shadow-2xl">
                      {afterImages.map((src, idx) => (
                        <img 
                          key={idx}
                          src={src} 
                          alt={`After ${idx + 1}`} 
                          className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ${idx === afterImageIndex ? 'opacity-90' : 'opacity-0'}`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      <span className="absolute bottom-6 left-6 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">
                        {isPDA ? "With PDA" : isFilters ? "With Filters" : "Optimized Experience"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="reveal py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Rocket size={16} className="text-indigo-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Impact</span>
              </div>
              <h2 className="text-2xl md:text-5xl font-black font-display tracking-tight uppercase leading-[1.1] text-white">Business Outcomes</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {project.metrics.filter(m => !isPDA || m.includes('Cr/month')).map((metric, i) => {
                  const isCrMonth = metric.includes('Cr/month');
                  return (
                    <div key={i} className={`glass-card p-10 rounded-[2.5rem] border-white/5 bg-zinc-950/40 hover:border-indigo-500/30 transition-all group ${isCrMonth ? 'sm:col-span-2' : ''}`}>
                      <div className={`font-black text-white mb-3 font-display transition-transform origin-left whitespace-nowrap tracking-normal ${isCrMonth ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-6xl'}`}>
                        {isCrMonth ? metric.replace(' potential', '') : metric.split(' ')[0]}
                      </div>
                      {!isCrMonth && (
                        <div className="text-zinc-300 text-[11px] font-bold uppercase tracking-widest leading-tight">
                          {metric.split(' ').slice(1).join(' ')}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="reveal py-16 md:py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb size={16} className="text-indigo-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Learnings</span>
              </div>
              <h2 className="text-2xl md:text-5xl font-black font-display tracking-tight uppercase leading-[1.1] text-white">Strategic Insights</h2>
            </div>
            <div className="lg:col-span-8 space-y-4 lg:space-y-8">
              {cs.takeaways.map((item, i) => (
                <div key={i} className="glass-card p-10 rounded-[3rem] border-white/5 bg-zinc-950/20 hover:border-indigo-500/20 transition-all group flex gap-8 items-start">
                  <div className="p-4 bg-white/5 rounded-2xl shrink-0 group-hover:bg-indigo-500/10 transition-colors">
                    {i === 0 ? <Target className="text-indigo-500" size={24} /> : i === 1 ? <CheckCircle2 className="text-indigo-400" size={24} /> : <Zap className="text-indigo-300" size={24} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl md:text-3xl mb-3 text-white font-display tracking-normal uppercase">{item.title}</h4>
                    <p className="text-zinc-200 leading-relaxed font-light text-lg md:text-xl">{item.desc}</p>
                  </div>
                </div>
              ))}
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
            <button onClick={onBack} className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-800 hover:text-white transition-colors">Portfolio</button>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-800 hover:text-white transition-colors">Back to Top</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudy;
