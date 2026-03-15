import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Phone, MapPin, CheckCircle, X } from 'lucide-react';
import { useTheme } from './ThemeContext';

function SuccessModal({ onClose, t }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 30 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative z-10 rounded-3xl p-8 max-w-sm w-full text-center"
        style={{ background: t.isDark ? 'rgba(15,23,42,0.97)' : 'rgba(248,250,252,0.97)', border: `1px solid ${t.cardBorder}`, boxShadow: '0 30px 80px rgba(0,0,0,0.5)', backdropFilter: 'blur(24px)' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-xl transition-all hover:opacity-70" style={{ background: t.tagBg, border: `1px solid ${t.tagBorder}`, color: t.textMuted }}>
          <X size={16} />
        </button>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center"
          style={{ background: t.accentSoftBg, border: `1px solid ${t.accentBorder}`, boxShadow: `0 0 30px ${t.accentGlow}` }}
        >
          <CheckCircle size={32} style={{ color: t.accentText }} />
        </motion.div>
        <h3 className="text-xl font-bold mb-2" style={{ color: t.textPrimary }}>Message Sent! 🎉</h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: t.textMuted }}>
          Thanks for reaching out! I've received your message and will get back to you as soon as possible.
        </p>
        <button onClick={onClose} className="w-full py-3 rounded-2xl text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: t.accentGradient, boxShadow: `0 6px 20px ${t.accentGlow}` }}>
          Close
        </button>
      </motion.div>
    </div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const t = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData();
    formData.append('access_key', 'eb1b7f04-514d-4578-aebb-fe38f88dae86');
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);
    const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
    if (response.ok) {
      setForm({ name: '', email: '', message: '' });
      setShowSuccess(true);
    }
    setSending(false);
  };

  return (
    <>
      <AnimatePresence>
        {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} t={t} />}
      </AnimatePresence>

      <section id="contact" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase mb-2" style={{ color: t.accentText }}>Get in touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: t.textPrimary }}>Contact Me</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="rounded-3xl p-8 backdrop-blur-xl" style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}>
                <h3 className="text-xl font-semibold mb-6" style={{ color: t.textPrimary }}>Let's Connect</h3>
                <p className="text-sm mb-8 leading-relaxed" style={{ color: t.textMuted }}>
                  I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
                </p>

                <div className="space-y-4">
                  {[
                    { href: "mailto:Saiganeshyalamanchidurgarao@gmail.com", Icon: Mail, label: 'Email', value: 'Saiganeshyalamanchidurgarao@gmail.com' },
                    { href: "tel:+918828083662", Icon: Phone, label: 'Phone', value: '+91 8828083662' },
                  ].map(({ href, Icon, label, value }) => (
                    <a key={label} href={href} className="flex items-center gap-4 group">
                      <div className="p-3 rounded-xl transition-all" style={{ background: t.accentSoftBg, border: `1px solid ${t.accentBorder}` }}>
                        <Icon size={18} style={{ color: t.accentText }} />
                      </div>
                      <div>
                        <p className="text-xs" style={{ color: t.textFaint }}>{label}</p>
                        <p className="text-sm break-all transition-colors" style={{ color: t.textSecondary }}>{value}</p>
                      </div>
                    </a>
                  ))}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl" style={{ background: t.accentSoftBg, border: `1px solid ${t.accentBorder}` }}>
                      <MapPin size={18} style={{ color: t.accentText }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: t.textFaint }}>Location</p>
                      <p className="text-sm" style={{ color: t.textSecondary }}>Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  {[
                    { href: "https://github.com/Saiganesh2418", Icon: Github },
                    { href: "https://www.linkedin.com/in/saiganesh-yalamanchi-714801309", Icon: Linkedin },
                    { href: "mailto:Saiganeshyalamanchidurgarao@gmail.com", Icon: Mail },
                  ].map(({ href, Icon }) => (
                    <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="p-3 rounded-xl transition-all duration-300 hover:scale-110"
                      style={{ background: t.tagBg, border: `1px solid ${t.tagBorder}`, color: t.textMuted }}>
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <form onSubmit={handleSubmit} className="rounded-3xl p-8 backdrop-blur-xl space-y-5" style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}>
                {[
                  { label: 'Your Name', key: 'name', type: 'text', placeholder: 'John Doe' },
                  { label: 'Your Email', key: 'email', type: 'email', placeholder: 'john@example.com' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label className="text-sm mb-2 block" style={{ color: t.textMuted }}>{label}</label>
                    <input
                      type={type}
                      required
                      value={form[key]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      placeholder={placeholder}
                      style={{ background: t.inputBg, border: `1px solid ${t.inputBorder}`, color: t.textPrimary }}
                    />
                  </div>
                ))}
                <div>
                  <label className="text-sm mb-2 block" style={{ color: t.textMuted }}>Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    placeholder="Hi Saiganesh, I'd like to..."
                    style={{ background: t.inputBg, border: `1px solid ${t.inputBorder}`, color: t.textPrimary }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 rounded-2xl text-white font-medium flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: t.accentGradient, boxShadow: `0 6px 25px ${t.accentGlow}` }}
                >
                  {sending ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}