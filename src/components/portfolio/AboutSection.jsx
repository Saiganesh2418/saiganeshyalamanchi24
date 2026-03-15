import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Rocket, Award, Code, Cpu, Globe } from 'lucide-react';
import { useTheme } from './ThemeContext';

const highlights = [
  { icon: GraduationCap, label: 'Education', value: 'HSC (Class 12) – Rotary English Medium High School & Junior College, Uran, Maharashtra' },
  { icon: MapPin, label: 'Location', value: 'Mumbai, Maharashtra, India' },
  { icon: Rocket, label: 'Focus Areas', value: 'Aerospace & Aircraft, Startups, Research Projects, Entrepreneurship' },
  { icon: Award, label: 'Recognition', value: 'E-Cell Eureka! Junior Participant · National-level Innovation Platform' },
];

const techSkills = [
  { icon: Globe, label: 'Web Dev', detail: 'HTML, CSS, JavaScript' },
  { icon: Code, label: 'Programming', detail: 'C++, Arduino, Python' },
  { icon: Cpu, label: 'Electronics', detail: 'Circuits, Robotics, Drones' },
];

const opportunities = [
  'Interested In Aerospace and Aircraft',
  'Startups & Innovation Programs',
  'Research & Technical Projects',
  'Entrepreneurship Challenges',
  'Internships & Tech Communities',
];

export default function AboutSection() {
  const t = useTheme();

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: t.accentText }}>Get to know me</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: t.textPrimary }}>About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{ background: t.cardBg, backdropFilter: 'blur(24px)', border: `1px solid ${t.cardBorder}`, boxShadow: t.cardShadow }}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${t.accentText}44, transparent)` }} />

            <h3 className="text-xl font-bold mb-5 flex items-center gap-2" style={{ color: t.textPrimary }}>
              <span className="w-2 h-2 rounded-full shadow-lg" style={{ background: t.accentText, boxShadow: `0 0 8px ${t.accentText}` }} />
              Who I Am
            </h3>

            <div className="space-y-3 text-sm leading-relaxed" style={{ color: t.textSecondary }}>
              <p>
                Hi, I'm <span style={{ color: t.textPrimary }} className="font-semibold">Saiganesh Durgarao Yalamanchi</span>, a passionate and innovation-driven student from Mumbai, Maharashtra, currently pursuing Science at <span style={{ color: t.accentText }}>Rotary English Medium High School & Junior College</span>.
              </p>
              <p>
                I have a strong interest in technology, entrepreneurship, and problem-solving, and I actively work on building real-world skills through competitions, projects, and continuous learning.
              </p>
              <p>
                I have participated in national-level innovation and entrepreneurship programs, which has strengthened my entrepreneurial mindset and exposure to high-impact platforms. I am passionate about building solutions that create real-world change.
              </p>

              <div className="pt-2">
                <p className="font-medium mb-2" style={{ color: t.textPrimary }}>My technical skill set includes:</p>
                <ul className="space-y-1" style={{ color: t.textMuted }}>
                  <li className="flex items-start gap-2"><span className="mt-0.5" style={{ color: t.accentText }}>▸</span> Web Development – HTML, CSS, JavaScript</li>
                  <li className="flex items-start gap-2"><span className="mt-0.5" style={{ color: t.accentText }}>▸</span> Programming – C++, Arduino</li>
                  <li className="flex items-start gap-2"><span className="mt-0.5" style={{ color: t.accentText }}>▸</span> Electronics – Circuit design, electrical components</li>
                  <li className="flex items-start gap-2"><span className="mt-0.5" style={{ color: t.accentText }}>▸</span> Robotics & Prototyping</li>
                  <li className="flex items-start gap-2"><span className="mt-0.5" style={{ color: t.accentText }}>▸</span> Beginner in Data Analysis & Insights</li>
                </ul>
              </div>

              <p>
                I enjoy transforming ideas into working models, exploring how technology can solve real problems, and collaborating with like-minded innovators.
              </p>

              <div className="pt-2">
                <p className="font-medium mb-2" style={{ color: t.textPrimary }}>Currently exploring opportunities in:</p>
                <div className="flex flex-wrap gap-2">
                  {opportunities.map((op) => (
                    <span key={op} className="text-xs px-3 py-1 rounded-full" style={{ background: t.accentSoftBg, border: `1px solid ${t.accentBorder}`, color: t.textSecondary }}>
                      {op}
                    </span>
                  ))}
                </div>
              </div>

              <p className="font-medium pt-1" style={{ color: t.accentText }}>
                Let's connect to collaborate, learn, and grow together in the world of technology, innovation, and entrepreneurship. 🚀
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-5 relative overflow-hidden"
                style={{ background: t.cardBg, backdropFilter: 'blur(16px)', border: `1px solid ${t.cardBorder}` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl shrink-0" style={{ background: t.accentSoftBg, border: `1px solid ${t.accentBorder}` }}>
                    <item.icon size={20} style={{ color: t.accentText }} />
                  </div>
                  <div>
                    <p className="text-xs mb-1 uppercase tracking-wider" style={{ color: t.textFaint }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: t.textPrimary }}>{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="grid grid-cols-3 gap-3 pt-2">
              {techSkills.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="rounded-2xl p-4 text-center"
                  style={{ background: t.cardBg, backdropFilter: 'blur(16px)', border: `1px solid ${t.cardBorder}` }}
                >
                  <s.icon size={18} className="mx-auto mb-2" style={{ color: t.accentText }} />
                  <p className="text-xs font-semibold" style={{ color: t.textPrimary }}>{s.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: t.textFaint }}>{s.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}