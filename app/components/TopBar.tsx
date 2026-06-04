"use client";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar__inner">
          <div className="top-bar__left">
            <a href="mailto:info@mineralexp.com" className="top-bar__link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              info@mineralexp.com
            </a>
            <span className="top-bar__sep">|</span>
            <a href="tel:+923001234567" className="top-bar__link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              +92 300 123 4567
            </a>
          </div>
          <div className="top-bar__right">
            <span className="top-bar__hours">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
              </svg>
              Mon–Sat: 9:00am – 6:00pm PKT
            </span>
            <div className="top-bar__socials">
              {[
                { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { label: "Facebook", path: "M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.03 1.79-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.62 23.1 24 18.1 24 12.07z" },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="top-bar__social">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .top-bar {
          background: #171717;
          color: rgba(255,255,255,0.55);
          font-family: 'Manrope', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          height: 44px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .top-bar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .top-bar__left,
        .top-bar__right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .top-bar__link {
          color: rgba(255,255,255,0.55);
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: color 0.2s ease;
          font-size: 0.8rem;
        }
        .top-bar__link:hover { color: #CD7530; }
        .top-bar__sep { opacity: 0.25; font-size: 0.7rem; }
        .top-bar__hours {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.35);
        }
        .top-bar__socials {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-left: 14px;
          border-left: 1px solid rgba(255,255,255,0.1);
        }
        .top-bar__social {
          color: rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .top-bar__social:hover { color: #CD7530; }

        @media (max-width: 768px) {
          .top-bar__left { display: none; }
        }
        @media (max-width: 480px) {
          .top-bar__hours { display: none; }
        }
      `}</style>
    </div>
  );
}
