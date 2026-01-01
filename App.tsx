import React, { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, ArrowRight, MapPin, Send, Plus, GraduationCap, Briefcase, Trophy, Phone } from 'lucide-react';
import { PROFILE, PROJECTS, EXPERIENCE, EDUCATION, AWARDS, SKILLS } from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const emailBody = encodeURIComponent("Hey Rushikesh,\n\nCame across your profile and would like to connect.\n\nBest,");

  return (
    <div className="min-h-screen text-white bg-black selection:bg-indigo-500/40 overflow-x-hidden">
      {/* Background Lighting */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/[0.04] blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/[0.06] blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-2xl py-4 border-b border-white/[0.03]' 
          : 'bg-transparent py-10 border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter font-display group">
            RK<span className="text-indigo-500 group-hover:text-indigo-400 transition-colors duration-500">.</span>
          </a>
          
          <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
            <button onClick={() => scrollTo('impact')} className="hover:text-white transition-all">Impact</button>
            <button onClick={() => scrollTo('experience')} className="hover:text-white transition-all">Career</button>
            <button onClick={() => scrollTo('skills')} className="hover:text-white transition-all">About</button>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden sm:flex items-center gap-6 pr-6 border-r border-white/10">
              <a href={`mailto:${PROFILE.email}?body=${emailBody}`} title="Email Me" className="text-zinc-500 hover:text-white transition-all"><Mail size={16} /></a>
              <a href="https://www.linkedin.com/in/rushikulkarni" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile" className="text-zinc-500 hover:text-white transition-all"><Linkedin size={16} /></a>
              <a href="https://github.com/Rushi-Kulkarni-NIT-Trichy" target="_blank" rel="noopener noreferrer" title="GitHub Profile" className="text-zinc-500 hover:text-white transition-all"><Github size={16} /></a>
              <a href={`tel:${PROFILE.phone}`} title="Call Me" className="text-zinc-500 hover:text-white transition-all"><Phone size={16} /></a>
            </div>
            <a 
              href={`mailto:${PROFILE.email}?body=${emailBody}`}
              className="px-7 py-2.5 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-64 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-6xl relative z-10">
            <h1 className="text-8xl md:text-[11rem] font-black tracking-tighter leading-[0.8] mb-12 font-display select-none">
              Rushikesh <br />
              <span className="text-zinc-800 hover:text-zinc-700 transition-colors duration-1000">Kulkarni</span>
            </h1>
            
            <p className="text-3xl md:text-5xl font-display font-semibold text-white mb-10 tracking-tight">
              {PROFILE.role}
            </p>

            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light mb-16 max-w-4xl">
              {PROFILE.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter font-display">Product Impact</h2>
            <span className="hidden md:block h-px bg-white/5 flex-grow ml-12"></span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group relative p-10 bg-zinc-950/40 border border-white/[0.04] rounded-[2rem] hover:bg-zinc-900/40 hover:border-indigo-500/30 transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="flex justify-between items-center mb-8">
                  <span className="px-3 py-1 bg-white/[0.02] rounded-lg text-indigo-400 font-mono text-xs font-bold border border-white/[0.05]">
                    0{idx + 1}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-zinc-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-6 group-hover:text-indigo-400 transition-colors font-display leading-tight">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-lg leading-relaxed mb-10 flex-grow font-light">
                  {project.description}
                </p>

                <div className="space-y-4 pt-8 border-t border-white/[0.03]">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-500 transition-all"></div>
                      <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="experience" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 font-display">Career History</h2>
          </div>
          
          <div className="space-y-4">
            {EXPERIENCE.map((exp, idx) => (
              <div 
                key={idx} 
                className="group relative py-12 px-10 rounded-[2rem] hover:bg-zinc-950/50 transition-all duration-500 border border-transparent hover:border-white/[0.02]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-3">
                    <p className="text-indigo-500 font-bold text-[11px] uppercase tracking-[0.4em]">{exp.period}</p>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-3xl font-bold font-display group-hover:translate-x-2 transition-transform duration-500">{exp.company}</h3>
                  </div>
                  <div className="md:col-span-5 flex justify-between items-center">
                    <p className="text-zinc-400 font-medium text-xl">{exp.role}</p>
                    <Plus size={20} className="text-zinc-800 group-hover:text-indigo-500 group-hover:rotate-45 transition-all" />
                  </div>
                </div>

                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[600px] group-hover:opacity-100 group-hover:pt-16 transition-all duration-700">
                  <div className="md:pl-[25%] max-w-4xl">
                    <ul className="space-y-6">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-zinc-500 text-lg leading-relaxed flex gap-5">
                          <span className="text-indigo-500 font-bold select-none">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Rebalanced Triple Column Layout */}
      <section id="skills" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
            
            {/* Column 1: Expertise */}
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <Briefcase size={18} className="text-indigo-500" />
                <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500 font-display">Expertise</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-zinc-900/50 border border-white/[0.04] rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-indigo-500/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2: Academic Background */}
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <GraduationCap size={18} className="text-indigo-500" />
                <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500 font-display">Academic</h2>
              </div>
              <div className="space-y-8">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="group relative pl-6 border-l border-indigo-500/20 py-1">
                    <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-indigo-500"></div>
                    <p className="text-xl font-bold mb-1 font-display group-hover:text-indigo-400 transition-colors">{edu.institution}</p>
                    <p className="text-zinc-400 text-base font-light mb-3">{edu.degree}</p>
                    <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-widest text-zinc-600">
                      <span className="text-indigo-500/80">{edu.grade}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Recognition */}
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <Trophy size={18} className="text-indigo-500" />
                <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500 font-display">Recognition</h2>
              </div>
              <div className="space-y-8">
                {AWARDS.map((award, idx) => (
                  <div key={idx} className="group relative pl-6 border-l border-indigo-500/10 py-1">
                    <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-indigo-500 transition-all duration-500"></div>
                    <span className="text-[9px] font-bold text-indigo-500/40 uppercase tracking-[0.3em] mb-1 block">{award.year}</span>
                    <h4 className="text-xl font-bold mb-2 font-display group-hover:text-indigo-400 transition-colors leading-tight">{award.title}</h4>
                    <p className="text-zinc-500 text-sm font-light leading-relaxed italic line-clamp-2 group-hover:line-clamp-none transition-all">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-64 px-8 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9] font-display">
            Let’s Build <br />
            <span className="italic text-zinc-800 hover:text-white transition-all duration-1000">What Matters.</span>
          </h2>
          <p className="text-xl text-zinc-500 mb-20 font-light max-w-2xl mx-auto leading-relaxed">
            Open to Product Manager opportunities in impact-driven product teams.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-24">
            <a href={`mailto:${PROFILE.email}?body=${emailBody}`} className="px-14 py-6 bg-white text-black rounded-full font-bold text-xl hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-5 shadow-2xl shadow-indigo-500/10">
              <Send size={24} /> Start Conversation
            </a>
            <a href={`tel:${PROFILE.phone}`} className="text-zinc-500 hover:text-white font-bold text-xl transition-colors">
              Call Now
            </a>
          </div>
          
          <div className="flex justify-center items-center gap-14 text-zinc-700">
            <a href="https://www.linkedin.com/in/rushikulkarni" target="_blank" className="hover:text-white transition-all hover:scale-110 font-bold uppercase tracking-[0.4em] text-[10px]">LinkedIn</a>
            <a href="https://github.com/Rushi-Kulkarni-NIT-Trichy" target="_blank" className="hover:text-white transition-all hover:scale-110 font-bold uppercase tracking-[0.4em] text-[10px]">GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/[0.03] text-center text-zinc-900 text-[10px] font-bold uppercase tracking-[0.6em]">
        <div className="max-w-7xl mx-auto px-8">
          <p>© {new Date().getFullYear()} {PROFILE.name} | ASSOCIATE PRODUCT MANAGER</p>
        </div>
      </footer>
    </div>
  );
};

export default App;