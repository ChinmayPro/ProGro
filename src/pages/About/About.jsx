import React, { useEffect } from 'react';
import AboutHeroSection from './components/AboutHeroSection';
import WhySection from './components/WhySection';
import PrinciplesSection from './components/PrinciplesSection';
import WhoSection from './components/WhoSection';
import ContactSection from './components/ContactSection';
import './About.css';

export default function About() {
  useEffect(() => {
    document.body.classList.add('on');
    return () => {
      document.body.classList.remove('on');
    };
  }, []);

  return (
    <div className="about-page">
      <AboutHeroSection />
      <WhySection />
      <PrinciplesSection />
      <WhoSection />
      <ContactSection />
    </div>
  );
}
