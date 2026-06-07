"use client";

import { useState } from "react";
import { openExportCheckModal } from "./SiteWidgets";

const FOOTER_LINKS = {
  "Quick Links": [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Minerals", href: "#minerals" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Export Check", href: "#export-check" },
    { label: "Contact", href: "#contact" },
  ],
  "Our Minerals": [
    { label: "Pink Himalayan Salt", href: "#minerals" },
    { label: "Emerald (Panna)", href: "#minerals" },
    { label: "Ruby", href: "#minerals" },
    { label: "China Clay", href: "#minerals" },
    { label: "Aquamarine", href: "#minerals" },
    { label: "Talc", href: "#minerals" },
  ],
};

const CONTACT = [
  { icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z", text: "Office 12, Jinnah Avenue, Rawalpindi, Pakistan" },
  { icon: "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z", text: "+92 300 123 4567" },
  { icon: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z", text: "info@amlexports.com" },
  { icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z", text: "Mon–Sat: 9:00am – 6:00pm PKT" },
];

const SOCIALS = [
  { label: "LinkedIn", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { label: "Facebook", d: "M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.03 1.79-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.62 23.1 24 18.1 24 12.07z" },
  { label: "Instagram", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className="footer">
      {/* 60-Second Export Check CTA */}
      <div className="footer__export-cta" id="export-check">
        <div className="container footer__export-cta-inner">
          <div className="footer__export-cta-text">
            <h3>Need a Quick Export Quote?</h3>
            <p>Answer 4 questions — get a tailored quote in under 60 seconds.</p>
          </div>
          <button type="button" className="footer__export-cta-btn" onClick={openExportCheckModal}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            60-Second Export Check
          </button>
        </div>
      </div>



      <div className="footer__body">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo" style={{ display: "flex", alignItems: "center" }}>
              <img 
                src="/images/logo-light.png" 
                alt="AML Exports Logo" 
                style={{ height: "50px", width: "auto", objectFit: "contain" }}
              />
            </a>
            <p className="footer__brand-desc">
              A trusted global exporter of Pakistan&apos;s finest minerals, gemstones, and industrial rocks.
              Quality certified, ethically sourced, delivered worldwide.
            </p>
            <div className="footer__certs">
              {["ISO 9001", "Export Licensed", "Lab Certified"].map((c) => (
                <span key={c} className="footer__cert">{c}</span>
              ))}
            </div>
            <div className="footer__socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="footer__social">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                    <path d={s.d}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="footer__col">
              <h4 className="footer__col-title">{title}</h4>
              <ul className="footer__col-list">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="footer__col-link">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="10" height="10">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Info</h4>
            <ul className="footer__contact-list">
              {CONTACT.map((c, i) => (
                <li key={i} className="footer__contact-item">
                  <span className="footer__contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                      <path d={c.icon}/>
                    </svg>
                  </span>
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Card */}
          <div className="footer__col footer__col--newsletter">
            <h4 className="footer__col-title">Newsletter</h4>
            <p className="footer__newsletter-desc">
              Subscribe for custom export intelligence, mineral market updates, and pricing alerts.
            </p>
            <form className="footer__subscribe-form" onSubmit={handleNewsletter}>
              <div className={submitted ? "footer__input-group footer__input-group--submitted" : "footer__input-group"}>
                <svg className="footer__input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email for newsletter"
                />
                <button type="submit" aria-label="Subscribe" disabled={submitted}>
                  {submitted ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="14" height="14">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  )}
                </button>
              </div>
              {submitted && <span className="footer__success-msg">Successfully subscribed!</span>}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} AML Exports. All rights reserved. · Made with ♥ in Pakistan.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Export Policy</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #303439;
          color: rgba(255,255,255,0.45);
          font-family: 'Manrope', sans-serif;
        }

        .footer__col--newsletter {
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 24px;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .footer__col--newsletter:hover {
          background: rgba(255, 255, 255, 0.035);
          border-color: rgba(220, 184, 75, 0.25);
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        }
        .footer__newsletter-desc {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.35);
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .footer__subscribe-form {
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
        }
        .footer__input-group {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          padding: 4px;
          padding-left: 12px;
          transition: border-color 0.25s, box-shadow 0.25s, background-color 0.25s;
          height: 46px;
        }
        .footer__input-group:focus-within {
          border-color: var(--orange);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 0 3px rgba(220, 184, 75, 0.15);
        }
        .footer__input-group--submitted {
          border-color: #48bb78 !important;
          box-shadow: 0 0 0 3px rgba(72, 187, 120, 0.15) !important;
        }
        .footer__input-icon {
          width: 16px;
          height: 16px;
          color: rgba(255, 255, 255, 0.3);
          margin-right: 8px;
          flex-shrink: 0;
          transition: color 0.25s;
        }
        .footer__input-group:focus-within .footer__input-icon {
          color: var(--orange);
        }
        .footer__input-group input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem;
          height: 100%;
          min-width: 0;
        }
        .footer__input-group input::placeholder {
          color: rgba(255, 255, 255, 0.25);
        }
        .footer__input-group button {
          width: 36px;
          height: 36px;
          background: var(--orange);
          color: var(--dark-3);
          border: none;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .footer__input-group button:hover {
          background: var(--orange-dark);
          transform: scale(1.02);
        }
        .footer__input-group button:active {
          transform: scale(0.98);
        }
        .footer__input-group button[disabled] {
          background: #48bb78;
          color: #ffffff;
          cursor: default;
        }
        .footer__success-msg {
          font-size: 0.75rem;
          color: #48bb78;
          margin-top: 4px;
          display: flex;
          align-items: center;
          gap: 4px;
          animation: fadeUp 0.3s ease forwards;
        }

        .footer__body { padding: 80px 0 56px; border-top: 3px solid var(--orange); }
        .footer__grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 1.3fr 2.3fr;
          gap: 48px;
        }

        /* Logo */
        .footer__logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 20px;
        }
        .footer__logo-name {
          display: block;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.125rem;
          color: #ffffff;
        }
        .footer__logo-name em { font-style: normal; color: var(--orange); }
        .footer__logo-sub {
          display: block;
          font-size: 0.5625rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-top: 3px;
        }

        .footer__brand-desc {
          font-size: 0.875rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.35);
          margin-bottom: 20px;
        }
        .footer__certs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .footer__cert {
          font-size: 0.5625rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(220, 184, 75, 0.8);
          background: rgba(220, 184, 75, 0.08);
          border: 1px solid rgba(220, 184, 75, 0.15);
          padding: 4px 10px;
          border-radius: 3px;
        }

        .footer__socials {
          display: flex;
          gap: 8px;
        }
        .footer__social {
          width: 34px;
          height: 34px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .footer__social:hover {
          background: var(--orange);
          border-color: var(--orange);
          color: var(--dark-3);
        }

        /* Columns */
        .footer__col-title {
          font-family: 'Poppins', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid var(--orange);
          display: inline-block;
        }
        .footer__col-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .footer__col-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .footer__col-link svg { color: var(--orange); flex-shrink: 0; opacity: 0.5; transition: opacity 0.2s; }
        .footer__col-link:hover { color: rgba(255,255,255,0.8); padding-left: 4px; }
        .footer__col-link:hover svg { opacity: 1; }

        /* Contact */
        .footer__contact-list { list-style: none; display: flex; flex-direction: column; gap: 14px; }
        .footer__contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.6;
        }
        .footer__contact-icon {
          color: var(--orange);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Bottom bar */
        .footer__bottom {
          background: rgba(0,0,0,0.15);
          padding: 18px 0;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .footer__bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer__bottom-inner p {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.25);
          margin: 0;
        }
        .footer__bottom-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .footer__bottom-links a {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.25);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer__bottom-links a:hover { color: var(--orange); }

        @media (max-width: 1100px) {
          .footer__grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer__brand {
            grid-column: span 2;
          }
          .footer__col--newsletter {
            grid-column: span 2;
            max-width: 480px;
          }
        }
        @media (max-width: 600px) {
          .footer__grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer__brand,
          .footer__col--newsletter {
            grid-column: span 1;
            max-width: 100%;
          }
          .footer__body { padding: 56px 0 40px; }
          .footer__bottom-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
