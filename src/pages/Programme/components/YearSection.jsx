import './YearSection.css';

export default function YearSection() {
  return (
    <section id="year">
      <div className="wrap">
        <div className="head">
          <h2>Six months, month by month</h2>
          <div>
            <p className="lede">
              Ten days of our time spread across six months. This example is a construction firm of about twelve people; the order changes by sector, with professional services usually starting at billing and wholesale at payment matching.
            </p>
          </div>
        </div>

        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: '110px' }}>Months</th>
              <th>What happens</th>
              <th style={{ width: '180px' }}>What we measure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">01</td>
              <td>
                Assessment, baselines recorded, plan agreed and owners named
                <div className="m">Nothing is built yet. We time what exists.</div>
              </td>
              <td className="m">Current hours, current debtor days</td>
            </tr>
            <tr>
              <td className="mono">01–02</td>
              <td>
                First change built and connected — usually quoting or enquiry handling
                <div className="m">The one the owner feels immediately.</div>
              </td>
              <td className="m">Minutes per job, response time</td>
            </tr>
            <tr>
              <td className="mono">02–03</td>
              <td>Training, then the first measured month against the baseline</td>
              <td className="m">Hours saved, take-up by staff</td>
            </tr>
            <tr>
              <td className="mono">03–05</td>
              <td>
                Second change: credit control — scheduled chasing, terms on every invoice, retentions tracked
                <div className="m">The one that shows in the bank balance.</div>
              </td>
              <td className="m">Debtor days, hours chasing, cash in</td>
            </tr>
            <tr>
              <td className="mono">05–06</td>
              <td>Third change if the plan supports it, usually document handling or the monthly reporting pack</td>
              <td className="m">Documents handled, hours to close the month</td>
            </tr>
            <tr>
              <td className="mono">06</td>
              <td>Final report, review of anything that did not work, and a plan you can run yourself</td>
              <td className="m">Everything, against month one</td>
            </tr>
          </tbody>
        </table>

        <div className="cta-row">
          <a className="tlink" href="#calc">
            Estimate this for your own volumes
          </a>
          <a className="tlink" href="#evidence#honest">
            What these numbers don't include
          </a>
        </div>
      </div>
    </section>
  );
}
