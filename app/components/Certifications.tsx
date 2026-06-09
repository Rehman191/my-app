"use client";

import { useState, useEffect } from "react";

interface License {
  id: string;
  name: string;
  number: string;
  authority: string;
  issued: string;
  status: "Active" | "Verified" | "Pending";
  description: string;
  verifyUrl: string;
  verifyUrlLabel: string;
}

interface Certificate {
  id: string;
  title: string;
  subtitle: string;
  number: string;
  registrar: string;
  scope: string;
  issuedDate: string;
  expiryDate: string;
  accentColor: string;
}

const LICENSES: License[] = [
  {
    id: "secp",
    name: "SECP Corporate Incorporation",
    number: "SECP-INC-0238491",
    authority: "Securities & Exchange Commission of Pakistan",
    issued: "Oct 12, 2011",
    status: "Active",
    description: "Registered as a Private Limited Company for mineral mining, processing, and global export operations.",
    verifyUrl: "https://eservices.secp.gov.pk/eServices/",
    verifyUrlLabel: "eservices.secp.gov.pk"
  },
  {
    id: "fbr",
    name: "FBR National Tax & Sales Registry",
    number: "NTN-9472819-3",
    authority: "Federal Board of Revenue, Govt. of Pakistan",
    issued: "Nov 03, 2011",
    status: "Active",
    description: "Fully compliant corporate tax filer with active sales tax registration for international trade.",
    verifyUrl: "https://e.fbr.gov.pk/esbps/RegistrationVerification.aspx",
    verifyUrlLabel: "e.fbr.gov.pk"
  },
  {
    id: "mmd",
    name: "Mines & Minerals Export License",
    number: "KP-MMD-EXP-7729",
    authority: "Ministry of Mines & Minerals Development",
    issued: "Jan 18, 2012",
    status: "Active",
    description: "Authorized wholesale mineral trader and exporter for raw, processed, and semi-precious minerals.",
    verifyUrl: "https://kpminerals.gov.pk/",
    verifyUrlLabel: "kpminerals.gov.pk"
  },
  {
    id: "kcci",
    name: "Chamber of Commerce Membership",
    number: "KCCI-2024-87429",
    authority: "Karachi Chamber of Commerce & Industry",
    issued: "Feb 15, 2024",
    status: "Active",
    description: "Active member in good standing, certified for bilateral trade and international commercial transactions.",
    verifyUrl: "https://kcci.com.pk/membership/search-member/",
    verifyUrlLabel: "kcci.com.pk"
  }
];

const CERTIFICATES: Certificate[] = [
  {
    id: "iso9001",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    number: "QA-ISO-9001-9872",
    registrar: "AJA Registrars / UKAS Quality Management",
    scope: "Grading, processing, custom sorting, packaging, and international distribution of minerals and gemstones.",
    issuedDate: "May 10, 2023",
    expiryDate: "May 09, 2026",
    accentColor: "var(--orange)"
  },
  {
    id: "iso14001",
    title: "ISO 14001:2015",
    subtitle: "Environmental Management",
    number: "EM-ISO-14001-1194",
    registrar: "SGS International Standards Certification",
    scope: "Eco-friendly stone washing, dust mitigation, responsible sorting, and adherence to environmental standards.",
    issuedDate: "June 14, 2024",
    expiryDate: "June 13, 2027",
    accentColor: "var(--dark-2)"
  },
  {
    id: "gia",
    title: "GIA Standards Compliance",
    subtitle: "Gemological Testing Assurance",
    number: "GIA-COMP-2024-89",
    registrar: "Gemological Institute of America Guidelines",
    scope: "Strict grading protocols for clarity, cut, color, and carat weight on all exported gemstones.",
    issuedDate: "Jan 05, 2024",
    expiryDate: "Continuous Assessment",
    accentColor: "var(--orange)"
  },
  {
    id: "ctpat",
    title: "C-TPAT Cargo Security",
    subtitle: "Supply Chain & Logistics Safety",
    number: "CTPAT-SEC-7702-PK",
    registrar: "Customs-Trade Partnership Compliance",
    scope: "Verified secure loading docks, tamper-proof container seals, and tracking system for international transit.",
    issuedDate: "Aug 22, 2023",
    expiryDate: "Aug 21, 2026",
    accentColor: "var(--dark-2)"
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="certifications-section section bg-light" id="compliance">
      <div className="container">

        {/* Section Header */}
        <div className="section-center" style={{ marginBottom: "60px" }}>
          <span className="section-label">Our Certifications</span>
          <h2 className="section-title">Certified &amp; Fully Compliant</h2>
          <span className="section-divider" />
          <p className="section-subtitle">
            Operating under strict international quality management standards and registered with federal corporate
            and trade authorities to guarantee secure, ethical, and fully legal global mineral exports.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="compliance-grid">

          {/* Left Column: Live Verification System */}
          <div className="verification-card reveal-fade-right">
            <div className="card-header">
              <div className="status-badge">
                <span className="pulse-dot"></span>
                <span>Registry Node: ONLINE</span>
              </div>
              <h3 className="card-title">Federal Business Registry Verification</h3>
              <p className="card-desc">
                Instantly verify our corporate registration, tax standing, and licenses: copy the license number, click the official portal link, and paste to search.
              </p>
            </div>

            <div className="license-list">
              {LICENSES.map((lic) => {
                return (
                  <div key={lic.id} className="license-item">
                    <div className="license-info">
                      <div className="license-name-row">
                        <span className="license-name">{lic.name}</span>
                        <span className="verified-tag">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="10" height="10">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Active
                        </span>
                      </div>
                      <div className="license-number-row">
                        <span className="license-number">{lic.number}</span>
                        <button
                          className="copy-btn"
                          onClick={() => copyToClipboard(lic.number, lic.id)}
                          title="Copy License Number"
                        >
                          {copiedId === lic.id ? "Copied!" : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="license-action">
                      <a
                        href={lic.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="verify-btn"
                        style={{ textDecoration: "none" }}
                      >
                        Verify Live
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="11" height="11" style={{ marginLeft: "6px" }}>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Verification Guide Box */}
            <div className="verification-guide">
              <div className="guide-header">
                <span className="guide-title">Verification Steps</span>
              </div>
              <div className="guide-steps">
                <div className="guide-step">
                  <span className="step-num">1</span>
                  <span className="step-text">Click the <strong>copy icon</strong> next to any license number.</span>
                </div>
                <div className="guide-step">
                  <span className="step-num">2</span>
                  <span className="step-text">Click the <strong>Verify Live</strong> button to open the official government registry portal.</span>
                </div>
                <div className="guide-step">
                  <span className="step-num">3</span>
                  <span className="step-text"><strong>Paste</strong> the code into the search box on their site to see our records.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Certificates Badges */}
          <div className="certificates-grid">
            {CERTIFICATES.map((cert, i) => {
              const delayClass = i === 1 ? " delay-100" : i === 2 ? " delay-200" : i === 3 ? " delay-300" : "";
              return (
                <div 
                  key={cert.id} 
                  className={`cert-card reveal${delayClass}`} 
                  onClick={() => setSelectedCert(cert)}
                  style={{ "--accent-color": cert.accentColor } as React.CSSProperties}
                >
                <div className="cert-card-accent" />
                <div className="cert-card-header">
                  <div className="cert-badge-icon" style={{ backgroundColor: `${cert.accentColor}15`, color: cert.accentColor }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <circle cx="12" cy="11" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-subtitle">{cert.subtitle}</p>
                  </div>
                </div>
                <p className="cert-desc">{cert.scope.substring(0, 95)}...</p>
                <div className="cert-footer">
                  <span className="cert-num">Cert No: {cert.number}</span>
                  <span className="cert-link">
                    View Certificate
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="12" height="12">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCert(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Certificate Style Container */}
            <div className="official-certificate" style={{ borderTop: `10px solid ${selectedCert.accentColor}` }}>

              {/* Decorative Certificate Frame */}
              <div className="cert-frame-inner">

                {/* Header Section */}
                <div className="cert-header-logos">
                  <div className="cert-logo-placeholder" style={{ display: "flex", alignItems: "center" }}>
                    <img 
                      src="/images/logo.png" 
                      alt="AML Exports Logo" 
                      style={{ height: "40px", width: "auto", objectFit: "contain" }}
                    />
                  </div>
                  <div className="cert-registrar-info">
                    <span className="official-header-txt">REGISTRATION OF COMPLIANCE</span>
                    <span className="official-sub-txt">{selectedCert.registrar}</span>
                  </div>
                </div>

                <div className="cert-main-body">
                  <h3 className="cert-main-title">Certificate of Conformance</h3>
                  <p className="cert-conformance-text">This is to certify that the operations and trade standards of</p>
                  <p className="cert-company-name">AML EXPORTS (PVT) LTD</p>
                  <p className="cert-company-address">Peshawar Mineral Processing Facility, KP, Pakistan</p>

                  <div className="cert-divider-line"></div>

                  <p className="cert-scope-label">HAVE BEEN ASSESSED AND FOUND COMPLIANT WITH THE REQUIREMENTS OF</p>
                  <p className="cert-standard-name" style={{ color: selectedCert.accentColor }}>{selectedCert.title}</p>
                  <p className="cert-standard-desc">({selectedCert.subtitle})</p>

                  <div className="cert-scope-box">
                    <span className="scope-box-title">APPROVED SCOPE OF REGISTRATION:</span>
                    <p className="scope-box-text">{selectedCert.scope}</p>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="cert-official-footer">
                  <div className="cert-footer-col">
                    <span className="cert-meta-label">CERTIFICATE NUMBER</span>
                    <span className="cert-meta-val">{selectedCert.number}</span>
                  </div>

                  <div className="cert-footer-col center-col">
                    {/* Simulated gold seal */}
                    <div className="gold-seal">
                      <svg viewBox="0 0 100 100" width="70" height="70" className="seal-svg">
                        <circle cx="50" cy="50" r="45" fill="#f6d365" stroke="var(--orange)" strokeWidth="2" />
                        <path d="M50 15L61 38H85L66 52L75 75L50 60L25 75L34 52L15 38H39L50 15Z" fill="var(--orange)" />
                        <circle cx="50" cy="50" r="32" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="3,3" />
                      </svg>
                      <span className="seal-text">VERIFIED</span>
                    </div>
                  </div>

                  <div className="cert-footer-col">
                    <div className="date-row">
                      <div>
                        <span className="cert-meta-label">INITIAL ISSUE</span>
                        <span className="cert-meta-val">{selectedCert.issuedDate}</span>
                      </div>
                      <div style={{ marginLeft: "20px" }}>
                        <span className="cert-meta-label">EXPIRY DATE</span>
                        <span className="cert-meta-val">{selectedCert.expiryDate}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="modal-actions">
              <button className="btn btn-primary" onClick={() => window.print()} style={{ padding: "10px 24px" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" style={{ marginRight: "6px" }}>
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                Print Certificate
              </button>
              <button className="btn btn-outline-dark" onClick={() => setSelectedCert(null)} style={{ padding: "10px 24px" }}>
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .certifications-section {
          position: relative;
          z-index: 10;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }

        .compliance-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: stretch;
        }

        /* Left Column Style */
        .verification-card {
          background: #fafafa;
          border: 1px solid #e8e8e8;
          border-radius: 8px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }

        .card-header {
          margin-bottom: 30px;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #2e7d32;
          background: rgba(46,125,50,0.08);
          border: 1px solid rgba(46,125,50,0.15);
          padding: 4px 10px;
          border-radius: 50px;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2e7d32;
          display: inline-block;
          animation: pulseGreen 1.8s infinite;
        }

        @keyframes pulseGreen {
          0% { box-shadow: 0 0 0 0 rgba(46,125,50,0.7); }
          70% { box-shadow: 0 0 0 6px rgba(46,125,50,0); }
          100% { box-shadow: 0 0 0 0 rgba(46,125,50,0); }
        }

        .card-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #1d1d1d;
          margin-bottom: 10px;
        }

        .card-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem;
          color: #666666;
          line-height: 1.6;
        }

        .license-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 30px;
          flex-grow: 1;
        }

        .license-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: #ffffff;
          border: 1px solid #e8e8e8;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .license-item.verified {
          border-color: rgba(46,125,50,0.25);
          background: rgba(46,125,50,0.01);
        }

        .license-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .license-name-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .license-name {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 0.9375rem;
          color: #1d1d1d;
        }

        .verified-tag {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          color: #2e7d32;
          background: rgba(46,125,50,0.08);
          padding: 2px 6px;
          border-radius: 3px;
          text-transform: uppercase;
        }

        .license-number-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .license-number {
          font-family: 'Courier New', Courier, monospace;
          font-weight: 700;
          font-size: 0.8125rem;
          color: var(--orange);
        }

        .copy-btn {
          background: none;
          border: none;
          color: #999;
          cursor: pointer;
          padding: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease;
        }

        .copy-btn:hover {
          color: var(--orange);
        }

        .license-portal-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 4px;
        }

        .portal-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem;
          color: #7a7a7a;
          font-weight: 500;
        }

        .portal-link {
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--orange);
          text-decoration: underline;
          display: inline-flex;
          align-items: center;
          transition: color 0.2s ease;
        }

        .portal-link:hover {
          color: var(--orange-dark);
        }

        .verify-btn {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 0.75rem;
          color: #ffffff;
          background: var(--orange);
          border: 1.5px solid var(--orange);
          padding: 6px 16px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 90px;
        }

        .verify-btn:hover {
          background: var(--orange-dark);
          border-color: var(--orange-dark);
          color: #ffffff;
        }

        .verification-guide {
          background: #fdfdfd;
          border: 1px dashed #e2d6c5;
          border-radius: 6px;
          padding: 20px;
          margin-top: 10px;
        }

        .guide-header {
          margin-bottom: 12px;
        }

        .guide-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 0.8125rem;
          color: var(--orange);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .guide-steps {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .guide-step {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .step-num {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          background: var(--orange);
          color: #ffffff;
          border-radius: 50%;
          font-family: 'Poppins', sans-serif;
          font-size: 0.6875rem;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .step-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8125rem;
          color: #555555;
          line-height: 1.4;
        }

        /* Right Column Style */
        .certificates-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .cert-card {
          background: #ffffff;
          border: 1px solid #e8e8e8;
          border-radius: 8px;
          padding: 24px 28px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cert-card-accent {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          background-color: var(--accent-color);
          transition: width 0.3s ease;
        }

        .cert-card:hover {
          transform: translateY(-3px);
          border-color: rgba(220, 184, 75,0.2);
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
        }

        .cert-card:hover .cert-card-accent {
          width: 8px;
        }

        .cert-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .cert-badge-icon {
          width: 44px;
          height: 44px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cert-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.125rem;
          color: #1d1d1d;
          line-height: 1.2;
        }

        .cert-subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem;
          color: #7a7a7a;
          font-weight: 600;
        }

        .cert-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem;
          color: #555555;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .cert-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #f3f3f3;
        }

        .cert-num {
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.75rem;
          color: #9e9e9e;
          font-weight: bold;
        }

        .cert-link {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 0.75rem;
          color: var(--orange);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: gap 0.2s ease;
        }

        .cert-card:hover .cert-link {
          gap: 8px;
        }

        /* Modal / Lightbox System */
        .cert-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cert-modal-content {
          background: #ffffff;
          border-radius: 10px;
          max-width: 800px;
          width: 100%;
          box-shadow: 0 24px 64px rgba(0,0,0,0.25);
          position: relative;
          padding: 40px;
          animation: scaleUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          max-height: 90vh;
          overflow-y: auto;
        }

        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
          transition: background 0.2s ease, color 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close:hover {
          background: #f3f3f3;
          color: #333;
        }

        /* Official Certificate Rendering */
        .official-certificate {
          background: #faf7f2;
          padding: 4px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          margin-bottom: 24px;
        }

        .cert-frame-inner {
          border: 2px solid var(--orange);
          padding: 36px 40px;
          background: #ffffff;
          position: relative;
        }

        /* Micro security watermark pattern */
        .cert-frame-inner::before {
          content: "";
          position: absolute;
          inset: 15px;
          border: 1px solid rgba(220, 184, 75,0.15);
          pointer-events: none;
        }

        .cert-header-logos {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e6dbcb;
          padding-bottom: 20px;
          margin-bottom: 30px;
          position: relative;
          z-index: 2;
        }

        .cert-registrar-info {
          text-align: right;
          display: flex;
          flex-direction: column;
        }

        .official-header-txt {
          font-family: 'Poppins', sans-serif;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #171717;
        }

        .official-sub-txt {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--orange);
        }

        .cert-main-body {
          text-align: center;
          margin-bottom: 40px;
          position: relative;
          z-index: 2;
        }

        .cert-main-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 2rem;
          color: #1d1d1d;
          letter-spacing: -0.5px;
          margin-bottom: 12px;
        }

        .cert-conformance-text {
          font-family: 'Georgia', serif;
          font-style: italic;
          font-size: 0.9375rem;
          color: #666;
          margin-bottom: 20px;
        }

        .cert-company-name {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 1.35rem;
          color: var(--orange);
          letter-spacing: 1px;
          margin-bottom: 4px;
        }

        .cert-company-address {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8125rem;
          color: #666;
          font-weight: 600;
        }

        .cert-divider-line {
          width: 120px;
          height: 1px;
          background: #e6dbcb;
          margin: 24px auto;
        }

        .cert-scope-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.625rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #888;
          margin-bottom: 12px;
        }

        .cert-standard-name {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 1.75rem;
          line-height: 1;
          margin-bottom: 4px;
        }

        .cert-standard-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8125rem;
          color: #666;
          font-weight: bold;
          margin-bottom: 24px;
        }

        .cert-scope-box {
          background: #fcfbfa;
          border: 1px solid #f3ece2;
          padding: 16px 24px;
          border-radius: 4px;
          max-width: 620px;
          margin: 0 auto;
        }

        .scope-box-title {
          display: block;
          font-family: 'Manrope', sans-serif;
          font-size: 0.625rem;
          font-weight: 800;
          color: #9e9e9e;
          letter-spacing: 1px;
          margin-bottom: 6px;
        }

        .scope-box-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8125rem;
          color: #444;
          line-height: 1.5;
          margin: 0;
        }

        .cert-official-footer {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
          border-top: 1px solid #e6dbcb;
          padding-top: 24px;
          position: relative;
          z-index: 2;
        }

        .cert-footer-col {
          display: flex;
          flex-direction: column;
        }

        .cert-footer-col.center-col {
          align-items: center;
        }

        .cert-meta-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.5625rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #9e9e9e;
          margin-bottom: 4px;
          display: block;
          text-transform: uppercase;
        }

        .cert-meta-val {
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.8125rem;
          font-weight: bold;
          color: #171717;
        }

        .gold-seal {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
        }

        .seal-svg {
          animation: sealRotate 40s linear infinite;
        }

        @keyframes sealRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .seal-text {
          position: absolute;
          font-family: 'Poppins', sans-serif;
          font-size: 0.5rem;
          font-weight: 800;
          color: var(--orange);
          letter-spacing: 0.5px;
          pointer-events: none;
        }

        .date-row {
          display: flex;
          justify-content: flex-end;
          text-align: right;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }

        /* Responsive Layouts */
        @media (max-width: 991px) {
          .compliance-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 600px) {
          .verification-card {
            padding: 24px 20px;
          }
          .license-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .license-action {
            width: 100%;
          }
          .verify-btn, .verified-success {
            width: 100%;
          }
          .cert-modal-content {
            padding: 20px;
          }
          .cert-frame-inner {
            padding: 20px 16px;
          }
          .cert-main-title {
            font-size: 1.5rem;
          }
          .cert-official-footer {
            grid-template-columns: 1fr;
            gap: 20px;
            text-align: center;
          }
          .date-row {
            justify-content: center;
            text-align: center;
          }
          .cert-registrar-info {
            text-align: center;
          }
          .cert-header-logos {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
