"use client";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Image side */}
          <div className="about__images reveal-fade-right">
            <div className="about__img-main-wrap">
              <img src="/images/about-main.png" alt="Mineral sourcing in Pakistan" className="about__img-main"/>
              {/* Orange frame accent */}
              <div className="about__img-frame" />
            </div>
            {/* Experience badge */}
            <div className="about__badge">
              <strong className="about__badge-num">20+</strong>
              <span className="about__badge-txt">Years of<br/>Excellence</span>
            </div>
            {/* Secondary photo */}
            <div className="about__img-secondary-wrap">
              <img src="/images/about-secondary.png" alt="Gemstone collection" className="about__img-secondary"/>
            </div>
          </div>

          {/* Text side */}
          <div className="about__text reveal-fade-left">
            <div style={{ marginBottom: "16px" }}>
              <img 
                src="/images/logo.png" 
                alt="AML Exports" 
                style={{ height: "38px", width: "auto", objectFit: "contain", opacity: 0.9 }}
              />
            </div>
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              Pakistan&apos;s Leading Minerals <span className="about__heading-accent">Manufacturer &amp; Exporter</span>
            </h2>
            <span className="section-divider" />
            <p className="about__para pmi-highlight-text">
              <strong>AML Exports</strong> is a company based in Pakistan, established in 2004.
              We are a diversified mineral export group operating across gemstones, industrial minerals,
              Himalayan salt, and agricultural commodities — serving buyers in 50+ countries worldwide.
            </p>
            <p className="about__para">
              We are counted among the trusted names in pink Himalayan salt, china clay, talc,
              and precious gemstone exports from Pakistan. Our commitment to quality, compliance, and
              client satisfaction has made us a preferred partner for importers across Europe, the Middle East, and Asia Pacific.
            </p>

            {/* Checklist */}
            <div className="about__checklist">
              {[
                "ISO Certified export processes",
                "Direct sourcing from responsible mines",
                "Fully documented & compliant shipments",
                "Dedicated account manager for each client",
              ].map((item) => (
                <div className="about__check-item" key={item}>
                  <span className="about__check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--dark-3)" strokeWidth="3" width="11" height="11">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="about__stats">
              {[
                { val: "500+", lbl: "Mineral Types" },
                { val: "50+", lbl: "Countries" },
                { val: "5K+", lbl: "Shipments" },
              ].map((s) => (
                <div className="about__stat" key={s.lbl}>
                  <strong>{s.val}</strong>
                  <span>{s.lbl}</span>
                </div>
              ))}
            </div>

            <div className="about__actions">
              <a href="#contact" className="pmi-read-more">Get a Quote</a>
              <a href="#minerals" className="pmi-read-more pmi-read-more--outline">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about { background: #ffffff; }

        .about__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 96px;
          align-items: center;
        }

        /* Images */
        .about__images { position: relative; padding-bottom: 60px; padding-right: 32px; }

        .about__img-main-wrap {
          position: relative;
          overflow: visible;
        }
        .about__img-main {
          width: 100%;
          aspect-ratio: 5/4;
          object-fit: cover;
          border-radius: 4px;
          box-shadow: 0 16px 64px rgba(0,0,0,0.12);
          display: block;
        }
        /* Orange offset frame */
        .about__img-frame {
          position: absolute;
          bottom: -16px;
          right: -16px;
          width: 60%;
          height: 60%;
          border: 3px solid var(--orange);
          border-radius: 4px;
          z-index: 0;
          pointer-events: none;
        }

        /* Badge */
        .about__badge {
          position: absolute;
          bottom: 20px;
          left: -24px;
          background: var(--orange);
          color: var(--dark-3);
          padding: 20px 24px;
          border-radius: 4px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(220, 184, 75, 0.3);
          z-index: 3;
        }
        .about__badge-num {
          display: block;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 2.25rem;
          line-height: 1;
          color: var(--dark-3);
        }
        .about__badge-txt {
          display: block;
          font-family: 'Manrope', sans-serif;
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(48, 52, 57, 0.8);
          margin-top: 6px;
        }

        /* Secondary image */
        .about__img-secondary-wrap {
          position: absolute;
          bottom: 0;
          right: -32px;
          width: 45%;
          border: 4px solid #ffffff;
          border-radius: 4px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          z-index: 2;
          overflow: hidden;
        }
        .about__img-secondary {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          display: block;
        }

        /* Text */
        .about__heading-accent { color: var(--orange); }
        .about__para {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9625rem;
          color: #5a5a5a;
          line-height: 1.85;
          margin-bottom: 16px;
        }
        .about__para strong { color: var(--color-heading); font-weight: 700; }

        .about__checklist {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 16px;
          margin: 24px 0 28px;
        }
        .about__check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #3a3a3a;
        }
        .about__check-icon {
          width: 20px;
          height: 20px;
          background: var(--orange);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Stats */
        .about__stats {
          display: flex;
          gap: 0;
          border: 1px solid #e8e8e8;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 32px;
        }
        .about__stat {
          flex: 1;
          padding: 18px 20px;
          text-align: center;
          border-right: 1px solid #e8e8e8;
          transition: background 0.2s ease;
        }
        .about__stat:last-child { border-right: none; }
        .about__stat:hover { background: var(--orange-pale); }
        .about__stat strong {
          display: block;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--orange);
          letter-spacing: -0.5px;
        }
        .about__stat span {
          display: block;
          font-family: 'Manrope', sans-serif;
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #9e9e9e;
          margin-top: 2px;
        }

        .about__actions { display: flex; gap: 12px; flex-wrap: wrap; }

        @media (max-width: 960px) {
          .about__grid { grid-template-columns: 1fr; gap: 80px; }
          .about__images { padding-right: 0; }
          .about__img-secondary-wrap { right: 0; }
          .about__badge { left: -12px; }
        }
        @media (max-width: 560px) {
          .about__checklist { grid-template-columns: 1fr; }
          .about__img-secondary-wrap { display: none; }
          .about__badge { left: 0; bottom: 12px; }
          .about__img-frame { display: none; }
        }
      `}</style>
    </section>
  );
}
