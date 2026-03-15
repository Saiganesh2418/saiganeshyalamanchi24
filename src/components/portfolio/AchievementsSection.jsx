import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Briefcase } from 'lucide-react';
import { useTheme } from './ThemeContext';

const achievements = [
  { year: '2026', title: 'Campus Ambassador – MyGov India', description: 'Promoted government initiatives and encouraged student participation in digital and civic activities.', type: 'experience' },
  { year: '2025-26', title: 'IIT Kanpur Youth Entrepreneurship Challenge – Finalist', description: 'Gained exposure to national innovation platforms as a finalist.', type: 'award' },
  { year: '2025-26', title: 'School Innovation Marathon', description: 'Participated and showcased innovative project ideas at school level.', type: 'award' },
  { year: '2025', title: 'School Youth Ideathon – Top 2000', description: 'Selected among the top 2000 participants in the national ideathon.', type: 'award' },
  { year: '2025', title: 'Science Project – Awarded First', description: 'Won first place in a science project competition.', type: 'award' },
  { year: '2025', title: 'Campus Ambassador – Microsoft', description: 'Represented Microsoft at campus level and promoted technology learning initiatives.', type: 'experience' },
  { year: '2025', title: 'Google Play Academy – Store Listing Certificate', description: 'Earned certification from Google Play Academy.', type: 'award' },
  { year: '2025', title: "Let'sUpgrade Gold Student Ambassador", description: 'Recognized as a Gold Student Ambassador.', type: 'award' },
  { year: '2025', title: 'Eureka! Junior 25 – Enthusiast Track', description: 'Participated in the Enthusiast Track of Eureka! Junior 25.', type: 'award' },
  { year: '2025', title: 'Student Intern – Scalar School of Technology', description: 'Learned fundamentals of web development including HTML, CSS, and basic website design.', type: 'experience' },
  { year: '2025', title: 'Student Intern – Edunet Foundation', description: 'Completed internship focused on AI and Machine Learning fundamentals.', type: 'experience' },
  { year: '2025', title: 'National Science Quiz', description: 'Participated in a national-level science quiz.', type: 'award' },
];

export default function AchievementsSection() {
  const t = useTheme();
  return (
    <section id="achievements" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: t.accentText }}>My journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: t.textPrimary }}>Achievements & Experience</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px" style={{ background: `linear-gradient(to bottom, ${t.accent.from}80, ${t.accent.to}40, transparent)` }} />

          <div className="space-y-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative pl-16 sm:pl-20"
              >
                <div
                  className="absolute left-4 sm:left-6 top-3 w-4 h-4 rounded-full border-2 shadow-lg"
                  style={{ background: t.accentGradient, borderColor: t.pageBg, boxShadow: `0 0 8px ${t.accentGlow}` }}
                />

                <div className="rounded-2xl p-5 backdrop-blur-xl transition-all duration-300" style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium" style={{ background: t.accentSoftBg, color: t.accentText, border: `1px solid ${t.accentBorder}` }}>{item.year}</span>
                    {item.type === 'award'
                      ? <Trophy size={14} className="text-yellow-500" />
                      : <Briefcase size={14} style={{ color: t.accent.to }} />
                    }
                  </div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: t.textPrimary }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: t.textMuted }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}