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
                fill="#CD7530" opacity="0.15" stroke="#CD7530" strokeWidth="1.5"/>
              <polygon points="20,9 31,16 31,24 20,31 9,24 9,16"
                fill="none" stroke="#CD7530" strokeWidth="1"/>
              <circle cx="20" cy="20" r="4.5" fill="#CD7530"/>
              <circle cx="20" cy="20" r="2" fill="white"/>
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
                  <path d="M5 12h14M12 5l7 7-7 7"/>
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

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 44px; /* below top bar */
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255,255,255,0.97);
          border-bottom: 1px solid #e8e8e8;
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }
        .navbar--scrolled {
          box-shadow: 0 4px 32px rgba(0,0,0,0.1);
          background: #ffffff;
          top: 0;
          border-bottom-color: transparent;
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
          gap: 32px;
        }

        /* Logo */
        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .navbar__logo-icon { display: flex; align-items: center; }
        .navbar__logo-name {
          display: block;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.125rem;
          color: #1d1d1d;
          letter-spacing: -0.3px;
          line-height: 1.2;
        }
        .navbar__logo-name em {
          font-style: normal;
          color: #CD7530;
        }
        .navbar__logo-tag {
          display: block;
          font-family: 'Manrope', sans-serif;
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #9e9e9e;
          margin-top: 1px;
        }

        /* Nav links */
        .navbar__links {
          display: flex;
          list-style: none;
          align-items: center;
          gap: 4px;
          flex: 1;
          justify-content: center;
        }
        .navbar__link {
          font-family: 'Manrope', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #3a3a3a;
          text-decoration: none;
          padding: 8px 12px;
          position: relative;
          transition: color 0.2s ease;
        }
        .navbar__link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 12px;
          right: 12px;
          height: 2px;
          background: #CD7530;
          transform: scaleX(0);
          transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
          border-radius: 2px;
        }
        .navbar__link:hover { color: #CD7530; }
        .navbar__link:hover::after { transform: scaleX(1); }

        /* Actions */
        .navbar__actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .navbar__cta {
          font-family: 'Poppins', sans-serif;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #ffffff;
          background: #CD7530;
          padding: 10px 22px;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.25s ease;
          letter-spacing: 0.3px;
          border: 2px solid #CD7530;
        }
        .navbar__cta:hover {
          background: #A85F20;
          border-color: #A85F20;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(205,117,48,0.3);
        }

        /* Hamburger */
        .navbar__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .navbar__hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #1d1d1d;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .navbar__hamburger span.open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .navbar__hamburger span.open:nth-child(2) { opacity: 0; }
        .navbar__hamburger span.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        /* Mobile menu */
        .navbar__mobile {
          background: #ffffff;
          border-top: 1px solid #e8e8e8;
          padding: 16px 0 24px;
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
        }
        .navbar__mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 0;
          border-bottom: 1px solid #f0f0f0;
          font-family: 'Manrope', sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          color: #1d1d1d;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .navbar__mobile-link:hover { color: #CD7530; }
        .navbar__mobile-link svg { opacity: 0.3; }
        .navbar__mobile-link:hover svg { opacity: 1; color: #CD7530; }

        @media (max-width: 900px) {
          .navbar__links { display: none; }
          .navbar__hamburger { display: flex; }
          .navbar__cta { display: none; }
        }
      `}</style>
    </nav>
  );
}
