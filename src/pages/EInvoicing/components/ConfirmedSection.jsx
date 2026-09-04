import './ConfirmedSection.css';

export default function ConfirmedSection() {
  return (
    <section id="confirmed">
      <div className="wrap">
        <div className="head">
          <h2>What has been decided</h2>
          <div>
            <p className="lede">
              HMRC and the Department for Business and Trade consulted between February and May 2025. The outcome was published on 26 November 2025 and confirmed at the Autumn Budget: e-invoicing becomes compulsory for VAT invoices from 2029, on a decentralised model aligned to the Peppol network and the EN 16931 European standard.
            </p>
            <p className="lede">
              Two things people often get wrong. This is not real-time reporting to HMRC. And a PDF does not count as an e-invoice.
            </p>
          </div>
        </div>

        <div className="tl">
          <div className="tr done">
            <span className="w">FEB–MAY 2025</span>
            <span className="t">
              HMRC and DBT joint consultation on promoting e-invoicing
              <small>Around 30 UK and international respondents</small>
            </span>
            <span className="s">Complete</span>
          </div>
          <div className="tr done">
            <span className="w">26 NOV 2025</span>
            <span className="t">
              Consultation outcome published; mandate confirmed at Autumn Budget
              <small>All VAT invoices, from 2029</small>
            </span>
            <span className="s">Complete</span>
          </div>
          <div className="tr done">
            <span className="w">JAN–JUN 2026</span>
            <span className="t">
              Monthly stakeholder groups with software providers, accountants and business bodies co-design the roadmap
              <small>OpenPeppol also convened a UK working group</small>
            </span>
            <span className="s">In progress</span>
          </div>
          <div className="tr key">
            <span className="w">BUDGET 2026</span>
            <span className="t">
              Implementation roadmap and technical standards published
              <small>The detail everyone is waiting for: formats, phasing, certification</small>
            </span>
            <span className="s">Next milestone</span>
          </div>
          <div className="tr">
            <span className="w">2027–2028</span>
            <span className="t">
              Businesses and software providers prepare; expect large trading partners to demand structured invoices ahead of the deadline
            </span>
            <span className="s">Preparation</span>
          </div>
          <div className="tr">
            <span className="w">2029</span>
            <span className="t">E-invoicing compulsory for all VAT invoices</span>
            <span className="s">Mandate</span>
          </div>
        </div>

        <div className="grid2">
          <div className="cell">
            <span className="lbl">Counts as an e-invoice</span>
            <h3>Structured, machine-readable data</h3>
            <ul className="yes">
              <li>Invoice data exchanged directly between your system and your customer's</li>
              <li>Formats aligned to EN 16931, typically over the Peppol network</li>
              <li>Processed automatically at the other end, with no re-keying</li>
            </ul>
          </div>
          <div className="cell">
            <span className="lbl">Does not count</span>
            <h3>Anything a human has to read</h3>
            <ul className="no">
              <li>A PDF attached to an email — however tidy it looks</li>
              <li>Word documents, spreadsheets and HTML invoices</li>
              <li>A scan or photo of a paper invoice, even with OCR applied</li>
            </ul>
          </div>
        </div>

        <p className="srcs">
          Sources: HMRC and DBT, <em>Electronic invoicing: promoting e-invoicing across UK businesses and the public sector</em> — consultation outcome, updated 26 November 2025; Autumn Budget 2025; OpenPeppol UK Working Group.
        </p>
      </div>
    </section>
  );
}
