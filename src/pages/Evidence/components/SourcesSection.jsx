import Button from '@/components/ui/Button/Button';
import { EVIDENCE_SOURCES_DATA } from '@/utils/constants';
import './SourcesSection.css';

export default function SourcesSection() {
  return (
    <section id="sources">
      <div className="wrap">
        <div className="head">
          <h2>Sources</h2>
          <div>
            <p className="lede">
              Everything on this site traces back to one of these. Where figures conflict we show the range and explain the different definitions.
            </p>
          </div>
        </div>

        <div className="srcgrid">
          {EVIDENCE_SOURCES_DATA.map((src, idx) => (
            <div key={idx} className="src">
              <b>{src.title}</b>
              <span>{src.desc}</span>
            </div>
          ))}
        </div>

        <div className="cta-row">
          <Button variant="acc" href="#start">
            Book an assessment
          </Button>
          <a className="tlink" href="/e-invoicing">
            Read the e-invoicing briefing
          </a>
          <a className="tlink" href="/partners">
            Partner with us
          </a>
        </div>
      </div>
    </section>
  );
}
