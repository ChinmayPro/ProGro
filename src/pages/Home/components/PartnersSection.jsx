import Card from '@/components/ui/Card/Card';
import './PartnersSection.css';

export default function PartnersSection() {
  return (
    <section id="partners">
      <div className="wrap">
        <div className="lbl">Distribution</div>
        <div className="head" style={{ marginTop: '16px' }}>
          <h2>Working with banks, accountants and public programmes</h2>
          <div>
            <p className="lede">
              Organisations that already work with thousands of small businesses can offer this to them. They provide the reach, we do the delivery. We are early, and we say so.
            </p>
          </div>
        </div>

        <div className="pcards">
          <Card className="pcard">
            <span className="lbl">For banks and lenders</span>
            <h3>A proposition around the account</h3>
            <p>
              Faster payment shows up in your own data, not in a report we write. We know what supplier due diligence involves and we are building to pass it.
            </p>
            <div className="go">
              <a className="tlink" href="#banks">
                How a bank partnership would work →
              </a>
            </div>
          </Card>

          <Card className="pcard">
            <span className="lbl">For accountants and platforms</span>
            <h3>The implementation your clients ask for</h3>
            <p>
              You keep the client relationship. We do the setup, the connections and the training you do not have capacity for, in your clients' own accounts.
            </p>
            <div className="go">
              <a className="tlink" href="#accountants">
                Referral and white-label →
              </a>
            </div>
          </Card>

          <Card className="pcard">
            <span className="lbl">For growth hubs and public programmes</span>
            <h3>Delivery, measured to a standard</h3>
            <p>
              Publicly funded schemes have failed before by paying for software instead of help. We do the setup work and report it in a form an evaluator can check.
            </p>
            <div className="go">
              <a className="tlink" href="#public">
                Public delivery →
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
