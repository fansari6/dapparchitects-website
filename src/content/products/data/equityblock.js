// EquityBlock — fractional real estate investment platform.
//
// CONTENT NOTES (please review):
// 1. The previous `metrics` claimed "$48M+ TVL", "127 Properties", "14.2% ROI"
//    and "SEC Reg D". For a demo/MVP these read as real, audited traction and
//    create credibility + securities-claim risk. They have been replaced with
//    honest capability framing. Put real, substantiable numbers back only if
//    you can stand behind them.
// 2. `techStack` lists Solidity / Polygon / Next.js / Python — this diverges
//    from the Hyperledger Fabric stack used by the other platforms. Confirm it
//    is accurate and not carried-over placeholder copy.
// 3. roles / differentiators / regulatoryFrameworks / roadmap were MISSING on
//    the old entry, so EquityBlock's detail page rendered a thinner layout than
//    the others. They are filled in below with honest, domain-accurate copy.

export default {
  slug: 'equityblock',
  index: '04',
  chainId: '0x8b2c',
  ref: 'EB-02',
  status: 'ONLINE',
  title: 'EquityBlock',
  subtitle: 'Fractional Real Estate Investment Platform',
  brand: { solid: 'Equity', outlined: 'Block' },
  tagline: 'Democratizing property investment through tokenized equity.',
  seoDescription:
    'EquityBlock is a fractional real estate investment platform that tokenizes property equity into compliant, tradeable digital shares — with KYC/AML gating, automated distributions, and on-chain governance.',
  description:
    'A fractional real estate investment platform that tokenizes property assets, enabling investors to participate in high-value developments with minimal capital. Smart contracts automate dividend distribution, governance voting, and compliance—making institutional-grade real estate accessible to everyone.',
  longDescription:
    'Traditional real estate development requires millions in capital, locking out 99% of potential investors. Our platform fractures this barrier by tokenizing property equity into tradeable digital assets. Each token represents a verified legal claim to a proportional share of the underlying asset, its rental income, and its appreciation.',
  liveDemo: 'EquityBlock - Interactive Demo',
  website: 'equityblock.dapparchitects.com',
  demoUrl: '/equityblock-demo.html',
  image: 'equityblock',
  // TODO: confirm this stack reflects the live build (see note #2 above).
  techStack: [
    'Solidity',
    'Polygon',
    'Next.js',
    'Python',
    'AWS',
    'KYC/AML API',
    'PostgreSQL',
    'Redis',
  ],
  // Honest, capability-based metrics (no unverified traction figures).
  metrics: [
    { label: 'Asset Class', value: 'Real Estate' },
    { label: 'Ownership Model', value: 'Fractional' },
    { label: 'Investor Onboarding', value: 'KYC / AML Gated' },
    { label: 'MVP Status', value: '✅ Live' },
  ],
  architecture: [
    {
      node: 'Property Onboarding',
      desc: 'Asset valuation and legal structuring',
    },
    { node: 'Tokenization', desc: 'ERC-1400 security tokens minted' },
    { node: 'KYC/AML Gate', desc: 'Investor identity verified on-chain' },
    {
      node: 'Investment',
      desc: 'Fractional shares purchased via smart contract',
    },
    {
      node: 'Yield Distribution',
      desc: 'Automated dividend payouts to token holders',
    },
  ],
  roles: [
    {
      icon: '🏢',
      title: 'Issuer / Sponsor',
      desc: 'Onboards a property, defines the offering terms, and tokenizes the equity. Legal structuring and asset valuation happen off-chain; the resulting cap table and ownership shares are recorded on-chain.',
    },
    {
      icon: '🛡',
      title: 'Compliance / KYC Officer',
      desc: 'Reviews and approves investor identity and accreditation before any token can be acquired. Eligibility is enforced by the security-token contract — an unverified wallet cannot hold or receive shares.',
    },
    {
      icon: '👤',
      title: 'Investor',
      desc: 'Completes KYC/AML and (where required) accreditation, then purchases fractional shares of a property through a smart contract. Holdings, income, and governance rights are visible in a single transparent portfolio.',
    },
    {
      icon: '🗳',
      title: 'Token Holder (Governance)',
      desc: 'Participates in on-chain votes on material decisions — refinancing, sale, capital improvements — with voting weight proportional to verified ownership.',
    },
    {
      icon: '🧾',
      title: 'Registrar / Administrator',
      desc: 'Maintains the authoritative cap table, processes transfers within compliance rules, and triggers automated dividend distributions to current token holders.',
    },
  ],
  differentiators: [
    {
      title: 'Compliance enforced in the token',
      desc: 'Eligibility (KYC/AML, accreditation, jurisdiction, lock-ups) is enforced by the ERC-1400 security-token contract itself — not just the UI. A non-compliant transfer simply cannot settle.',
    },
    {
      title: 'Fractional ownership, real claim',
      desc: 'Each token represents a verified proportional claim on the underlying asset, its rental income, and its appreciation — not a synthetic exposure.',
    },
    {
      title: 'Automated distributions',
      desc: 'Rental income and dividends are distributed to current holders automatically via smart contract, removing manual reconciliation and payout delays.',
    },
    {
      title: 'Transparent cap table',
      desc: 'Ownership and transfers are recorded on-chain, giving issuers, investors, and administrators a single auditable source of truth for who owns what.',
    },
    {
      title: 'On-chain governance',
      desc: 'Material decisions are put to token-holder vote with weight proportional to verified ownership — auditable and tamper-proof.',
    },
  ],
  regulatoryFrameworks: [
    {
      name: 'SEC Regulation D (Rule 506)',
      region: 'US',
      coverage: 'Private placement to accredited investors',
    },
    {
      name: 'SEC Regulation S',
      region: 'Global',
      coverage: 'Offers and sales to non-US investors',
    },
    {
      name: 'KYC / AML (BSA)',
      region: 'US',
      coverage: 'Identity verification and sanctions screening at onboarding',
    },
    {
      name: 'Accredited Investor Verification',
      region: 'US',
      coverage: 'Eligibility checks enforced before token issuance',
    },
    {
      name: 'ERC-1400 Security Token Standard',
      region: 'Global',
      coverage: 'Transfer restrictions and compliance hooks on-chain',
    },
  ],
  roadmap: [
    {
      phase: 'Phase 1',
      title: 'MVP',
      status: 'complete',
      desc: 'Property onboarding, ERC-1400 tokenization, KYC/AML-gated investment, fractional purchase flow, automated distribution.',
    },
    {
      phase: 'Phase 2',
      title: 'Investor Experience',
      status: 'complete',
      desc: 'Investor portfolio dashboard, transparent cap table, on-chain governance voting, distribution history.',
    },
    {
      phase: 'Phase 3',
      title: 'Compliance & Liquidity',
      status: 'next',
      desc: 'Accreditation provider integrations, transfer-agent workflow, secondary-transfer compliance, jurisdiction-aware lock-ups.',
    },
    {
      phase: 'Phase 4',
      title: 'Scale',
      status: 'future',
      desc: 'Multi-property portfolios, fiat on/off-ramps, secondary market venue integration, institutional reporting.',
    },
  ],
  color: '#2563EB',
};
