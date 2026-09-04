import { useState, useEffect } from 'react';
import { SECTORS_DATA } from '@/utils/constants';
import HeroSection from './components/HeroSection';
import SectorsSection from './components/SectorsSection';
import CalculatorSection from './components/CalculatorSection';
import ProgrammeSection from './components/ProgrammeSection';
import StandardSection from './components/StandardSection';
import EinvoicingSection from './components/EinvoicingSection';
import PartnersSection from './components/PartnersSection';
import CloseSection from './components/CloseSection';
import './Home.css';

export default function Home() {
  const [selectedSectorIndex, setSelectedSectorIndex] = useState(0);

  useEffect(() => {
    document.body.classList.add('on');
    return () => {
      document.body.classList.remove('on');
    };
  }, []);

  const handleSelectSector = (index) => {
    setSelectedSectorIndex(index);
  };

  const currentSector = SECTORS_DATA[selectedSectorIndex];

  return (
    <div className="home-page">
      <HeroSection />
      <SectorsSection
        selectedSectorIndex={selectedSectorIndex}
        onSelectSector={handleSelectSector}
      />
      <CalculatorSection selectedSector={currentSector} />
      <ProgrammeSection />
      <StandardSection />
      <EinvoicingSection />
      <PartnersSection />
      <CloseSection />
    </div>
  );
}
