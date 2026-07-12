// FDA Intelligence — unified FDA device data API.

export default {
  slug: 'fdaintelligence',
  index: '05',
  chainId: '0x5fda',
  ref: 'FDI-05',
  status: 'ONLINE',
  title: 'FDA Intelligence',
  subtitle: 'FDA Device Data API',
  brand: { solid: 'FDA', outlined: 'Intelligence' },
  tagline: 'Every FDA device database. One API. Linked by UDI-DI.',
  seoDescription:
    'FDA Intelligence is a unified REST API linking every FDA device database — GUDID registration, 510(k)/PMA clearances, MAUDE adverse events, recalls, and establishments — by UDI-DI and product code. Query directly or ask in plain English.',
  description:
    'FDA Intelligence connects every FDA medical-device database — device registration (GUDID), 510(k)/PMA clearances, MAUDE adverse events, recalls, and manufacturing establishments — into one linked, queryable API. The entire corpus is mirrored locally, so a single call returns a device’s complete regulatory picture.',
  longDescription:
    'Every FDA device database exists in isolation, keyed differently, with no shared identifiers. Answering a simple question — “what is this device’s full safety history?” — means manually stitching five sources together. FDA Intelligence does the stitching: it mirrors 115 GB of FDA device data (including all 24.4M MAUDE reports with narratives, refreshed weekly) and links it by UDI-DI and product code. One REST call — or one plain-English question — returns the fully joined record.',
  liveDemo: 'FDA Intelligence — Feature Walkthrough',
  website: 'fdaintelligence.dapparchitects.com',
  demoUrl: '/fdaintelligence-demo.html',
  image: 'fdaintelligence',
  techStack: [
    'Node.js / Express',
    'PostgreSQL 18',
    'React / Vite',
    'openFDA + AccessGUDID',
    'Claude (Anthropic)',
    'Stripe Billing',
    'SendGrid',
    'nginx / PM2',
  ],
  metrics: [
    { label: 'Adverse Event Reports', value: '24.4M' },
    { label: 'Devices Linked', value: '5.0M' },
    { label: 'FDA Sources Linked', value: '8' },
    { label: 'Status', value: '✅ Live' },
  ],
  architecture: [
    {
      node: 'GUDID Registry',
      desc: 'The linking hub — every device keyed by UDI-DI, carrying the product codes and premarket (510(k)/PMA) numbers that unlock every other source.',
    },
    {
      node: '510(k) / PMA',
      desc: 'Clearance and approval history joined by product code and premarket submission number.',
    },
    {
      node: 'MAUDE Adverse Events',
      desc: '24.4M reports + 57.8M narratives, mirrored locally with precomputed rollups for instant aggregation.',
    },
    {
      node: 'Recalls & Enforcement',
      desc: 'Recall records linked by product code and manufacturer, with class and status.',
    },
    {
      node: 'Establishments',
      desc: 'Manufacturing-site registrations, deduplicated and ranked to the device’s own maker.',
    },
    {
      node: 'API + NL Query',
      desc: 'One REST call — or a plain-English question — returns the fully linked record, structured and cited.',
    },
  ],
  roles: [
    {
      icon: '🏢',
      title: 'Device Startups',
      desc: 'Regulatory research without a data team. Pull a device’s complete clearance, recall, and adverse-event history in one call while scoping a market, a predicate, or a competitor.',
    },
    {
      icon: '🏥',
      title: 'Hospital Supply Chain',
      desc: 'Monitor recalls and safety signals across every device you stock — query by manufacturer, product code, or specific device, and catch Class I recalls the moment they publish.',
    },
    {
      icon: '💻',
      title: 'Health-IT Vendors',
      desc: 'Embed live FDA device intelligence in your EHR, procurement, or risk product without building and maintaining six separate ETL pipelines against FDA data.',
    },
    {
      icon: '⚖️',
      title: 'Litigation & Law Firms',
      desc: 'Assemble a device’s full regulatory and adverse-event record as cited, defensible evidence — in seconds, not weeks of manual cross-referencing.',
    },
    {
      icon: '🛡',
      title: 'Insurers & Risk Teams',
      desc: 'Score device and manufacturer risk from linked recall and adverse-event data, refreshed weekly — inputs no single FDA endpoint can give you.',
    },
    {
      icon: '🔬',
      title: 'Researchers',
      desc: 'Post-market surveillance at scale: the entire MAUDE corpus with narratives, joined to devices, manufacturers, and product codes.',
    },
  ],
  differentiators: [
    {
      title: 'The linking is the moat',
      desc: 'Every FDA device database is siloed. We join them on UDI-DI and product code, so you can ask cross-source questions no single FDA API can answer — “recalls on devices made at a facility in the last 3 years” — in one query.',
    },
    {
      title: 'The full corpus, mirrored',
      desc: '115 GB of FDA device data — including all 24.4M MAUDE reports with narratives — mirrored locally and refreshed weekly. Your queries never depend on FDA uptime.',
    },
    {
      title: 'Ask in plain English',
      desc: 'A natural-language mode powered by Claude turns “Medtronic cardiac devices recalled since 2023” into structured, cited results. No query language to learn.',
    },
    {
      title: 'Sub-second linked queries',
      desc: 'Precomputed rollups turn a 24-million-row adverse-event aggregation into a primary-key lookup — a full linked device report returns in well under a second.',
    },
    {
      title: 'Self-serve, metered API',
      desc: 'Free tier through enterprise, with per-account keys, usage metering, and Stripe billing. Get a key and start in minutes — no sales call.',
    },
    {
      title: 'Discoverable by design',
      desc: 'Millions of public, SEO-optimized device, manufacturer, and product-code pages make the data findable on the open web — and funnel straight to the API.',
    },
  ],
  regulatoryFrameworks: [
    {
      name: 'openFDA Device APIs',
      region: 'US',
      coverage: '510(k), PMA, recalls, enforcement, MAUDE, classification, registration',
    },
    {
      name: 'AccessGUDID',
      region: 'US',
      coverage: 'Device registry — UDI-DI, attributes, product codes',
    },
    {
      name: 'FDA UDI Rule (21 CFR 830)',
      region: 'US',
      coverage: 'UDI-DI as the primary linking key across all sources',
    },
    {
      name: 'FDA Product Classification',
      region: 'US',
      coverage: 'Product code, device class, regulation number',
    },
    {
      name: 'MAUDE / MDR',
      region: 'US',
      coverage: 'Adverse-event reports with full narratives',
    },
    {
      name: 'Weekly Refresh',
      region: 'Global',
      coverage: 'Automated sync from FDA bulk exports',
    },
  ],
  roadmap: [
    {
      phase: 'Phase 1',
      title: 'MVP',
      status: 'complete',
      desc: 'Linked API across GUDID, 510(k)/PMA, MAUDE, and recalls — joined by UDI-DI and product code, with live openFDA query mode.',
    },
    {
      phase: 'Phase 2',
      title: 'Full Mirror + AI',
      status: 'complete',
      desc: 'Complete 115 GB local mirror of all 8 FDA sources with narratives; natural-language search (Claude); precomputed adverse-event rollups; commercial layer — API keys, metering, tiers, Stripe billing, accounts, and email.',
    },
    {
      phase: 'Phase 3',
      title: 'Launched',
      status: 'complete',
      desc: 'Production deployment; programmatic SEO — millions of public device, manufacturer, and product-code pages plus in-depth guides; billing live.',
    },
    {
      phase: 'Phase 4',
      title: 'Enterprise & Intelligence',
      status: 'next',
      desc: 'Manufacturer entity normalization, bulk export, webhook alerts on new recalls/events, enterprise SSO, AI narrative summarization across 57.8M MAUDE texts, and device risk-scoring models.',
    },
  ],
  color: '#0B5FFF',
};
