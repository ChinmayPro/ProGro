import Button from '@/components/ui/Button/Button';
import './PublicSection.css';

export default function PublicSection() {
  return (
    <section id="public">
      <div className="wrap">
        <div className="lbl">For growth hubs, chambers and public programmes</div>
        <div className="head" style={{ marginTop: '16px' }}>
          <h2>Learning from Help to Grow: Digital</h2>
          <div>
            <p className="lede">
              Help to Grow: Digital targeted 100,000 businesses and closed in 2023 having spent a fraction of what was allocated. Businesses hadn't heard of it, the offer narrowed to a handful of vendors, eligibility excluded many of the smallest firms, and the money bought licences rather than the help needed to make them work.
            </p>
            <p className="lede">
              The SME Digital Adoption Taskforce wants the most digitally capable small businesses in the G7. That needs people doing the work underneath the guidance government is building.
            </p>
          </div>
        </div>

        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: '230px' }}>The failure mode</th>
              <th>How we're built differently</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Businesses never heard of it</td>
              <td>
                Distribution through the intermediaries they already trust — accountants, banks, chambers — rather than a central campaign
                <div className="m">Awareness was the single largest cause of low take-up.</div>
              </td>
            </tr>
            <tr>
              <td>The money bought software</td>
              <td>
                We charge for implementation and take no vendor commission. Licences are bought in the business's own name and never marked up
              </td>
            </tr>
            <tr>
              <td>Impact was hard to evaluate</td>
              <td>
                Every intervention has a recorded pre-baseline and a monthly statement in a fixed format, with failures reported alongside successes
                <div className="m">Designed so an evaluator can audit it without taking our word for anything.</div>
              </td>
            </tr>
            <tr>
              <td>Support was one-off</td>
              <td>Six months of hands-on delivery, not a voucher and a webinar</td>
            </tr>
          </tbody>
        </table>

        <div className="cta-row">
          <Button variant="line" href="mailto:partnerships@progro.uk?subject=Public%20programme%20delivery">
            Talk about delivery
          </Button>
          <a className="tlink" href="#programme">
            Read the measurement standard
          </a>
          <a className="tlink" href="#evidence">
            See what we don't claim
          </a>
        </div>
      </div>
    </section>
  );
}
