import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Copy, Check, MapPin, Sparkles, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'sabbirsunny63@gmail.com'; // User's personal email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-obsidian-900 border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's <span className="text-sky-400">Connect & Collaborate</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Have a question, collaboration idea, or opportunity? Feel free to send a message or reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-sky-500/20">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email Copy Card */}
                <div className="p-4 rounded-xl bg-obsidian-950/80 border border-sky-500/15 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-sky-400" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs text-slate-400 font-mono font-medium">Personal Email</div>
                      <div className="text-sm font-semibold text-white truncate font-mono">
                        {emailAddress}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 transition-all shrink-0"
                    title="Copy Email to Clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-xl bg-obsidian-950/80 border border-sky-500/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono font-medium">Location</div>
                    <div className="text-sm font-semibold text-white">Dhaka, Bangladesh</div>
                  </div>
                </div>

                {/* GitHub Profile */}
                <div className="pt-4 border-t border-slate-800">
                  <div className="text-xs text-slate-400 font-mono mb-3 uppercase tracking-wider">
                    Official GitHub Profile
                  </div>
                  <a
                    href="https://github.com/Sabbirhossansani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-3 rounded-xl glass-card hover:bg-sky-500/10 border border-sky-500/20 hover:border-sky-400 text-slate-200 hover:text-sky-300 flex items-center justify-center gap-2 text-xs font-semibold transition-all"
                  >
                    <Github className="w-4 h-4 text-sky-400" />
                    <span>github.com/Sabbirhossansani</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-sky-500/20 relative">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                Send a Direct Message
              </h3>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-slate-300 text-sm">
                    Thank you for reaching out, Sabbir Hossan Sani will respond to your message.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full bg-obsidian-950/90 border border-sky-500/20 focus:border-sky-400 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full bg-obsidian-950/90 border border-sky-500/20 focus:border-sky-400 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project / Collaboration Inquiry"
                      className="w-full bg-obsidian-950/90 border border-sky-500/20 focus:border-sky-400 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message here..."
                      className="w-full bg-obsidian-950/90 border border-sky-500/20 focus:border-sky-400 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-slate-900 bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all duration-200 flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
