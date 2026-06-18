// PharmaChain — pharmaceutical supply chain platform.
// Pure data only: no imports here so this file is trivial to edit and can be
// read by the sitemap generator. The product image is wired up in ../images.js
// keyed by `image` below ("pharmachain").

export default {
  slug: 'pharmachain',
  index: '03',
  chainId: '0x4f7a',
  ref: 'PC-01',
  status: 'ONLINE',
  title: 'PharmaChain',
  subtitle: 'Pharmaceutical Supply Chain',
  // Brand treatment for the big title: first part solid, second part outlined.
  brand: { solid: 'Pharma', outlined: 'Chain' },
  tagline: 'Immutable provenance for every molecule in the chain.',
  seoDescription:
    'PharmaChain is a Hyperledger Fabric pharmaceutical supply chain platform — tamper-proof track-and-trace from manufacturer to patient, with public batch verification and on-chain prescription enforcement.',
  description:
    'PharmaChain is a pharmaceutical supply chain platform built on Hyperledger Fabric — a permissioned enterprise blockchain used by IBM, Walmart, and major financial institutions. Every event in the supply chain is recorded as a cryptographically signed, permanently immutable entry on the blockchain. No single company controls it. No one can alter it.',
  longDescription:
    'Every year, 500,000 people die from counterfeit or substandard medicines. In 2022, contaminated cough syrup killed 66 children in Gambia. PharmaChain establishes an unbreakable chain of custody from manufacturer to patient — and any patient can verify their medicine is authentic in seconds, with no login required.',
  liveDemo: 'PharmaChain - Interactive Demo',
  website: 'pharmachain.dapparchitects.com',
  demoUrl: '/pharmachain-demo.html',
  image: 'pharmachain',
  techStack: [
    'Hyperledger Fabric 3.0',
    'Node.js Chaincode',
    'Fabric CA (X.509)',
    'Node.js / Express',
    'PostgreSQL',
    'React / Vite',
    "Nginx + Let's Encrypt",
    'AWS / DigitalOcean',
  ],
  metrics: [
    { label: 'Annual Deaths from Counterfeits', value: '500,000' },
    { label: 'Recall Response', value: 'Real-time' },
    { label: 'Regulatory Frameworks', value: '7 Covered' },
    { label: 'MVP Status', value: '✅ Live' },
  ],
  architecture: [
    {
      node: 'Government',
      desc: 'Registers products, issues MA & GMP certs, initiates recalls',
    },
    {
      node: 'Manufacturer',
      desc: 'Creates batches linked to valid MA/GMP; QC releases on-chain',
    },
    {
      node: 'Doctor',
      desc: 'Issues prescriptions by WHO INN with dosage, expiry, and repeats',
    },
    {
      node: 'Pharmacy',
      desc: 'Receives shipments; dispenses only with valid on-chain prescription',
    },
    {
      node: 'Patient',
      desc: 'Verifies any batch publicly — no login, no fee, full EPCIS history',
    },
  ],
  roles: [
    {
      icon: '🏛',
      title: 'Government / Regulatory Authority',
      desc: 'Registers medicinal products with full GS1 identifiers (GTIN, INN, ATC code). Issues Marketing Authorisations and GMP Certificates. Initiates Class I/II/III batch recalls with live regulatory oversight from the blockchain.',
    },
    {
      icon: '🏭',
      title: 'Manufacturer',
      desc: 'Creates production batches linked to a valid MA and GMP Certificate — both validated by the smart contract. QC releases batches simulating Qualified Person certification per EU GMP Annex 16.',
    },
    {
      icon: '🩺',
      title: 'Doctor',
      desc: 'Issues prescriptions using WHO International Nonproprietary Names (INN) — not brand names. Clinical fields include dosage, frequency, duration, indication, and repeats — enforced on-chain at dispensing.',
    },
    {
      icon: '💊',
      title: 'Pharmacy',
      desc: 'Receives shipments with EPCIS receive events recorded. Dispenses only with a valid, unexpired prescription — the smart contract validates product, patient, and allowed quantity.',
    },
    {
      icon: '👤',
      title: 'Patient',
      desc: 'Receives medicine and can verify it immediately via public portal — no login required. Enter any batch number to see the complete supply chain history, QC release date, expiry, and current recall status.',
    },
  ],
  differentiators: [
    {
      title: 'Tamper-proof by design',
      desc: 'Each block contains a cryptographic hash of the previous block. Altering any historical record invalidates every subsequent block — detectable by all nodes instantly.',
    },
    {
      title: 'Role enforcement in chaincode',
      desc: 'Access control is enforced in the smart contract, not just the UI. A manufacturer cannot dispense. A pharmacy cannot create a batch. Even bypassing the frontend, the blockchain rejects the transaction.',
    },
    {
      title: 'Two-organisation endorsement',
      desc: 'Every transaction must be endorsed by two independent peer organisations before it commits to the ledger. No single party can unilaterally record a false transaction.',
    },
    {
      title: 'EPCIS event model',
      desc: 'Industry-standard GS1 EPCIS event architecture — the same model used by major pharmaceutical companies globally for FMD and DSCSA compliance.',
    },
    {
      title: 'Prescription enforcement on-chain',
      desc: 'A pharmacy cannot dispense without a valid, unexpired prescription covering the correct product for the correct patient. Enforced in the smart contract — not in the UI.',
    },
    {
      title: 'Public verifiability',
      desc: 'Any patient, regulator, or journalist can verify any batch — no login, no account, no fee. The complete EPCIS event chain is publicly readable.',
    },
  ],
  regulatoryFrameworks: [
    {
      name: 'EU Falsified Medicines Directive (2011/62/EU)',
      region: 'EU',
      coverage: 'Core track-and-trace, verification at dispense',
    },
    {
      name: 'EU Good Manufacturing Practice (EudraLex Vol 4)',
      region: 'EU',
      coverage: 'Batch records, QP release, quarantine, recall',
    },
    {
      name: 'Drug Supply Chain Security Act (DSCSA)',
      region: 'US',
      coverage: 'Transaction History, Transaction Information',
    },
    {
      name: 'FDA GMP (21 CFR 210-211)',
      region: 'US',
      coverage: 'Batch traceability, recall classification (Class I/II/III)',
    },
    {
      name: 'GS1 EPCIS 2.0',
      region: 'Global',
      coverage: 'Event model — commission, ship, receive, dispense, recall',
    },
    {
      name: 'WHO INN Programme',
      region: 'Global',
      coverage: 'Prescribing and recording by International Nonproprietary Name',
    },
    {
      name: 'WHO ATC Classification',
      region: 'Global',
      coverage: 'Products classified by Anatomical Therapeutic Chemical code',
    },
  ],
  roadmap: [
    {
      phase: 'Phase 1',
      title: 'MVP',
      status: 'complete',
      desc: 'Core track-and-trace: product registration, MA/GMP management, batch lifecycle, prescription enforcement, public verification.',
    },
    {
      phase: 'Phase 2',
      title: 'Clinical Completeness',
      status: 'complete',
      desc: 'Industry terminology (MA, GMP, EPCIS), QC quarantine/release workflow, Class I/II/III recalls, patient portal, prescription clinical fields (INN, dosage, frequency, indication).',
    },
    {
      phase: 'Phase 3',
      title: 'Production Infrastructure',
      status: 'next',
      desc: 'Multi-organisation network, HTTPS, pack-level serialisation (EU FMD), pseudonymous patient IDs (GDPR), monitoring, secrets management.',
    },
    {
      phase: 'Phase 4',
      title: 'Integrations',
      status: 'future',
      desc: 'ERP integration (SAP, Oracle), IoT cold chain monitoring, mobile application (React Native), ADR/pharmacovigilance reporting, EMVS integration.',
    },
  ],
  
  color: '#2563EB',
};
