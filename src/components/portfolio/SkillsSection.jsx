import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Cpu, Shield, BarChart3, Rocket } from 'lucide-react';
import { useTheme } from './ThemeContext';

const skillCategories = [
  {
    title: 'Programming', icon: Code,
    skills: [{ name: 'Python', level: 75 }, { name: 'C++', level: 60 }, { name: 'Arduino', level: 80 }],
  },
  {
    title: 'Web Development', icon: Globe,
    skills: [{ name: 'HTML', level: 90 }, { name: 'CSS', level: 85 }, { name: 'JavaScript', level: 70 }],
  },
  {
    title: 'AI & Data', icon: Cpu,
    skills: [{ name: 'Artificial Intelligence', level: 70 }, { name: 'Machine Learning', level: 65 }, { name: 'Data Analysis', level: 60 }],
  },
  {
    title: 'Cybersecurity', icon: Shield,
    skills: [{ name: 'Cybersecurity Fundamentals', level: 70 }, { name: 'Data Privacy', level: 65 }],
  },
  {
    title: 'Robotics & Hardware', icon: Rocket,
    skills: [{ name: 'Robotics', level: 80 }, { name: 'Drone Piloting', level: 60 }, { name: 'Electronics & Prototyping', level: 75 }],
  },
  {
    title: 'Other Skills', icon: BarChart3,
    skills: [{ name: 'Digital Marketing', level: 65 }, { name: 'Entrepreneurship', level: 75 }, { name: 'Community Building', level: 70 }],
  },
];

function SkillBar({ name, level, delay, t }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm" style={{ color: t.textSecondary }}>{name}</span>
        <span className="text-xs" style={{ color: t.textFaint }}>{level}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: t.skillTrack }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: t.accentGradient }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const t = useTheme();
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: t.accentText }}>What I know</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: t.textPrimary }}>Skills & Expertise</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="rounded-3xl p-6 backdrop-blur-xl transition-all duration-300 group"
              style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl transition-all" style={{ background: t.accentSoftBg, border: `1px solid ${t.accentBorder}` }}>
                  <cat.icon size={18} style={{ color: t.accentText }} />
                </div>
                <h3 className="font-semibold" style={{ color: t.textPrimary }}>{cat.title}</h3>
              </div>
              {cat.skills.map((skill, idx) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={catIdx * 0.1 + idx * 0.15} t={t} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}