"use client";

import { useEffect, useRef, useState } from "react";

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCounter(20, 2000, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="impact" style={{ background: "var(--dark)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Subtle background watermark */}
      <div style={{
        position: "absolute",
        left: "-60px",
        bottom: "-60px",
        width: "360px",
        height: "360px",
        backgroundImage: "url('/images/logo-light.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        opacity: 0.04,
        pointerEvents: "none",
        zIndex: 0,
      }} aria-hidden="true" />

      {/* Subtle pattern */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(var(--orange-rgb), 0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Blue glow */}
      <div style={{
        position: "absolute", top: "-200px", right: "-100px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(var(--orange-rgb), 0.08) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="impact-grid">
          
          {/* Left Column: Text Content */}
          <div className="impact-left reveal">
            {/* Label */}
            <div style={{
              display: "flex", alignItems: "center", gap: "10px",
              fontFamily: "'Manrope', sans-serif", fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "2.5px", textTransform: "uppercase" as const,
              color: "var(--orange)", marginBottom: "16px",
            }}>
              <span style={{ display: "block", width: "28px", height: "3px", background: "var(--orange)", borderRadius: "2px" }} />
              Our Impact
            </div>
            
            <h2 className="impact-title">
              Two Decades of<br/>
              <span style={{ color: "var(--orange)" }}>Proven Excellence</span>
            </h2>
            
            <p className="impact-desc">
              AML Exports stands as a premier mineral logistics and trade facilitator in Pakistan. We ensure that raw materials are moved, cleared, and delivered efficiently under rigorous global quality parameters. Our established networks guarantee reliability from quarry sites to international harbors.
            </p>

            {/* Cert badges */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" as const }}>
              {["ISO 9001:2015", "Export Licensed", "Logistics Compliance", "Customs Bonded"].map((b) => (
                <span key={b} style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  fontFamily: "'Manrope', sans-serif", fontSize: "0.625rem", fontWeight: 700,
                  letterSpacing: "1.5px", textTransform: "uppercase" as const,
                  color: "rgba(255, 255, 255, 0.7)", background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)", padding: "6px 12px", borderRadius: "3px",
                }}>
                  <svg viewBox="0 0 14 14" fill="none" width="9" height="9">
                    <path d="M12 3L5.5 9.5 2 6" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: High-End Highlight Card */}
          <div className="impact-right reveal delay-100">
            <div className="featured-stat-card">
              {/* Top Accent Gradient Bar */}
              <div className="card-top-accent" />

              {/* Stat Number Row */}
              <div className="stat-number-row">
                <span className="number-count">{count}</span>
                <span className="number-suffix">+</span>
              </div>

              {/* Label */}
              <h3 className="stat-label">
                Years of Operations in Logistics, Import &amp; Export
              </h3>

              {/* Divider */}
              <div className="stat-card-divider" />

              {/* Description */}
              <p className="stat-desc">
                Managing end-to-end mineral supply chains, customs clearance protocols, and compliance-driven global transit across major continents since 2004.
              </p>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .impact-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        .impact-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 4vw, 2.75rem);
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -1px;
          margin: 0 0 24px;
        }

        .impact-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 1.0625rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.85;
          margin: 0 0 36px;
        }

        /* Highlight Card Styling */
        .featured-stat-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          padding: 56px 48px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .featured-stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, rgba(var(--orange-rgb), 0.08) 0%, transparent 60%);
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        .featured-stat-card:hover {
          transform: translateY(-8px);
          border-color: rgba(var(--orange-rgb), 0.25);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25), 0 0 30px rgba(var(--orange-rgb), 0.15);
        }

        .card-top-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--orange-dark) 0%, var(--orange) 50%, var(--orange-light) 100%);
        }

        .stat-number-row {
          display: flex;
          align-items: baseline;
          gap: 2px;
          margin-bottom: 16px;
        }

        .number-count {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: clamp(3.5rem, 8vw, 5.5rem);
          color: #ffffff;
          line-height: 1;
          letter-spacing: -2px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .number-suffix {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 2.5rem;
          color: var(--orange);
          line-height: 1;
        }

        .stat-label {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.4;
          margin: 0 0 20px;
        }

        .stat-card-divider {
          width: 48px;
          height: 2px;
          background: var(--orange);
          margin-bottom: 20px;
          border-radius: 1px;
        }

        .stat-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.7;
          margin: 0;
        }

        /* Tablet Grid */
        @media (max-width: 991px) {
          .impact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .impact-left {
            text-align: center;
          }
          .impact-left > div {
            justify-content: center;
          }
          .impact-left h2 br {
            display: none;
          }
          .featured-stat-card {
            max-width: 500px;
            margin: 0 auto;
            padding: 48px 36px;
          }
        }

        /* Mobile styles */
        @media (max-width: 480px) {
          #impact {
            padding: 80px 0 !important;
          }
          .impact-desc {
            font-size: 0.9375rem;
            margin-bottom: 28px;
          }
          .featured-stat-card {
            padding: 36px 24px;
          }
          .number-count {
            font-size: 3.5rem;
          }
          .number-suffix {
            font-size: 1.75rem;
          }
          .stat-label {
            font-size: 1rem;
            margin-bottom: 16px;
          }
          .stat-desc {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
