import Button from '@/components/ui/Button/Button';
import './CloseSection.css';

export default function CloseSection() {
  return (
    <section id="close">
      <div className="wrap">
        <div className="head">
          <h2>Every small business should have an AI team. Almost none can employ one.</h2>
          <div>
            <p className="lede">
              The tools are cheap and widely available. What small firms do not have is anyone with the time to set them up and keep them working. That is the job we do.
            </p>
            <div className="acts">
              <Button variant="acc" href="#start">
                Book a free assessment
              </Button>
              <Button variant="line" href="#about">
                Why we're doing this
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
