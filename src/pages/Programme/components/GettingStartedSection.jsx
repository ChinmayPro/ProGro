import Button from '@/components/ui/Button/Button';
import './GettingStartedSection.css';

export default function GettingStartedSection() {
  return (
    <section id="start">
      <div className="wrap">
        <div className="head">
          <h2>Getting started</h2>
          <div>
            <p className="lede">
              One call tells us both whether there is anything worth doing. We are working with a first group of businesses across construction and trades, professional services, and wholesale and distribution.
            </p>
            <div className="acts">
              <Button variant="acc" href="mailto:hello@progro.uk?subject=Progro%20assessment">
                Email hello@progro.uk
              </Button>
              <Button variant="line" href="#about#contact">
                Other ways to reach us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
