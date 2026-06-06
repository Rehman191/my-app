"use client";

const MINERALS = [
  { name: "Pink Himalayan Salt", origin: "Khewra, Punjab", img: "/images/himalayan-salt.png", desc: "World's purest salt from ancient 250-million-year-old Himalayan formations." },
  { name: "Emerald (Panna)", origin: "Swat, KPK", img: "/images/emerald.png", desc: "Exceptional clarity emeralds from Swat valley, prized by collectors worldwide." },
  { name: "Ruby", origin: "Hunza, Gilgit-Baltistan", img: "/images/ruby.png", desc: "Deep red rubies from the Karakoram range with extraordinary color saturation." },
  { name: "China Clay", origin: "Swat & Punjab, Pakistan", img: "/images/china-clay.png", desc: "Premium washed china clay powder for ceramics, paper, rubber, paint, and industrial manufacturing." },
  { name: "Talc", origin: "Malakand, KPK", img: "/images/talc.jpg", desc: "High-purity talc for plastics, cosmetics, ceramics, and industrial applications — exported worldwide." },
  { name: "Aquamarine", origin: "Shigar, Gilgit-Baltistan", img: "/images/aquamarine.png", desc: "Crystal-clear aquamarines from glacier valleys of northern Pakistan." },
  { name: "Copper Ore", origin: "Reko Diq, Balochistan", img: "/images/copper-ore.png", desc: "Premium copper ore from one of the world's largest untapped copper-gold deposits at Reko Diq." },
  { name: "Palm Oil", origin: "Sindh & Punjab", img: "/images/palm-oil.png", desc: "High-quality refined and crude palm oil, meeting international food-grade and industrial standards for global markets." },
];

export default function Minerals() {
  return (
    <section className="minerals section pmi-section-band" id="minerals">
      <div className="container">
        <div className="minerals__header">
          <div>
            <span className="section-label">Our Products</span>
            <h2 className="section-title">Minerals Manufacturer in Pakistan —<br />No.1 Exporters to Worldwide Markets</h2>
            <span className="section-divider" />
          </div>
          <p className="minerals__intro">
            Pakistan&apos;s finest natural resources — precious gemstones from the Karakoram, industrial minerals from Balochistan, and high-value commodities for global markets.
          </p>
        </div>

        <div className="minerals__grid">
          {MINERALS.map((m, i) => {
            const delayClass = i % 4 === 1 ? " delay-100" : i % 4 === 2 ? " delay-200" : i % 4 === 3 ? " delay-300" : "";
            return (
              <article className={`mineral-card reveal${delayClass}`} key={m.name}>
                <div className="mineral-card__img-wrap">
                  <img src={m.img} alt={m.name} className="mineral-card__img" />
                  <div className="mineral-card__overlay">
                    <h3 className="mineral-card__overlay-name">{m.name}</h3>
                  </div>
                </div>

                <div className="mineral-card__body">
                  <div className="mineral-card__origin">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {m.origin}
                  </div>
                  <p className="mineral-card__desc">{m.desc}</p>
                </div>

                <div className="mineral-card__footer">
                  <a href="#contact" className="mineral-card__cta">
                    Inquire Now
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <a href="#contact" className="btn btn-primary" id="minerals-catalog-btn">
            Request Full Catalog
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .minerals { background: var(--gray-50); }

        .minerals__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 48px;
          margin-bottom: 48px;
        }
        .minerals__intro {
          font-size: 1rem;
          color: var(--color-text);
          max-width: 400px;
          line-height: 1.75;
          text-align: right;
          font-family: var(--font-body);
        }

        .minerals__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .mineral-card {
          background: var(--white);
          border: 1px solid var(--color-border);
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .mineral-card:hover {
          box-shadow: var(--shadow-card-hover);
          transform: translateY(-4px);
          border-color: rgba(220, 184, 75, 0.35);
        }

        .mineral-card__img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 1;
        }
        .mineral-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .mineral-card:hover .mineral-card__img { transform: scale(1.05); }

        .mineral-card__overlay {
          position: absolute;
          inset: auto 0 0 0;
          padding: 14px 16px;
          background: linear-gradient(to top, rgba(48, 52, 57, 0.92) 0%, rgba(48, 52, 57, 0.55) 70%, transparent 100%);
        }
        .mineral-card__overlay-name {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9375rem;
          color: var(--white);
          line-height: 1.3;
          margin: 0;
        }

        .mineral-card__body {
          padding: 16px 18px 12px;
          flex: 1;
          text-align: center;
        }
        .mineral-card__origin {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          font-family: var(--font-body);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: var(--orange);
          margin-bottom: 8px;
        }
        .mineral-card__desc {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          color: var(--gray-600);
          line-height: 1.65;
          margin: 0;
        }

        .mineral-card__footer {
          padding: 12px 18px 16px;
          border-top: 1px solid var(--gray-100);
          text-align: center;
        }
        .mineral-card__cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--orange);
          text-decoration: none;
          transition: gap 0.2s ease, color 0.2s ease;
        }
        .mineral-card__cta:hover { gap: 10px; color: var(--orange-dark); }

        @media (max-width: 1200px) {
          .minerals__grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 1024px) {
          .minerals__header { flex-direction: column; align-items: flex-start; }
          .minerals__intro { text-align: left; max-width: 100%; }
          .minerals__grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) { .minerals__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .minerals__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
