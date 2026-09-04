import Button from '@/components/ui/Button/Button';
import './StageSection.css';

export default function StageSection() {
  return (
    <section id="stage">
      <div className="wrap">
        <div className="head">
          <h2>Where we are today</h2>
          <div>
            <p className="lede">
              Progro is early. We are building proof before scale, and you should know exactly what stage we are at before we talk.
            </p>
          </div>
        </div>

        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: '150px' }}>Stage</th>
              <th>What happens</th>
              <th style={{ width: '160px' }}>Where we are</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prove</td>
              <td>
                Everything by hand with a first cohort. Find out what genuinely returns value, what it costs to deliver, and what businesses will pay
                <div className="m">10 to 20 businesses across three sectors.</div>
              </td>
              <td className="m">Now</td>
            </tr>
            <tr>
              <td>Productise</td>
              <td>
                Turn what worked into playbooks and templates by trade. Publish results including failures. First platform or practice partnership
              </td>
              <td className="m">Next</td>
            </tr>
            <tr>
              <td>Distribute</td>
              <td>
                Through banks and platforms, with portfolio-level reporting. Full supplier onboarding
              </td>
              <td className="m">Requires proof first</td>
            </tr>
            <tr>
              <td>Infrastructure</td>
              <td>
                Common interventions deploy themselves; our people move to the hard cases
              </td>
              <td className="m">The point of all this</td>
            </tr>
          </tbody>
        </table>

        <div className="acts">
          <Button variant="acc" href="mailto:partnerships@progro.uk?subject=Partnership%20enquiry">
            partnerships@progro.uk
          </Button>
          <Button variant="line" href="#about">
            About Progro Digital
          </Button>
        </div>
      </div>
    </section>
  );
}
