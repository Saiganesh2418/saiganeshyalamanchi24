import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useTheme } from './ThemeContext';

const certificates = [
  { title: 'SOAR - AI to Aspire', issuer: 'MSDE Skill India', date: 'Jan 2026' },
  { title: 'Data Privacy Analyst Certificate', issuer: 'Reliance Foundation', date: 'Jan 2026' },
  { title: 'Introduction to Data Science', issuer: 'Cisco Networking Academy', date: 'Dec 2025' },
  { title: 'Advanced Cybersecurity Awareness Quiz 2025', issuer: 'IIT Kanpur', date: 'Oct 2025' },
  { title: 'Remote Sensing Data Analytics for Crop Production', issuer: 'IIRS, ISRO', date: 'Sep 2025' },
  { title: 'AI & Machine Learning Internship', issuer: 'Edunet Foundation', date: 'Aug 2025' },
  { title: 'Cybersecurity Fundamental', issuer: 'IBM', date: 'Jul 2025' },
  { title: 'Cyber Defender Program', issuer: 'Ministry of Electronics & IT', date: 'Jun 2025' },
  { title: 'Quantum Computing', issuer: 'IIT Roorkee', date: 'Apr 2025' },
  { title: 'SEBI - Investor Certification Examination', issuer: 'SEBI & NISM', date: 'Mar 2025' },
  { title: 'Space Technology for Disaster Risk Reduction', issuer: 'IIRS, ISRO', date: 'Mar 2025' },
  { title: 'Space Exploration Technology: An Overview', issuer: 'IIRS, ISRO', date: 'May 2025' },
  { title: 'Foundations of AI Internship', issuer: 'Edunet Foundation', date: 'May 2025' },
  { title: 'Introduction to Cybersecurity', issuer: 'HP', date: 'Mar 2025' },
  { title: 'Robotics', issuer: 'Infosys', date: 'Feb 2024' },
];

export default function CertificatesSection() {
  const t = useTheme();
  return (
    <section id="certificates" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: t.accentText }}>Certifications</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: t.textPrimary }}>Courses & Certificates</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl p-5 backdrop-blur-xl transition-all duration-300 relative overflow-hidden"
              style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-2 right-[-20px] w-20 text-center transform rotate-45 text-[8px] text-white py-0.5" style={{ background: t.accentGradient }}>
                  CERT
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl shrink-0 mt-0.5" style={{ background: t.accentSoftBg, border: `1px solid ${t.accentBorder}` }}>
                  <Award size={16} style={{ color: t.accentText }} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-snug mb-1 truncate" style={{ color: t.textPrimary }} title={cert.title}>{cert.title}</h3>
                  <p className="text-xs" style={{ color: t.textMuted }}>{cert.issuer}</p>
                  <p className="text-xs mt-1" style={{ color: t.textFaint }}>{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}