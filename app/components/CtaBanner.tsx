"use client";

import { useState } from "react";

const CONTACT = [
  {
    label: "Phone",
    value: "+92 300 123 4567",
    href: "tel:+923001234567",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="17" height="17">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@amlexports.com",
    href: "mailto:info@amlexports.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="17" height="17">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Visit Our Office",
    value: "Office 12, Jinnah Avenue, Rawalpindi",
    href: "https://maps.google.com/?q=Jinnah+Avenue,+Rawalpindi",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="17" height="17">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function CtaBanner() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    query: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSent(true);
  };

  const handleReset = () => {
    setForm({ name: "", email: "", phone: "", company: "", query: "" });
    setSent(false);
  };

  return (
    <section className="quote" id="contact">
      <div className="quote__texture" aria-hidden="true" />
      <div className="quote__leaf-shadow" aria-hidden="true" />

      <div className="container">
        <header className="quote__header reveal">
          <div style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>
            <img 
              src="/images/logo.png" 
              alt="AML Exports" 
              style={{ height: "40px", width: "auto", objectFit: "contain", opacity: 0.9 }}
            />
          </div>
          <div className="quote__eyebrow">
            <span className="quote__eyebrow-line" />
            <span className="quote__eyebrow-text">Contact Us</span>
          </div>
          <h2 className="quote__title">Get A Quote</h2>
          <p className="quote__subtitle">
            Submit your inquiry and our export team will respond with pricing and availability within one business day.
          </p>
        </header>

        <div className="quote__card reveal">
          <aside className="quote__aside" style={{ position: "relative" }}>
            <div className="quote__aside-pattern" aria-hidden="true" />
            {/* Subtle watermark in corner */}
            <div style={{
              position: "absolute",
              bottom: "16px",
              right: "16px",
              width: "160px",
              height: "160px",
              backgroundImage: "url('/images/logo-light.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              opacity: 0.07,
              pointerEvents: "none"
            }} aria-hidden="true" />

            <h3 className="quote__aside-title">Direct Export Line</h3>
            <p className="quote__aside-desc">
              Reach our export desk directly for urgent shipments, sample requests, or bulk orders.
            </p>

            <ul className="quote__contact-list">
              {CONTACT.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="quote__contact-item"
                    target={item.label === "Visit Our Office" ? "_blank" : undefined}
                    rel={item.label === "Visit Our Office" ? "noopener noreferrer" : undefined}
                  >
                    <span className="quote__contact-icon">{item.icon}</span>
                    <span className="quote__contact-text">
                      <span className="quote__contact-label">{item.label}</span>
                      <span className="quote__contact-value">{item.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="quote__aside-divider" />

            <div className="quote__hours">
              <span className="quote__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="17" height="17">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              <span className="quote__contact-text">
                <span className="quote__contact-label">Business Hours</span>
                <span className="quote__contact-value">Mon – Sat · 9:00 AM – 6:00 PM PKT</span>
              </span>
            </div>
          </aside>

          <div className="quote__form-wrap">
            {sent ? (
              <div className="quote__success">
                <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                  <img 
                    src="/images/logo.png" 
                    alt="AML Exports Logo" 
                    style={{ height: "42px", width: "auto", objectFit: "contain" }}
                  />
                </div>
                <div className="quote__success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="28" height="28">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>Thank You</h3>
                <p>
                  Your quote request has been received. We will contact you shortly at{" "}
                  <strong>{form.email}</strong>.
                </p>
                <button type="button" className="quote__submit" onClick={handleReset}>
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form className="quote__form" onSubmit={handleSubmit}>
                <div className="quote__row">
                  <div className="quote__field">
                    <label htmlFor="q-name">Name</label>
                    <input
                      id="q-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="quote__field">
                    <label htmlFor="q-email">Email</label>
                    <input
                      id="q-email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="quote__row">
                  <div className="quote__field">
                    <label htmlFor="q-phone">Phone</label>
                    <input
                      id="q-phone"
                      name="phone"
                      type="tel"
                      placeholder="+92 300 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="quote__field">
                    <label htmlFor="q-company">Company</label>
                    <input
                      id="q-company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="quote__field">
                  <label htmlFor="q-query">Query</label>
                  <textarea
                    id="q-query"
                    name="query"
                    rows={5}
                    required
                    placeholder="Mineral type, quantity, destination country, timeline..."
                    value={form.query}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="quote__submit" disabled={submitting}>
                  {submitting ? "Sending..." : "Send"}
                  {!submitting && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
