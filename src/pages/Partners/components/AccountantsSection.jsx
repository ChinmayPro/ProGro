import Button from '@/components/ui/Button/Button';
import './AccountantsSection.css';

export default function AccountantsSection() {
  return (
    <section id="accountants">
      <div className="wrap">
        <div className="lbl">For accountants, bookkeepers and platforms</div>
        <div className="head" style={{ marginTop: '16px' }}>
          <h2>Your clients will need setup help you cannot staff</h2>
          <div>
            <p className="lede">
              Making Tax Digital widens in 2027 and 2028. E-invoicing lands in 2029. Every one of your clients will need their records, ledger and invoicing rebuilt, and practices are already at capacity doing compliance work.
            </p>
            <p className="lede">
              You keep the client relationship. We do the setup, the connections, the data cleaning and the training you do not have hours for, in the client's own accounts, under your name if you prefer.
            </p>
          </div>
        </div>

        <div className="two">
          <div className="cell">
            <h3>How it works</h3>
            <ul className="plist">
              <li>Referral: you introduce, we deliver, you stay the trusted adviser</li>
              <li>White label: delivered under your practice's name</li>
              <li>Joint: we run the technical build, you own advisory and compliance</li>
              <li>Ledger clean-up as a standalone piece ahead of MTD deadlines</li>
            </ul>
          </div>
          <div className="cell">
            <h3>Why this is the right channel</h3>
            <p>
              Small businesses trust their accountant more than any technology provider. The last national scheme to push software at them directly went around that relationship and failed.
            </p>
            <p>
              Among SMEs that already use e-invoicing, Sage leads at 46%, then Xero at 17% and QuickBooks at 9% — so we build around the stack you and your clients already run, not a platform of our own.
            </p>
          </div>
        </div>

        <div className="cta-row">
          <Button variant="acc" href="mailto:partnerships@progro.uk?subject=Practice%20partnership">
            Talk about a practice partnership
          </Button>
          <a className="tlink" href="/e-invoicing">
            Share the e-invoicing briefing with clients
          </a>
        </div>
      </div>
    </section>
  );
}
