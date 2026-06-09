"use client";

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Premium Quality",
    desc: "Every mineral is lab-certified and hand-selected to meet the highest international standards before shipment.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Global Reach",
    desc: "Trusted by buyers in 50+ countries with reliable international freight and customs documentation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Ethically Sourced",
    desc: "Direct partnerships with responsible mines, ensuring fair labour and sustainable environmental practices.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: "Fast Shipping",
    desc: "Our global freight network delivers your order safely to any destination on schedule, every time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "Certified & Compliant",
    desc: "Full export documentation, certificates of origin, and compliance with international trade regulations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Dedicated Support",
    desc: "A dedicated account manager guides you from first inquiry through to successful delivery at your facility.",
  },
];

export default function Features() {
  return (
    <section className="features section bg-light" id="services">
      <div className="container">
        <div className="section-center" style={{ marginBottom: "60px" }}>
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Pakistan&apos;s Leading Mineral Export Services</h2>
          <span className="section-divider" />
          <p className="section-subtitle">
            Combining decades of geological expertise with modern logistics to deliver Pakistan&apos;s finest
            minerals to markets across the globe.
          </p>
        </div>

        <div className="features__grid">
          {FEATURES.map((f, i) => {
            const delayClass = i % 3 === 1 ? " delay-100" : i % 3 === 2 ? " delay-200" : "";
            return (
              <div className={`feature-card reveal${delayClass}`} key={f.title}>
                <div className="feature-card__icon-box">
                  {f.icon}
                </div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
                <div className="feature-card__more">
                  <a href="#contact" className="feature-card__link">
                    Learn More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
      </div>
      </div>

      <style jsx>{`
        .features__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .feature-card {
          background: #ffffff;
          padding: 36px 32px;
          border: 1px solid #e8e8e8;
          border-radius: 6px;
          position: relative;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--orange);
          transform: scaleX(0);
          transition: transform 0.35s ease;
          transform-origin: left;
        }
        .feature-card:hover {
          border-color: rgba(220, 184, 75, 0.35);
          box-shadow: var(--shadow-card-hover);
          transform: translateY(-4px);
        }
        .feature-card:hover::before { transform: scaleX(1); }

        .feature-card__icon-box {
          width: 60px;
          height: 60px;
          background: var(--orange-pale);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--orange);
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }
        .feature-card:hover .feature-card__icon-box {
          background: var(--orange);
          color: var(--white);
        }

        .feature-card__title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.0625rem;
          font-weight: 600;
          color: #1d1d1d;
          margin-bottom: 12px;
        }
        .feature-card__desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem;
          color: #5a5a5a;
          line-height: 1.75;
          margin-bottom: 20px;
        }
        .feature-card__more {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid #f0f0f0;
        }
        .feature-card__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--orange);
          text-decoration: none;
          transition: gap 0.2s ease;
        }
        .feature-card__link:hover { gap: 10px; color: var(--orange-dark); }

        @media (max-width: 900px) { .features__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .features__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
