import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

export default function CursorEffect() {
  const { cursorStyle, accent } = useTheme();
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  const accentFrom = accent?.from || '#06b6d4';
  const accentTo = accent?.to || '#8b5cf6';
  const accentMid = accent?.mid || '#22d3ee';

  useEffect(() => {
    // Skip entirely on touch/mobile devices
    if (cursorStyle === 'none') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    const trailEl = trailRef.current;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursor && cursorStyle !== 'ring') {
        cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };

    const animate = () => {
      trail.current.x += (mouse.current.x - trail.current.x) * 0.12;
      trail.current.y += (mouse.current.y - trail.current.y) * 0.12;
      if (trailEl) {
        trailEl.style.transform = `translate(${trail.current.x - 20}px, ${trail.current.y - 20}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = (e) => {
      if (e.target.closest('button, a, input, textarea')) {
        cursor?.classList.add('cursor-hover');
        trailEl?.classList.add('trail-hover');
      }
    };
    const onLeave = (e) => {
      if (e.target.closest('button, a, input, textarea')) {
        cursor?.classList.remove('cursor-hover');
        trailEl?.classList.remove('trail-hover');
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onEnter);
    window.addEventListener('mouseout', onLeave);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onEnter);
      window.removeEventListener('mouseout', onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [cursorStyle]);

  if (cursorStyle === 'none') {
    return (
      <style>{`
        @media (min-width: 769px) { * { cursor: auto !important; } }
      `}</style>
    );
  }

  if (cursorStyle === 'crosshair') {
    return (
      <style>{`
        @media (min-width: 769px) { * { cursor: crosshair !important; } }
      `}</style>
    );
  }

  if (cursorStyle === 'ring') {
    return (
      <>
        <style>{`
          @media (min-width: 769px) {
            * { cursor: none !important; }
            .cursor-trail-only {
              position: fixed; top: 0; left: 0; width: 40px; height: 40px;
              border-radius: 50%; pointer-events: none; z-index: 99999;
              border: 2px solid ${accentMid}99;
              background: ${accentMid}08;
              transition: width 0.3s, height 0.3s, border-color 0.3s;
              will-change: transform;
            }
            .cursor-trail-only.trail-hover {
              width: 52px; height: 52px;
              border-color: ${accentTo}cc;
              background: ${accentTo}0a;
            }
          }
          @media (max-width: 768px) {
            * { cursor: auto !important; }
            .cursor-trail-only { display: none; }
          }
        `}</style>
        <div ref={trailRef} className="cursor-trail-only" />
      </>
    );
  }

  // dot mode (default)
  return (
    <>
      <style>{`
        @media (min-width: 769px) {
          * { cursor: none !important; }
          .cursor-dot {
            position: fixed; top: 0; left: 0; width: 12px; height: 12px;
            border-radius: 50%; pointer-events: none; z-index: 99999;
            background: radial-gradient(circle, ${accentMid}, ${accentTo});
            box-shadow: 0 0 10px ${accentMid}, 0 0 20px ${accentTo}aa;
            transition: width 0.2s, height 0.2s, background 0.2s, box-shadow 0.2s;
            will-change: transform;
          }
          .cursor-dot.cursor-hover {
            width: 18px; height: 18px;
            background: radial-gradient(circle, #fff, ${accentMid});
            box-shadow: 0 0 15px ${accentMid}, 0 0 30px ${accentTo};
          }
          .cursor-trail {
            position: fixed; top: 0; left: 0; width: 40px; height: 40px;
            border-radius: 50%; pointer-events: none; z-index: 99998;
            border: 1.5px solid ${accentMid}66;
            background: ${accentMid}06;
            transition: width 0.3s, height 0.3s, border-color 0.3s;
            will-change: transform;
          }
          .cursor-trail.trail-hover {
            width: 52px; height: 52px;
            border-color: ${accentTo}99;
            background: ${accentTo}08;
          }
        }
        @media (max-width: 768px) {
          * { cursor: auto !important; }
          .cursor-dot, .cursor-trail { display: none; }
        }
      `}</style>
      <div ref={cursorRef} className="cursor-dot" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
}