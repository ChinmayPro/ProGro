import Button from '@/components/ui/Button/Button';
import './EinvoicingSection.css';

export default function EinvoicingSection() {
  return (
    <section id="e-invoicing">
      <div className="wrap">
        <div className="lbl">Regulatory horizon</div>
        <div className="head" style={{ marginTop: '16px' }}>
          <h2>Invoicing rules are changing</h2>
          <div>
            <p className="lede">
              E-invoicing becomes compulsory for all VAT invoices in 2029, and a PDF will not count. Sooner than that, Making Tax Digital covers businesses over £30,000 from April 2027 and over £20,000 from April 2028. We work to the nearest deadline first.
            </p>
          </div>
        </div>

        <div className="tl">
          <div className="tl-row now">
            <span className="when">NOW → 2027</span>
            <span className="what">Making Tax Digital widens: over £30,000 from April 2027, over £20,000 from April 2028</span>
            <span className="tag">The real deadline</span>
          </div>
          <div className="tl-row">
            <span className="when">2027</span>
            <span className="what">Late payment law expected in force — 60-day maximum terms, automatic statutory interest</span>
            <span className="tag">Cash cycle changes</span>
          </div>
          <div className="tl-row">
            <span className="when">2029</span>
            <span className="what">E-invoicing compulsory for all VAT invoices. PDFs, Word files and scans are explicitly excluded</span>
            <span className="tag">Structural</span>
          </div>
        </div>

        <div className="cta-row">
          <Button href="#e-invoicing">What's confirmed, and what isn't</Button>
          <a className="tlink" href="#check">
            Check where you stand
          </a>
        </div>
      </div>
    </section>
  );
}
