import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from './ThemeContext';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('#hero');
  const t = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div
        className={`mx-auto max-w-5xl px-4 sm:px-6 rounded-2xl transition-all duration-500 ${scrolled ? 'shadow-xl' : ''}`}
        style={scrolled ? {
          background: t.navScrollBg,
          backdropFilter: 'blur(24px)',
          border: `1px solid ${t.navBorder}`,
        } : {}}
      >
        <div className="relative flex items-center justify-center h-14">
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="relative px-4 py-1.5 text-sm rounded-xl transition-all duration-300 group overflow-hidden"
                style={{ color: active === link.href ? t.textPrimary : t.textMuted }}
              >
                {active === link.href && (
                  <span
                    className="absolute inset-0 rounded-xl"
                    style={{ background: t.accentSoftBg, border: `1px solid ${t.accentBorder}` }}
                  />
                )}
                <span
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: t.isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)' }}
                />
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden absolute right-0 p-2 rounded-xl border transition-all"
            style={{
              background: t.tagBg,
              backdropFilter: 'blur(12px)',
              border: `1px solid ${t.tagBorder}`,
              color: t.textPrimary,
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden mx-4 mt-2 p-4 rounded-2xl shadow-2xl"
          style={{
            background: t.mobileBg,
            backdropFilter: 'blur(24px)',
            border: `1px solid ${t.navBorder}`,
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="block w-full text-left px-4 py-3 rounded-xl transition-all"
              style={{ color: t.textSecondary }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}