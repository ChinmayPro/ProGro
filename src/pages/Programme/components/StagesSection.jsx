import './StagesSection.css';

export default function StagesSection() {
  return (
    <section id="stages">
      <div className="wrap">
        <div className="head">
          <h2>What you get</h2>
          <div>
            <p className="lede">
              Two things: a plan in priority order, and six months of somebody doing the work. The second is the hard part. Advice about AI is everywhere and nearly free. Time to set it up is not.
            </p>
          </div>
        </div>

        <div className="two">
          <div className="cell">
            <span className="lbl">Stage 01 · two weeks</span>
            <h3>The assessment</h3>
            <p>
              We spend time with you and a few of your people, follow the work through the business, and time the jobs that matter. You get a plan in the order we would do it.
            </p>
            <ul className="plist">
              <li>Where the hours actually go, measured not estimated</li>
              <li>Five to ten specific opportunities, ranked by value against effort, cost and risk</li>
              <li>A value estimate against each one</li>
              <li>What we'd start with, and what we'd deliberately leave alone</li>
              <li>A note of which of your existing tools already do some of this</li>
            </ul>
            <div className="meta">
              Yours to keep whether or not you carry on with us. Some businesses take the plan and do it themselves.
            </div>
          </div>
          <div className="cell">
            <span className="lbl">Stage 02 · six months</span>
            <h3>The build</h3>
            <p>
              We work through the plan in order. Each item is built, connected to the systems you already use, tested on real cases, and taught to the person who will own it.
            </p>
            <ul className="plist">
              <li>We do the configuration and the wiring, not you</li>
              <li>Everything set up in your accounts, under your name</li>
              <li>Training for the people who use it, including the awkward cases</li>
              <li>A one-page impact statement every month</li>
              <li>Anything failing its baseline for 90 days is switched off</li>
            </ul>
            <div className="meta">
              About two hours of your time a month once things are running. If you cannot commit that, the programme will not work and we will say so.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
