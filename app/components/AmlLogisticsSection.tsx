"use client";

export default function AmlLogisticsSection() {
  return (
    <section className="logistics-section section" id="logistics">
      <div className="quote__texture" aria-hidden="true" style={{ opacity: 0.04 }} />
      <div className="container">
        
        {/* Section Header */}
        <div className="section-center" style={{ marginBottom: "50px" }}>
          <span className="section-label">Integrated Supply Chain</span>
          <h2 className="section-title">Powered by AML Logistics</h2>
          <span className="section-divider" />
          <p className="section-subtitle">
            As a sister concern of <strong>AML Logistics (Pvt) Ltd</strong>, we offer a seamless, fully integrated logistics infrastructure. From quarry mining to port delivery, we handle it all in-house.
          </p>
        </div>

        {/* Info Grid */}
        <div className="logistics-grid">
          
          {/* Card 1: Nationwide Fleet */}
          <div className="logistics-card reveal">
            <div className="logistics-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <h3 className="logistics-card__title">Nationwide Fleet</h3>
            <p className="logistics-card__desc">
              Direct access to a diverse fleet of specialized high-wall trucks, Mazdas, flatbeds, and 20ft/40ft containers, engineered for transporting bulk minerals safely.
            </p>
          </div>

          {/* Card 2: Warehousing */}
          <div className="logistics-card reveal delay-100">
            <div className="logistics-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
                <polygon points="12 11 12 17 17 14" />
              </svg>
            </div>
            <h3 className="logistics-card__title">Safe Warehousing</h3>
            <p className="logistics-card__desc">
              Secure temporary storage and consolidations at strategic warehouse locations. Custom wrapping and heavy-weight packing services are provided on-site.
            </p>
          </div>

          {/* Card 3: GPS Tracking */}
          <div className="logistics-card reveal delay-200">
            <div className="logistics-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="logistics-card__title">Real-Time GPS Tracking</h3>
            <p className="logistics-card__desc">
              Complete visibility over your shipment. Every export dispatch features real-time GPS tracking, allowing you to monitor transit from the Northern quarries to the port.
            </p>
          </div>

          {/* Card 4: Clearing & Compliance */}
          <div className="logistics-card reveal delay-300">
            <div className="logistics-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3 className="logistics-card__title">Customs Clearance</h3>
            <p className="logistics-card__desc">
              Operating since 1994, our customs division handles phytosanitary certs, lab testing reports, weight bridge verification, and port declarations smoothly.
            </p>
          </div>

        </div>

        {/* Integration Call To Action */}
        <div className="logistics-footer reveal">
          <div className="logistics-brand-info">
            <img 
              src="/images/logo.png" 
              alt="AML Exports" 
              className="logistics-logo"
            />
            <span className="logistics-x-icon">×</span>
            <span className="logistics-partner-text">AML Logistics (Pvt) Ltd</span>
          </div>
          <p className="logistics-footer-desc">
            Need end-to-end shipping, general freight forwarding, corporate car rental, or custom commercial clearance solutions inside Pakistan?
          </p>
          <a 
            href="https://amllogistics.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="logistics-link-btn"
          >
            Visit amllogistics.com
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

      </div>

      <style jsx>{`
        .logistics-section {
          background: #ffffff;
          position: relative;
          overflow: hidden;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }

        .logistics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 50px;
        }

        .logistics-card {
          background: #ffffff;
          border: 1px solid rgba(27, 86, 172, 0.08);
          border-radius: 12px;
          padding: 30px 24px;
          transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.01);
          display: flex;
          flex-direction: column;
        }

        .logistics-card:hover {
          transform: translateY(-6px);
          border-color: rgba(27, 86, 172, 0.2);
          box-shadow: 0 16px 36px rgba(27, 86, 172, 0.06);
        }

        .logistics-card__icon {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: rgba(27, 86, 172, 0.05);
          color: var(--orange);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .logistics-card:hover .logistics-card__icon {
          background: var(--orange);
          color: #ffffff;
          transform: scale(1.05);
        }

        .logistics-card__title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0b2545;
          margin-bottom: 12px;
        }

        .logistics-card__desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.875rem;
          color: #465565;
          line-height: 1.6;
          margin: 0;
        }

        .logistics-footer {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
          background: linear-gradient(135deg, #0b2545 0%, #17375e 100%);
          border-radius: 16px;
          padding: 40px 32px;
          color: #ffffff;
          box-shadow: 0 20px 40px rgba(11, 37, 69, 0.15);
          position: relative;
        }

        .logistics-brand-info {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .logistics-logo {
          height: 38px;
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .logistics-x-icon {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 300;
        }

        .logistics-partner-text {
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          padding: 4px 14px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .logistics-footer-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 24px;
        }

        .logistics-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #0b2545;
          text-decoration: none;
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 12px 28px;
          border-radius: 30px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.25s ease;
        }

        .logistics-link-btn:hover {
          background: var(--orange-light);
          color: #0b2545;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .logistics-link-btn svg {
          transition: transform 0.25s ease;
        }

        .logistics-link-btn:hover svg {
          transform: translate(2px, -2px);
        }

        @media (max-width: 1024px) {
          .logistics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .logistics-grid {
            grid-template-columns: 1fr;
          }
          .logistics-footer {
            padding: 30px 20px;
          }
          .logistics-brand-info {
            gap: 10px;
          }
          .logistics-partner-text {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
