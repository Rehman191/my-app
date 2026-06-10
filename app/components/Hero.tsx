"use client";

import { useState } from "react";
import ExportCheck from "./ExportCheck";

export default function Hero() {
  const [checkOpen, setCheckOpen] = useState(false);

  return (
    <section className="hero" id="home">
      {/* VIDEO BACKGROUND */}
      <div className="hero__video-wrap">
        <video className="hero__video" autoPlay muted loop playsInline>
          <source src="/we_are_exporting_the_pink_salt.mp4" type="video/mp4"/>
        </video>
        <div className="hero__overlay-base" />
        <div className="hero__overlay-left" />
        <div className="hero__overlay-bottom" />
      </div>

      {/* Subtle Background Watermark (positioned on the right side) */}
      <div className="hero__watermark" aria-hidden="true" />

      {/* MAIN CONTENT */}
      <div className="container hero__body">
        {/* Left column */}
        <div className="hero__left" style={{ position: "relative" }}>
          <p className="hero__welcome" style={{ position: "relative", zIndex: 1 }}>Welcome to AML Exports</p>

          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Pakistan&apos;s Premier Mineral Exporter Since 2004
          </div>

          <h1 className="hero__title">
            Exporting Pakistan&apos;s<br/>
            <em className="hero__title-em">Finest Minerals</em><br/>
            to the World
          </h1>

          <p className="hero__subtitle">
            Premium gemstones, industrial minerals &amp; decorative rocks — sourced
            responsibly from Pakistan&apos;s ancient mountains, certified to international
            standards, and delivered globally.
          </p>

          <div className="hero__bullets">
            {[
              "ISO 9001:2015 Certified",
              "GIA Compliant Grading",
              "Direct Mine Partnerships",
              "50+ Countries Served",
            ].map((b) => (
              <div key={b} className="hero__bullet">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="13" height="13">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {b}
              </div>
            ))}
          </div>

          <div className="hero__actions">
            <a href="#minerals" className="hero__btn-primary" id="hero-explore-btn">
              Discover More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <button
              className={`hero__btn-check ${checkOpen ? "hero__btn-check--active" : ""}`}
              onClick={() => setCheckOpen(!checkOpen)}
              id="hero-check-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              60-Second Export Quote
            </button>
          </div>

          <div className="hero__stats">
            {[
              { val: "20+", lbl: "Years Experience" },
              { val: "50+", lbl: "Countries Served" },
              { val: "500+", lbl: "Mineral Types" },
              { val: "5K+", lbl: "Shipments Done" },
            ].map((s, i) => (
              <div key={s.lbl} className="hero__stat">
                {i > 0 && <div className="hero__stat-divider" />}
                <strong>{s.val}</strong>
                <span>{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — check widget (desktop) */}
        <div className={`hero__right ${checkOpen ? "hero__right--visible" : ""}`}>
          <p className="hero__right-intro">
            Answer 4 quick questions — our export team will prepare a custom quote within 24 hours.
          </p>
          <ExportCheck />
        </div>
      </div>

      {/* Mobile bottom-sheet overlay */}
      {checkOpen && (
        <div className="hero__sheet-backdrop" aria-hidden="true" />
      )}
      <div className={`hero__sheet ${checkOpen ? "hero__sheet--open" : ""}`}>
        <div className="hero__sheet-handle" />
        <div className="hero__sheet-header">
          <div className="hero__sheet-title">
            <div className="hero__sheet-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="14" height="14">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <div className="hero__sheet-name">60-Second Export Quote</div>
              <div className="hero__sheet-sub">Get a tailored quote in minutes</div>
            </div>
          </div>
          <button className="hero__sheet-close" onClick={() => setCheckOpen(false)} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className="hero__sheet-body">
          <p className="hero__right-intro" style={{ marginBottom: "16px", color: "rgba(255,255,255,0.5)" }}>
            Answer 4 quick questions — our export team will prepare a custom quote within 24 hours.
          </p>
          <ExportCheck />
        </div>
      </div>

      {/* BOTTOM TRUST BAR */}
      <div className="hero__trust-bar">
        <div className="container hero__trust-inner">
          <span className="hero__trust-label">Trusted &amp; Certified By:</span>
          {["ISO 9001:2015", "GIA Standards", "TDAP Pakistan", "Export Certified", "Lab Verified"].map((cert) => (
            <span key={cert} className="hero__trust-cert">
              <svg viewBox="0 0 16 16" fill="none" width="10" height="10">
                <path d="M13 4L6.5 10.5 3 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {cert}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero__scroll-cue" aria-hidden="true">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
