import { useEffect } from 'react';
import ProgrammeHeroSection from './components/ProgrammeHeroSection';
import StagesSection from './components/StagesSection';
import YearSection from './components/YearSection';
import MethodSection from './components/MethodSection';
import PricingSection from './components/PricingSection';
import GettingStartedSection from './components/GettingStartedSection';
import FaqSection from './components/FaqSection';
import './Programme.css';

export default function Programme() {
  useEffect(() => {
    // Add reveal animation active class on mount
    document.body.classList.add('on');
    return () => {
      document.body.classList.remove('on');
    };
  }, []);

  return (
    <div className="programme-page">
      <ProgrammeHeroSection />
      <StagesSection />
      <YearSection />
      <MethodSection />
      <PricingSection />
      <GettingStartedSection />
      <FaqSection />
    </div>
  );
}
