import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <div className="brand">
              <svg className="glyph" viewBox="0 0 19 19" aria-hidden="true">
                <rect x="0" y="1" width="19" height="2.6" rx="1.3" />
                <rect x="0" y="8" width="13" height="2.6" rx="1.3" />
                <rect x="0" y="15" width="7" height="2.6" rx="1.3" />
              </svg>
              Progro
            </div>
            <p>We implement AI inside small businesses that will never employ an AI team. Built in London, working across the UK.</p>
          </div>
          <div>
            <h4>Programme</h4>
            <ul>
              <li><a href="/programme">How it works</a></li>
              <li><a href="#method">The measurement standard</a></li>
              <li><a href="#pricing">Pricing and terms</a></li>
              <li><a href="#year">A year, month by month</a></li>
              <li><a href="#faq">Common questions</a></li>
            </ul>
          </div>
          <div>
            <h4>Sectors</h4>
            <ul>
              <li><a href="#sectors">Construction and trades</a></li>
              <li><a href="#sectors">Professional services</a></li>
              <li><a href="#sectors">Wholesale and distribution</a></li>
              <li><a href="#calc">Impact estimator</a></li>
            </ul>
          </div>
          <div>
            <h4>Regulation</h4>
            <ul>
              <li><a href="/e-invoicing">E-invoicing 2029</a></li>
              <li><a href="#mtd">Making Tax Digital</a></li>
              <li><a href="#check">Readiness check</a></li>
              <li><a href="#latepayment">Late payment law</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Progro</a></li>
              <li><a href="/evidence">Evidence base</a></li>
              <li><a href="/partners">Partner with us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>Progro is a product of Progro Digital Ltd, registered in England and Wales, company number 13465319. Registered office: 113 Masthead House, 14 Rope Terrace, London E16 2PH.</span>
          <span>Research figures cited to source. Worked examples are illustrative.</span>
        </div>
      </div>
    </footer>
  );
}
