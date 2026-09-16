import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TerminalWidget from './components/TerminalWidget';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian-900 text-slate-100 relative">
      <ParticleCanvas />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TerminalWidget />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
