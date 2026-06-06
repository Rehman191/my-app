"use client";

const PARTNERS = [
  "TDAP Pakistan",
  "KCCI",
  "SECP Registered",
  "FBR Compliant",
  "ISO Certified",
  "GIA Standards",
  "Export Council",
  "Chamber of Commerce",
  "Lab Verified",
  "Global Trade Partner",
];

export default function Partners() {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="partners section bg-light" id="partners">
      <div className="container">
        <div className="section-center reveal" style={{ marginBottom: "48px" }}>
          <span className="section-label">Global Network</span>
          <h2 className="section-title">Our Proud Partners</h2>
          <span className="section-divider" />
          <p className="section-subtitle">
            Trusted by trade authorities, certification bodies, and international buyers across the mineral export supply chain.
          </p>
        </div>

        <div className="partners__track-wrap reveal">
          <div className="partners__track">
            {items.map((name, i) => (
              <div key={`${name}-${i}`} className="partners__item">
                <span className="partners__item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </span>
                <span className="partners__item-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .partners {
          padding-top: 80px;
          padding-bottom: 80px;
          border-top: 1px solid var(--color-border);
        }

        .partners__track-wrap {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }

        .partners__track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: partnersScroll 32s linear infinite;
        }

        .partners__track:hover {
          animation-play-state: paused;
        }

        .partners__item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 220px;
          padding: 18px 24px;
          background: var(--white);
          border: 1px solid var(--color-border);
          border-radius: 4px;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .partners__item:hover {
          border-color: rgba(220, 184, 75, 0.45);
          box-shadow: var(--shadow-card);
        }

        .partners__item-icon {
          width: 42px;
          height: 42px;
          border-radius: 4px;
          background: var(--orange-pale);
          color: var(--orange);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .partners__item-name {
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-heading);
          white-space: nowrap;
        }

        @keyframes partnersScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 640px) {
          .partners {
            padding-top: 64px;
            padding-bottom: 64px;
          }
          .partners__item {
            min-width: 190px;
            padding: 14px 18px;
          }
        }
      `}</style>
    </section>
  );
}
