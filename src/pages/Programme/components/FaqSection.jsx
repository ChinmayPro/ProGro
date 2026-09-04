import { useState } from 'react';
import './FaqSection.css';

const FAQ_DATA = [
  {
    q: "Will this cost people their jobs?",
    a: "Not in the evidence so far. Among UK SMEs using AI, 95% report no change to workforce size over the past year and 86% say roles are unchanged. What actually happens is that the owner stops doing admin at nine in the evening and nobody re-types a delivery note again. If a change would genuinely affect a role, we say so before we build it, not after.",
    s: "British Chambers of Commerce with the University of Essex, March 2026"
  },
  {
    q: "How much of my time does this take?",
    a: "About two hours a month once things are running, plus a few days spread across the first fortnight while we work out where your hours go. Anything more and it wouldn't survive your busy season, which is exactly how most AI attempts in small businesses die."
  },
  {
    q: "What happens to my data?",
    a: "Everything is set up in your accounts, under your control, with a written note of what goes where. We tell you which tools train on your data and which don't, and choose accordingly. If you'd rather nothing left your systems, we'll say honestly what that rules out."
  },
  {
    q: "Do I own what you build?",
    a: "Yes — every account, automation, prompt and document, in your name. If you stop working with us it all keeps running and we hand over the notes. We don't hold anything hostage; there's no platform to be locked into."
  },
  {
    q: "Are you tied to particular software?",
    a: "No, and we take no commission that could change a recommendation. Usually the answer is a combination of tools you already pay for and one or two new ones — most small businesses own more capability than they use."
  },
  {
    q: "What if it doesn't work?",
    a: "Some of it won't. Anything that hasn't beaten its recorded baseline within 90 days gets switched off and written up, and the failure appears in your monthly statement alongside the wins. A provider who reports only successes is not measuring."
  },
  {
    q: "Isn't invoice chasing software already cheap?",
    a: "Yes — several good tools sit between roughly £9 and £199 a month, and Xero includes reminders at no cost. That's the point. The tools are cheap and adoption is still low, because someone has to clean the ledger, set the terms, write the sequences, connect the payment matching and train the person who owns it. That work is what's actually missing, and it isn't software.",
    s: "Vendor pricing, 2026"
  },
  {
    q: "We're not technical at all. Is that a problem?",
    a: "It's the normal starting point and not a criticism. Around 60% of UK businesses name skills and expertise as their main blocker, and DSIT found 71% hadn't identified a clear use for AI at all. You don't need to understand how it works — only what it now does for you, and how to tell when it stops working.",
    s: "DSIT AI Adoption Research"
  },
  {
    q: "Why start with invoicing and cash rather than something more exciting?",
    a: "Because it's measurable, it's urgent, and it's where the deadlines are. Making Tax Digital widens in 2027 and 2028, late payment law is expected in force in 2027, and e-invoicing becomes compulsory in 2029. Cash is also the one place where the improvement shows up in an account statement rather than a self-report, which matters when someone else is funding the work."
  }
];

export default function FaqSection() {
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleItem = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq">
      <div className="wrap">
        <div className="head">
          <h2>Common questions</h2>
          <div>
            <p className="lede">The questions we are asked most often.</p>
          </div>
        </div>
        <div className="faq" id="faqList">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndices.includes(index);
            const id = `fa${index}`;
            return (
              <div key={index} className="item" data-open={isOpen ? 'true' : 'false'}>
                <button
                  className="ibtn"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => toggleItem(index)}
                >
                  <span className="iq">{item.q}</span>
                  <span className="pl" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="ia" id={id}>
                  {item.a}
                  {item.s && <span className="src">Source: {item.s}</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
