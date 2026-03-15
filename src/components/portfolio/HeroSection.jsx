import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { useTheme } from './ThemeContext';

const PROFILE_IMG = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69b595f292fce08c22147c36/08a459a86_SaiganeshProfilePicAI.jpg";
const RESUME_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69b595f292fce08c22147c36/ed99e91c9_Saiganesh_Resume_2026.pdf";

export default function HeroSection() {
  const t = useTheme();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ background: `${t.accent.from}22` }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: `${t.accent.to}22`, animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ background: `${t.accent.mid}14`, animationDelay: '2s' }} />
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full blur-2xl animate-pulse" style={{ background: `${t.accent.to}14`, animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 left-10 w-52 h-52 rounded-full blur-2xl animate-pulse" style={{ background: `${t.accent.mid}14`, animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-4 font-medium px-4 py-1.5 rounded-full backdrop-blur"
            style={{
              color: t.accentText,
              border: `1px solid ${t.accentBorder}`,
              background: t.accentSoftBg,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ background: t.accentText }} />
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4" style={{ color: t.textPrimary }}>
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: t.accentGradient }}>
                Saiganesh
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full opacity-60" style={{ backgroundImage: t.accentGradient }} />
            </span>
          </h1>

          <p className="text-lg sm:text-xl mb-2 font-light" style={{ color: t.textSecondary }}>
            Web Developer · AI Enthusiast · Innovator
          </p>
          <p className="text-sm sm:text-base mb-8 max-w-lg leading-relaxed" style={{ color: t.textMuted }}>
            Innovation-driven science student with strong interests in technology, entrepreneurship, and problem-solving. Building impactful solutions one project at a time.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => scrollTo('#projects')}
              className="px-6 py-3 rounded-2xl text-white font-semibold hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300"
              style={{ background: t.accentGradient, boxShadow: `0 8px 30px ${t.accentGlow}` }}
            >
              View Projects
            </button>

            <a
              href={RESUME_URL}
              download="Saiganesh_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-semibold hover:scale-105 active:scale-95 transition-all duration-300"
              style={{
                background: t.isDark ? 'rgba(139,92,246,0.85)' : 'rgba(109,40,217,0.9)',
                boxShadow: '0 8px 30px rgba(139,92,246,0.3)',
              }}
            >
              <Download size={16} />
              Download Resume
            </a>

            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-3 rounded-2xl font-semibold hover:scale-105 active:scale-95 transition-all duration-300"
              style={{
                background: t.tagBg,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${t.tagBorder}`,
                color: t.textPrimary,
              }}
            >
              Contact Me
            </button>
          </div>

          <div className="flex gap-3">
            {[
              { href: "https://github.com/Saiganesh2418", icon: Github, label: 'GitHub' },
              { href: "https://www.linkedin.com/in/saiganesh-yalamanchi-714801309", icon: Linkedin, label: 'LinkedIn' },
              { href: "mailto:Saiganeshyalamanchidurgarao@gmail.com", icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
                style={{
                  background: t.tagBg,
                  backdropFilter: 'blur(12px)',
                  border: `1px solid ${t.tagBorder}`,
                  color: t.textMuted,
                }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full border border-dashed animate-spin" style={{ borderColor: `${t.accent.mid}33`, animationDuration: '20s' }} />
            <div className="absolute -inset-8 rounded-full border border-dashed animate-spin" style={{ borderColor: `${t.accent.to}18`, animationDuration: '35s', animationDirection: 'reverse' }} />
            <div className="absolute -inset-2 rounded-3xl blur-xl opacity-40 animate-pulse" style={{ background: t.accentGradient }} />

            <div
              className="relative w-64 h-72 sm:w-72 rounded-3xl overflow-hidden"
              style={{
                boxShadow: `0 25px 60px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.15)`,
                border: `2px solid ${t.accentBorder}`,
              }}
            >
              <img
                src={PROFILE_IMG}
                alt="Saiganesh Durgarao Yalamanchi"
                className="w-full h-full object-cover object-top"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0" style={{ background: t.isDark ? 'linear-gradient(to top, rgba(15,23,42,0.65), transparent)' : 'linear-gradient(to top, rgba(241,245,249,0.4), transparent)' }} />
              <div className="absolute top-0 left-0 right-0 h-1/3 rounded-t-3xl" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)' }} />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('#about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors flex flex-col items-center gap-1"
        style={{ color: t.textFaint }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}