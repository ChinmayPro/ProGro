import Button from '@/components/ui/Button/Button';
import './PartnersHeroSection.css';

export default function PartnersHeroSection() {
  return (
    <div className="phead">
      <div className="lattice" aria-hidden="true" />
      <div className="wrap">
        <div className="lbl">Distribution</div>
        <h1>Working with banks, accountants and public programmes</h1>
        <p className="sub">
          Banks, accountancy platforms, growth hubs and trade bodies each work with thousands of small businesses. You provide the reach. We do the setup work and report the results to a standard you can check.
        </p>
        <div className="acts">
          <Button variant="acc" href="mailto:partnerships@progro.uk?subject=Partnership%20enquiry">
            Start a conversation
          </Button>
          <Button variant="line" href="#stage">
            Where we are today
          </Button>
        </div>
      </div>
    </div>
  );
}
