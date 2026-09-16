import React, { useState } from 'react';
import { Mail, Send, Github, Copy, Check, MapPin, Sparkles, MessageSquare, Loader2 } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: false });

  const emailAddress = 'sabbirsunny63@gmail.com'; // User's personal email
  const formspreeEndpoint = 'https://formspree.io/f/xaenwgon'; // User's Formspree Live Endpoint

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus({ submitting: true, submitted: false, error: false });

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Direct Portfolio Message',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: false });
        }, 5000);
      } else {
        setStatus({ submitting: false, submitted: false, error: true });
      }
    } catch (err) {
      console.error('Formspree submit error:', err);
      setStatus({ submitting: false, submitted: false, error: true });
    }
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
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
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
                <div className="p-4 rounded-xl bg-slate-900/90 border border-sky-500/25 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0 border border-sky-500/20">
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
                <div className="p-4 rounded-xl bg-slate-900/90 border border-sky-500/25 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0 border border-sky-500/20">
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

              {status.submitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-slate-300 text-sm">
                    Thank you for reaching out! Your message has been sent directly to Sabbir's inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status.error && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center font-mono">
                      Something went wrong. Please try again or use the email copy button.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-200 mb-2">
                        Your Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder=""
                        className="w-full bg-slate-900 border border-sky-500/30 focus:border-sky-400 rounded-xl px-4 py-3 text-sm text-white font-medium outline-none focus:ring-2 focus:ring-sky-400/40 transition-all shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-200 mb-2">
                        Your Email <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder=""
                        className="w-full bg-slate-900 border border-sky-500/30 focus:border-sky-400 rounded-xl px-4 py-3 text-sm text-white font-medium outline-none focus:ring-2 focus:ring-sky-400/40 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder=""
                      className="w-full bg-slate-900 border border-sky-500/30 focus:border-sky-400 rounded-xl px-4 py-3 text-sm text-white font-medium outline-none focus:ring-2 focus:ring-sky-400/40 transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Message <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full bg-slate-900 border border-sky-500/30 focus:border-sky-400 rounded-xl px-4 py-3 text-sm text-white font-medium outline-none focus:ring-2 focus:ring-sky-400/40 transition-all placeholder:text-slate-400 resize-none shadow-inner leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full py-3.5 rounded-xl font-bold text-slate-900 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-300 hover:from-sky-300 hover:to-cyan-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-200 flex items-center justify-center gap-2 mt-2 text-base disabled:opacity-50"
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 text-slate-950 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-slate-950" />
                        <span>Send Message</span>
                      </>
                    )}
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
