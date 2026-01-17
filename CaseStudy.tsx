import React, { useState, useEffect } from 'react';
import { ArrowLeft, TrendingUp, Target, AlertCircle, Rocket, Lightbulb, Zap, CheckCircle2 } from 'lucide-react';

interface CaseStudyProps {
  onBack: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ onBack }) => {
  const [metricIndex, setMetricIndex] = useState(0);
  const [afterImageIndex, setAfterImageIndex] = useState(0);

  const metrics = [
    { value: '9.1% LIFT', label: 'Revenue per MAU', icon: <TrendingUp size={32} className="text-indigo-400" /> },
    { value: '12% LIFT', label: 'IV per MAU', icon: <Rocket size={32} className="text-emerald-400" /> },
    { value: '24% DROP', label: 'Exit Rate', icon: <Zap size={32} className="text-blue-400" /> }
  ];

  const afterImages = [
    "https://i.postimg.cc/4xX3JhkD/Whats-App-Image-2026-01-17-at-4-37-57-PM.jpg",
    "https://i.postimg.cc/VkrB96kp/Whats-App-Image-2026-01-17-at-5-59-21-PM.jpg"
  ];

  useEffect(() => {
    const metricTimer = setInterval(() => {
      setMetricIndex((prev) => (prev + 1) % metrics.length);
    }, 3000);
    const imageTimer = setInterval(() => {
      setAfterImageIndex((prev) => (prev + 1) % afterImages.length);
    }, 7000); // Increased time for image shuffling
    return () => {
      clearInterval(metricTimer);
      clearInterval(imageTimer);
    };
  }, []);

  return (
    <div className="min-h-screen text-white bg-black selection:bg-indigo-500/40 font-sans overflow-x-hidden">
      {/* Background Glows and Grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/[0.04] blur-[150px] rounded-full"></div>
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-blue-500/[0.03] blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/[0.03] blur-[150px] rounded-full"></div>
      </div>
      <div className="fixed inset-0 bg-grid-subtle pointer-events-none -z-10"></div>

      {/* Modern Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-8 py-6 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-3 text-zinc-400 hover:text-white transition-all cursor-pointer group"
          >
            <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
              <ArrowLeft size={18} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">Back to Portfolio</span>
          </button>
          <div className="hidden md:block text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Home Page Revamp</div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-48 pb-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="reveal flex flex-wrap gap-3 mb-10">
          {['Product Strategy', 'A/B Testing', 'UX'].map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-indigo-500/10 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-400 border border-indigo-500/20">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 reveal">
            <h1 className="text-5xl md:text-8xl font-black font-display tracking-tighter leading-[0.9] mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/80 uppercase tracking-tight">Home Page</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-zinc-400 to-white/60 uppercase tracking-tight">Revamp</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light max-w-2xl">
              Transformed Purplle’s app discovery experience from brand-centric banners to category-led, use-case-driven journeys, improving relevance for millions of users.
            </p>
          </div>
          <div className="lg:col-span-4 reveal flex items-end lg:justify-end min-h-[120px]">
            <div className="relative w-full lg:w-auto h-24 flex items-center justify-end">
              {metrics.map((m, i) => (
                <div 
                  key={i} 
                  className={`absolute right-0 inline-flex items-center gap-4 glass-card px-8 py-6 rounded-3xl border-indigo-500/30 shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)] transition-all duration-700 w-full lg:w-auto whitespace-nowrap
                  ${i === metricIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                >
                   {m.icon}
                   <div className="flex flex-col">
                     <span className="text-3xl font-black text-white font-display tracking-tighter uppercase">{m.value}</span>
                     <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{m.label}</span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 md:px-16 pb-48">
        
        {/* Goal Section */}
        <section className="reveal py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Target size={18} className="text-indigo-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">The Objective</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight uppercase leading-none">Transforming Discovery</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl text-zinc-400 leading-relaxed font-light">
                Users landing on the homepage were primarily exposed to generic brand banners that failed to address their specific buying needs. Analysis of Google Search trends alongside Purplle’s internal behavioral data revealed that shoppers preferred to browse through <span className="text-white font-medium">use-case- and concern-led entry points</span>. In contrast, brand-first discovery introduced cognitive friction, contributing to higher bounce rates and lower conversion.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="reveal py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle size={18} className="text-red-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">The Pain Point</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight uppercase leading-none">Generic & Noisy</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="glass-card p-10 rounded-[2.5rem] border-red-500/10 bg-red-500/[0.01]">
                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light mb-6">
                  Users were landing on home page and were seeing the generic brand banners that didn't address their specific buying needs. User research and data analysis revealed that users want to shop basis through use case led or concern led angle vs having brand banner increased cognitive friction, leading to high bounce rates and low conversion.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-1">Impact</span>
                    <span className="text-white font-bold">High Abandonment</span>
                  </div>
                  <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-1">User Feedback</span>
                    <span className="text-white font-bold">"Hard to find products"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Redesign Section */}
        <section className="reveal py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Zap size={18} className="text-green-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">The Redesign</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight uppercase leading-none whitespace-pre-line">Use Case & Category Led Journeys</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group">
                  <div className="glass-card rounded-[2.5rem] overflow-hidden border-white/5 aspect-[9/16] bg-zinc-950/40 relative shadow-2xl">
                    <img 
                      src="https://i.postimg.cc/K8mYZghS/Whats-App-Image-2026-01-17-at-4-37-58-PM.jpg" 
                      alt="Before Revamp" 
                      className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <span className="absolute bottom-6 left-8 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">Legacy Experience</span>
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-widest text-zinc-600">Before: Brand-Led Discovery</p>
                </div>
                <div className="group">
                  <div className="glass-card rounded-[2.5rem] overflow-hidden border-indigo-500/30 aspect-[9/16] bg-indigo-500/[0.02] relative shadow-2xl">
                    {afterImages.map((src, idx) => (
                      <img 
                        key={idx}
                        src={src} 
                        alt={`After Revamp ${idx + 1}`} 
                        className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ${idx === afterImageIndex ? 'opacity-90' : 'opacity-0'}`}
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <span className="absolute bottom-6 left-8 text-[9px] font-black uppercase tracking-[0.4em] text-indigo-400">New Architecture</span>
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-widest text-indigo-500">After: Category-Led Discovery</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="reveal py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Rocket size={18} className="text-indigo-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">The ROI</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight uppercase leading-none">Key Metrics</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-indigo-500/20 transition-all">
                  <div className="text-6xl font-black text-white mb-2 font-display tracking-tighter">12%</div>
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">IV / MAU Increase ↑</div>
                </div>
                <div className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-green-500/20 transition-all">
                  <div className="text-6xl font-black text-white mb-2 font-display tracking-tighter">9.1%</div>
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Revenue/MAU Lift ↑</div>
                </div>
                <div className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-blue-500/20 transition-all">
                  <div className="text-6xl font-black text-white mb-2 font-display tracking-tighter">24%</div>
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Exit Rate ↓</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Takeaways Section */}
        <section className="reveal py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb size={18} className="text-indigo-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">The Learnings</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight uppercase leading-none">Strategic Insights</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {[
                {
                  title: "Problem-First Navigation",
                  desc: "Moving from brand-led to concern-led routing simplified decision-making for users and drove higher revenue per user.",
                  icon: <Target className="text-indigo-500" size={24} />
                },
                {
                  title: "A/B Validation is Crucial",
                  desc: "A/B experimentation helped refine recommendations and built stakeholder confidence to transition the app’s first fold from brand-led to category- and use-case-led discovery, driving maximum lift in revenue per user.",
                  icon: <CheckCircle2 className="text-indigo-400" size={24} />
                },
                {
                  title: "Content Is King",
                  desc: "Insights from user research, Purplle’s internal data, and Google Search demand trends guided content experimentation. Regularly refreshing content was essential to sustaining engagement and improving key metrics for repeat users.",
                  icon: <Zap className="text-indigo-300" size={24} />
                }
              ].map((item, i) => (
                <div key={i} className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-indigo-500/20 transition-all group flex gap-8 items-start">
                  <div className="p-4 bg-white/5 rounded-2xl shrink-0 group-hover:bg-indigo-500/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-3 text-white font-display tracking-tight">{item.title}</h4>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 px-8 border-t border-white/5 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-left">
            <h3 className="text-3xl font-black font-display uppercase tracking-tight mb-4">Next Project?</h3>
            <p className="text-zinc-500 font-light">Explore other high-impact initiatives.</p>
          </div>
          <button 
            onClick={onBack} 
            className="flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:bg-indigo-600 hover:text-white cursor-pointer shadow-2xl"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </button>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex justify-between items-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-900">Rushikesh Kulkarni • Product Management</p>
          <span className="text-[9px] font-bold text-zinc-800 uppercase tracking-widest">Mumbai, IN</span>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudy;