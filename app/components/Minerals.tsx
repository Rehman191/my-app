"use client";

const MINERALS = [
  { name: "Pink Himalayan Salt", category: "Industrial Mineral", origin: "Khewra, Punjab", img: "/images/himalayan-salt.png", accent: "#f8c9b1", uses: ["Food Grade", "Wellness", "Décor"], desc: "World's purest salt from ancient 250-million-year-old Himalayan formations." },
  { name: "Emerald (Panna)", category: "Precious Gemstone", origin: "Swat, KPK", img: "/images/emerald.png", accent: "#5dbf8c", uses: ["Fine Jewelry", "Collection", "Export"], desc: "Exceptional clarity emeralds from Swat valley, prized by collectors worldwide." },
  { name: "Ruby", category: "Precious Gemstone", origin: "Hunza, Gilgit-Baltistan", img: "/images/ruby.png", accent: "#d95f5f", uses: ["Fine Jewelry", "Industrial", "Collection"], desc: "Deep red rubies from the Karakoram range with extraordinary color saturation." },
  { name: "Lapis Lazuli", category: "Semi-precious Stone", origin: "Badakhshan Region", img: "/images/lapis-lazuli.png", accent: "#4a6fa5", uses: ["Jewelry", "Pigment", "Carvings"], desc: "Rich blue lapis with golden pyrite inclusions, coveted since antiquity." },
  { name: "Chromite Ore", category: "Industrial Mineral", origin: "Muslim Bagh, Balochistan", img: "/images/chromite-ore.png", accent: "#8a8a8a", uses: ["Metallurgy", "Refractories", "Chemicals"], desc: "High-grade chromite from Balochistan's world-class mineral deposits." },
  { name: "Aquamarine", category: "Semi-precious Gemstone", origin: "Shigar, Gilgit-Baltistan", img: "/images/aquamarine.png", accent: "#7ec8d9", uses: ["Fine Jewelry", "Collectors", "Export"], desc: "Crystal-clear aquamarines from glacier valleys of northern Pakistan." },
  { name: "Copper Ore", category: "Industrial Mineral", origin: "Reko Diq, Balochistan", img: "/images/copper-ore.png", accent: "#b87333", uses: ["Metallurgy", "Electronics", "Construction"], desc: "Premium copper ore from one of the world's largest untapped copper-gold deposits at Reko Diq." },
  { name: "Palm Oil", category: "Agricultural Export", origin: "Sindh & Punjab", img: "/images/palm-oil.png", accent: "#e8a020", uses: ["Food Industry", "Cosmetics", "Biofuel"], desc: "High-quality refined and crude palm oil, meeting international food-grade and industrial standards for global markets." },
];

export default function Minerals() {
  return (
    <section className="minerals section" id="minerals" style={{ background: "#f7f7f7" }}>
      <div className="container">
        <div className="minerals__header">
          <div>
            <span className="section-label">Our Products</span>
            <h2 className="section-title">Premium Minerals, Gemstones<br/>&amp; Agricultural Commodities</h2>
            <span className="section-divider" />
          </div>
          <p style={{ fontSize: "1rem", color: "#5a5a5a", maxWidth: "400px", lineHeight: 1.75, textAlign: "right" }}>
            Pakistan&apos;s finest natural resources — precious gemstones from the Karakoram, industrial minerals from Balochistan, and high-value agricultural commodities for global markets.
          </p>
        </div>

        <div className="minerals__grid">
          {MINERALS.map((m) => (
            <article className="mineral-card" key={m.name}>
              <div className="mineral-card__img-wrap">
                <img src={m.img} alt={m.name} className="mineral-card__img"/>
                <span className="mineral-card__cat">{m.category}</span>
                {/* Color dot */}
                <div className="mineral-card__dot" style={{ background: m.accent }} />
              </div>

              <div className="mineral-card__body">
                <div className="mineral-card__origin">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#CD7530" strokeWidth="2" width="12" height="12">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {m.origin}
                </div>
                <h3 className="mineral-card__name">{m.name}</h3>
                <p className="mineral-card__desc">{m.desc}</p>
                <div className="mineral-card__tags">
                  {m.uses.map((u) => <span key={u} className="mineral-card__tag">{u}</span>)}
                </div>
              </div>

              <div className="mineral-card__footer">
                <a href="#contact" className="mineral-card__cta">
                  Inquire Now
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <a href="#contact" className="btn btn-primary" id="minerals-catalog-btn">
            Request Full Catalog
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .minerals__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 48px;
          margin-bottom: 48px;
        }

        .minerals__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .mineral-card {
          background: #ffffff;
          border: 1px solid #e8e8e8;
          border-radius: 6px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .mineral-card:hover {
          box-shadow: 0 16px 56px rgba(0,0,0,0.12);
          transform: translateY(-4px);
          border-color: rgba(205,117,48,0.2);
        }

        .mineral-card__img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4/3;
        }
        .mineral-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .mineral-card:hover .mineral-card__img { transform: scale(1.06); }

        .mineral-card__cat {
          position: absolute;
          top: 12px;
          left: 12px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          background: #CD7530;
          color: #ffffff;
          padding: 4px 10px;
          border-radius: 3px;
        }
        .mineral-card__dot {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.7);
        }

        .mineral-card__body {
          padding: 20px 20px 16px;
          flex: 1;
        }
        .mineral-card__origin {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #CD7530;
          margin-bottom: 8px;
        }
        .mineral-card__name {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: #1d1d1d;
          margin-bottom: 8px;
        }
        .mineral-card__desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem;
          color: #7a7a7a;
          line-height: 1.7;
          margin-bottom: 12px;
        }
        .mineral-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .mineral-card__tag {
          font-family: 'Manrope', sans-serif;
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          background: #f7f7f7;
          color: #7a7a7a;
          border: 1px solid #e8e8e8;
          padding: 3px 8px;
          border-radius: 3px;
        }

        .mineral-card__footer {
          padding: 14px 20px;
          border-top: 1px solid #f0f0f0;
        }
        .mineral-card__cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: #CD7530;
          text-decoration: none;
          transition: gap 0.2s ease, color 0.2s ease;
        }
        .mineral-card__cta:hover { gap: 10px; color: #A85F20; }

        @media (max-width: 1200px) {
          .minerals__grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 1024px) {
          .minerals__header { flex-direction: column; align-items: flex-start; }
          .minerals__header p { text-align: left; }
          .minerals__grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) { .minerals__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .minerals__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
