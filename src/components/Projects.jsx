import React, { useState } from 'react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'hisabmate',
      title: 'HisabMate',
      tagline: 'Group Tour Expense & Settlement Manager',
      category: 'web',
      status: 'live',
      statusText: '🌐 Live Deployed App',
      description:
        'A fast, offline-ready web app to manage group trip expenses. Features advance deposit tracking, hotel/food voucher splitting, bKash/Nagad 1-tap payment copy, and realtime Supabase cloud sync across all tour members.',
      tags: ['TypeScript', 'React', 'Supabase Cloud', 'Tailwind CSS', 'Render'],
      github: 'https://github.com/Sabbirhossansani/hisabmate',
      demo: 'https://hisabmate.onrender.com/',
      demoLabel: 'Live Demo',
      accentColor: 'from-sky-500/20 to-cyan-500/10',
    },
    {
      id: 'shundor-product',
      title: 'Shundor Product',
      tagline: 'Inventory & Sales Management System',
      category: 'web',
      status: 'live',
      statusText: '🌐 Live Deployed App',
      description:
        'Comprehensive retail inventory tracking and sales management system built for monitoring product stock, customer transactions, and sales reporting.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Render Cloud'],
      github: 'https://github.com/Sabbirhossansani/shundor-product',
      demo: 'https://shundor-product.onrender.com/',
      demoLabel: 'Live Demo',
      accentColor: 'from-blue-500/20 to-sky-500/10',
    },
    {
      id: 'bikroybot',
      title: 'BikroyBot',
      tagline: 'Smart Multimodal AI Sales Assistant & Order State Machine',
      category: 'web',
      status: 'dev',
      statusText: '⚡ In Active Development / AI Prototype',
      description:
        'An experimental multimodal AI assistant designed for automated sales conversations, customer query handling, and order state machine processing.',
      tags: ['TypeScript', 'Node.js', 'Multimodal AI', 'State Machines'],
      github: 'https://github.com/Sabbirhossansani/bikroybot',
      demo: null,
      demoLabel: null,
      accentColor: 'from-amber-500/20 to-sky-500/10',
    },
    {
      id: 'spatialmind-vr',
      title: 'SpatialMind VR',
      tagline: 'UI/UX & Frontend University Course Assignment',
      category: 'academic',
      status: 'academic',
      statusText: '🎓 Academic Course Assignment (Frontend UI/UX)',
      description:
        'A course assignment project exploring frontend UI/UX design for a virtual reality collaborative mind-mapping interface and spatial node interaction model.',
      tags: ['TypeScript', 'React', 'Three.js', 'WebXR', 'Figma UI/UX'],
      github: 'https://github.com/Sabbirhossansani/SpatialMind-VR-UIUX-Project',
      demo: 'https://frame-secure-62405835.figma.site/',
      demoLabel: 'Figma Demo',
      accentColor: 'from-cyan-500/20 to-sky-500/10',
    },
    {
      id: '2d-cityscape',
      title: '2D Cityscape Simulation',
      tagline: 'Computer Graphics University Course Lab Project',
      category: 'academic',
      status: 'repo',
      statusText: '🎓 Academic Course Lab Project',
      description:
        'A 2D cityscape simulation built for a university Computer Graphics course in C++ using OpenGL and GLUT/FreeGLUT. Features weather dynamics (rain, snow) and day/night lighting controls.',
      tags: ['C++', 'OpenGL', 'FreeGLUT', 'DIU Course Project'],
      github: 'https://github.com/Sabbirhossansani/2D-Cityscape-Simulation',
      demo: null,
      demoLabel: null,
      accentColor: 'from-indigo-500/20 to-sky-500/10',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-obsidian-900 border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <FolderGit2 className="w-4 h-4" />
            <span>Software & Course Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-sky-400">Featured Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Real web applications, software prototypes, and academic course assignments.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
              filter === 'all'
                ? 'bg-sky-500/20 text-sky-300 border-sky-400 shadow-md shadow-sky-500/20'
                : 'glass-card text-slate-400 border-sky-500/15 hover:text-sky-300'
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
              filter === 'web'
                ? 'bg-sky-500/20 text-sky-300 border-sky-400 shadow-md shadow-sky-500/20'
                : 'glass-card text-slate-400 border-sky-500/15 hover:text-sky-300'
            }`}
          >
            Web Applications
          </button>
          <button
            onClick={() => setFilter('academic')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
              filter === 'academic'
                ? 'bg-sky-500/20 text-sky-300 border-sky-400 shadow-md shadow-sky-500/20'
                : 'glass-card text-slate-400 border-sky-500/15 hover:text-sky-300'
            }`}
          >
            Academic Course Projects
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-sky-500/20 hover:border-sky-400/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Header Glow Accent */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.accentColor}`} />

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium ${
                        project.status === 'live'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : project.status === 'dev'
                          ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                          : 'bg-sky-500/10 text-sky-300 border border-sky-500/30'
                      }`}
                    >
                      {project.statusText}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sky-400/90 text-xs font-mono mb-4 font-medium">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-xs font-mono bg-slate-900/90 text-sky-300 border border-sky-500/15"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-slate-300 glass-card hover:bg-sky-500/10 hover:text-sky-300 border border-sky-500/20 hover:border-sky-400 transition-all"
                    >
                      <Github className="w-4 h-4 text-sky-400" />
                      <span>GitHub Code</span>
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold text-slate-900 bg-sky-400 hover:bg-sky-300 shadow-md shadow-sky-500/20 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{project.demoLabel}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
