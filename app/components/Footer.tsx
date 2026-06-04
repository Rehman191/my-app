"use client";

const FOOTER_LINKS = {
  "Quick Links": [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Minerals", href: "#minerals" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  "Our Minerals": [
    { label: "Pink Himalayan Salt", href: "#minerals" },
    { label: "Emerald (Panna)", href: "#minerals" },
    { label: "Ruby", href: "#minerals" },
    { label: "Lapis Lazuli", href: "#minerals" },
    { label: "Aquamarine", href: "#minerals" },
    { label: "Chromite Ore", href: "#minerals" },
  ],
};

const CONTACT = [
  { icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z", text: "Office 12, Jinnah Avenue, Rawalpindi, Pakistan" },
  { icon: "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z", text: "+92 300 123 4567" },
  { icon: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z", text: "info@mineralexp.com" },
  { icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z", text: "Mon–Sat: 9:00am – 6:00pm PKT" },
];

const SOCIALS = [
  { label: "LinkedIn", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { label: "Facebook", d: "M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.03 1.79-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.62 23.1 24 18.1 24 12.07z" },
  { label: "Instagram", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__body">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
                <polygon points="20,4 36,13 36,27 20,36 4,27 4,13" fill="#CD7530" opacity="0.15" stroke="#CD7530" strokeWidth="1.5"/>
                <circle cx="20" cy="20" r="4.5" fill="#CD7530"/>
                <circle cx="20" cy="20" r="2" fill="white"/>
              </svg>
              <div>
                <span className="footer__logo-name">Mineral <em>Exp</em> Int</span>
                <span className="footer__logo-sub">Pakistan Minerals Exports</span>
              </div>
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
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Mineral Exp Int. All rights reserved. · Made with ♥ in Pakistan.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Export Policy</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #171717;
          color: rgba(255,255,255,0.45);
          font-family: 'Manrope', sans-serif;
        }
        .footer__body { padding: 80px 0 56px; border-top: 3px solid #CD7530; }
        .footer__grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.4fr;
          gap: 56px;
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
        .footer__logo-name em { font-style: normal; color: #CD7530; }
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
          color: rgba(205,117,48,0.7);
          background: rgba(205,117,48,0.08);
          border: 1px solid rgba(205,117,48,0.15);
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
          background: #CD7530;
          border-color: #CD7530;
          color: #ffffff;
        }

        /* Columns */
        .footer__col-title {
          font-family: 'Poppins', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid #CD7530;
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
        .footer__col-link svg { color: #CD7530; flex-shrink: 0; opacity: 0.5; transition: opacity 0.2s; }
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
          color: #CD7530;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Bottom bar */
        .footer__bottom {
          background: rgba(0,0,0,0.3);
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
        .footer__bottom-links a:hover { color: #CD7530; }

        @media (max-width: 1100px) {
          .footer__grid { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 600px) {
          .footer__grid { grid-template-columns: 1fr; gap: 32px; }
          .footer__body { padding: 56px 0 40px; }
          .footer__bottom-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
