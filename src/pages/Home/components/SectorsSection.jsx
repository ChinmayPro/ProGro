import { SECTORS_DATA } from '@/utils/constants';
import Button from '@/components/ui/Button/Button';
import './SectorsSection.css';

export default function SectorsSection({ selectedSectorIndex, onSelectSector }) {
  const currentSector = SECTORS_DATA[selectedSectorIndex] || SECTORS_DATA[0];

  return (
    <section id="sectors">
      <div className="wrap">
        <div className="lbl">Pick the one that looks like you</div>
        <div className="head" style={{ marginTop: '16px' }}>
          <h2>Three sectors we work in</h2>
          <div>
            <p className="lede">
              We work where there is the most manual admin and the slowest cash. Pick a sector and the examples and figures below change.
            </p>
          </div>
        </div>

        <div className="ptabs" role="tablist" aria-label="Sector">
          {SECTORS_DATA.map((s, idx) => (
            <button
              key={s.key}
              className="ptab"
              role="tab"
              aria-selected={idx === selectedSectorIndex ? 'true' : 'false'}
              onClick={() => onSelectSector(idx)}
            >
              <span className="sic">{s.sic}</span>
              <span className="nm">{s.label}</span>
            </button>
          ))}
        </div>

        <div className="pbody" id="pbody">
          <div className="pgrid">
            <div>
              <h3>What it looks like now</h3>
              <p>{currentSector.now}</p>
              <p style={{ fontSize: '14px' }}>{currentSector.note}</p>
            </div>
            <div>
              <h3>What we'd build first</h3>
              <ul className="plist">
                {currentSector.build.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="pnum">
              <span className="lbl">Sector figures</span>
              {currentSector.figs.map((fig, idx) => (
                <div key={idx} className="pfig">
                  <b>{fig[0]}</b>
                  <span>{fig[1]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pfoot">
            <Button variant="acc" href="#start">
              Book an assessment
            </Button>
            <Button variant="line" href="#calc">
              Estimate the hours
            </Button>
            <Button variant="line" href="/evidence">
              Where these numbers come from
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
