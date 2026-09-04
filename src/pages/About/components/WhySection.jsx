import { ABOUT_STATS_DATA } from '@/utils/constants';
import './WhySection.css';

export default function WhySection() {
  return (
    <section id="why">
      <div className="wrap">
        <div className="head">
          <h2>The problem</h2>
          <div>
            <p className="lede">
              Britain has 5.69 million small and medium businesses. They are 99.9% of the private sector and £2.8 trillion of turnover. Around one in six has deliberately deployed AI for a defined purpose, and roughly 80% have neither done so nor planned to. Among those that have adopted, the average number of AI technologies in use has crept from about 1.4 to 1.6 since late 2023.
            </p>
            <p className="lede">
              That is not a technology gap. The tools are available and mostly cheap, and much of it sits unused inside software these businesses already pay for. It is a capacity gap. Nobody in a twelve-person firm has three months spare, and nobody is hiring an AI specialist to find out.
            </p>
            <p className="lede">
              Advice keeps growing. Government is building AI adoption guidance into the Business Growth Service, and courses and readiness scores arrive weekly. Very few people are doing the setup work itself.
            </p>
          </div>
        </div>

        <div className="stats">
          {ABOUT_STATS_DATA.map((stat, idx) => (
            <div key={idx} className="stat">
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="cta-row">
          <a className="tlink" href="evidence.html">
            See the full evidence base and its caveats
          </a>
        </div>
      </div>
    </section>
  );
}
