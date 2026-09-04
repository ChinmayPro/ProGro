import './ReadinessSection.css';

export default function ReadinessSection() {
  return (
    <section id="readiness">
      <div className="wrap">
        <div className="head">
          <h2>Most businesses are not ready</h2>
          <div>
            <p className="lede">
              HMRC commissioned research with around 800 small and medium businesses in early 2025. This is the gap the new rules have to close in three years.
            </p>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <b>15%</b>
            <span>of SMEs send e-invoices; 24% receive them; 10% do both</span>
          </div>
          <div className="stat">
            <b>95%</b>
            <span>send invoices as PDFs — the format the mandate excludes</span>
          </div>
          <div className="stat">
            <b>91%</b>
            <span>did not recall seeing any HMRC messaging about e-invoicing</span>
          </div>
          <div className="stat">
            <b>25%</b>
            <span>were not at all familiar with the term</span>
          </div>
        </div>

        <p className="srcs">
          Source: IFF Research for HMRC, fieldwork February–March 2025. The 91% figure was highlighted by the Association of Taxation Technicians, noting it followed a campaign that included a bulletin to more than 100,000 recipients. Among businesses that had used e-invoicing, Sage was the most common platform at 46%, ahead of Xero at 17% and QuickBooks at 9%.
        </p>

        <div className="callout">
          <h3>One claim we do not repeat</h3>
          <p>
            You will see it said that e-invoicing cuts late payments by around 20% and saves a small firm roughly £11,300 a year. Those figures come from research submitted by a software provider during the consultation, not from an independent government study, and they are repeated widely without that context.
          </p>
          <p>
            The most rigorous independent look at this — the EU Payment Observatory, published for the European Commission in July 2024 — examined Italy's mandate and found that only 19% of large firms and 14% of SMEs saw payment terms reduce, with a minority reporting that e-invoicing made payment times worse. It concluded that technology alone does not change payment behaviour and has to be combined with other measures.
          </p>
        </div>
      </div>
    </section>
  );
}
