import React, { createContext, useContext, useState } from 'react';

export const ACCENTS = {
  cyan:   { name: 'Cyan',   from: '#06b6d4', to: '#8b5cf6', mid: '#22d3ee', dark: '#0891b2' },
  blue:   { name: 'Blue',   from: '#3b82f6', to: '#6366f1', mid: '#60a5fa', dark: '#2563eb' },
  purple: { name: 'Purple', from: '#8b5cf6', to: '#d946ef', mid: '#a78bfa', dark: '#7c3aed' },
  green:  { name: 'Green',  from: '#10b981', to: '#06b6d4', mid: '#34d399', dark: '#059669' },
  orange: { name: 'Orange', from: '#f97316', to: '#eab308', mid: '#fb923c', dark: '#ea580c' },
  pink:   { name: 'Pink',   from: '#ec4899', to: '#f43f5e', mid: '#f472b6', dark: '#db2777' },
  red:    { name: 'Red',    from: '#ef4444', to: '#f97316', mid: '#f87171', dark: '#dc2626' },
  teal:   { name: 'Teal',   from: '#14b8a6', to: '#3b82f6', mid: '#2dd4bf', dark: '#0f766e' },
  amber:  { name: 'Amber',  from: '#f59e0b', to: '#ef4444', mid: '#fbbf24', dark: '#d97706' },
  indigo: { name: 'Indigo', from: '#6366f1', to: '#8b5cf6', mid: '#818cf8', dark: '#4f46e5' },
};

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);
  const [accentKey, setAccentKey] = useState('cyan');
  const [cursorStyle, setCursorStyle] = useState('dot'); // none | dot | ring | crosshair

  const accent = ACCENTS[accentKey];

  const t = {
    isDark,
    accent,
    accentKey,
    cursorStyle,
    setIsDark,
    setAccentKey,
    setCursorStyle,

    // Page
    pageBg: isDark ? '#0f172a' : '#f8fafc',

    // Cards
    cardBg: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.90)',
    cardBorder: isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.12)',
    cardShadow: isDark
      ? '0 20px 60px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.08)'
      : '0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',

    // Text
    textPrimary: isDark ? '#ffffff' : '#0f172a',
    textSecondary: isDark ? '#cbd5e1' : '#1e293b',
    textMuted: isDark ? '#94a3b8' : '#475569',
    textFaint: isDark ? '#64748b' : '#64748b',

    // Nav
    navScrollBg: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.85)',
    navBorder: isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.10)',
    mobileBg: isDark ? 'rgba(15,23,42,0.98)' : 'rgba(248,250,252,0.98)',

    // Elements
    skillTrack: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.07)',
    tagBg: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
    tagBorder: isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.10)',
    divider: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)',
    timelineDotBorder: isDark ? '#0f172a' : '#f1f5f9',
    inputBg: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.95)',
    inputBorder: isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.20)',

    // Accent
    accentText: isDark ? accent.mid : accent.dark,
    accentGradient: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
    accentGlow: `rgba(${hexToRgb(accent.mid)}, 0.30)`,
    accentSubtle: `rgba(${hexToRgb(accent.mid)}, 0.10)`,
    accentBorder: isDark ? `rgba(${hexToRgb(accent.mid)}, 0.30)` : `rgba(${hexToRgb(accent.dark)}, 0.35)`,
    accentSoftBg: isDark
      ? `rgba(${hexToRgb(accent.mid)}, 0.08)`
      : `rgba(${hexToRgb(accent.dark)}, 0.08)`,
  };

  return <ThemeContext.Provider value={t}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}