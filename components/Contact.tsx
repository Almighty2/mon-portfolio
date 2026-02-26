import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

// Terminal typing animation component
const TypingText: React.FC<{ text: string; delay?: number; className?: string }> = ({ text, delay = 0, className = "" }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return <span className={className}>{displayed}<span className="animate-pulse">|</span></span>;
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const sendEmail = (attempt = 1) => {
      emailjs
        .send(
          "service_15n9djn",
          "template_3ko7k8c",
          {
            name: form.name,        // ← correspond à {{name}}
            message: form.message,  // ← correspond à {{message}}
            time: new Date().toLocaleString('fr-FR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            }),                     // ← correspond à {{time}}
            email: form.email,      // ← pour le Reply To
          },
          "WC4GN0j9pHZvd4YGZ"
        )
        .then(() => {
          setLoading(false);
          setSent(true);
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSent(false), 4000);
        })
        .catch((error) => {
          // Retry automatique 1 fois si erreur réseau
          if (attempt < 2 && error?.message?.includes('fetch')) {
            console.warn(`Tentative ${attempt} échouée, retry...`);
            setTimeout(() => sendEmail(attempt + 1), 2000);
          } else {
            setLoading(false);
            console.error('EmailJS error:', error);
            alert("Erreur réseau. Vérifiez votre connexion et réessayez.");
          }
        });
    };

    sendEmail();
  };

  const fields = [
    { name: "name", label: "name", type: "text", placeholder: "John Doe", varName: "string" },
    { name: "email", label: "email", type: "email", placeholder: "john@example.com", varName: "string" },
  ];

  return (
    <section
      id="contact"
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace" }}
    >
      {/* Google Font import via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap');

        .scanline {
          position: relative;
        }
        .scanline::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,255,128,0.015) 2px,
            rgba(0,255,128,0.015) 4px
          );
          pointer-events: none;
          z-index: 10;
        }

        .terminal-input {
          caret-color: #00ff80;
        }

        .terminal-input:focus {
          outline: none;
          box-shadow: 0 0 0 1px #00ff80, 0 0 20px rgba(0,255,128,0.15);
        }

        .glow-green {
          text-shadow: 0 0 10px rgba(0,255,128,0.6);
        }

        .glow-yellow {
          text-shadow: 0 0 10px rgba(255,200,0,0.6);
        }

        .btn-terminal {
          position: relative;
          overflow: hidden;
        }

        .btn-terminal::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0,255,128,0.15), transparent);
          transition: left 0.4s ease;
        }

        .btn-terminal:hover::before {
          left: 100%;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .code-scroll {
          animation: scroll-up 20s linear infinite;
        }
      `}</style>

      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-8 overflow-hidden">
        
        {/* LEFT: Terminal Form */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="flex-[0.75] relative"
        >
          {/* Terminal window */}
          <div className="rounded-lg overflow-hidden border border-[#00ff80]/20 shadow-[0_0_60px_rgba(0,255,128,0.08)]">
            
            {/* Terminal title bar */}
            <div className="bg-[#0d1117] border-b border-[#00ff80]/15 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
              </div>
              <div className="flex-1 flex justify-center">
                <span className="text-xs text-[#00ff80]/60 tracking-widest">contact.ts — portfolio</span>
              </div>
              <div className="w-14" />
            </div>

            {/* Terminal body */}
            <div className="bg-[#0d1117] p-6 relative scanline">
              
              {/* Comment header */}
              <div className="mb-6 text-sm leading-6">
                <span className="text-[#6a9955]">// Initialize contact module</span><br />
                <span className="text-[#569cd6]">import</span>
                <span className="text-white"> {"{ sendMessage }"} </span>
                <span className="text-[#569cd6]">from</span>
                <span className="text-[#ce9178]"> './utils/mailer'</span>
                <span className="text-white">;</span>
              </div>

              {/* Function signature */}
              <div className="mb-5 text-sm">
                <span className="text-[#dcdcaa]">async function</span>
                <span className="text-[#4ec9b0]"> contactMe</span>
                <span className="text-white">(</span>
                <span className="text-[#9cdcfe]">data</span>
                <span className="text-white">: </span>
                <span className="text-[#4ec9b0]">MessagePayload</span>
                <span className="text-white">) {"{"}</span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="pl-4 space-y-5">
                
                {/* Name field */}
                <div>
                  <div className="text-sm mb-1 flex items-center gap-2">
                    <span className="text-[#c586c0]">const</span>
                    <span className="text-[#9cdcfe]">senderName</span>
                    <span className="text-white">:</span>
                    <span className="text-[#4ec9b0]">string</span>
                    <span className="text-white">=</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder='"Votre nom..."'
                    className="terminal-input w-full bg-[#111827] text-[#00ff80] placeholder-[#00ff80]/25 text-sm py-3 px-4 rounded border border-[#00ff80]/15 transition-all"
                  />
                </div>

                {/* Email field */}
                <div>
                  <div className="text-sm mb-1 flex items-center gap-2">
                    <span className="text-[#c586c0]">const</span>
                    <span className="text-[#9cdcfe]">senderEmail</span>
                    <span className="text-white">:</span>
                    <span className="text-[#4ec9b0]">string</span>
                    <span className="text-white">=</span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder='"votre@email.com"'
                    className="terminal-input w-full bg-[#111827] text-[#00ff80] placeholder-[#00ff80]/25 text-sm py-3 px-4 rounded border border-[#00ff80]/15 transition-all"
                  />
                </div>

                {/* Message field */}
                <div>
                  <div className="text-sm mb-1 flex items-center gap-2">
                    <span className="text-[#c586c0]">const</span>
                    <span className="text-[#9cdcfe]">messageBody</span>
                    <span className="text-white">:</span>
                    <span className="text-[#4ec9b0]">string</span>
                    <span className="text-white">=</span>
                  </div>
                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder='"Décrivez votre projet..."'
                    className="terminal-input w-full bg-[#111827] text-[#00ff80] placeholder-[#00ff80]/25 text-sm py-3 px-4 rounded border border-[#00ff80]/15 transition-all resize-none"
                  />
                </div>

                {/* Return / submit */}
                <div className="text-sm mb-1">
                  <span className="text-[#c586c0]">return</span>
                  <span className="text-[#dcdcaa]"> sendMessage</span>
                  <span className="text-white">({"{ senderName, senderEmail, messageBody }"});</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-terminal bg-transparent border border-[#00ff80]/60 text-[#00ff80] text-sm py-3 px-6 rounded hover:bg-[#00ff80]/10 transition-all flex items-center gap-3 glow-green"
                >
                  <span className="text-[#00ff80]/50">$</span>
                  {loading ? (
                    <span className="animate-pulse">npm run send-message...</span>
                  ) : sent ? (
                    <span className="text-[#27c93f]">✓ Message envoyé avec succès!</span>
                  ) : (
                    <>
                      <span>npm run send-message</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* Closing brace */}
              <div className="mt-5 text-sm text-white">{"}"}</div>

              {/* Prompt line */}
              <div className="mt-4 text-xs text-[#00ff80]/40 flex items-center gap-2">
                <span>user@portfolio:~$</span>
                <span className="w-2 h-4 bg-[#00ff80]/60" style={{ animation: 'blink 1s step-end infinite' }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Code rain / stats panel */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[300px] flex flex-col gap-4"
        >
          {/* Mini terminal output */}
          <div className="rounded-lg border border-[#00ff80]/20 bg-[#0d1117] overflow-hidden flex-1">
            <div className="bg-[#0d1117] border-b border-[#00ff80]/15 px-4 py-2 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-xs text-[#00ff80]/50 tracking-widest ml-2">terminal</span>
            </div>

            <div className="p-4 overflow-hidden h-full relative">
              {/* Scrolling code output */}
              <div className="overflow-hidden" style={{ maxHeight: 'calc(100% - 20px)' }}>
                <div className="code-scroll text-xs leading-6 text-[#00ff80]/70 space-y-0.5">
                  {[
                    { prompt: true, text: "git log --oneline -5" },
                    { hash: "a3f2c1d", msg: "feat: add dark mode toggle" },
                    { hash: "9b1e4f2", msg: "fix: resolve hydration errors" },
                    { hash: "c7d8a3e", msg: "perf: lazy load components" },
                    { hash: "f2e9b5d", msg: "style: update typography scale" },
                    { hash: "1a4c7f8", msg: "chore: update dependencies" },
                    { prompt: true, text: "npm test" },
                    { status: "pass", text: "✓ 42 tests passed (0 failed)" },
                    { status: "info", text: "  Coverage: 94.3%" },
                    { prompt: true, text: "npx lighthouse --url localhost:3000" },
                    { status: "pass", text: "✓ Performance:   98/100" },
                    { status: "pass", text: "✓ Accessibility: 100/100" },
                    { status: "pass", text: "✓ Best Practices: 95/100" },
                    { status: "pass", text: "✓ SEO:            100/100" },
                    { prompt: true, text: "docker ps" },
                    { status: "info", text: "  frontend   Up 3 days   :3000" },
                    { status: "info", text: "  backend    Up 3 days   :8080" },
                    { status: "info", text: "  postgres   Up 3 days   :5432" },
                    { prompt: true, text: "git log --oneline -5" },
                    { hash: "a3f2c1d", msg: "feat: add dark mode toggle" },
                    { hash: "9b1e4f2", msg: "fix: resolve hydration errors" },
                    { hash: "c7d8a3e", msg: "perf: lazy load components" },
                    { hash: "f2e9b5d", msg: "style: update typography scale" },
                    { hash: "1a4c7f8", msg: "chore: update dependencies" },
                    { prompt: true, text: "npm test" },
                    { status: "pass", text: "✓ 42 tests passed (0 failed)" },
                    { status: "info", text: "  Coverage: 94.3%" },
                  ].map((line, i) => (
                    <div key={i} className="flex gap-2">
                      {line.prompt && (
                        <>
                          <span className="text-[#27c93f]">❯</span>
                          <span className="text-white">{line.text}</span>
                        </>
                      )}
                      {line.hash && (
                        <>
                          <span className="text-[#ffbd2e]">{line.hash}</span>
                          <span className="text-[#00ff80]/60">{line.msg}</span>
                        </>
                      )}
                      {line.status === 'pass' && <span className="text-[#27c93f]">{line.text}</span>}
                      {line.status === 'info' && <span className="text-[#569cd6]">{line.text}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "commits", value: "1.2k", icon: "⎇" },
              { label: "repos", value: "47", icon: "◈" },
              { label: "PRs merged", value: "312", icon: "⌥" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-[#0d1117] border border-[#00ff80]/20 rounded-lg p-3 text-center hover:border-[#00ff80]/50 transition-all"
              >
                <div className="text-[#00ff80]/50 text-lg mb-1">{stat.icon}</div>
                <div className="text-[#00ff80] font-bold text-lg glow-green">{stat.value}</div>
                <div className="text-[#00ff80]/40 text-xs tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;