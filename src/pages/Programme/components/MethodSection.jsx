import Button from '@/components/ui/Button/Button';
import './MethodSection.css';

export default function MethodSection() {
  return (
    <section id="method">
      <div className="wrap">
        <div className="head">
          <h2>The measurement standard</h2>
          <div>
            <p className="lede">
              Agreed before any work starts. A bank, growth hub or government evaluator sees the same monthly report you do, including anything that failed.
            </p>
          </div>
        </div>

        <div className="rules">
          <div className="rule">
            <span className="n">RULE 01</span>
            <b>Time it first</b>
            <p>We measure the process as it runs today, with a stopwatch and a sample. If it was never measured, it can't be claimed later.</p>
          </div>
          <div className="rule">
            <span className="n">RULE 02</span>
            <b>One named owner</b>
            <p>Each change has one person inside the business accountable for using it. Unowned automation dies quietly.</p>
          </div>
          <div className="rule">
            <span className="n">RULE 03</span>
            <b>Hours, not licences</b>
            <p>Success is time returned and cash collected sooner — never the number of tools installed.</p>
          </div>
          <div className="rule">
            <span className="n">RULE 04</span>
            <b>Report monthly</b>
            <p>One page. The same page for you and for anyone funding or referring the work.</p>
          </div>
          <div className="rule">
            <span className="n">RULE 05</span>
            <b>Retire failures</b>
            <p>Anything that hasn't beaten its baseline within 90 days gets switched off, written up and reported.</p>
          </div>
        </div>

        <div className="cta-row">
          <Button variant="line" href="#evidence">
            The evidence behind the method
          </Button>
          <a className="tlink" href="#partners#public">
            How this works for publicly funded delivery
          </a>
        </div>
      </div>
    </section>
  );
}
