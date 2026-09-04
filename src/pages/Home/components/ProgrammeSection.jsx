import Button from '@/components/ui/Button/Button';
import './ProgrammeSection.css';

export default function ProgrammeSection() {
  return (
    <section id="programme">
      <div className="wrap">
        <div className="lbl">How it works</div>
        <div className="head" style={{ marginTop: '16px' }}>
          <h2>How it works</h2>
          <div>
            <p className="lede">
              You are not buying software or a training day. You are getting someone to do the work: choose the tools, set them up in your systems, train your staff, and check the results.
            </p>
          </div>
        </div>

        <div className="three">
          <div className="cell">
            <span className="lbl">Stage 01</span>
            <h3>Assessment</h3>
            <p>
              Two weeks in the business. We follow the work, time the jobs that matter, and give you a plan in priority order with a value against each item. Included in the £5,000 programme.
            </p>
          </div>
          <div className="cell">
            <span className="lbl">Stage 02 · six months</span>
            <h3>Build</h3>
            <p>
              Two or three changes go live over six months, one at a time. Each is built, connected, tested and taught to your team before the next one starts. About two hours of your time a month.
            </p>
          </div>
          <div className="cell">
            <span className="lbl">Stage 03</span>
            <h3>Proof</h3>
            <p>
              A one-page report every month, compared with the timings we recorded at the start. Anything not working after 90 days gets switched off.
            </p>
          </div>
        </div>

        <div className="cta-row">
          <Button href="#programme">See the full programme</Button>
          <a className="tlink" href="#pricing">
            What it costs
          </a>
          <a className="tlink" href="#faq">
            Common questions
          </a>
        </div>
      </div>
    </section>
  );
}
