import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (ringRef.current) ringRef.current.style.width = '48px';
      if (ringRef.current) ringRef.current.style.height = '48px';
      if (ringRef.current) ringRef.current.style.opacity = '0.6';
    };
    const onLeave = () => {
      if (ringRef.current) ringRef.current.style.width = '32px';
      if (ringRef.current) ringRef.current.style.height = '32px';
      if (ringRef.current) ringRef.current.style.opacity = '0.4';
    };

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', move);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Main dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: 'transform', transform: 'translate(-50%, -50%)' }}
      >
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #38bdf8, #8b5cf6)',
            boxShadow: '0 0 10px #38bdf8, 0 0 20px #38bdf8aa',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ willChange: 'transform', transform: 'translate(-50%, -50%)' }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: '1.5px solid rgba(56,189,248,0.5)',
            background: 'rgba(56,189,248,0.04)',
            backdropFilter: 'blur(2px)',
            transform: 'translate(-50%, -50%)',
            transition: 'width 0.3s ease, height 0.3s ease',
            boxShadow: '0 0 15px rgba(56,189,248,0.15)',
          }}
        />
      </div>
    </>
  );
}