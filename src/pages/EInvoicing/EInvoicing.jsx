import { useEffect } from 'react';
import EInvoicingHeroSection from './components/EInvoicingHeroSection';
import ConfirmedSection from './components/ConfirmedSection';
import ReadinessSection from './components/ReadinessSection';
import MtdSection from './components/MtdSection';
import NowSection from './components/NowSection';
import CheckSection from './components/CheckSection';
import './EInvoicing.css';

export default function EInvoicing() {
  useEffect(() => {
    document.body.classList.add('on');
    return () => {
      document.body.classList.remove('on');
    };
  }, []);

  return (
    <div className="einvoicing-page">
      <EInvoicingHeroSection />
      <ConfirmedSection />
      <ReadinessSection />
      <MtdSection />
      <NowSection />
      <CheckSection />
    </div>
  );
}
