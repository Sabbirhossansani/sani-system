import React, { useState } from 'react';
import { Code2, Cpu, Database, Wrench, Layers, Terminal, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Technologies' },
    { id: 'cs', name: 'Core CS & Languages' },
    { id: 'graphics', name: 'Graphics & 3D' },
    { id: 'web', name: 'Web & Cloud' },
    { id: 'tools', name: 'Tools & Platforms' },
  ];

  const skillGroups = [
    {
      category: 'cs',
      icon: Cpu,
      title: 'Programming & CS Fundamentals',
      skills: [
        { name: 'C++', level: 90, desc: 'Object Oriented Programming, Graphics (OpenGL)' },
        { name: 'C Language', level: 85, desc: 'Procedural Programming & Data Structures' },
        { name: 'TypeScript', level: 88, desc: 'Typed Frontend & Node.js Development' },
        { name: 'JavaScript (ES6+)', level: 85, desc: 'Async JS, DOM & Web APIs' },
        { name: 'Data Structures & Algorithms', level: 80, desc: 'Core CS Concepts & Problem Solving' },
      ],
    },
    {
      category: 'graphics',
      icon: Code2,
      title: 'Computer Graphics & Spatial UI/UX',
      skills: [
        { name: 'OpenGL & FreeGLUT', level: 85, desc: '2D Cityscape Simulation & Weather Controls' },
        { name: 'Three.js & WebXR', level: 75, desc: 'SpatialMind VR 3D Mind-Mapping Interfaces' },
        { name: 'Figma UI/UX Design', level: 80, desc: 'Interactive VR & Web App Prototyping' },
        { name: 'Computer Graphics Math', level: 80, desc: 'Vectors, Transformations & Day/Night Lighting' },
      ],
    },
    {
      category: 'web',
      icon: Layers,
      title: 'Web Software & Database Sync',
      skills: [
        { name: 'React 18', level: 85, desc: 'Component Architecture & State Management' },
        { name: 'Supabase Realtime', level: 80, desc: 'Live Database Sync & Tour Expense Manager' },
        { name: 'Tailwind CSS', level: 90, desc: 'Glassmorphism UI, Responsive Styling' },
        { name: 'HTML5 & CSS3', level: 92, desc: 'Semantic Layouts & Modern Styling' },
      ],
    },
    {
      category: 'tools',
      icon: Wrench,
      title: 'AI, Cloud & Developer Tools',
      skills: [
        { name: 'Multimodal AI State Machines', level: 78, desc: 'BikroyBot AI Sales Assistant Logic' },
        { name: 'Git & GitHub', level: 88, desc: 'Version Control & Repository Management' },
        { name: 'Render Cloud Deployment', level: 82, desc: 'Deploying Full Stack Web Applications' },
        { name: 'VS Code & Linux Basics', level: 85, desc: 'Primary IDE & Terminal Environments' },
      ],
    },
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter((group) => group.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-cyber-grid bg-obsidian-800 border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Cpu className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-sky-400">Technical Toolkit</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Technologies, programming languages, and tools I use for software engineering and academic projects.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-sky-500/20 text-sky-300 border-sky-400 shadow-md shadow-sky-500/20'
                  : 'glass-card text-slate-400 border-sky-500/15 hover:text-sky-300 hover:border-sky-500/30'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGroups.map((group, gIdx) => {
            const Icon = group.icon;
            return (
              <div
                key={gIdx}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-sky-500/20 hover:border-sky-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-sky-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {group.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="font-semibold text-slate-200 font-mono">
                            {skill.name}
                          </span>
                          <span className="text-sky-400 text-xs font-mono">
                            {skill.desc}
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-sky-500/10">
                          <div
                            className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
