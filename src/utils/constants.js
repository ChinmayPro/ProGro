export const SECTORS_DATA = [
  {
    key: "construction",
    sic: "SIC F · 41–43",
    label: "construction & trades",
    now: "The owner prices jobs in the evening. Invoices go out late because someone has to gather the paperwork first. Retentions sit uncollected because nobody tracks the dates.",
    build: [
      "Draft quotes and applications from jobs you've already won",
      "Chase invoices and retentions on a schedule, in your voice",
      "Pull data out of delivery notes, specs and site paperwork"
    ],
    figs: [
      ["13%", "of construction firms report using AI — the lowest of any sector"],
      ["885k", "construction businesses in the UK"],
      ["60 days", "maximum payment terms in the late payment bill before Parliament"]
    ],
    note: "Retentions are covered by the late payment bill now in Parliament. Firms with clear records will collect. Firms relying on memory will not.",
    defaults: { quote: true, inv: true, doc: false, enq: false, rep: false, know: false },
    vols: { quote: 50, inv: 80, enq: 120, doc: 90, rep: 4, know: 120 }
  },
  {
    key: "professional",
    sic: "SIC M · 69–74",
    label: "professional & business services",
    now: "Work gets done long before it gets billed. Time goes unrecorded, invoices go out at month end, and a senior person loses days to a spreadsheet.",
    build: [
      "Turn work records and notes into draft invoices on time",
      "Automated, escalating credit control that protects the relationship",
      "Assemble the monthly pack and answer questions of the numbers"
    ],
    figs: [
      ["April 2027", "Making Tax Digital reaches everyone over £30,000"],
      ["58%", "AI use in information and professional-leaning sectors — the top end"],
      ["£17k", "average owed to a business affected by late payment"]
    ],
    note: "This sector already uses AI for drafting and research. None of it is connected to the accounts, so none of it shows up in cash.",
    defaults: { rep: true, inv: true, know: false, quote: false, enq: false, doc: false },
    vols: { quote: 35, inv: 120, enq: 150, doc: 60, rep: 6, know: 200 }
  },
  {
    key: "wholesale",
    sic: "SIC G · 45–47",
    label: "wholesale & distribution",
    now: "High invoice volumes, thin margins, and a customer list nobody has cleaned in years. Short payments get sorted by whoever answers the phone, and nobody records why.",
    build: [
      "Match payments and remittances to invoices automatically",
      "Triage disputes and short payments before they age",
      "Structured, machine-readable invoicing ahead of 2029"
    ],
    figs: [
      ["2029", "every VAT invoice must be structured and machine-readable"],
      ["24%", "of SMEs still run invoicing on paper or spreadsheets"],
      ["52 days", "average B2B payment terms across Western Europe"]
    ],
    note: "Large customers will ask for machine-readable invoices well before the 2029 deadline.",
    defaults: { inv: true, doc: true, enq: false, quote: false, rep: false, know: false },
    vols: { quote: 25, inv: 300, enq: 200, doc: 250, rep: 5, know: 100 }
  }
];

export const WORK_ITEMS_DATA = [
  { id: "quote", name: "Quoting and pricing work", b: 25, a: 8, unit: "quotes", min: 10, max: 250, step: 5 },
  { id: "inv", name: "Chasing invoices", b: 15, a: 2, unit: "invoices", min: 10, max: 600, step: 10 },
  { id: "enq", name: "Answering enquiries", b: 12, a: 3, unit: "enquiries", min: 20, max: 600, step: 10 },
  { id: "doc", name: "Re-keying documents", b: 9, a: 2, unit: "documents", min: 20, max: 800, step: 20 },
  { id: "rep", name: "Putting reports together", b: 180, a: 45, unit: "reports", min: 1, max: 20, step: 1 },
  { id: "know", name: "Answering staff questions", b: 9, a: 2, unit: "questions", min: 20, max: 600, step: 20 }
];

export const ABOUT_STATS_DATA = [
  { value: "5.69m", label: "UK small and medium businesses — 99.9% of the private sector" },
  { value: "1 in 6", label: "have deliberately deployed AI for a defined purpose" },
  { value: "1.4 → 1.6", label: "average AI technologies per adopting business since late 2023" }
];

export const ABOUT_PRINCIPLES_DATA = [
  {
    num: "01",
    title: "We build, we don't advise",
    desc: "If the result of a month's work is a document, we have not done our job. What small businesses lack is someone with the time and skill to set things up and keep them working."
  },
  {
    num: "02",
    title: "Vendor-neutral, and paid only by you",
    desc: "We take no commission or referral fee from any software company we recommend. Licences are bought in your name and never marked up."
  },
  {
    num: "03",
    title: "We publish what didn't work",
    desc: "Every monthly report includes the changes that missed their target. A provider who only reports successes is not measuring."
  }
];

export const COMPANY_DETAILS_DATA = [
  { term: "Legal entity", details: "Progro Digital Ltd" },
  { term: "Company number", details: "13465319", isMono: true },
  { term: "Registered in", details: "England and Wales" },
  { term: "Registered office", details: "113 Masthead House, 14 Rope Terrace, London E16 2PH" },
  { term: "Other products", details: "Humotron · Indyra" }
];

export const EVIDENCE_FUNNEL_DATA = [
  {
    num: "70%",
    class: "fn1",
    text: "Use AI in some form, counting features built into software they already pay for",
    source: "QuickBooks SME survey, January 2026"
  },
  {
    num: "54%",
    class: "fn2",
    text: "Say they actively use AI — up from 25% in 2024 and 35% in 2025",
    source: "British Chambers of Commerce with the University of Essex MiSoC, March 2026"
  },
  {
    num: "16%",
    class: "fn3",
    text: "Have deliberately deployed AI for a defined business purpose; around 80% have neither done so nor planned to",
    source: "DSIT AI Adoption Research with IFF Research, around 3,500 interviews"
  },
  {
    num: "11%",
    class: "fn4",
    text: "Of SMEs use AI extensively to automate how they operate",
    source: "British Chambers of Commerce, March 2026"
  }
];

export const EVIDENCE_STATS_DATA = [
  { value: "£11bn", label: "estimated annual cost to the UK economy" },
  { value: "14,000", label: "businesses closed each year — 38 a day" },
  { value: "£26bn", label: "owed at any given time, averaging £17,000 per affected business" },
  { value: "133m", label: "hours of staff time spent chasing across the economy each year" }
];

export const EVIDENCE_LAW_CHANGES_DATA = [
  {
    measure: "Maximum payment terms",
    does: "Caps B2B payment terms at 60 days, with a path to shorter terms",
    note: "Large buyers can only raise a dispute within 30 days of receiving an invoice.",
    status: "In the Bill"
  },
  {
    measure: "Automatic statutory interest",
    does: "Interest on late payment becomes automatic rather than something a supplier must ask for",
    status: "In the Bill"
  },
  {
    measure: "Construction retentions",
    does: "Bans the withholding of retention payments",
    status: "In the Bill"
  },
  {
    measure: "Small Business Commissioner",
    does: "Becomes an enforcement body with the power to investigate and fine",
    status: "In the Bill"
  },
  {
    measure: "Fair Payment Code",
    does: "Voluntary bronze, silver and gold standards administered by the Commissioner",
    status: "Live now"
  }
];

export const EVIDENCE_CALLOUTS_DATA = [
  {
    title: "Technology alone does not fix late payment",
    paragraphs: [
      "The widely repeated claim that e-invoicing reduces late payments by around 20%, saving a small firm about £11,300 a year, originates in research submitted by a software provider during the UK consultation. It is not an independent government finding, and it is quoted almost everywhere without that context.",
      "The strongest independent evidence points the other way. The EU Payment Observatory, published for the European Commission in July 2024, looked at Italy's mandate and found that only 19% of large firms and 14% of SMEs saw payment terms reduce, with a minority reporting worse payment times. Its stated conclusion was that technology alone does not change payment behaviour and must be complemented by other measures.",
      "Our reading: much of the £11bn is large buyers using small suppliers as free credit. That is a problem for legislation, not software. What automation removes is the admin burden: the hours, the forgetting, the disputes nobody recorded. We measure that and not the rest."
    ]
  },
  {
    title: "Vendor performance claims are not evidence",
    paragraphs: [
      "Credit control tools advertise debtor-day reductions of up to 72% or 75%, and one platform claims 99% of its AI users reduced days sales outstanding. These are self-reported vendor figures with no published methodology, no control group and obvious selection bias. As far as we can find, there is no independent or peer-reviewed study isolating the causal effect of accounts receivable automation on small business DSO.",
      "So we do not quote them, and we will not quote our own results until we have enough businesses measured the same way for the number to mean something. The failures will be in the same table."
    ]
  },
  {
    title: "Publicly funded adoption support has failed here before",
    paragraphs: [
      "Help to Grow: Digital aimed at 100,000 businesses and closed in March 2023 having spent a fraction of its allocation. The post-mortems point at the same causes: businesses never heard of it, the offer was narrowed to a handful of software vendors, the eligibility rules excluded many of the smallest firms, and the voucher paid for licences rather than for the help needed to make them work.",
      "We take that as a warning about our own model. Reaching businesses through people they already trust works better than central marketing, and the scarce thing is the setup work, not the software."
    ]
  }
];

export const EVIDENCE_SOURCES_DATA = [
  {
    title: "Department for Business and Trade / Office of the Small Business Commissioner",
    desc: "Late Payments Research by London Economics, July 2025. Business Population Estimates 2025."
  },
  {
    title: "HMRC and DBT",
    desc: "Electronic invoicing consultation outcome, 26 November 2025. SME e-invoicing research by IFF Research, 2025."
  },
  {
    title: "DSIT",
    desc: "AI Adoption Research with IFF Research, around 3,500 business interviews. AI Opportunities Action Plan."
  },
  {
    title: "Office for National Statistics",
    desc: "Business Insights and Conditions Survey; Artificial intelligence in UK businesses, 2026."
  },
  {
    title: "British Chambers of Commerce with the University of Essex MiSoC",
    desc: "Half of SMEs Using AI, March 2026; The Turning Point for SMEs, September 2025."
  },
  {
    title: "European Commission — EU Payment Observatory",
    desc: "Analysis of e-invoicing and payment behaviour, July 2024."
  },
  {
    title: "Federation of Small Businesses",
    desc: "Research on digital skills and technology adoption barriers."
  },
  {
    title: "Parliament",
    desc: "Small Business Protections Bill, introduced May 2026, in progress."
  }
];

