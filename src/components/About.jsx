import React from 'react';
import { GraduationCap, CheckCircle2, Terminal, Globe, Smartphone, Layers } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Globe,
      title: 'Web Application Systems',
      desc: 'Designing and building responsive, full-stack web applications, management platforms, and cloud-synced web tools.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Interest',
      desc: 'Eager to build cross-platform mobile applications that complement web ecosystems and provide smooth user experiences.',
    },
    {
      icon: Layers,
      title: 'Software System Architecture',
      desc: 'Focusing on clean code, database design, REST APIs, and scalable software development principles.',
    },
    {
      icon: GraduationCap,
      title: 'Academic CSE Training',
      desc: 'Pursuing BSc in CSE at Daffodil International University (DIU), studying Algorithms, Data Structures, OOP, and DBMS.',
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-obsidian-900 border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background & Goals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-sky-400">My Journey</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            I am a <strong>Computer Science & Engineering (CSE)</strong> student at <strong>Daffodil International University (DIU)</strong>, majoring in <strong>Software Engineering</strong>.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-sky-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <GraduationCap className="w-32 h-32 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                Daffodil International University (DIU) Student
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                My passion lies in <strong>Web & Mobile Application Development</strong>. I enjoy exploring how software systems work and building applications across both web and mobile platforms that solve real-world needs.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Through my Software Engineering major at DIU, I am sharpening my problem-solving skills, software architecture principles, and development stack to build robust digital solutions.
              </p>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Full-Stack Web Development</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Mobile Application Interest</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Database & System Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>DIU CSE Software Engineering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-sky-500/20 hover:border-sky-400/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all">
                    <Icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
