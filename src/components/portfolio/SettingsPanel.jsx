import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Sun, Moon, MousePointer, Circle, Crosshair, Ban } from 'lucide-react';
import { useTheme, ACCENTS } from './ThemeContext';

const CURSOR_OPTIONS = [
  { key: 'none',       label: 'None',       Icon: Ban },
  { key: 'dot',        label: 'Dot',        Icon: MousePointer },
  { key: 'ring',       label: 'Ring',       Icon: Circle },
  { key: 'crosshair',  label: 'Crosshair',  Icon: Crosshair },
];

export default function SettingsPanel() {
  const [open, setOpen] = useState(false);
  const t = useTheme();

  const panelBg = t.isDark
    ? 'rgba(15,23,42,0.97)'
    : 'rgba(248,250,252,0.97)';
  const panelBorder = t.isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.10)';
  const panelShadow = t.isDark
    ? '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)'
    : '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.06)';

  return (
    <>
      {/* Gear button */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.08, rotate: 30 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 right-6 z-[9990] w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl"
        style={{
          background: t.accentGradient,
          boxShadow: `0 8px 28px ${t.accentGlow}`,
        }}
        aria-label="Open settings"
      >
        <Settings size={20} color="#fff" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9991]"
              style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(4px)' }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 80, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed bottom-6 right-6 z-[9992] w-72 rounded-3xl p-6"
              style={{
                background: panelBg,
                border: `1px solid ${panelBorder}`,
                boxShadow: panelShadow,
                backdropFilter: 'blur(24px)',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div
                    className="p-1.5 rounded-lg"
                    style={{ background: t.accentSubtle, border: `1px solid ${t.accentBorder}` }}
                  >
                    <Settings size={14} style={{ color: t.accentText }} />
                  </div>
                  <span className="font-bold text-sm" style={{ color: t.textPrimary }}>Customize</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-xl transition-all hover:opacity-70"
                  style={{ background: t.tagBg, border: `1px solid ${t.tagBorder}`, color: t.textMuted }}
                >
                  <X size={14} />
                </button>
              </div>

              {/* Divider */}
              <div className="mb-5" style={{ height: 1, background: t.divider }} />

              {/* Dark / Light */}
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: t.textFaint }}>
                  Appearance
                </p>
                <div
                  className="flex rounded-2xl p-1 gap-1"
                  style={{ background: t.skillTrack, border: `1px solid ${t.tagBorder}` }}
                >
                  {[
                    { label: 'Dark', value: true, Icon: Moon },
                    { label: 'Light', value: false, Icon: Sun },
                  ].map(({ label, value, Icon }) => {
                    const active = t.isDark === value;
                    return (
                      <button
                        key={label}
                        onClick={() => t.setIsDark(value)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300"
                        style={
                          active
                            ? { background: t.accentGradient, color: '#fff', boxShadow: `0 4px 12px ${t.accentGlow}` }
                            : { color: t.textMuted }
                        }
                      >
                        <Icon size={13} />
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Accent Colors */}
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: t.textFaint }}>
                  Accent Color
                </p>
                <div className="grid grid-cols-5 gap-2">
                  {Object.entries(ACCENTS).map(([key, val]) => {
                    const active = t.accentKey === key;
                    return (
                      <button
                        key={key}
                        onClick={() => t.setAccentKey(key)}
                        title={val.name}
                        className="relative w-full aspect-square rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
                        style={{
                          background: `linear-gradient(135deg, ${val.from}, ${val.to})`,
                          boxShadow: active ? `0 0 0 2px #fff, 0 0 0 4px ${val.mid}` : 'none',
                          transform: active ? 'scale(1.15)' : undefined,
                        }}
                      >
                        {active && (
                          <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-black">✓</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Cursor Style */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: t.textFaint }}>
                  Cursor Style
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {CURSOR_OPTIONS.map(({ key, label, Icon }) => {
                    const active = t.cursorStyle === key;
                    return (
                      <button
                        key={key}
                        onClick={() => t.setCursorStyle(key)}
                        title={label}
                        className="flex flex-col items-center gap-1.5 py-2.5 rounded-2xl text-xs font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                        style={
                          active
                            ? {
                                background: t.accentSoftBg,
                                border: `1.5px solid ${t.accentBorder}`,
                                color: t.accentText,
                                boxShadow: `0 4px 12px ${t.accentGlow}`,
                              }
                            : {
                                background: t.tagBg,
                                border: `1px solid ${t.tagBorder}`,
                                color: t.textMuted,
                              }
                        }
                      >
                        <Icon size={16} />
                        <span style={{ fontSize: '10px' }}>{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}