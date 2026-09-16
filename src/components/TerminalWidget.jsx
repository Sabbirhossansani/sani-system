import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Trash2 } from 'lucide-react';

export default function TerminalWidget() {
  const [history, setHistory] = useState([
    { command: 'welcome', output: 'Welcome to Sabbir Hossan Sani\'s Interactive CLI Shell v1.0.0 [DIU CSE]' },
    { command: 'hint', output: 'Type "help" to see available terminal commands.' },
  ]);
  const [input, setInput] = useState('');
  const terminalBoxRef = useRef(null);

  // Scroll ONLY the internal terminal box, NOT the main window
  useEffect(() => {
    if (terminalBoxRef.current) {
      terminalBoxRef.current.scrollTop = terminalBoxRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim().toLowerCase();
      if (!trimmed) return;

      let response = '';

      switch (trimmed) {
        case 'help':
          response = `Available Commands:
  • whoami    : About Sabbir Hossan Sani & Web/Mobile Passion
  • university: Academic info at Daffodil International University
  • email     : Personal contact email
  • skills    : Technical toolkit & stack
  • projects  : View featured web & academic projects
  • contact   : Get social & contact information
  • clear     : Clear terminal history`;
          break;

        case 'whoami':
          response = 'Sabbir Hossan Sani | CSE Student @ Daffodil International University (DIU). Passionate about designing and building all kinds of modern Web & Mobile Applications and software systems.';
          break;

        case 'university':
          response = 'Institution: Daffodil International University (DIU)\nDepartment: Computer Science & Engineering (CSE)\nMajor: Software Engineering';
          break;

        case 'email':
          response = 'Personal Email: sabbirsunny63@gmail.com';
          break;

        case 'skills':
          response = 'Stack & Toolkit:\n  • Languages: C, C++, TypeScript, JavaScript\n  • Frontend & Web: React 18, HTML5/CSS3, Tailwind CSS\n  • Backend & Cloud: Node.js, Supabase Realtime Sync, REST APIs, Render\n  • Focus: Web & Mobile Application Systems';
          break;

        case 'projects':
          response = 'Featured Repositories:\n  1. HisabMate [TypeScript/React/Supabase] -> Live on Render\n  2. Shundor Product [HTML/JS] -> Live on Render\n  3. BikroyBot [TypeScript/AI State Machine] -> In Active Dev\n  4. 2D Cityscape Simulation [C++/OpenGL] -> DIU Course Lab Project\n  5. SpatialMind VR [TypeScript/Three.js/Figma]';
          break;

        case 'contact':
          response = 'Email    : sabbirsunny63@gmail.com\nGitHub   : https://github.com/Sabbirhossansani\nUni      : Daffodil International University (DIU)';
          break;

        case 'clear':
          setHistory([]);
          setInput('');
          return;

        default:
          response = `Command not recognized: "${trimmed}". Type "help" for valid commands.`;
          break;
      }

      setHistory((prev) => [...prev, { command: input, output: response }]);
      setInput('');
    }
  };

  return (
    <section id="terminal" className="py-24 relative bg-cyber-grid bg-obsidian-800 border-t border-sky-500/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <TerminalIcon className="w-4 h-4" />
            <span>Interactive CLI Shell</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer <span className="text-sky-400">Terminal Shell</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Interact with my portfolio using terminal commands. Try typing <code className="text-sky-300 bg-slate-900 px-2 py-0.5 rounded border border-sky-500/20 font-mono">whoami</code> or <code className="text-sky-300 bg-slate-900 px-2 py-0.5 rounded border border-sky-500/20 font-mono">email</code>!
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="glass-card rounded-2xl border border-sky-500/30 overflow-hidden shadow-2xl shadow-sky-500/10 font-mono text-sm">
          {/* Top Title Bar */}
          <div className="bg-obsidian-900 px-4 py-3 border-b border-sky-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="text-xs text-slate-400 ml-2 font-medium">
                sani@diu-cse: ~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setHistory([])}
                className="text-slate-400 hover:text-sky-400 text-xs flex items-center gap-1 transition-colors"
                title="Clear Terminal"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            </div>
          </div>

          {/* Terminal Screen Output (Internal scroll container only) */}
          <div
            ref={terminalBoxRef}
            className="p-4 sm:p-6 bg-obsidian-950/90 max-h-96 overflow-y-auto space-y-4 text-slate-300"
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.command && (
                  <div className="flex items-center gap-2 text-sky-400">
                    <span className="text-emerald-400">sani@diu-cse:~$</span>
                    <span className="text-white font-bold">{item.command}</span>
                  </div>
                )}
                <div className="whitespace-pre-wrap text-slate-300 text-xs sm:text-sm pl-4 border-l-2 border-sky-500/30 leading-relaxed font-mono">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Terminal Active Input Line */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-emerald-400 shrink-0 font-bold">sani@diu-cse:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="type 'help', 'email', 'projects'..."
                className="w-full bg-transparent border-none outline-none text-sky-300 font-bold focus:ring-0 placeholder:text-slate-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
