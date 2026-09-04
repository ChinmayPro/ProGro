import Button from '@/components/ui/Button/Button';
import './ProgrammeHeroSection.css';

export default function ProgrammeHeroSection() {
  return (
    <div className="phead">
      <div className="lattice" aria-hidden="true"></div>
      <div className="wrap">
        <div className="lbl">The programme</div>
        <h1>How the programme works</h1>
        <p className="sub">
          A two-week assessment, then six months of setting things up. Two or three changes go live, one at a time, and you get a monthly report on what each one saved. £5,000 in total.
        </p>
        <div className="acts">
          <Button variant="acc" href="#start">
            Book a free assessment
          </Button>
          <Button variant="line" href="#year">
            See the six months
          </Button>
        </div>
      </div>
    </div>
  );
}
