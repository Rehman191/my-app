"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Minerals", href: "#minerals" },
  { label: "Logistics", href: "#logistics" },
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
        <a href="#home" className="navbar__logo" style={{ display: "flex", alignItems: "center" }}>
          <img 
            src="/images/logo.png" 
            alt="AML Exports Logo" 
            style={{ height: "58px", width: "auto", objectFit: "contain" }}
          />
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
