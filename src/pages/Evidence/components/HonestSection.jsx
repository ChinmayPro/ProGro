import { EVIDENCE_CALLOUTS_DATA } from '@/utils/constants';
import './HonestSection.css';

export default function HonestSection() {
  return (
    <section id="honest">
      <div className="wrap">
        <div className="head">
          <h2>What we do not claim</h2>
          <div>
            <p className="lede">
              If we are asking you to trust our measurement, you should also see where we think the evidence is weak, including where that works against us.
            </p>
          </div>
        </div>

        {EVIDENCE_CALLOUTS_DATA.map((callout, idx) => (
          <div key={idx} className="callout">
            <h3>{callout.title}</h3>
            {callout.paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
