import React from 'react';
import { motion } from 'framer-motion';
import { Github, Cpu, Lightbulb, Train, Shield } from 'lucide-react';
import { useTheme } from './ThemeContext';

const projects = [
  { title: 'AI and Machine Learning Project', description: 'Developed an AI and Machine Learning model to analyze data and improve decision-making.', tags: ['Python', 'Machine Learning', 'Data Analysis'], icon: Cpu, gradient: 'from-cyan-500/20 to-blue-500/20' },
  { title: 'Automated Light System', description: 'Created an automated lighting system that turns lights on or off based on environmental conditions or movement detection.', tags: ['Arduino', 'IoT', 'Sensors'], icon: Lightbulb, gradient: 'from-yellow-500/20 to-orange-500/20' },
  { title: 'Smart Railway System', description: 'Designed a safety system using an ultrasonic sensor and alarm to detect obstacles on railway tracks.', tags: ['Arduino', 'Ultrasonic Sensor', 'Safety'], icon: Train, gradient: 'from-green-500/20 to-emerald-500/20' },
  { title: 'Air Defense System', description: 'Built a prototype air defense model using Arduino and ultrasonic sensors to detect nearby objects and respond automatically.', tags: ['Arduino', 'Ultrasonic', 'Defense Prototype'], icon: Shield, gradient: 'from-purple-500/20 to-pink-500/20' },
];

export default function ProjectsSection() {
  const t = useTheme();
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: t.accentText }}>My work</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: t.textPrimary }}>Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl p-6 backdrop-blur-xl transition-all duration-500 relative overflow-hidden"
              style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-10 translate-x-10`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/5`}>
                    <project.icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg" style={{ color: t.textPrimary }}>{project.title}</h3>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: t.textMuted }}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full" style={{ background: t.tagBg, border: `1px solid ${t.tagBorder}`, color: t.textSecondary }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
          <a
            href="https://github.com/Saiganesh2418"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl backdrop-blur transition-all duration-300"
            style={{ background: t.tagBg, border: `1px solid ${t.tagBorder}`, color: t.textPrimary }}
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}