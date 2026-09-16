import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Code2, BookOpen, Globe, Smartphone } from 'lucide-react';

export default function Hero() {
  const titles = [
    'CSE Student @ DIU',
    'Software Engineering Major',
    'Web & Mobile App Enthusiast',
    'Aspiring Software Engineer',
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullTitle.substring(0, displayText.length + 1));
        if (displayText.length === currentFullTitle.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-cyber-grid bg-radial-sky overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Centered Larger Glowing Circular Avatar Frame */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Outer Glowing Ring */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500 blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse-slow" />
            
            {/* Larger Circular Photo Box */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-sky-400/80 shadow-2xl shadow-sky-500/25 group-hover:border-sky-300 transition-all duration-300">
              <img
                src="/profile.jpg"
                alt="Sabbir Hossan Sani"
                className="w-full h-full object-cover object-[center_18%] transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-200 text-glow-sky">
            Sabbir Hossan Sani
          </span>
        </h1>

        {/* Dynamic Typing Subhead */}
        <div className="h-12 flex items-center justify-center mb-6">
          <p className="text-xl sm:text-3xl font-mono text-sky-400 font-semibold tracking-wide flex items-center gap-2">
            <span>&gt; {displayText}</span>
            <span className="w-2.5 h-7 bg-sky-400 inline-block animate-pulse"></span>
          </p>
        </div>

        {/* Bio Narrative */}
        <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed mb-10 font-normal">
          Computer Science & Engineering student at <strong className="text-sky-300">Daffodil International University (DIU)</strong> with a major in <strong className="text-sky-300">Software Engineering</strong>. Passionate about designing and engineering all kinds of modern <strong className="text-sky-300">Web & Mobile Applications</strong> and software systems.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-xl font-bold text-slate-900 bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
          >
            <span>Explore My Projects</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Sabbirhossansani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl font-bold text-slate-200 glass-card hover:bg-sky-500/10 hover:text-sky-300 border border-sky-500/25 hover:border-sky-400 transition-all duration-200 flex items-center gap-2"
          >
            <Github className="w-5 h-5 text-sky-400" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Quick Highlights Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-card p-5 rounded-2xl border border-sky-500/20 text-center hover:scale-105 transition-transform">
            <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-sky-500/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-sky-400" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">DIU CSE</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Software Engineering Major</div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-sky-500/20 text-center hover:scale-105 transition-transform">
            <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-sky-500/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-sky-400" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">Web Apps</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Modern Web Systems</div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-sky-500/20 text-center hover:scale-105 transition-transform">
            <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-sky-500/10 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-sky-400" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">Mobile Apps</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">App Development Interest</div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-sky-500/20 text-center hover:scale-105 transition-transform">
            <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-sky-500/10 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-sky-400" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">Full Stack</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Software System Engineering</div>
          </div>
        </div>
      </div>
    </section>
  );
}
