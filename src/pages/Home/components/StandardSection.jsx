import './StandardSection.css';

export default function StandardSection() {
  return (
    <section id="standard">
      <div className="wrap">
        <div className="lbl">The measurement standard</div>
        <div className="head" style={{ marginTop: '16px' }}>
          <h2>How we measure results</h2>
          <div>
            <p className="lede">
              Five rules, agreed before we start and used on every job. They mean you end the year with a number, not an impression, and that a bank or growth hub can check the same report you get.
            </p>
          </div>
        </div>

        <div className="rules">
          <div className="rule">
            <span className="n">RULE 01</span>
            <b>Time it first</b>
            <p>We measure the process as it runs today. If it was never measured, it can't be claimed later.</p>
          </div>
          <div className="rule">
            <span className="n">RULE 02</span>
            <b>One named owner</b>
            <p>Each change has one person inside the business responsible for using it.</p>
          </div>
          <div className="rule">
            <span className="n">RULE 03</span>
            <b>Hours, not licences</b>
            <p>Success is time returned and cash collected sooner. Not tools installed.</p>
          </div>
          <div className="rule">
            <span className="n">RULE 04</span>
            <b>Report monthly</b>
            <p>One page, every month, identical for you and for any funding partner.</p>
          </div>
          <div className="rule">
            <span className="n">RULE 05</span>
            <b>Retire failures</b>
            <p>Nothing that misses its baseline for 90 days stays switched on.</p>
          </div>
        </div>

        <div className="cta-row">
          <a className="tlink" href="#method">
            Read the method in full
          </a>
          <a className="tlink" href="#honest">
            What we deliberately don't claim
          </a>
        </div>
      </div>
    </section>
  );
}
