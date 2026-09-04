import './WhoSection.css';

export default function WhoSection() {
  return (
    <section id="who">
      <div className="wrap">
        <div className="head">
          <h2>Who is behind it</h2>
          <div>
            <p className="lede">
              Progro is a product of Progro Digital Ltd, a London company that also operates Humotron and Indyra. It is founder-led and small. The first businesses are handled by hand, because that is how we find out what actually works before turning it into templates.
            </p>
          </div>
        </div>

        <div className="who">
          <div className="cell">
            <h3>The background</h3>
            <p>
              Progro is led by Chinmay Bhatt, founder and CEO of Progro Digital. His background is in data science, analytics and product, including work with SME-focused fintech — which is where the interest in how small businesses actually invoice, get paid and manage cash comes from.
            </p>
            <p>
              It is also why we start with cash rather than something more fashionable. It is the part of a small business where an improvement can be seen in a bank statement.
            </p>
          </div>
          <div className="cell">
            <h3>What we're doing right now</h3>
            <ul className="plist">
              <li>Working with a first cohort across construction and trades, professional services, and wholesale and distribution</li>
              <li>Doing every assessment and implementation by hand, at a published price of £5,000 for six months</li>
              <li>Recording baselines and results to a fixed standard, including failures</li>
              <li>Talking to accountancy practices, growth hubs and banks about what comes after the proof</li>
            </ul>
            <div className="cta-row" style={{ marginTop: '22px' }}>
              <a className="tlink" href="partners.html#stage">
                Where we honestly are →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
