import Button from '@/components/ui/Button/Button';
import './EInvoicingHeroSection.css';

export default function EInvoicingHeroSection() {
  return (
    <div className="phead">
      <div className="lattice" aria-hidden="true"></div>
      <div className="wrap">
        <div className="lbl">Regulation · updated September 2026</div>
        <h1>E-invoicing in 2029: what is confirmed, and what to do now</h1>
        <p className="sub">
          A plain summary of the new rules for people running small businesses, including which parts of the official case come from software company research.
        </p>
        <div className="acts">
          <Button variant="acc" href="#check">
            Check where you stand
          </Button>
          <Button variant="line" href="#now">
            What to do first
          </Button>
        </div>
      </div>
    </div>
  );
}
