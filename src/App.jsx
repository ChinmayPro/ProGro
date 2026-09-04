import React, { useState, useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Evidence from '@/pages/Evidence/Evidence';
import Partners from '@/pages/Partners/Partners';
import Programme from '@/pages/Programme/Programme';
import EInvoicing from '@/pages/EInvoicing/EInvoicing';
import './App.css';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('about') || path.includes('contact') || hash === '#about' || hash === '#contact') {
      return 'about';
    }
    if (path.includes('evidence') || hash.startsWith('#evidence') || hash.startsWith('#latepayment')) {
      return 'evidence';
    }
    if (path.includes('partners') || hash.startsWith('#partners')) {
      return 'partners';
    }
    if (path.includes('programme') || hash.startsWith('#programme') || hash.startsWith('#stages') || hash.startsWith('#year') || hash.startsWith('#method') || hash.startsWith('#pricing') || hash.startsWith('#start') || hash.startsWith('#faq')) {
      return 'programme';
    }
    if (path.includes('e-invoicing') || path.includes('einvoicing') || hash.startsWith('#e-invoicing') || hash.startsWith('#einvoicing') || hash.startsWith('#confirmed') || hash.startsWith('#readiness') || hash.startsWith('#mtd') || hash.startsWith('#now') || hash.startsWith('#check')) {
      return 'einvoicing';
    }
    return 'home';
  });

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('about') || path.includes('contact') || hash === '#about' || hash === '#contact') {
        setCurrentRoute('about');
      } else if (path.includes('evidence') || hash.startsWith('#evidence') || hash.startsWith('#latepayment')) {
        setCurrentRoute('evidence');
      } else if (path.includes('partners') || hash.startsWith('#partners')) {
        setCurrentRoute('partners');
      } else if (path.includes('programme') || hash.startsWith('#programme') || hash.startsWith('#stages') || hash.startsWith('#year') || hash.startsWith('#method') || hash.startsWith('#pricing') || hash.startsWith('#start') || hash.startsWith('#faq')) {
        setCurrentRoute('programme');
      } else if (path.includes('e-invoicing') || path.includes('einvoicing') || hash.startsWith('#e-invoicing') || hash.startsWith('#einvoicing') || hash.startsWith('#confirmed') || hash.startsWith('#readiness') || hash.startsWith('#mtd') || hash.startsWith('#now') || hash.startsWith('#check')) {
        setCurrentRoute('einvoicing');
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'about':
        return <About />;
      case 'evidence':
        return <Evidence />;
      case 'partners':
        return <Partners />;
      case 'programme':
        return <Programme />;
      case 'einvoicing':
        return <EInvoicing />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <MainLayout currentRoute={currentRoute}>
      {renderCurrentPage()}
    </MainLayout>
  );
}
