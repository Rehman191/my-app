"use client";

export default function Minerals() {
  return (
    <section className="minerals-section" id="minerals">
      
      {/* SECTION HEADER */}
      <div className="section-main-header">
        <div className="container">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Global Export &amp; Logistics Infrastructure</h2>
          <span className="section-divider" />
          <p className="section-subtitle">
            AML Exports integrates procurement networks with direct shipping logistics to facilitate secure mineral transit globally.
          </p>
        </div>
      </div>

      {/* PART 1: PREMIUM MINERAL EXPORTING */}
      <div className="sub-section sub-section--light">
        <div className="container">
          <div className="sub-section__grid">
            <div className="sub-section__content reveal">
              <span className="sub-label">01 / Procurement &amp; Grading</span>
              <h3 className="sub-title">Sourcing &amp; Exporting Pakistan&apos;s Finest Resources</h3>
              <p className="sub-text">
                Pakistan&apos;s rich geological formations host world-class mineral deposits, gemstones, and industrial ores. At AML Exports, we establish direct sourcing channels across Punjab, KPK, Balochistan, and Gilgit-Baltistan to procure raw materials of certified composition.
              </p>
              <p className="sub-text">
                We work directly with international industrial buyers and manufacturers to sort, grade, wash, and package minerals to their specific purity and size requirements, facilitating seamless supply entry.
              </p>
            </div>
            <div className="sub-section__features reveal delay-100">
              <div className="feature-item">
                <div className="feature-icon-bullet">✓</div>
                <div>
                  <h4 className="feature-item-title">Custom Grading &amp; Sorting</h4>
                  <p className="feature-item-desc">Materials are custom-sorted by grade, size, and purity before packaging.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon-bullet">✓</div>
                <div>
                  <h4 className="feature-item-title">Bulk &amp; Containerized Loads</h4>
                  <p className="feature-item-desc">Capacity to handle high-tonnage bulk orders as well as secure container shipments.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon-bullet">✓</div>
                <div>
                  <h4 className="feature-item-title">Purity Verification</h4>
                  <p className="feature-item-desc">All exports are verified through lab-grade chemical analysis certificates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 2: INTEGRATED LOGISTICS BY AML LOGISTICS */}
      <div className="sub-section sub-section--darker">
        <div className="container">
          <div className="sub-section__grid sub-section__grid--reverse">
            <div className="sub-section__content reveal">
              <span className="sub-label">02 / Integrated Supply Chain</span>
              <h3 className="sub-title">The AML Logistics Edge</h3>
              <p className="sub-text">
                International trade is only as reliable as its supply chain. To ensure zero-delay shipments, our dedicated logistics division, AML Logistics, manages the entire journey from the quarry gates to the shipping vessel.
              </p>
              <p className="sub-text">
                By controlling land transit, secure warehousing depots, customs clearing agent protocols, and booking space with leading global shipping lines, we guarantee a secure and predictable export experience.
              </p>
            </div>
            <div className="sub-section__features reveal delay-100">
              <div className="feature-item">
                <div className="feature-icon-bullet">✓</div>
                <div>
                  <h4 className="feature-item-title">Customs Clearance &amp; Brokerage</h4>
                  <p className="feature-item-desc">Direct management of customs declaration documents at port hubs.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon-bullet">✓</div>
                <div>
                  <h4 className="feature-item-title">Secure Land &amp; Port Transit</h4>
                  <p className="feature-item-desc">Tamper-proof container loading and transit tracking to Karachi ports.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon-bullet">✓</div>
                <div>
                  <h4 className="feature-item-title">Global Freight Agreements</h4>
                  <p className="feature-item-desc">Pre-negotiated contract rates with major ocean carriers for steady pricing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 3: ACCREDITATION & COMPLIANCE */}
      <div className="sub-section sub-section--light last-sub-section">
        <div className="container">
          <div className="compliance-row reveal">
            <div className="compliance-text">
              <h3 className="compliance-title">A Secure, Fully Licensed Exporter</h3>
              <p className="compliance-desc">
                AML Exports (Pvt) Ltd is registered with the Securities &amp; Exchange Commission of Pakistan (SECP) and the Federal Board of Revenue (FBR). We operate in strict compliance with international customs trade partnership regulations and Chamber of Commerce frameworks, providing buyers with absolute legal protection and contract assurance.
              </p>
            </div>
            <div className="compliance-action">
              <a href="#contact" className="btn btn-primary" id="minerals-inquiry-btn">
                Inquire About Exporting
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .minerals-section {
          background: #ffffff;
        }

        .section-main-header {
          padding: 100px 0 60px;
          text-align: center;
          border-top: 1px solid #f0f0f0;
        }

        .sub-section {
          padding: 80px 0;
          border-top: 1px solid #f0f0f0;
        }

        .sub-section--light {
          background: #ffffff;
        }

        .sub-section--darker {
          background: #f9fbfc;
        }

        .sub-label {
          font-family: 'Poppins', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--orange);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 12px;
        }

        .sub-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: #0b2545;
          margin-bottom: 20px;
          line-height: 1.25;
        }

        .sub-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9375rem;
          color: #465565;
          line-height: 1.75;
          margin-bottom: 16px;
        }

        .sub-text:last-child {
          margin-bottom: 0;
        }

        /* Sub section grid */
        .sub-section__grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        .sub-section__grid--reverse {
          grid-template-columns: 0.9fr 1.1fr;
        }

        .sub-section__grid--reverse .sub-section__content {
          order: 2;
        }

        .sub-section__grid--reverse .sub-section__features {
          order: 1;
        }

        /* Features list inside subsections */
        .sub-section__features {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .feature-icon-bullet {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(27, 86, 172, 0.06);
          color: var(--orange);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.75rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .feature-item-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #0b2545;
          margin-bottom: 4px;
        }

        .feature-item-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem;
          color: #627282;
          line-height: 1.6;
        }

        /* Compliance Row */
        .compliance-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 60px;
        }

        .compliance-text {
          max-width: 700px;
        }

        .compliance-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.35rem;
          color: #0b2545;
          margin-bottom: 12px;
        }

        .compliance-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem;
          color: #465565;
          line-height: 1.7;
        }

        .last-sub-section {
          border-bottom: 1px solid #f0f0f0;
          padding-bottom: 100px;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .sub-section__grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .sub-section__grid--reverse {
            grid-template-columns: 1fr;
          }
          .sub-section__grid--reverse .sub-section__content {
            order: 1;
          }
          .sub-section__grid--reverse .sub-section__features {
            order: 2;
          }
          .compliance-row {
            flex-direction: column;
            text-align: center;
            gap: 24px;
          }
          .compliance-text {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
