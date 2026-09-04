import { useMemo } from 'react';
import './EcosystemSection.css';

export default function EcosystemSection() {
  const dots = useMemo(() => {
    return Array.from({ length: 110 }, (_, i) => i % 6 === 0);
  }, []);

  return (
    <section>
      <div className="wrap">
        <div className="chain">
          <div className="node">
            <b>You</b>
            <div className="tiles">
              <span>Banks</span>
              <span>Accountants</span>
              <span>Platforms</span>
              <span>Insurers</span>
              <span>Payroll</span>
              <span>Chambers</span>
              <span>Growth hubs</span>
            </div>
            <p>Hold the relationship, the trust and the data.</p>
          </div>

          <svg className="arw" width="34" height="14" viewBox="0 0 34 14" aria-hidden="true">
            <path d="M0 7h27" stroke="currentColor" strokeWidth="1.5" />
            <path d="M34 7l-9 -5v10z" fill="currentColor" />
          </svg>

          <div className="node core">
            <b>Progro</b>
            <p>
              Finds the work, builds it, trains the team, measures what it returned — and reports the failures too.
            </p>
          </div>

          <svg className="arw" width="34" height="14" viewBox="0 0 34 14" aria-hidden="true">
            <path d="M0 7h27" stroke="currentColor" strokeWidth="1.5" />
            <path d="M34 7l-9 -5v10z" fill="currentColor" />
          </svg>

          <div className="node">
            <b>Your business customers</b>
            <div className="mdots" aria-hidden="true">
              {dots.map((isOn, index) => (
                <i key={index} className={isOn ? 'on' : undefined} />
              ))}
            </div>
            <p>Each one gets a team they could never employ.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
