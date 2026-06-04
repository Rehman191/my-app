"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";

const STATS = [
  { value: 20, suffix: "+", label: "Years of Experience", description: "Decades of expertise in mineral sourcing & export" },
  { value: 50, suffix: "+", label: "Countries Served", description: "Trusted buyers across every major continent" },
  { value: 500, suffix: "+", label: "Mineral Types", description: "Extensive catalog of rare and common minerals" },
  { value: 5000, suffix: "+", label: "Shipments Completed", description: "On-time delivery with full export compliance" },
];

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

function StatCard({ value, suffix, label, description, active, isLast }: (typeof STATS)[0] & { active: boolean; isLast: boolean }) {
  const [hovered, setHovered] = useState(false);
  const count = useCounter(value, 2000, active);

  return (
    <div
      className="stat-card-item"
      style={{
        padding: "48px 40px",
        borderRight: isLast ? "none" : "1px solid rgba(255,255,255,0.1)",
        background: hovered ? "rgba(255,255,255,0.05)" : "transparent",
        transition: "background 0.3s ease",
        cursor: "default",
        position: "relative" as const,
        overflow: "hidden",
      } as CSSProperties}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Bottom accent */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0,
        height: "3px",
        width: hovered ? "100%" : "0",
        background: "#CD7530",
        transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)",
      }} />

      {/* Number */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "2px", marginBottom: "8px" }}>
        <span style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
          color: "#ffffff",
          letterSpacing: "-2px",
          lineHeight: 1,
        }}>
          {count.toLocaleString()}
        </span>
        <span style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: "1.75rem",
          color: "#CD7530",
          letterSpacing: "-1px",
          lineHeight: 1,
        }}>
          {suffix}
        </span>
      </div>

      <h3 style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "1rem",
        color: "rgba(255,255,255,0.9)",
        margin: "0 0 8px",
      }}>
        {label}
      </h3>
      <p style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: "0.85rem",
        color: "rgba(255,255,255,0.4)",
        lineHeight: 1.7,
        margin: 0,
      }}>
        {description}
      </p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="impact" style={{ background: "#171717", padding: "100px 0", position: "relative", overflow: "hidden" }}>

      {/* Subtle pattern */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(205,117,48,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Orange glow */}
      <div style={{
        position: "absolute", top: "-200px", right: "-100px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(205,117,48,0.1) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="stats-header">
          <div>
            {/* Label */}
            <div style={{
              display: "flex", alignItems: "center", gap: "10px",
              fontFamily: "'Manrope', sans-serif", fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "2.5px", textTransform: "uppercase" as const,
              color: "#CD7530", marginBottom: "16px",
            }}>
              <span style={{ display: "block", width: "28px", height: "3px", background: "#CD7530", borderRadius: "2px" }} />
              Our Impact
            </div>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 700,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#ffffff", lineHeight: 1.15, letterSpacing: "-1px", margin: 0,
            }}>
              Two Decades of<br/>
              <span style={{ color: "#CD7530" }}>Proven Excellence</span>
            </h2>
          </div>
          <div>
            <p style={{
              fontFamily: "'Manrope', sans-serif", fontSize: "1rem",
              color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: "0 0 28px",
            }}>
              Our numbers reflect years of hard work, global trust, and an unwavering commitment to
              delivering Pakistan&apos;s finest minerals to markets worldwide.
            </p>
            {/* Cert badges */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" as const }}>
              {["ISO 9001:2015", "Export Licensed", "Lab Certified", "GIA Compliant"].map((b) => (
                <span key={b} style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  fontFamily: "'Manrope', sans-serif", fontSize: "0.625rem", fontWeight: 700,
                  letterSpacing: "1.5px", textTransform: "uppercase" as const,
                  color: "rgba(205,117,48,0.8)", background: "rgba(205,117,48,0.08)",
                  border: "1px solid rgba(205,117,48,0.2)", padding: "6px 12px", borderRadius: "3px",
                }}>
                  <svg viewBox="0 0 14 14" fill="none" width="9" height="9">
                    <path d="M12 3L5.5 9.5 2 6" stroke="#CD7530" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} active={active} isLast={i === STATS.length - 1} />
          ))}
        </div>
      </div>

      <style>{`
        .stats-header {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          align-items: center;
          margin-bottom: 72px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          overflow: hidden;
        }

        /* Tablet: stack header, 2×2 stat grid */
        @media (max-width: 900px) {
          .stats-header {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-bottom: 48px;
            padding-bottom: 40px;
          }
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stat-card-item {
            padding: 32px 24px !important;
          }
          /* Fix borders for 2-col layout */
          .stats-grid > div:nth-child(2) {
            border-right: none !important;
          }
          .stats-grid > div:nth-child(3),
          .stats-grid > div:nth-child(4) {
            border-top: 1px solid rgba(255,255,255,0.1);
          }
          .stats-grid > div:nth-child(4) {
            border-right: none !important;
          }
        }

        /* Mobile: single column */
        @media (max-width: 480px) {
          #impact {
            padding: 64px 0 !important;
          }
          .stats-header {
            gap: 24px;
            margin-bottom: 36px;
            padding-bottom: 32px;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .stat-card-item {
            padding: 28px 20px !important;
            border-right: none !important;
            border-top: 1px solid rgba(255,255,255,0.08) !important;
          }
          .stats-grid > div:first-child .stat-card-item {
            border-top: none !important;
          }
        }
      `}</style>
    </section>
  );
}
