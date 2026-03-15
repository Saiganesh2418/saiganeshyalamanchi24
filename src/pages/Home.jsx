import React from 'react';
import { ThemeProvider, useTheme } from '../components/portfolio/ThemeContext';
import Navbar from '../components/portfolio/Navbar';
import CursorEffect from '../components/portfolio/CursorEffect';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import CertificatesSection from '../components/portfolio/CertificatesSection';
import AchievementsSection from '../components/portfolio/AchievementsSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';
import SettingsPanel from '../components/portfolio/SettingsPanel';

function PortfolioContent() {
  const t = useTheme();

  return (
    <div
      className="min-h-screen selection:bg-cyan-500/30 transition-colors duration-500"
      style={{ backgroundColor: t.pageBg, color: t.textPrimary }}
    >
      <CursorEffect />

      {/* Grid pattern background — hidden on mobile for performance */}
      <div
        className="fixed inset-0 pointer-events-none hidden sm:block"
        style={{
          backgroundImage: t.isDark
            ? 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)'
            : 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: t.isDark ? 0.5 : 1,
        }}
      />

      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
      <SettingsPanel />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}