import React, { useState, useEffect } from 'react';
import { Terminal, Code, Cpu, FolderGit2, Mail, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: Cpu },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Terminal', href: '#terminal', icon: Terminal },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-900/80 backdrop-blur-md border-b border-sky-500/20 shadow-lg shadow-obsidian-900/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand: Simply Sani. */}
          <a
            href="#"
            className="flex items-center gap-2 group text-slate-100 hover:text-sky-400 transition-colors font-mono font-bold text-lg sm:text-xl tracking-tight"
          >
            <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center group-hover:border-sky-400 group-hover:bg-sky-500/20 transition-all shadow-sm shadow-sky-500/20">
              <Code className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
            </div>
            <span>
              Sani<span className="text-sky-400">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1.5 rounded-full border border-sky-500/15 backdrop-blur-sm">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-sky-500/10 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-400/80" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 hover:border-sky-400 hover:text-white transition-all duration-300 shadow-md shadow-sky-500/10 group overflow-hidden"
            >
              <Sparkles className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-sky-400 hover:bg-slate-800/80 border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-900/95 border-b border-sky-500/20 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 mt-2 animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-sky-400 hover:bg-sky-500/10 border border-transparent hover:border-sky-500/20 transition-all"
              >
                <Icon className="w-4 h-4 text-sky-400" />
                {link.name}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-center font-semibold text-white bg-sky-500/20 border border-sky-500/40 hover:bg-sky-500/30"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              Connect With Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
