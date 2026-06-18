// ImplantChain — surgical implant tracking platform.

export default {
  slug: 'implantchain',
  index: '01',
  chainId: '0x3d1e',
  ref: 'IC-03',
  status: 'ONLINE',
  title: 'ImplantChain',
  subtitle: 'Surgical Implant Tracking',
  brand: { solid: 'Implant', outlined: 'Chain' },
  tagline: 'Surgical-grade traceability for every implant, every patient.',
  seoDescription:
    'ImplantChain is a Hyperledger Fabric surgical implant tracking platform — FDA UDI-compliant traceability from manufacturer to patient, with one-second recall response across the device supply chain.',
  description:
    "ImplantChain connects every participant in the surgical implant supply chain — manufacturer, distributor, hospital, OR nurse, infection prevention team, and regulator — on a single, shared, tamper-proof blockchain ledger. Every device is tracked from the manufacturing facility to the patient's body.",
  longDescription:
    'When the FDA issues a Class I recall, hospitals must identify every patient with that device implanted immediately. Today that process takes 3–7 days of manual cross-referencing. ImplantChain makes it one second. Every lot is traceable, every implant event is permanently recorded, and recall response that takes days today takes one query.',
  liveDemo: 'ImplantChain - Interactive Demo',
  website: 'implantchain.dapparchitects.com',
  demoUrl: '/implantchain-demo.html',
  image: 'implantchain',
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
    { label: "Today's Reality", value: '3–7 Days' },
    { label: 'Regulatory Frameworks', value: '8 Covered' },
    { label: 'MVP Status', value: '✅ Live' },
  ],
  architecture: [
    {
      node: 'Manufacturer',
      desc: 'Lot created on-chain — requires valid FDA clearance + ISO 13485 cert enforced by smart contract',
    },
    {
      node: 'Distributor / Rep',
      desc: 'Consignment records placed at specific hospital locations with real-time inventory visibility',
    },
    {
      node: 'Hospital Supply',
      desc: 'Live consignment dashboard with low-stock alerts and backorder visibility — no rep calls needed',
    },
    {
      node: 'OR Nurse',
      desc: 'UDI barcode scan auto-populates lot/serial; implant record on blockchain within seconds',
    },
    {
      node: 'Infection Prevention',
      desc: 'Query any lot → instant patient list with body location, procedure date, serial number → CSV export',
    },
  ],
  roles: [
    {
      icon: '🏛',
      title: 'FDA / Regulatory Authority',
      desc: 'Register medical devices with full FDA UDI-DI identifiers. Issue and manage 510(k) and PMA clearances. Issue and revoke ISO 13485 manufacturing certificates. Initiate Class I/II/III recalls with immediate effect across the entire network.',
    },
    {
      icon: '🏭',
      title: 'Manufacturer',
      desc: 'Create production lot records linked to a valid FDA clearance and ISO 13485 certificate — both validated by the smart contract before any lot can be created. QC release lots and flag backorders with estimated resupply dates visible immediately to all downstream participants.',
    },
    {
      icon: '🚚',
      title: 'Distributor / Device Rep',
      desc: 'Create consignment records placing specific lots at specific hospital locations (OR Suite 1, Spine Cart, Cardiac OR). Real-time inventory usage visibility across all accounts. Instant billing trigger when a device is implanted — no more manual reconciliation.',
    },
    {
      icon: '📦',
      title: 'Hospital Supply Chain',
      desc: 'Real-time consignment inventory view across all hospital locations. Automatic low-stock alerts below 20%. Backorder and recall alerts — all without calling a rep or counting a tray.',
    },
    {
      icon: '🩺',
      title: 'OR Nurse',
      desc: 'Fast UDI scan interface — point a Bluetooth barcode scanner at device packaging, lot and serial number auto-populate. Add patient ID, procedure type, and body location. Complete implant record on the blockchain within seconds of implantation.',
    },
    {
      icon: '🔬',
      title: 'Infection Prevention / Risk Management',
      desc: 'Enter a lot number and instantly see every patient with a device from that lot implanted — patient ID, hospital, procedure, body location, date, serial number. Export to CSV for immediate notification. What takes 3–7 days today takes one second.',
    },
  ],
  differentiators: [
    {
      title: 'UDI compliance built in',
      desc: 'Every device registered with its FDA UDI-DI. Every lot captures the Production Identifier (PI) — lot number, serial number, manufacture date, expiry date. The GS1 UDI standard the FDA mandates, read and recorded automatically.',
    },
    {
      title: 'Consignment model support',
      desc: 'Built around how the medical device industry actually works — rep-owned inventory on consignment at hospitals. Tracks ownership, location, and usage of consigned inventory in real time. No hospital has a system that does this today.',
    },
    {
      title: 'Dual-gate compliance enforcement',
      desc: 'A lot cannot be created unless the manufacturer has both a valid FDA clearance for that device AND a valid ISO 13485 certificate. Enforced in the smart contract — cannot be bypassed by the UI or the API.',
    },
    {
      title: 'EPCIS 2.0 event chain',
      desc: 'Every supply chain event recorded in GS1 EPCIS 2.0 format. Commission → Quality Release → Consign → Implant → Explant → Recall. Complete, auditable, tamper-proof.',
    },
    {
      title: 'Explant tracking',
      desc: 'When a device is removed — revision surgery, infection, recall, malfunction — the explant event is recorded with reason and device disposition. Critical for post-market surveillance and FDA Medical Device Reports (MDR).',
    },
    {
      title: 'Tamper-proof audit trail',
      desc: 'Every transaction cryptographically signed with the identity of the person who performed it. Records cannot be altered, backdated, or deleted. In device liability litigation arising 10–15 years post-implantation, this is the difference between defendable records and discoverable gaps.',
    },
  ],
  regulatoryFrameworks: [
    {
      name: 'FDA UDI Rule (21 CFR Part 830)',
      region: 'US',
      coverage: 'UDI-DI registration, PI capture at point of use',
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
      coverage: 'Commission, consign, implant, explant, recall events',
    },
    {
      name: 'EU MDR (2017/745)',
      region: 'EU',
      coverage: 'UDI-to-patient traceability, lot tracking',
    },
    {
      name: 'Joint Commission Standards',
      region: 'US',
      coverage: 'Documented recall response procedure enabled',
    },
    {
      name: '21 CFR Part 11',
      region: 'US',
      coverage: 'Electronic records and signatures (Phase 3)',
    },
  ],
  realDevices: [
    {
      device: 'Triathlon Total Knee System',
      manufacturer: 'Stryker',
      category: 'Orthopedic',
      clearance: 'K193629',
    },
    {
      device: 'Accolade II Hip Stem',
      manufacturer: 'Stryker',
      category: 'Orthopedic',
      clearance: 'K181513',
    },
    {
      device: 'JOURNEY II Total Knee',
      manufacturer: 'Smith & Nephew',
      category: 'Orthopedic',
      clearance: 'K201234',
    },
    {
      device: 'TRITANIUM PL Cage',
      manufacturer: 'Stryker Spine',
      category: 'Neurosurgery',
      clearance: 'K211456',
    },
    {
      device: 'Micra AV Transcatheter Pacemaker',
      manufacturer: 'Medtronic',
      category: 'Cardiac',
      clearance: 'P160033 (PMA)',
    },
    {
      device: 'Evoque Tricuspid Valve',
      manufacturer: 'Medtronic',
      category: 'Cardiac',
      clearance: 'P190009 (PMA)',
    },
    {
      device: 'Confirm Rx Cardiac Monitor',
      manufacturer: 'Abbott',
      category: 'Cardiac',
      clearance: 'K192001',
    },
    {
      device: 'PRESTIGE LP Cervical Disc',
      manufacturer: 'Medtronic',
      category: 'Neurosurgery',
      clearance: 'P100017 (PMA)',
    },
  ],
  roadmap: [
    {
      phase: 'Phase 1',
      title: 'Core',
      status: 'complete',
      desc: 'Device registration, lot tracking, consignment model, implant/explant recording, recall management, public verification.',
    },
    {
      phase: 'Phase 2',
      title: 'Production Ready',
      status: 'complete',
      desc: 'Full FDA UDI support, ISO 13485 tracking, EPCIS 2.0 events, infection prevention recall query, OR nurse scan interface, supply chain inventory dashboard, cloud deployment.',
    },
    {
      phase: 'Phase 3',
      title: 'Enterprise Infrastructure',
      status: 'next',
      desc: 'Multi-organisation Fabric network (separate peers per hospital/manufacturer), Epic/Cerner HL7 FHIR integration, 21 CFR Part 11 validation, pseudonymous patient IDs (HIPAA), monitoring and alerting.',
    },
    {
      phase: 'Phase 4',
      title: 'Advanced Features',
      status: 'future',
      desc: 'Mobile app for OR nurses, manufacturer ERP integration (SAP/Oracle), FDA MedWatch adverse event reporting, post-market surveillance analytics, IoT environmental monitoring for temperature-sensitive devices.',
    },
  ],
  color: '#2563EB',
};
