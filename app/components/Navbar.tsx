"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Minerals", href: "#minerals" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
              <polygon points="20,4 36,13 36,27 20,36 4,27 4,13"
                fill="var(--orange)" opacity="0.15" stroke="var(--orange)" strokeWidth="1.5" />
              <polygon points="20,9 31,16 31,24 20,31 9,24 9,16"
                fill="none" stroke="var(--orange)" strokeWidth="1" />
              <circle cx="20" cy="20" r="4.5" fill="var(--orange)" />
              <circle cx="20" cy="20" r="2" fill="white" />
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Mineral <em>Exp</em></span>
            <span className="navbar__logo-tag">International</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar__actions">
          <a href="#contact" className="navbar__cta" id="nav-quote-btn">
            Get a Quote
          </a>
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={mobileOpen ? "open" : ""} />
            <span className={mobileOpen ? "open" : ""} />
            <span className={mobileOpen ? "open" : ""} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="navbar__mobile">
          <div className="container">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
            <a href="#contact" className="btn btn-primary" style={{ marginTop: "16px", width: "100%", justifyContent: "center" }}
              onClick={() => setMobileOpen(false)}>
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
