import { useEffect } from 'react';
import PartnersHeroSection from './components/PartnersHeroSection';
import EcosystemSection from './components/EcosystemSection';
import BanksSection from './components/BanksSection';
import AccountantsSection from './components/AccountantsSection';
import PublicSection from './components/PublicSection';
import StageSection from './components/StageSection';
import './Partners.css';

export default function Partners() {
  useEffect(() => {
    document.body.classList.add('on');
    return () => {
      document.body.classList.remove('on');
    };
  }, []);

  return (
    <div className="partners-page">
      <PartnersHeroSection />
      <EcosystemSection />
      <BanksSection />
      <AccountantsSection />
      <PublicSection />
      <StageSection />
    </div>
  );
}
