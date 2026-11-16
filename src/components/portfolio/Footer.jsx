import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';
import { useTheme } from './ThemeContext';

const RESUME_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69b595f292fce08c22147c36/ed99e91c9_Saiganesh_Resume_2026.pdf";

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const t = useTheme();
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/4 right-1/4 h-px" style={{ background: `linear-gradient(to right, transparent, ${t.accentText}55, transparent)` }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: `${t.accent.from}08` }} />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: `${t.accent.to}08` }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-black mb-3 bg-clip-text text-transparent inline-block" style={{ backgroundImage: t.accentGradient }}>
              Saiganesh Yalamanchi
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: t.textMuted }}>
              Web Developer · AI Enthusiast from Mumbai, Maharashtra. Building the future one project at a time. 🚀
            </p>
            <a
              href={RESUME_URL}
              download="Saiganesh_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ background: t.accentGradient, boxShadow: `0 6px 20px ${t.accentGlow}` }}
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: t.textPrimary }}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)} className="text-sm transition-colors flex items-center gap-2 group" style={{ color: t.textMuted }}>
                    <span className="w-1 h-1 rounded-full transition-colors" style={{ background: t.textFaint }} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: t.textPrimary }}>Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:Saiganeshyalamanchidurgarao@gmail.com" className="flex items-start gap-2 text-xs transition-colors" style={{ color: t.textMuted }}>
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  <span className="break-all">Saiganeshyalamanchidurgarao@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs" style={{ color: t.textMuted }}>
                <MapPin size={14} className="shrink-0" />
                Mumbai, Maharashtra, India
              </li>
            </ul>

            <div className="flex gap-3 mt-5">
              {[
                { href: "https://github.com/Saiganesh2418", Icon: Github },
                { href: "https://www.linkedin.com/in/saiganesh-yalamanchi-714801309", Icon: Linkedin },
                { href: "mailto:Saiganeshyalamanchidurgarao@gmail.com", Icon: Mail },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110"
                  style={{ background: t.tagBg, border: `1px solid ${t.tagBorder}`, color: t.textMuted }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: `1px solid ${t.divider}` }}>
          <p className="text-xs" style={{ color: t.textFaint }}>
            © {new Date().getFullYear()} Saiganesh Durgarao Yalamanchi. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: t.accentText }}>Last updated on 3 April 2026</p>
        </div>
      </div>
    </footer>
  );
}
