// Global, non-product site content and configuration. Edit copy here instead
// of hunting through page components.
//
// Lucide icon names are stored as strings and resolved in the components, so
// this file stays a pure data module (no JSX / imports) and is easy to edit.

export const site = {
  name: 'DApp Architects',
  // Used for canonical URLs, sitemap, and Open Graph absolute links.
  url: 'https://dapparchitects.com',

  // ⚠️ CONFIRM THIS INBOX EXISTS AND RECEIVES MAIL.
  // The old pages hardcoded `hello@dapparchitects.com` in three places; if that
  // mailbox isn't real, every "Start a Project" / "Get in Touch" lead silently
  // bounces. Set this to whichever address you actually monitor
  // (e.g. info@, sales@, or faruk.ansari@dapparchitects.com).
  contactEmail: 'info@dapparchitects.com',

  // Cal.com booking link — just the slug after cal.com/, e.g. 'faruk-ansari/demo'
  // (NOT the full URL). The /book page embeds this. While empty, /book shows a
  // graceful "scheduler coming soon" fallback pointing to the contact page.
  bookingCalLink: 'faruk.ansari-dapparchitects.com/demo',

  tagline: 'Blockchain & full-stack engineering for regulated industries.',
  description:
    'DApp Architects designs and delivers enterprise-grade blockchain and full-stack platforms for pharmaceutical supply chains, medical device tracking, and tokenized real estate — where auditability, compliance, and immutability are non-negotiable.',
};

export const hero = {
  eyebrow: 'Blockchain · Full-Stack · Regulated Industries',
  titleTop: 'Software You Don’t Have to Trust',
  titleAccent: 'Because You Can Verify It',
  body: 'A blockchain and full-stack consultancy building enterprise platforms for pharmaceutical supply chains, medical-device tracking, and tokenized real estate — where compliance and immutability are requirements, not features.',
};

// Home "Core Capabilities" grid. `icon` is a lucide-react icon name.
export const capabilities = [
  {
    icon: 'Layers',
    title: 'Enterprise Blockchain',
    desc: 'Hyperledger Fabric permissioned networks and Solidity smart contracts on EVM chains — built on the same production-grade ledger technology IBM, Walmart, and major financial institutions run in production.',
    tags: [
      'Hyperledger Fabric',
      'JavaScript',
      'Polygon',
      'Chaincode',
      'Solidity',
      'Smart Contracts',
    ],
  },
  {
    icon: 'Shield',
    title: 'Regulatory & Compliance Engineering',
    desc: "Deep expertise in FDA UDI, EU FMD, DSCSA, ISO 13485, GS1 EPCIS 2.0, and SEC Reg D. We don't bolt on compliance — we architect it into the protocol layer.",
    tags: ['FDA UDI', 'EU FMD / MDR', 'GS1 EPCIS 2.0', 'SEC Reg D', 'ISO 13485'],
  },
  {
    icon: 'Database',
    title: 'Full-Stack Web Development',
    desc: 'React, Next.js, Node.js, Python. From pixel-perfect frontends to robust REST APIs backed by PostgreSQL and Redis — end-to-end delivery with no handoffs.',
    tags: ['React / Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Redis'],
  },
  {
    icon: 'Globe',
    title: 'Cloud Infrastructure & DevOps',
    desc: "AWS and DigitalOcean deployments with Nginx, Let's Encrypt, CI/CD pipelines, and monitoring. We ship and we keep it running.",
    tags: ['AWS', 'DigitalOcean', 'Nginx', 'Docker', "Let's Encrypt"],
  },
  {
    icon: 'Cpu',
    title: 'Identity & Security',
    desc: 'X.509 certificate authorities via Hyperledger Fabric CA, KYC/AML integrations, role-based access control enforced at the protocol level — not just the UI.',
    tags: ['Fabric CA', 'X.509', 'KYC / AML', 'RBAC', 'HSM'],
  },
  {
    icon: 'Code2',
    title: 'Token Engineering & DeFi',
    desc: 'ERC-1400 security tokens, fractional asset tokenization, automated dividend distribution and on-chain governance. Institutional-grade DeFi architecture.',
    tags: ['ERC-1400', 'Tokenization', 'DeFi', 'Governance', 'Smart Contracts'],
  },
];

// Home stats band. `platforms` value is computed from product count at render
// time so it can never drift out of sync again (it previously said "3" while
// four platforms were listed).
export const stats = [
  { key: 'platforms', label: 'Production-Grade Platforms' }, // value injected
  { value: '8+', label: 'Regulatory Frameworks Covered' },
  { value: 'Protocol-Level', label: 'Access Control (Not Just UI)' },
  { value: '1s', label: 'FDA Recall Response (vs 3–7 days)' },
];

export const about = {
  eyebrow: 'About DApp Architects',
  titleTop: 'Built for Industries',
  titleAccent: 'Where Mistakes Cost Lives.',
  intro:
    'DApp Architects is a software consultancy specializing in blockchain-powered platforms for regulated industries. We exist because the stakes in healthcare, financial infrastructure, and asset management are too high for software that cuts corners.',
};
