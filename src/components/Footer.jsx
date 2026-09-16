import React from 'react';
import { ArrowUp, Code } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-950 border-t border-sky-500/15 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-center md:text-left">
          {/* Left: Logo Only */}
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
              <Code className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-white font-mono font-bold text-lg tracking-tight">
              Sani<span className="text-sky-400">.</span>
            </div>
          </div>

          {/* Center: Copyright Notice (Centered) */}
          <div className="text-xs text-slate-400 font-mono text-center justify-self-center">
            © {new Date().getFullYear()} Sabbir Hossan Sani. All rights reserved.
          </div>

          {/* Right: Scroll to top button */}
          <div className="flex items-center justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl glass-card border border-sky-500/20 hover:border-sky-400 text-sky-400 hover:text-white transition-all shadow-sm"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
