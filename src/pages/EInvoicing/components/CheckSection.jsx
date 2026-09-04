import React, { useState } from 'react';
import Button from '@/components/ui/Button/Button';
import './CheckSection.css';

const QUESTIONS = [
  {
    title: "All invoices are raised in accounting software, not a spreadsheet or a template",
    sub: "Xero, Sage, QuickBooks, FreeAgent or similar — not Word"
  },
  {
    title: "The customer ledger is clean: no duplicates, correct contacts, agreed terms on file",
    sub: ""
  },
  {
    title: "Payment terms and statutory interest are stated on every invoice",
    sub: ""
  },
  {
    title: "Chasing happens on a schedule, not when somebody remembers",
    sub: ""
  },
  {
    title: "Incoming payments are matched to invoices automatically",
    sub: ""
  },
  {
    title: "You know your software provider's plan for Peppol and EN 16931",
    sub: "If you haven't asked, the answer is no"
  },
  {
    title: "At least one large customer already receives structured invoices from you",
    sub: ""
  }
];

export default function CheckSection() {
  const [checked, setChecked] = useState(new Array(QUESTIONS.length).fill(false));

  const handleToggle = (index) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  const count = checked.filter(Boolean).length;

  const getScoreMsg = (n) => {
    if (n >= 6) return "You're in good shape. The remaining work is testing, not building.";
    if (n >= 4) return "Solid foundation. The gaps are the ones that take the most hours to close.";
    if (n >= 2) return "Normal for a small business — and roughly a two to three month piece of work.";
    if (n >= 1) return "Start at step one. Everything else depends on it.";
    return "Tick everything that's true of your business today.";
  };

  return (
    <section id="check">
      <div className="wrap">
        <div className="head">
          <h2>Where does your business stand?</h2>
          <div>
            <p className="lede">
              Seven questions. Nothing is sent anywhere — this runs entirely in your browser and we don't collect the answers.
            </p>
          </div>
        </div>

        <div className="check" id="checkList">
          {QUESTIONS.map((q, i) => (
            <label key={i} className="ck">
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => handleToggle(i)}
              />
              <span>
                {q.title}
                {q.sub && <small>{q.sub}</small>}
              </span>
            </label>
          ))}
        </div>

        <div className="score">
          <b id="scoreOut">{count} / {QUESTIONS.length}</b>
          <span id="scoreMsg">{getScoreMsg(count)}</span>
        </div>

        <div className="cta-row">
          <Button variant="line" href="#start">
            Talk through the gaps
          </Button>
          <a className="tlink" href="/evidence">
            See the evidence base
          </a>
        </div>
      </div>
    </section>
  );
}
