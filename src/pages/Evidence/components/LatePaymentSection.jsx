import { EVIDENCE_STATS_DATA, EVIDENCE_LAW_CHANGES_DATA } from '@/utils/constants';
import './LatePaymentSection.css';

export default function LatePaymentSection() {
  return (
    <section id="latepayment">
      <div className="wrap">
        <div className="head">
          <h2>Late payment: the government's own numbers</h2>
          <div>
            <p className="lede">
              These figures come from research by London Economics commissioned by the Department for Business and Trade and the Office of the Small Business Commissioner, published July 2025. They are the most authoritative UK estimates available and they are the government's, not ours.
            </p>
          </div>
        </div>

        <div className="stats">
          {EVIDENCE_STATS_DATA.map((stat, idx) => (
            <div key={idx} className="stat">
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <p className="cap" style={{ marginTop: '22px' }}>
          Over 1.5 million businesses — 28% of all businesses — are affected each year. Of firms that reported spending staff time chasing, the average was 86 hours per business per year. Separately, industry research puts almost a third of businesses at more than six hours a month on overdue invoices, and average B2B payment terms across Western Europe at around 52 days.{' '}
          <span className="mono" style={{ fontSize: '12px' }}>
            DBT/OSBC 2025; Howden 2026; Atradius Payment Practices Barometer 2024.
          </span>
        </p>

        <h3 style={{ marginTop: '44px' }}>What's changing in law</h3>
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: '200px' }}>Measure</th>
              <th>What it does</th>
              <th style={{ width: '140px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {EVIDENCE_LAW_CHANGES_DATA.map((row, idx) => (
              <tr key={idx}>
                <td>{row.measure}</td>
                <td>
                  {row.does}
                  {row.note && <div className="m">{row.note}</div>}
                </td>
                <td className="m">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="cap" style={{ marginTop: '18px' }}>
          The Small Business Protections Bill was introduced in May 2026 and is progressing through Parliament. Implementation is expected in 2027 but dates will move with its passage — treat them as expected, not confirmed.
        </p>
      </div>
    </section>
  );
}
