import Button from '@/components/ui/Button/Button';
import './NowSection.css';

export default function NowSection() {
  return (
    <section id="now">
      <div className="wrap">
        <div className="head">
          <h2>What to do now, in order</h2>
          <div>
            <p className="lede">
              None of this needs a big project. It needs someone to do it. This is the order we work through with a business, and it works the same if you do it yourself.
            </p>
          </div>
        </div>

        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: '60px' }}>Step</th>
              <th>What it is</th>
              <th style={{ width: '230px' }}>Why now</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">01</td>
              <td>
                Get invoicing out of spreadsheets and into proper accounting software
                <div className="m">Around 24% of SMEs still run invoicing on paper or basic spreadsheets, and 22% do bookkeeping the same way.</div>
              </td>
              <td className="m">Nothing else is possible until this is true</td>
            </tr>
            <tr>
              <td className="mono">02</td>
              <td>Clean the customer ledger — duplicates, wrong contacts, missing terms, no agreed payment method</td>
              <td className="m">Structured invoicing fails on dirty data</td>
            </tr>
            <tr>
              <td className="mono">03</td>
              <td>Write the terms down and put them on the invoice: due dates, statutory interest, who to contact about a query</td>
              <td className="m">The late payment reforms make terms enforceable</td>
            </tr>
            <tr>
              <td className="mono">04</td>
              <td>Turn on scheduled, escalating chasing — and record why anything goes unpaid</td>
              <td className="m">This is where the 86 hours a year sits</td>
            </tr>
            <tr>
              <td className="mono">05</td>
              <td>Automate payment matching and remittance reconciliation</td>
              <td className="m">Removes the second-largest admin block</td>
            </tr>
            <tr>
              <td className="mono">06</td>
              <td>Confirm your software provider's Peppol and EN 16931 roadmap, in writing</td>
              <td className="m">Their timetable is now your timetable</td>
            </tr>
            <tr>
              <td className="mono">07</td>
              <td>Test structured invoicing with one large customer who already accepts it</td>
              <td className="m">Find the breakages while they're cheap</td>
            </tr>
          </tbody>
        </table>

        <div className="cta-row">
          <Button variant="acc" href="#start">
            Have us do this with you
          </Button>
          <a className="tlink" href="#programme">
            See how the programme works
          </a>
        </div>
      </div>
    </section>
  );
}
