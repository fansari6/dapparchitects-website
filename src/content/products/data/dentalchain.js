// DentalChain — dental implant tracking platform.
//
// NOTE: the previous demoUrl pointed at a Base44-hosted *PharmaChain* demo
// (a copy-paste leftover), so the DentalChain "demo" actually showed the wrong
// product. It has been set to null until a real dental demo is ready — the
// detail page renders a clean "demo coming soon" state when demoUrl is null.
// TODO: drop a `public/dentalchain-demo.html` and set demoUrl: '/dentalchain-demo.html'.

export default {
  slug: 'dentalchain',
  index: '02',
  chainId: '0x6c4a',
  ref: 'DC-04',
  status: 'ONLINE',
  title: 'DentalChain',
  subtitle: 'Dental Implant Tracking',
  brand: { solid: 'Dental', outlined: 'Chain' },
  tagline: 'End-to-end traceability for every dental implant, every patient.',
  seoDescription:
    'DentalChain is a Hyperledger Fabric dental implant tracking platform — FDA UDI-compliant traceability from manufacturer to patient, with one-second recall response across the dental device supply chain.',
  description:
    "DentalChain connects every participant in the dental implant supply chain — manufacturer, distributor, dental clinic, dentist, and regulatory authority — on a single, shared, tamper-proof Hyperledger Fabric ledger. Every device is tracked from the manufacturing facility to the patient's jaw.",
  longDescription:
    'Dental implant failures, counterfeit fixtures, and delayed recalls are a growing global problem. When a manufacturer issues a recall on a contaminated implant batch, dental clinics must identify affected patients manually — a process that can take days or weeks. DentalChain makes it one second. Every lot is traceable, every placement event is permanently recorded, and recall response is instantaneous.',
  liveDemo: null,
  website: null,
  demoUrl: null,
  image: 'dentalchain',
  techStack: [
    'Hyperledger Fabric 3.0',
    'Node.js Chaincode',
    'Fabric CA (X.509)',
    'Node.js / Express',
    'PostgreSQL',
    'React / Vite',
    'GS1 EPCIS 2.0',
    'FDA GUDID Schema',
  ],
  metrics: [
    { label: 'Recall Response Time', value: '1 Second' },
    { label: "Today's Reality", value: 'Days–Weeks' },
    { label: 'Regulatory Frameworks', value: '6 Covered' },
    { label: 'MVP Status', value: '✅ Live' },
  ],
  architecture: [
    {
      node: 'Manufacturer',
      desc: 'Lot created on-chain — requires valid FDA clearance + ISO 13485 cert enforced by smart contract',
    },
    {
      node: 'Distributor / Rep',
      desc: 'Consignment records placed at specific dental clinic locations with real-time inventory visibility',
    },
    {
      node: 'Clinic Supply',
      desc: 'Live consignment dashboard with low-stock alerts and backorder visibility — no rep calls needed',
    },
    {
      node: 'Dentist / Surgeon',
      desc: 'UDI barcode scan auto-populates lot/serial; implant record on blockchain within seconds of placement',
    },
    {
      node: 'Regulatory Authority',
      desc: 'Query any lot → instant patient list with tooth location, procedure date, serial number → CSV export',
    },
  ],
  roles: [
    {
      icon: '🏛',
      title: 'FDA / Regulatory Authority',
      desc: 'Register dental devices with full FDA UDI-DI identifiers. Issue and manage 510(k) and PMA clearances. Issue and revoke ISO 13485 manufacturing certificates. Initiate Class I/II/III recalls with immediate effect across the entire network.',
    },
    {
      icon: '🏭',
      title: 'Manufacturer',
      desc: 'Create production lot records linked to a valid FDA clearance and ISO 13485 certificate — both validated by the smart contract before any lot can be created. QC release lots and flag backorders with estimated resupply dates visible immediately to all downstream participants.',
    },
    {
      icon: '🚚',
      title: 'Distributor / Device Rep',
      desc: 'Create consignment records placing specific lots at specific dental clinic locations. Real-time inventory usage visibility across all accounts. Instant billing trigger when a device is placed — no more manual reconciliation.',
    },
    {
      icon: '📦',
      title: 'Clinic Supply Chain',
      desc: 'Real-time consignment inventory view across all clinic locations. Automatic low-stock alerts below 20%. Backorder and recall alerts — all without calling a rep or counting trays.',
    },
    {
      icon: '🦷',
      title: 'Dentist / Oral Surgeon',
      desc: 'Fast UDI scan interface — point a Bluetooth barcode scanner at device packaging, lot and serial number auto-populate. Add patient ID, procedure type, tooth number, and jaw location. Complete placement record on the blockchain within seconds.',
    },
    {
      icon: '🔬',
      title: 'Infection Control / Risk Management',
      desc: 'Enter a lot number and instantly see every patient with a device from that lot placed — patient ID, clinic, procedure, tooth location, date, serial number. Export to CSV for immediate notification. What takes days today takes one second.',
    },
  ],
  differentiators: [
    {
      title: 'UDI compliance built in',
      desc: 'Every device registered with its FDA UDI-DI. Every lot captures the Production Identifier (PI) — lot number, serial number, manufacture date, expiry date. The GS1 UDI standard the FDA mandates, read and recorded automatically.',
    },
    {
      title: 'Consignment model support',
      desc: 'Built around how the dental device industry actually works — rep-owned inventory on consignment at clinics. Tracks ownership, location, and usage of consigned inventory in real time.',
    },
    {
      title: 'Dual-gate compliance enforcement',
      desc: 'A lot cannot be created unless the manufacturer has both a valid FDA clearance for that device AND a valid ISO 13485 certificate. Enforced in the smart contract — cannot be bypassed by the UI or the API.',
    },
    {
      title: 'EPCIS 2.0 event chain',
      desc: 'Every supply chain event recorded in GS1 EPCIS 2.0 format. Commission → Quality Release → Consign → Place → Explant → Recall. Complete, auditable, tamper-proof.',
    },
    {
      title: 'Explant & failure tracking',
      desc: 'When an implant is removed — osseointegration failure, infection, recall, fracture — the explant event is recorded with reason and device disposition. Critical for post-market surveillance and FDA Medical Device Reports (MDR).',
    },
    {
      title: 'Tamper-proof audit trail',
      desc: 'Every transaction cryptographically signed with the identity of the person who performed it. Records cannot be altered, backdated, or deleted — essential in dental malpractice and device liability cases.',
    },
  ],
  regulatoryFrameworks: [
    {
      name: 'FDA UDI Rule (21 CFR Part 830)',
      region: 'US',
      coverage: 'UDI-DI registration, PI capture at point of placement',
    },
    {
      name: 'FDA GUDID Alignment',
      region: 'US',
      coverage: 'Device attributes match GUDID schema — full',
    },
    {
      name: 'FDA Recall Class I/II/III',
      region: 'US',
      coverage: 'Classification, instant notification, patient query',
    },
    {
      name: 'ISO 13485',
      region: 'Global',
      coverage: 'Certificate per facility, enforced at lot creation',
    },
    {
      name: 'GS1 EPCIS 2.0',
      region: 'Global',
      coverage: 'Commission, consign, place, explant, recall events',
    },
    {
      name: 'EU MDR (2017/745)',
      region: 'EU',
      coverage: 'UDI-to-patient traceability, lot tracking',
    },
  ],
  realDevices: [
    {
      device: 'Brånemark System MkIII TiUnite',
      manufacturer: 'Nobel Biocare',
      category: 'Implant Fixture',
      clearance: 'K031555',
    },
    {
      device: 'NobelActive Implant',
      manufacturer: 'Nobel Biocare',
      category: 'Implant Fixture',
      clearance: 'K082415',
    },
    {
      device: 'Straumann BLT Implant',
      manufacturer: 'Institut Straumann AG',
      category: 'Implant Fixture',
      clearance: 'K173456',
    },
    {
      device: 'Straumann BLC Implant',
      manufacturer: 'Institut Straumann AG',
      category: 'Implant Fixture',
      clearance: 'K201234',
    },
    {
      device: 'Zimmer TSV Implant',
      manufacturer: 'Zimmer Biomet Dental',
      category: 'Implant Fixture',
      clearance: 'K161023',
    },
    {
      device: 'Tapered Screw-Vent Implant',
      manufacturer: 'Zimmer Biomet Dental',
      category: 'Implant Fixture',
      clearance: 'K193201',
    },
    {
      device: 'ASTRA TECH Implant EV',
      manufacturer: 'Dentsply Sirona',
      category: 'Implant Fixture',
      clearance: 'K152637',
    },
    {
      device: 'Ankylos C/X Implant',
      manufacturer: 'Dentsply Sirona',
      category: 'Implant Fixture',
      clearance: 'K110987',
    },
  ],
  roadmap: [
    {
      phase: 'Phase 1',
      title: 'Core',
      status: 'complete',
      desc: 'Device registration, lot tracking, consignment model, placement/explant recording, recall management, public verification.',
    },
    {
      phase: 'Phase 2',
      title: 'Production Ready',
      status: 'complete',
      desc: 'Full FDA UDI support, ISO 13485 tracking, EPCIS 2.0 events, infection control recall query, dentist scan interface, supply chain inventory dashboard, cloud deployment.',
    },
    {
      phase: 'Phase 3',
      title: 'Enterprise Infrastructure',
      status: 'next',
      desc: 'Multi-organisation Fabric network (separate peers per clinic/manufacturer), Dentrix/Eaglesoft integration, 21 CFR Part 11 validation, pseudonymous patient IDs (HIPAA), monitoring and alerting.',
    },
    {
      phase: 'Phase 4',
      title: 'Advanced Features',
      status: 'future',
      desc: 'Mobile app for chairside scanning, manufacturer ERP integration (SAP/Oracle), FDA MedWatch adverse event reporting, post-market surveillance analytics, osseointegration outcome tracking.',
    },
  ],
  color: '#2563EB',
};
