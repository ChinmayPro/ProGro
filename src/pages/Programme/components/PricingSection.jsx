import './PricingSection.css';

export default function PricingSection() {
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="head">
          <h2>Pricing and terms</h2>
          <div>
            <p className="lede">
              One price, published. £5,000 covers the assessment and six months of implementation — ten days of our time in total. You keep everything we build.
            </p>
          </div>
        </div>

        <div className="price">
          <div className="pc">
            <span class="lbl">Step one</span>
            <h3>Introductory call</h3>
            <div className="fig">Free</div>
            <p>Thirty minutes. Tell us what takes up your week and we will say whether AI can help, including when it cannot.</p>
            <div className="go">
              <a className="tlink" href="#start">
                Book it →
              </a>
            </div>
          </div>
          <div className="pc mark">
            <span class="lbl">Step two</span>
            <h3>The assessment</h3>
            <div className="fig">Included</div>
            <p>Two weeks in the business, included in the programme price. If you decide not to continue afterwards you keep the plan and we do not invoice you.</p>
            <div className="go">
              <a className="tlink" href="#start">
                Apply →
              </a>
            </div>
          </div>
          <div className="pc">
            <span class="lbl">Step three</span>
            <h3>Six months of implementation</h3>
            <div className="fig">£5,000</div>
            <p>Ten days of our time spread across six months, paid monthly. Software licences are bought in your name at cost and never marked up. No lock-in beyond a month's notice.</p>
            <div className="go">
              <a className="tlink" href="#start">
                Talk it through →
              </a>
            </div>
          </div>
        </div>

        <h3 style={{ marginTop: '44px' }}>Whether £5,000 is worth it for you</h3>
        <p className="lede" style={{ marginTop: '12px' }}>
          At a typical £24 an hour, the programme repays itself inside a year at about 17 hours a month saved, and inside six months at about 35. In practice that means a business with real volume behind it — roughly 80 or more invoices a month, or 60 or more quotes, or both.
        </p>
        <p className="lede">
          If our assessment does not show you reaching that, we will say so before you commit. We would rather lose the sale than run a programme that cannot pay for itself.
        </p>
        <p className="meta" style={{ maxWidth: '70ch' }}>
          We take no commission, referral fee or revenue share from any software vendor whose product we recommend. If that ever changes, it will be disclosed on this page before it applies to anyone.
        </p>
      </div>
    </section>
  );
}
