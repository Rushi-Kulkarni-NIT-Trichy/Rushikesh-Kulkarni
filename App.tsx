import React, { useEffect, useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, GraduationCap, Briefcase, Trophy, Phone, ArrowUpRight, X, Calendar, Download, ChevronRight } from 'lucide-react';
import { PROFILE, PROJECTS, EXPERIENCE, EDUCATION, AWARDS, SKILLS } from './constants';
import CaseStudy from './CaseStudy';

const useScrollReveal = (dependency: any) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { 
      threshold: 0.05, 
      rootMargin: "0px 0px -5% 0px" 
    });

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [dependency]);
};

const ProjectModal: React.FC<{ project: any; onClose: () => void }> = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-[3rem] p-8 md:p-16 border-white/10 shadow-2xl animate-modal-in">
        <button onClick={onClose} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors cursor-pointer">
          <X size={32} />
        </button>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-indigo-500/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-400 border border-indigo-500/20">{tag}</span>
          ))}
        </div>
        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter mb-8 leading-tight">{project.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-4">The Challenge</h4>
            <p className="text-zinc-300 text-lg leading-relaxed font-light">{project.description}</p>
          </div>
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-4">Core Metrics</h4>
            <div className="space-y-3">
              {project.metrics.map((m: string, i: number) => (
                <div key={i} className="flex items-center gap-4 text-white font-bold text-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5">
          <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-8">Outcome & Learnings</h4>
          <p className="text-zinc-400 leading-relaxed italic">
            Focusing on use-case led discovery significantly reduced cognitive load for the user, resulting in a sustainable lift in LTV and overall session quality.
          </p>
        </div>
      </div>
    </div>
  );
};

const CareerItem: React.FC<{ exp: any; index: number; activeIndex: number }> = ({ exp, index, activeIndex }) => {
  const isActive = activeIndex === index;
  return (
    <div className="reveal relative pl-12 md:pl-32 pb-8 group" data-index={index}>
      <div className={`absolute left-[-5px] top-6 w-[11px] h-[11px] rounded-full z-10 transition-all duration-500 ${isActive ? 'bg-indigo-500 scale-[2] shadow-[0_0_25px_#6366f1]' : 'bg-zinc-800'}`}>
        {isActive && <div className="absolute inset-0 rounded-full animate-ping bg-indigo-500/50"></div>}
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
        <div className="lg:w-40 flex-shrink-0 pt-1">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-1">{exp.period}</p>
          <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Milestone</p>
        </div>
        <div className="flex-grow">
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-black font-display tracking-tighter mb-1 text-white">{exp.company}</h3>
            <p className="text-lg md:text-xl font-medium italic font-display text-zinc-400">{exp.role}</p>
          </div>
          <div className={`glass-card rounded-[2rem] p-6 md:p-8 border-white/5 bg-zinc-950/20 transition-all duration-500 ${isActive ? 'border-indigo-500/20 bg-zinc-950/40' : ''}`}>
            <ul className="grid grid-cols-1 gap-3">
              {exp.highlights.map((h: string, i: number) => (
                <li key={i} className="text-zinc-400 text-sm md:text-base leading-relaxed flex gap-4">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-zinc-800 group-hover:bg-indigo-500 transition-colors"></span>
                  <span className="hover:text-white transition-colors">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'main' | 'case-study'>('main');
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('impact');
  const [activeCareerIndex, setActiveCareerIndex] = useState(0);
  const [railProgress, setRailProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const scrollTicking = useRef(false);
  const experienceRef = useRef<HTMLElement>(null);

  useScrollReveal(currentView);

  // Scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['impact', 'experience', 'about'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveTab(id);
            break;
          }
        }
      }
      if (experienceRef.current) {
        const rect = experienceRef.current.getBoundingClientRect();
        const scrollIn = -rect.top + (window.innerHeight / 2.5);
        const progress = Math.min(Math.max(scrollIn / (rect.height - 50), 0), 1);
        setRailProgress(progress * 100);
        const careerItems = document.querySelectorAll('[data-index]');
        let closestIndex = 0;
        let minDistance = Infinity;
        careerItems.forEach((item) => {
          const iRect = item.getBoundingClientRect();
          const distance = Math.abs((window.innerHeight / 2.5) - iRect.top);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = parseInt(item.getAttribute('data-index') || '0');
          }
        });
        setActiveCareerIndex(closestIndex);
      }
      scrollTicking.current = false;
    };
    window.addEventListener('scroll', () => {
      if (!scrollTicking.current) {
        window.requestAnimationFrame(handleScroll);
        scrollTicking.current = true;
      }
    }, { passive: true });
  }, []);

  const handleBackToPortfolio = () => {
    setCurrentView('main');
    // Allow React to render the main view first, then scroll to the specific section
    setTimeout(() => {
      scrollTo('impact');
    }, 50);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nittrichy.rushi@gmail.com&su=Message%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    window.open(gmailComposeUrl, '_blank');
  };

  const gmailComposeUrlHeader = `https://mail.google.com/mail/?view=cm&fs=1&to=nittrichy.rushi@gmail.com&su=Reaching%20out%20from%20Portfolio&body=Hey%20Rushikesh%20%2C%0A%0AI%20saw%20your%20portfolio%20%2C%20I%20am%20reaching%20out%20to%20connect%20with%20you.%20%0A%0ARegards%2C`;

  if (currentView === 'case-study') {
    return <CaseStudy onBack={handleBackToPortfolio} />;
  }

  return (
    <div className="min-h-screen text-white bg-black selection:bg-indigo-500/40">
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/[0.04] blur-[150px] rounded-full"></div>
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-blue-500/[0.03] blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/[0.03] blur-[150px] rounded-full"></div>
      </div>

      {/* Modern Navigation */}
      <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-max max-w-[95vw] transition-all duration-700 ${scrolled ? 'scale-90 translate-y-[-10px]' : 'scale-100'}`}>
        <div className="flex items-center gap-1.5 p-1 bg-black/80 backdrop-blur-3xl border border-white/5 rounded-full shadow-2xl overflow-hidden">
          <div className="px-4 text-sm font-black font-display tracking-tighter shrink-0">RK<span className="text-indigo-500">.</span></div>
          <div className="flex items-center gap-1">
            {['impact', 'experience', 'about'].map(id => (
              <button key={id} onClick={() => scrollTo(id)} className={`px-4 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === id ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}>{id}</button>
            ))}
          </div>
          <div className="w-px h-4 bg-white/10 mx-2 shrink-0"></div>
          <div className="flex items-center gap-1.5">
            <a 
              href="https://drive.google.com/file/d/1i_17HM-L9-pl8qSnPu7GuyLUgTfxgsv3/view?usp=drive_link" 
              target="_blank" 
              className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-zinc-400 hover:text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap"
            >
              Resume <Download size={12} className="opacity-60" />
            </a>
            <a href={gmailComposeUrlHeader} target="_blank" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg whitespace-nowrap">Hire Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center px-8 md:px-16 pt-32 pb-8 relative overflow-hidden bg-grid-subtle">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 reveal text-left z-10 order-2 lg:order-1">
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black font-display tracking-tighter leading-[0.8] mb-12">
              <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/85">Rushikesh</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-300 to-white/70">Kulkarni</span>
            </h1>

            <div className="space-y-8 max-w-2xl">
              <p className="text-xl md:text-2xl font-display font-medium text-indigo-100/90 leading-snug">
                Associate Product Manager @ Purplle. <br className="hidden md:block"/>
                <span className="text-zinc-500">Designing the future of browse & discovery.</span>
              </p>
              
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-light">
                NIT Trichy Alum with a focus on data-driven growth, AdTech monetization, and agentic AI workflows. I translate user intent into scalable business value.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 reveal flex justify-center lg:justify-end relative order-1 lg:order-2 mb-12 lg:mb-0">
            <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              <div className="w-full h-full rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-indigo-500/40 via-white/10 to-transparent border border-white/10 backdrop-blur-md relative z-10 shadow-[0_0_80px_-20px_rgba(99,102,241,0.3)] group">
                <div className="w-full h-full rounded-full overflow-hidden transition-all duration-1000">
                  <img 
                    src="https://i.postimg.cc/W3r74kLH/portfolio.png" 
                    alt="Rushikesh Kulkarni" 
                    className="w-full h-full object-cover transition-transform duration-1000"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-[80px] rounded-full -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Impact Section */}
      <section id="impact" className="pt-12 pb-24 px-8 max-w-7xl mx-auto relative overflow-visible">
        <div className="reveal mb-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/5 pb-10 gap-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter font-display leading-[0.8] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/85">PRODUCT IMPACT</h2>
          <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em] mb-3 md:mb-5 shrink-0">Case Studies</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              onClick={() => {
                if (project.title === "Homepage & Discovery Revamp") {
                  setCurrentView('case-study');
                } else {
                  setSelectedProject(project);
                }
              }} 
              className="reveal group relative p-10 glass-card rounded-[2.5rem] hover:bg-zinc-900/40 transition-all duration-700 cursor-pointer border-transparent hover:border-indigo-500/20"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500 text-indigo-500"><ArrowUpRight size={32} /></div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-indigo-400 transition-colors">{tag}</span>
                ))}
              </div>
              <h3 className="text-3xl font-bold mb-4 font-display leading-tight group-hover:text-white transition-colors">{project.title}</h3>
              <p className="text-zinc-500 text-base leading-relaxed mb-8 font-light line-clamp-2">{project.description}</p>
              <div className="flex gap-4">
                {project.metrics.slice(0, 1).map((m, i) => (
                  <span key={i} className="text-sm font-black text-indigo-400 tracking-tighter uppercase">{m}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-16 px-8 max-w-6xl mx-auto relative overflow-visible">
        <div className="reveal mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter font-display leading-[0.8] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/85">CAREER</h2>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-900">
             <div className="absolute top-0 left-0 w-px bg-indigo-500 shadow-[0_0_20px_#6366f1] transition-all duration-300" style={{ height: `${railProgress}%` }}></div>
          </div>
          <div className="space-y-2">
            {EXPERIENCE.map((exp, idx) => (
              <CareerItem key={idx} exp={exp} index={idx} activeIndex={activeCareerIndex} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8 max-w-7xl mx-auto relative overflow-visible">
        <div className="reveal mb-12 border-b border-white/5 pb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter font-display leading-[0.8] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/85">ABOUT</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-10">
            <div className="reveal space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map(skill => (
                  <span key={skill} className="px-2.5 py-1.5 bg-zinc-950 border border-white/5 rounded-md text-[9px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="reveal space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Education</h3>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-5 glass-card rounded-xl border-white/5 hover:border-indigo-500/10 transition-all group">
                  <p className="text-lg font-bold font-display group-hover:text-indigo-400 transition-colors">{edu.institution}</p>
                  <p className="text-zinc-500 font-light text-xs mt-0.5">{edu.degree}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-[8px] font-black tracking-widest text-indigo-400 bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/10">{edu.grade}</span>
                    <span className="text-[8px] font-black tracking-widest text-zinc-700">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Recognitions</h3>
            <div className="flex flex-col gap-2.5">
              {AWARDS.map((award, idx) => (
                <div key={idx} className="p-4 glass-card rounded-xl border-white/5 flex items-center gap-4 hover:border-indigo-500/20 transition-all group">
                   <div className="p-2.5 bg-indigo-500/5 rounded-lg text-indigo-500 group-hover:scale-110 transition-transform">
                    <Trophy size={16} />
                   </div>
                   <div className="flex-grow">
                     <h4 className="text-sm font-bold font-display leading-tight">{award.title}</h4>
                     <p className="text-zinc-500 font-light text-[10px] mt-0.5 italic">{award.description}</p>
                   </div>
                   <p className="text-[8px] font-black text-zinc-800 flex-shrink-0">{award.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-8 bg-zinc-950/20 relative overflow-hidden">
        <div className="reveal max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter font-display leading-[0.8] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/85">LET'S BUILD <br/><span className="text-zinc-800">TOGETHER</span></h2>
            <p className="text-zinc-500 text-lg font-light mb-12">Open to high-impact product roles, GenAI consults, or just a virtual coffee.</p>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex items-center gap-8">
                <a href="https://linkedin.com/in/rushikulkarni" target="_blank" className="text-zinc-700 hover:text-white transition-all"><Linkedin size={32} /></a>
                <a href="https://github.com/Rushi-Kulkarni-NIT-Trichy" target="_blank" className="text-zinc-700 hover:text-white transition-all"><Github size={32} /></a>
                <a href="tel:9488177320" className="text-zinc-700 hover:text-white transition-all flex items-center gap-3 font-bold">
                  <Phone size={32} />
                  <span>9488177320</span>
                </a>
              </div>
              <a href={gmailComposeUrlHeader} target="_blank" className="inline-block px-8 py-5 bg-white text-black rounded-xl font-bold tracking-widest text-[11px] md:text-[13px] uppercase hover:bg-indigo-600 hover:text-white transition-all text-center w-full shadow-xl">
                Email Me @ nittrichy.rushi@gmail.com
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-full glass-card p-10 rounded-[2.5rem] border-white/5">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all text-sm" 
                />
              </div>
              <textarea 
                placeholder="Your Message" 
                rows={4} 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all text-sm resize-none"
              ></textarea>
              <button type="submit" className="w-full py-4 bg-white text-black rounded-2xl font-bold tracking-widest uppercase text-sm hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center gap-3">Send Message <Send size={18} /></button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 px-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-900">© {new Date().getFullYear()} Rushikesh Kulkarni</p>
          <div className="flex gap-10">
            <a href="https://drive.google.com/file/d/1i_17HM-L9-pl8qSnPu7GuyLUgTfxgsv3/view?usp=drive_link" target="_blank" className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-800 hover:text-white transition-colors flex items-center gap-2">Resume <Download size={14} /></a>
            <a href={gmailComposeUrlHeader} target="_blank" className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-800 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
