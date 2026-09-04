import './MtdSection.css';

export default function MtdSection() {
  return (
    <section id="mtd">
      <div className="wrap">
        <div className="head">
          <h2>The nearer deadline: Making Tax Digital</h2>
          <div>
            <p className="lede">
              2029 is a long way off. The changes that reach you first are the Making Tax Digital thresholds and the late payment reforms, and preparing for those covers most of the e-invoicing groundwork.
            </p>
          </div>
        </div>

        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: '140px' }}>From</th>
              <th>What changes</th>
              <th style={{ width: '220px' }}>Who it catches</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">April 2026</td>
              <td>
                Making Tax Digital for Income Tax begins — digital records and quarterly updates
                <div className="m">Around 780,000 people in the first wave.</div>
              </td>
              <td className="m">Sole traders and landlords over £50,000</td>
            </tr>
            <tr>
              <td className="mono">April 2027</td>
              <td>
                Threshold drops
                <div className="m">A further 970,000 or so expected to join.</div>
              </td>
              <td className="m">Over £30,000</td>
            </tr>
            <tr>
              <td className="mono">2027 (expected)</td>
              <td>
                Late payment reforms expected in force — 60-day maximum terms, automatic statutory interest, stronger Small Business Commissioner powers
                <div className="m">Construction retentions are specifically in scope.</div>
              </td>
              <td className="m">Everyone selling B2B</td>
            </tr>
            <tr>
              <td className="mono">April 2028</td>
              <td>Threshold drops again</td>
              <td className="m">Over £20,000</td>
            </tr>
            <tr>
              <td className="mono">2029</td>
              <td>E-invoicing compulsory for all VAT invoices</td>
              <td className="m">Every VAT-registered business</td>
            </tr>
          </tbody>
        </table>

        <p className="srcs">
          Sources: GOV.UK, Making Tax Digital for Income Tax Self Assessment for sole traders and landlords; HM Treasury; Small Business Protections Bill, introduced May 2026 and currently before Parliament. Dates for the Bill are expected rather than confirmed and will move with its passage.
        </p>
      </div>
    </section>
  );
}
