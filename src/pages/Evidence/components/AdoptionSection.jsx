import { useMemo } from 'react';
import { EVIDENCE_FUNNEL_DATA } from '@/utils/constants';
import './AdoptionSection.css';

export default function AdoptionSection() {
  const dots = useMemo(() => {
    return Array.from({ length: 569 }, (_, i) => i % 6 === 0);
  }, []);

  return (
    <section id="adoption">
      <div className="wrap">
        <div className="head">
          <h2>Most businesses have not really started</h2>
          <div>
            <p className="lede">
              Four surveys with four different definitions. Nearly every business touches AI. Few have set it up on purpose. Almost none have changed how a process works. The gap between the second figure and the fourth is why we exist.
            </p>
          </div>
        </div>

        <div className="funnel">
          {EVIDENCE_FUNNEL_DATA.map((item, idx) => (
            <div key={idx} className={`fn ${item.class}`}>
              <span className="num">{item.num}</span>
              <span>
                <span className="b"></span>
                <span className="t">{item.text}</span>
                <span className="s">{item.source}</span>
              </span>
            </div>
          ))}
        </div>

        <p className="cap" style={{ marginTop: '24px' }}>
          The spread between 70% and 11% is about definitions. ONS asks about any self-reported AI technology and gets 23%. DSIT requires a recognised technology deployed for a purpose and gets 16%. The BCC counts everyday generative tools and gets 54%. Any single headline figure should be read with its definition attached.
        </p>

        <div className="split">
          <div>
            <h3 style={{ marginBottom: '18px' }}>And depth barely moves</h3>
            <p className="cap">
              Among businesses that have adopted, the average number of AI technologies in use has gone from about 1.4 to 1.6 since late 2023. Yet 53% of those businesses use AI constantly and 80% at least weekly. People use the one thing they got working and never get to the second.{' '}
              <span className="mono" style={{ fontSize: '12px', color: '#8B9AA0' }}>
                ONS 2026; DSIT 2025.
              </span>
            </p>
            <div style={{ marginTop: '26px' }}>
              <div className="sb">
                <span>Information and communication</span>
                <span className="tr">
                  <i style={{ width: '58%' }}></i>
                </span>
                <b>58%</b>
              </div>
              <div className="sb low">
                <span>Construction</span>
                <span className="tr">
                  <i style={{ width: '13%' }}></i>
                </span>
                <b>13%</b>
              </div>
            </div>
            <p className="cap" style={{ marginTop: '14px' }}>
              Share of businesses reporting AI use by industry. The sectors furthest behind are the ones with the most manual process left to remove.{' '}
              <span className="mono" style={{ fontSize: '12px' }}>
                ONS, Artificial intelligence in UK businesses, 2026.
              </span>
            </p>
          </div>
          <div>
            <div className="dots" aria-hidden="true">
              {dots.map((isOn, idx) => (
                <i key={idx} className={isOn ? 'on' : undefined} />
              ))}
            </div>
            <p className="cap">
              <strong>Every dot is 10,000 UK businesses.</strong> There are 5.69 million SMEs — 99.9% of the private sector, with £2.8 trillion of turnover between them. The shaded dots are roughly the one in six that have deployed AI on purpose.{' '}
              <span className="mono" style={{ fontSize: '12px' }}>
                DBT Business Population Estimates 2025; DSIT AI Adoption Research.
              </span>
            </p>
            <p className="cap">
              The barrier is not price and it is not belief. Around 60% of businesses name limited AI skills and expertise as a key blocker, 71% say they haven't identified a clear use for AI at all, and 46% of small firms say plainly that they lack the knowledge to use it well. None of that is closed by another guide.{' '}
              <span className="mono" style={{ fontSize: '12px' }}>
                DSIT; FSB.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
