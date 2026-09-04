import { useEffect } from 'react';
import EvidenceHeroSection from './components/EvidenceHeroSection';
import AdoptionSection from './components/AdoptionSection';
import LatePaymentSection from './components/LatePaymentSection';
import HonestSection from './components/HonestSection';
import SourcesSection from './components/SourcesSection';
import './Evidence.css';

export default function Evidence() {
  useEffect(() => {
    document.body.classList.add('on');
    return () => {
      document.body.classList.remove('on');
    };
  }, []);

  return (
    <div className="evidence-page">
      <EvidenceHeroSection />
      <AdoptionSection />
      <LatePaymentSection />
      <HonestSection />
      <SourcesSection />
    </div>
  );
}
