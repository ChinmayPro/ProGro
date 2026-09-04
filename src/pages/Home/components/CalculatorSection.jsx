import { useState, useEffect } from 'react';
import { WORK_ITEMS_DATA } from '@/utils/constants';
import { hrs, gbp } from '@/utils/formatters';
import './CalculatorSection.css';

export default function CalculatorSection({ selectedSector }) {
  const [sel, setSel] = useState(selectedSector.defaults);
  const [vols, setVols] = useState(selectedSector.vols);
  const [wage, setWage] = useState(24);

  useEffect(() => {
    setSel(selectedSector.defaults);
    setVols(selectedSector.vols);
  }, [selectedSector]);

  const toggleChip = (id) => {
    setSel((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleVolumeChange = (id, val) => {
    setVols((prev) => ({
      ...prev,
      [id]: Number(val),
    }));
  };

  let totalHours = 0;
  let maxBh = 0;
  let anySelected = false;

  WORK_ITEMS_DATA.forEach((w) => {
    if (sel[w.id]) {
      anySelected = true;
      const currentVol = vols[w.id] ?? w.min;
      const bh = (currentVol * w.b) / 60;
      if (bh > maxBh) maxBh = bh;
    }
  });

  const selectedRows = WORK_ITEMS_DATA.filter((w) => sel[w.id]).map((w) => {
    const currentVol = vols[w.id] ?? w.min;
    const bh = (currentVol * w.b) / 60;
    const ah = (currentVol * w.a) / 60;
    const sv = bh - ah;
    totalHours += sv;

    const ahWidth = maxBh > 0 ? (ah / maxBh) * 100 : 0;
    const svWidth = maxBh > 0 ? (sv / maxBh) * 100 : 0;

    return {
      ...w,
      currentVol,
      bh,
      ah,
      sv,
      ahWidth,
      svWidth,
    };
  });

  const monthlySavings = totalHours * wage;
  const yearlySavings = monthlySavings * 12;

  let paybackText = '—';
  let verdictNode = null;

  if (!anySelected || monthlySavings <= 0) {
    paybackText = '—';
    verdictNode = <>Tick a job above to see how the numbers work for you.</>;
  } else {
    const m = 5000 / monthlySavings;
    if (m < 1) {
      paybackText = 'under 1';
    } else if (m > 36) {
      paybackText = '36+';
    } else {
      paybackText = String(Math.round(m * 10) / 10);
    }

    const r = Math.round(m * 10) / 10;
    if (m <= 6) {
      verdictNode = (
        <>
          At this rate you would get the £5,000 back in about <b>{r} months</b> — before the programme has even finished. This is the kind of business we are built for.
        </>
      );
    } else if (m <= 12) {
      verdictNode = (
        <>
          At this rate you would get the £5,000 back in about <b>{r} months</b>. That is a sensible fit: paid back inside the first year, then it keeps saving.
        </>
      );
    } else if (m <= 24) {
      verdictNode = (
        <>
          At this rate it would take about <b>{r} months</b> to get the £5,000 back. It still pays for itself, but slowly. Worth a call before you commit.
        </>
      );
    } else {
      verdictNode = (
        <>
          At this rate the £5,000 would take a long time to earn back. Either your volumes are lower than we usually work with, or the jobs you have ticked are not where your hours actually go. Have the free call and we will tell you straight.
        </>
      );
    }
  }

  return (
    <section id="calc">
      <div className="wrap">
        <div className="lbl">Estimate</div>
        <div className="head" style={{ marginTop: '16px' }}>
          <h2>See how quickly you would get the £5,000 back</h2>
          <div>
            <p className="lede">
              Tick the jobs that take up your week, then set the numbers to match your business. We will show you what those hours are worth and how long the programme takes to pay for itself.
            </p>
          </div>
        </div>

        <div className="calc">
          <div className="calc-top">
            <span className="nm">Your estimate</span>
            <span className="ctx" id="calcCtx">
              Defaults: {selectedSector.label}
            </span>
          </div>

          <div className="calc-body">
            <div className="chips">
              {WORK_ITEMS_DATA.map((w) => {
                const isSelected = !!sel[w.id];
                return (
                  <button
                    key={w.id}
                    className="chip"
                    type="button"
                    aria-pressed={isSelected ? 'true' : 'false'}
                    onClick={() => toggleChip(w.id)}
                  >
                    <i></i>
                    {w.name}
                  </button>
                );
              })}
            </div>

            <div className="rows">
              {!anySelected ? (
                <p style={{ fontSize: '14.5px', color: '#8B9AA0', margin: 0 }}>
                  Tick a job above to see what it returns.
                </p>
              ) : (
                selectedRows.map((row) => (
                  <div key={row.id}>
                    <div className="rt">
                      <span>{row.name}</span>
                      <b>{hrs(row.sv)} hrs</b>
                    </div>
                    <div className="bar">
                      <span className="a" style={{ width: `${row.ahWidth}%` }}></span>
                      <span className="s" style={{ width: `${row.svWidth}%` }}></span>
                    </div>
                    <div className="rc">
                      <span className="mono">
                        {row.b}m → {row.a}m
                      </span>
                      <input
                        type="range"
                        min={row.min}
                        max={row.max}
                        step={row.step}
                        value={row.currentVol}
                        aria-label={`${row.name} per month`}
                        onChange={(e) => handleVolumeChange(row.id, e.target.value)}
                      />
                      <span className="mono">
                        {row.currentVol} {row.unit}/mo
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="wage">
              <label htmlFor="wage">Cost of an hour of your team's time</label>
              <input
                id="wage"
                type="range"
                min="14"
                max="45"
                step="1"
                value={wage}
                onChange={(e) => setWage(Number(e.target.value))}
              />
              <b className="mono" id="wageOut">
                £{wage}
              </b>
            </div>

            <div className="tot">
              <div>
                <b>{anySelected ? hrs(totalHours) : '0'}</b>
                <span>hours back a month</span>
              </div>
              <div>
                <b>{gbp(monthlySavings)}</b>
                <span>saved a month</span>
              </div>
              <div>
                <b>{gbp(yearlySavings)}</b>
                <span>saved in a year</span>
              </div>
              <div>
                <b>{paybackText}</b>
                <span>months to get the £5,000 back</span>
              </div>
            </div>

            <p className="verdict" id="verdict">
              {verdictNode}
            </p>

            <p className="calc-note">
              These are estimates from the figures you entered. On real projects we time each job before we start and measure it again after. Saving time is not the same as collecting cash: chasing software removes the admin hours, but it cannot make a customer who does not want to pay, pay.{' '}
              <a className="tlink" href="/evidence">
                What we do not claim
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
