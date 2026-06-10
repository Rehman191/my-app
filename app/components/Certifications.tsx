"use client";

export default function Certifications() {
  return (
    <section className="certifications-section section bg-light" id="compliance">
      <div className="container">

        {/* Section Header */}
        <div className="section-center" style={{ marginBottom: "60px" }}>
          <span className="section-label">Our Certifications</span>
          <h2 className="section-title">Certified &amp; Fully Compliant</h2>
          <span className="section-divider" />
          <p className="section-subtitle">
            Operating under strict international quality management standards and registered with corporate
            and trade authorities to guarantee secure, ethical, and fully legal global mineral exports.
          </p>
        </div>

        {/* Coming Soon/Audits In Progress Block */}
        <div className="compliance-update-card reveal">
          <div className="card-accent-bar" />
          
          <div className="card-content">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </div>

            <h3 className="update-title">Accreditation Registry Update In Progress</h3>
            <p className="update-desc">
              AML Exports is currently renewing and updating its international compliance registries. We are finalizing audits for our latest ISO quality, environmental, and global cargo security certifications to reflect our upgraded processing lines.
            </p>

            <div className="status-timeline">
              <div className="status-item done">
                <div className="status-dot-wrap">
                  <span className="status-dot"></span>
                  <span className="status-line"></span>
                </div>
                <div className="status-info">
                  <span className="status-label">SECP &amp; FBR Registration</span>
                  <span className="status-value">Active &amp; Verified</span>
                </div>
              </div>

              <div className="status-item active">
                <div className="status-dot-wrap">
                  <span className="status-dot pulse"></span>
                  <span className="status-line"></span>
                </div>
                <div className="status-info">
                  <span className="status-label">ISO 9001 &amp; ISO 14001 Audits</span>
                  <span className="status-value">Audit Complete — Data Registry Updating Soon</span>
                </div>
              </div>

              <div className="status-item pending">
                <div className="status-dot-wrap">
                  <span className="status-dot"></span>
                </div>
                <div className="status-info">
                  <span className="status-label">International C-TPAT Security Certification</span>
                  <span className="status-value">Final Assessment Under Review</span>
                </div>
              </div>
            </div>

            <p className="notice-footer">
              If you require immediate verification documents for customs clearance or contract compliance, please reach out directly to our operations office.
            </p>
          </div>
        </div>

      </div>

      <style jsx>{`
        .certifications-section {
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }

        .compliance-update-card {
          max-width: 760px;
          margin: 0 auto;
          background: linear-gradient(135deg, #ffffff 0%, #f9fbfc 100%);
          border: 1px solid rgba(27, 86, 172, 0.08);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(11, 37, 69, 0.02);
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .compliance-update-card:hover {
          transform: translateY(-5px);
          border-color: rgba(27, 86, 172, 0.15);
          box-shadow: 0 20px 45px rgba(11, 37, 69, 0.06);
        }

        .card-accent-bar {
          height: 4px;
          background: linear-gradient(90deg, var(--orange-dark) 0%, var(--orange) 100%);
          width: 100%;
        }

        .card-content {
          padding: 40px 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(27, 86, 172, 0.05);
          color: var(--orange);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .icon-wrapper svg {
          width: 32px;
          height: 32px;
        }

        .update-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.45rem;
          color: #0b2545;
          margin-bottom: 12px;
        }

        .update-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9375rem;
          color: #465565;
          line-height: 1.7;
          margin-bottom: 36px;
          max-width: 600px;
        }

        .status-timeline {
          width: 100%;
          max-width: 540px;
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 32px;
          text-align: left;
        }

        .status-item {
          display: flex;
          gap: 16px;
          position: relative;
        }

        .status-dot-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 20px;
          flex-shrink: 0;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d0d7de;
          z-index: 2;
          margin-top: 6px;
        }

        .status-item.done .status-dot {
          background: #2e7d32;
        }

        .status-item.active .status-dot {
          background: var(--orange);
          box-shadow: 0 0 0 3px rgba(27, 86, 172, 0.15);
        }

        .status-dot.pulse {
          animation: dotPulse 1.8s infinite;
        }

        @keyframes dotPulse {
          0% { box-shadow: 0 0 0 0 rgba(27, 86, 172, 0.6); }
          70% { box-shadow: 0 0 0 8px rgba(27, 86, 172, 0); }
          100% { box-shadow: 0 0 0 0 rgba(27, 86, 172, 0); }
        }

        .status-line {
          width: 2px;
          background: #eceff2;
          flex-grow: 1;
          margin-top: 4px;
          margin-bottom: 4px;
          min-height: 30px;
        }

        .status-item.done .status-line {
          background: #2e7d32;
        }

        .status-info {
          display: flex;
          flex-direction: column;
          padding-bottom: 24px;
        }

        .status-item:last-child .status-info {
          padding-bottom: 0;
        }

        .status-label {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          color: #0c2545;
        }

        .status-value {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8125rem;
          color: #627282;
          font-weight: 500;
          margin-top: 2px;
        }

        .status-item.done .status-value {
          color: #2e7d32;
          font-weight: 600;
        }

        .status-item.active .status-value {
          color: var(--orange);
          font-weight: 600;
        }

        .notice-footer {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8125rem;
          color: #627282;
          line-height: 1.6;
          border-top: 1px solid #eceff2;
          padding-top: 24px;
          width: 100%;
        }

        @media (max-width: 600px) {
          .card-content {
            padding: 30px 24px;
          }
          .update-title {
            font-size: 1.25rem;
          }
          .update-desc {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
}
