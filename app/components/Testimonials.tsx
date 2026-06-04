"use client";
import { useState } from "react";

const TESTIMONIALS = [
  { name: "Marcus Hoffmann", role: "Procurement Director", company: "GeoStone GmbH", country: "Germany", avatar: "https://randomuser.me/api/portraits/men/32.jpg", rating: 5, text: "Mineral Exp Int has been our exclusive supplier for 8 years. Their consistency in quality and punctual delivery is unmatched. A true partner we can rely on." },
  { name: "Sophie Laurent", role: "Head of Sourcing", company: "Gemme Royale", country: "France", avatar: "https://randomuser.me/api/portraits/women/44.jpg", rating: 5, text: "The emeralds and aquamarines we receive are of exceptional quality — fully certified, beautifully packaged, and always exactly as described. I recommend them highly." },
  { name: "Raj Krishnamurthy", role: "Chief Executive Officer", company: "IndoMinerals Ltd", country: "India", avatar: "https://randomuser.me/api/portraits/men/67.jpg", rating: 5, text: "From the first inquiry to final delivery, the process is seamless. Their documentation team makes customs clearance effortless. Best mineral exporter I've worked with." },
  { name: "Elena Vasquez", role: "Operations Manager", company: "PetraGroup", country: "Spain", avatar: "https://randomuser.me/api/portraits/women/68.jpg", rating: 5, text: "We source decorative stones and lapis lazuli for high-end architecture projects. Mineral Exp Int provides exactly what we need — premium quality at competitive prices." },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="testi section" id="testimonials">
      <div className="container">
        {/* Header */}
        <div className="section-center" style={{ marginBottom: "60px" }}>
          <span className="section-label">Client Reviews</span>
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <span className="section-divider" />
          <p className="section-subtitle">Hear directly from our global clients about why they choose Mineral Exp Int.</p>
        </div>

        <div className="testi__layout">
          {/* Left: Featured */}
          <div className="testi__feature">
            <div className="testi__quote">&ldquo;</div>
            <blockquote className="testi__text">{t.text}</blockquote>
            <div className="testi__stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill={i < t.rating ? "#CD7530" : "none"} stroke="#CD7530" strokeWidth="1.5" width="16" height="16">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <div className="testi__author">
              <img src={t.avatar} alt={t.name} className="testi__author-avatar"/>
              <div>
                <strong className="testi__author-name">{t.name}</strong>
                <span className="testi__author-role">{t.role}</span>
                <span className="testi__author-company">{t.company} · {t.country}</span>
              </div>
            </div>
            {/* Dots */}
            <div className="testi__dots">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} className={`testi__dot ${i === active ? "testi__dot--active" : ""}`}
                  onClick={() => setActive(i)} aria-label={`Testimonial ${i+1}`}/>
              ))}
            </div>
          </div>

          {/* Right: Tab list */}
          <div className="testi__list">
            {TESTIMONIALS.map((item, i) => (
              <button key={item.name} className={`testi__tab ${i === active ? "testi__tab--active" : ""}`}
                onClick={() => setActive(i)} id={`testimonial-tab-${i}`}>
                <img src={item.avatar} alt={item.name} className="testi__tab-avatar"/>
                <div className="testi__tab-info">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                  <span className="testi__tab-company">{item.company} · {item.country}</span>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="#CD7530" strokeWidth="2.5" width="14" height="14"
                  style={{ opacity: i === active ? 1 : 0, transition: "opacity 0.2s" }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            ))}

            {/* Trust strip */}
            <div className="testi__trust">
              {[
                { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "ISO Certified" },
                { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Lab Verified" },
                { icon: "M12 2a10 10 0 100 20 10 10 0 000-20z", label: "Global Reach" },
              ].map((item) => (
                <div key={item.label} className="testi__trust-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#CD7530" strokeWidth="2" width="18" height="18">
                    <path d={item.icon}/>
                  </svg>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testi { background: #ffffff; }

        .testi__layout {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 64px;
          align-items: start;
        }

        /* Feature */
        .testi__feature {
          background: #171717;
          padding: 52px 48px 44px;
          border-radius: 6px;
          position: relative;
          overflow: hidden;
        }
        .testi__feature::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: #CD7530;
        }

        .testi__quote {
          font-size: 6rem;
          line-height: 0.8;
          color: #CD7530;
          opacity: 0.2;
          font-family: Georgia, serif;
          position: absolute;
          top: 32px; left: 40px;
        }

        .testi__text {
          font-family: 'Manrope', sans-serif;
          font-size: 1.0625rem;
          font-style: italic;
          color: rgba(255,255,255,0.8);
          line-height: 1.85;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .testi__stars {
          display: flex;
          gap: 3px;
          margin-bottom: 24px;
        }

        .testi__author {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }
        .testi__author-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #CD7530;
        }
        .testi__author-name {
          display: block;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 0.9375rem;
          color: #ffffff;
        }
        .testi__author-role {
          display: block;
          font-family: 'Manrope', sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.45);
          margin-top: 2px;
        }
        .testi__author-company {
          display: block;
          font-family: 'Manrope', sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(205,117,48,0.7);
          margin-top: 4px;
        }

        .testi__dots {
          display: flex;
          gap: 8px;
        }
        .testi__dot {
          height: 3px;
          width: 24px;
          background: rgba(255,255,255,0.15);
          border: none;
          cursor: pointer;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .testi__dot--active { width: 40px; background: #CD7530; }

        /* Tab list */
        .testi__list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .testi__tab {
          display: flex;
          align-items: center;
          gap: 14px;
          background: #ffffff;
          border: 1px solid #e8e8e8;
          padding: 16px 18px;
          cursor: pointer;
          text-align: left;
          border-radius: 4px;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .testi__tab::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #CD7530;
          transform: scaleY(0);
          transition: transform 0.25s ease;
        }
        .testi__tab--active,
        .testi__tab:hover {
          border-color: rgba(205,117,48,0.25);
          background: rgba(205,117,48,0.03);
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }
        .testi__tab--active::before,
        .testi__tab:hover::before { transform: scaleY(1); }

        .testi__tab-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          border: 2px solid #e8e8e8;
          transition: border-color 0.2s;
        }
        .testi__tab--active .testi__tab-avatar { border-color: #CD7530; }

        .testi__tab-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .testi__tab-info strong {
          font-family: 'Poppins', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #1d1d1d;
        }
        .testi__tab-info span:not(.testi__tab-company) {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8rem;
          color: #7a7a7a;
        }
        .testi__tab-company {
          font-family: 'Manrope', sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(205,117,48,0.7);
        }

        /* Trust strip */
        .testi__trust {
          display: flex;
          gap: 0;
          border: 1px solid #e8e8e8;
          border-radius: 4px;
          overflow: hidden;
          margin-top: 8px;
        }
        .testi__trust-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 16px 8px;
          border-right: 1px solid #e8e8e8;
          font-family: 'Manrope', sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #9e9e9e;
        }
        .testi__trust-item:last-child { border-right: none; }

        @media (max-width: 900px) {
          .testi__layout { grid-template-columns: 1fr; }
          .testi__feature { padding: 36px 28px; }
        }
        @media (max-width: 560px) {
          .testi__list { display: grid; grid-template-columns: 1fr 1fr; }
          .testi__tab-info span:not(.testi__tab-company) { display: none; }
        }
      `}</style>
    </section>
  );
}
