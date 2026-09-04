import Button from '@/components/ui/Button/Button';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="lattice" aria-hidden="true"></div>
      <div className="wrap hero-grid">
        <div>
          <div className="lbl rv">AI implementation for UK small businesses</div>
          <h1 className="rv d1">We set up AI in small businesses, then show you what it saved.</h1>
          <p className="hero-sub rv d1">
            Most small firms have tried AI and not much changed, because nobody had time to set it up properly. We do that part. We start with invoicing and getting paid.
          </p>
          <div className="acts rv d2">
            <Button variant="acc" href="#start">
              Book a free assessment
            </Button>
            <Button variant="line" href="#sectors">
              Find your sector
            </Button>
          </div>
        </div>

        <div className="ticker rv d3">
          <span className="lbl">What late payment costs, per year</span>
          <div className="tk">
            <span>Cost to the UK economy</span>
            <b>£11bn</b>
          </div>
          <div className="tk">
            <span>Businesses closed by it</span>
            <b>14,000</b>
          </div>
          <div className="tk">
            <span>Owed at any one time</span>
            <b>£26bn</b>
          </div>
          <div className="tk">
            <span>Hours a firm spends chasing</span>
            <b>86</b>
          </div>
          <div className="tk-src">
            Department for Business and Trade with the Office of the Small Business Commissioner, research by London Economics, July 2025.{' '}
            <a href="/evidence">See the full evidence base →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
