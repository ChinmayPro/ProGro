import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ currentRoute = 'home' }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1020) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getCtaConfig = (route) => {
    switch (route) {
      case 'einvoicing':
        return {
          text: 'Readiness check',
          href: route === 'einvoicing' ? '#check' : '/e-invoicing#check',
        };
      case 'about':
        return {
          text: 'Contact',
          href: route === 'about' ? '#contact' : '/about#contact',
        };
      case 'programme':
        return {
          text: 'Book an assessment',
          href: route === 'programme' ? '#start' : '/programme#start',
        };
      case 'partners':
        return {
          text: 'Talk to us',
          href: route === 'partners' ? '#stage' : '/partners#stage',
        };
      case 'evidence':
        return {
          text: 'Book an assessment',
          href: '/about#contact',
        };
      case 'home':
      default:
        return {
          text: 'Book an assessment',
          href: '/about#contact',
        };
    }
  };

  const cta = getCtaConfig(currentRoute);

  return (
    <div className={`nav ${isOpen ? 'is-open' : ''}`}>
      <div className="nav-in">
        <a className="brand" href="/" onClick={closeMenu}>
          <svg className="glyph" viewBox="0 0 19 19" aria-hidden="true">
            <rect x="0" y="1" width="19" height="2.6" rx="1.3" />
            <rect x="0" y="8" width="13" height="2.6" rx="1.3" />
            <rect x="0" y="15" width="7" height="2.6" rx="1.3" />
          </svg>
          Progro
        </a>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className="hamburger-icon">
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </span>
        </button>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a
            href="/programme"
            className={currentRoute === 'programme' ? 'active' : undefined}
            aria-current={currentRoute === 'programme' ? 'page' : undefined}
            onClick={closeMenu}
          >
            The programme
          </a>
          <a
            href="/e-invoicing"
            className={currentRoute === 'einvoicing' ? 'active' : undefined}
            aria-current={currentRoute === 'einvoicing' ? 'page' : undefined}
            onClick={closeMenu}
          >
            E-invoicing 2029
          </a>
          <a
            href="/evidence"
            className={currentRoute === 'evidence' ? 'active' : undefined}
            aria-current={currentRoute === 'evidence' ? 'page' : undefined}
            onClick={closeMenu}
          >
            Evidence
          </a>
          <a
            href="/partners"
            className={currentRoute === 'partners' ? 'active' : undefined}
            aria-current={currentRoute === 'partners' ? 'page' : undefined}
            onClick={closeMenu}
          >
            Partners
          </a>
          <a
            href="/about"
            className={currentRoute === 'about' ? 'active' : undefined}
            aria-current={currentRoute === 'about' ? 'page' : undefined}
            onClick={closeMenu}
          >
            About
          </a>
          <a className="ncta mobile-ncta" href={cta.href} onClick={closeMenu}>
            {cta.text}
          </a>
        </nav>

        <a className="ncta desktop-ncta" href={cta.href}>
          {cta.text}
        </a>
      </div>
    </div>
  );
}



