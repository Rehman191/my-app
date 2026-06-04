"use client";

export default function CtaBanner() {
  return (
    <section className="cta" id="contact">
      {/* Orange banner strip */}
      <div className="cta__strip">
        <div className="container cta__strip-inner">
          <div className="cta__strip-text">
            <h2 className="cta__strip-title">Ready to Source Premium Minerals?</h2>
            <p className="cta__strip-sub">Connect with our team for pricing, samples, and custom sourcing solutions.</p>
          </div>
          <a href="tel:+923001234567" className="cta__strip-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            +92 300 123 4567
          </a>
        </div>
      </div>

      {/* Contact form section */}
      <div className="cta__body">
        <div className="container">
          <div className="cta__grid">
            {/* Left info */}
            <div className="cta__info">
              <span className="section-label">Contact Us</span>
              <h2 className="section-title cta__title">Send Us an Inquiry</h2>
              <span className="section-divider" />
              <p className="cta__desc">
                Fill in the form and our export team will respond within 24 hours with pricing,
                availability, and custom sourcing options tailored to your needs.
              </p>

              <div className="cta__contacts">
                {[
                  { icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z", label: "Office 12, Jinnah Avenue, Rawalpindi, Pakistan" },
                  { icon: "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z", label: "+92 300 123 4567" },
                  { icon: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z", label: "info@mineralexp.com" },
                  { icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z", label: "Mon–Sat: 9:00am – 6:00pm (PKT)" },
                ].map((c) => (
                  <div className="cta__contact-item" key={c.label}>
                    <span className="cta__contact-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d={c.icon}/>
                      </svg>
                    </span>
                    <span>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="cta__form" id="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="cta__form-row">
                <div className="cta__form-field">
                  <label htmlFor="cf-name">Your Name *</label>
                  <input type="text" id="cf-name" name="name" placeholder="John Smith" required/>
                </div>
                <div className="cta__form-field">
                  <label htmlFor="cf-email">Email Address *</label>
                  <input type="email" id="cf-email" name="email" placeholder="john@company.com" required/>
                </div>
              </div>
              <div className="cta__form-row">
                <div className="cta__form-field">
                  <label htmlFor="cf-company">Company</label>
                  <input type="text" id="cf-company" name="company" placeholder="Your Company Ltd."/>
                </div>
                <div className="cta__form-field">
                  <label htmlFor="cf-country">Country</label>
                  <input type="text" id="cf-country" name="country" placeholder="Germany"/>
                </div>
              </div>
              <div className="cta__form-field">
                <label htmlFor="cf-mineral">Mineral of Interest</label>
                <select id="cf-mineral" name="mineral">
                  <option value="">Select a mineral...</option>
                  <option>Pink Himalayan Salt</option>
                  <option>Emerald</option>
                  <option>Ruby</option>
                  <option>Lapis Lazuli</option>
                  <option>Aquamarine</option>
                  <option>Chromite Ore</option>
                  <option>Other / Multiple</option>
                </select>
              </div>
              <div className="cta__form-field">
                <label htmlFor="cf-message">Message *</label>
                <textarea id="cf-message" name="message" rows={4} placeholder="Tell us about your requirements, quantity, destination, and timeline..." required/>
              </div>
              <button type="submit" className="btn btn-primary cta__submit" id="cta-submit-btn">
                Send Inquiry
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
              <p className="cta__form-note">We respect your privacy. Information is never shared.</p>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Orange strip at top */
        .cta__strip {
          background: #CD7530;
          padding: 28px 0;
        }
        .cta__strip-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .cta__strip-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.375rem;
          color: #ffffff;
          margin-bottom: 4px;
          letter-spacing: -0.3px;
        }
        .cta__strip-sub {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.75);
          margin: 0;
        }
        .cta__strip-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #CD7530;
          background: #ffffff;
          padding: 14px 28px;
          border-radius: 4px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .cta__strip-btn:hover {
          background: #171717;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* Body */
        .cta__body {
          background: #f7f7f7;
          padding: 100px 0;
        }

        .cta__grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 80px;
          align-items: start;
        }

        /* Info */
        .cta__title { font-size: clamp(1.5rem, 3vw, 2.25rem); }
        .cta__desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9625rem;
          color: #5a5a5a;
          line-height: 1.85;
          margin-bottom: 36px;
        }

        .cta__contacts {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .cta__contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem;
          color: #3a3a3a;
          line-height: 1.6;
        }
        .cta__contact-icon {
          width: 36px;
          height: 36px;
          background: #CD7530;
          color: #ffffff;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Form */
        .cta__form {
          background: #ffffff;
          border: 1px solid #e8e8e8;
          border-radius: 6px;
          padding: 40px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.06);
          border-top: 4px solid #CD7530;
        }
        .cta__form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .cta__form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }
        .cta__form-field label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: #1d1d1d;
        }
        .cta__form input,
        .cta__form select,
        .cta__form textarea {
          background: #f7f7f7;
          border: 1px solid #e0e0e0;
          color: #1d1d1d;
          padding: 12px 14px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.9375rem;
          border-radius: 4px;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
          width: 100%;
          resize: vertical;
        }
        .cta__form input::placeholder,
        .cta__form textarea::placeholder { color: #b0b0b0; font-size: 0.875rem; }
        .cta__form input:focus,
        .cta__form select:focus,
        .cta__form textarea:focus {
          border-color: #CD7530;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(205,117,48,0.1);
        }
        .cta__submit { width: 100%; justify-content: center; padding: 15px; margin-top: 4px; }
        .cta__form-note {
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem;
          color: #9e9e9e;
          text-align: center;
          margin-top: 14px;
        }

        @media (max-width: 960px) {
          .cta__grid { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 640px) {
          .cta__strip-inner { flex-direction: column; }
          .cta__form { padding: 28px 20px; }
          .cta__form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
