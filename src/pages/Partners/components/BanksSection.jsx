import { useState } from 'react';
import './BanksSection.css';

export default function BanksSection() {
  const [biz, setBiz] = useState(2500);
  const [each, setEach] = useState(40);

  const y = biz * each * 12;
  const bizOut = biz.toLocaleString('en-GB');
  const eachOut = each;
  const rTot = y >= 1000000 ? (Math.round(y / 100000) / 10) + 'm' : Math.round(y / 1000) + 'k';
  const rFte = Math.round(y / 1820).toLocaleString('en-GB');
  const rBiz = biz.toLocaleString('en-GB');

  return (
    <section id="banks">
      <div className="wrap">
        <div className="lbl">For banks and lenders</div>
        <div className="head" style={{ marginTop: '16px' }}>
          <h2>Results you can see in your own data</h2>
          <div>
            <p className="lede">
              Business banking increasingly competes on what sits around the account. Most added-value offers are content, mentoring or discounts, and their impact is reported by the customer.
            </p>
            <p className="lede">
              Faster payment is different. Earlier deposits, less overdraft use and steadier inflows appear in your own systems, whatever we say. That is why we start with getting paid rather than something more fashionable.
            </p>
          </div>
        </div>

        <div className="two">
          <div className="cell">
            <h3>What the bank gets</h3>
            <ul className="plist">
              <li>A differentiated business-account proposition with substance behind it</li>
              <li>Customers whose cash cycle measurably shortens</li>
              <li>Portfolio-level impact reporting to one published standard</li>
              <li>A credible answer on SME AI adoption for regulators and government</li>
            </ul>
          </div>
          <div className="cell">
            <h3>What we'd need from you</h3>
            <ul className="plist">
              <li>A defined customer segment to start with, not the whole book</li>
              <li>A route to market — app, relationship managers, or a campaign</li>
              <li>Agreement on what gets measured before anything is offered</li>
              <li>Realism about our stage: a pilot cohort first, at pilot scale</li>
            </ul>
          </div>
        </div>

        <div className="reach">
          <div>
            <div className="ctl">
              <label htmlFor="biz">
                Businesses in a pilot or programme <b id="bizOut">{bizOut}</b>
              </label>
              <input
                id="biz"
                type="range"
                min="100"
                max="20000"
                step="100"
                value={biz}
                onChange={(e) => setBiz(Number(e.target.value))}
              />
            </div>
            <div className="ctl">
              <label htmlFor="each">
                Hours returned per business, per month <b id="eachOut">{eachOut}</b>
              </label>
              <input
                id="each"
                type="range"
                min="10"
                max="100"
                step="5"
                value={each}
                onChange={(e) => setEach(Number(e.target.value))}
              />
              <div className="hint">
                Our worked example returns about 60 hours a month by the end of six months. The default here sits below it deliberately.
              </div>
            </div>
          </div>
          <div className="rbox">
            <div className="big" id="rTot">{rTot}</div>
            <div className="cap">Hours handed back to your customers each year, measured against recorded baselines</div>
            <div className="rrow">
              <span>Equivalent full-time roles of time</span>
              <b id="rFte">{rFte}</b>
            </div>
            <div className="rrow">
              <span>Businesses materially changed</span>
              <b id="rBiz">{rBiz}</b>
            </div>
            <div className="rrow">
              <span>Reported to</span>
              <b>One published standard</b>
            </div>
          </div>
        </div>

        <div className="callout">
          <h3>We know what your procurement looks like</h3>
          <p>
            Third-party risk rules under PRA SS2/21 and FCA SYSC 8 mean materiality assessment, due diligence, exit and continuity terms, data security review and financial checks. An early-stage supplier does not pass that on day one.
          </p>
          <p>
            The sensible route is a pilot or innovation programme first, where a bank can work with a small firm before full onboarding, then full supplier onboarding once there are results.
          </p>
        </div>
      </div>
    </section>
  );
}
