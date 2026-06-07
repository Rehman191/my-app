"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    id: "mineral",
    question: "What mineral are you looking to import?",
    options: ["Pink Himalayan Salt", "Emerald / Rubies", "China Clay", "Talc", "Multiple / Not Sure"],
  },
  {
    id: "quantity",
    question: "What quantity do you require?",
    options: ["Sample / Trial Order", "1–5 Metric Tons", "5–20 Metric Tons", "20–100 Metric Tons", "100+ Metric Tons"],
  },
  {
    id: "destination",
    question: "Where is your destination country?",
    options: ["Europe", "Middle East", "Asia Pacific", "North America", "Other Region"],
  },
  {
    id: "timeline",
    question: "What is your required timeline?",
    options: ["As soon as possible", "Within 1 month", "1–3 months", "3–6 months", "Just researching"],
  },
];

const LETTERS = ["A", "B", "C", "D", "E"];

export default function ExportCheck() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [stage, setStage] = useState<"quiz" | "email" | "sent">("quiz");
  const [selected, setSelected] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [sending, setSending] = useState(false);

  const pick = (answer: string) => {
    setSelected(answer);
    setTimeout(() => {
      const next = { ...answers, [QUESTIONS[step].id]: answer };
      setAnswers(next);
      setSelected(null);
      if (step < QUESTIONS.length - 1) setStep(step + 1);
      else setStage("email");
    }, 280);
  };

  const sendQuote = () => {
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setStage("sent");
    }, 1000);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setStage("quiz");
    setSelected(null);
    setEmail("");
    setEmailError("");
    setSending(false);
  };

  const q = QUESTIONS[step];
  const pct = stage === "quiz" ? (step / QUESTIONS.length) * 100 : 100;

  return (
    <div className="cw">
      <div className="cw-head">
        <div className="cw-head__left">
          <div className="cw-head__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="14" height="14">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div>
            <div className="cw-head__name">60-Second Export Check</div>
            <div className="cw-head__sub">
              {stage === "quiz"
                ? "Get a tailored quote in minutes"
                : stage === "email"
                  ? "One last step — where to send it?"
                  : "Quote request sent!"}
            </div>
          </div>
        </div>
        {stage === "quiz" && (
          <div className="cw-head__badge">
            <span className="cw-head__cur">{step + 1}</span>
            <span className="cw-head__sep">/</span>
            <span className="cw-head__tot">{QUESTIONS.length}</span>
          </div>
        )}
        {stage === "email" && (
          <div className="cw-head__badge cw-head__badge--step">
            <span className="cw-head__cur">Step 5</span>
          </div>
        )}
        {stage === "sent" && (
          <div className="cw-head__badge cw-head__badge--sent">
            <span className="cw-head__cur">✓ Sent</span>
          </div>
        )}
      </div>

      <div className="cw-progress">
        {QUESTIONS.map((_, i) => (
          <div key={i} className={`cw-dot ${stage !== "quiz" || i < step ? "done" : i === step ? "active" : "idle"}`}>
            {(stage !== "quiz" || i < step) && (
              <svg viewBox="0 0 10 10" fill="none" width="8" height="8">
                <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
        <div className={`cw-dot ${stage === "sent" ? "done" : stage === "email" ? "active" : "idle"}`} style={{ width: 22, height: 22 }}>
          {stage === "sent" && (
            <svg viewBox="0 0 10 10" fill="none" width="8" height="8">
              <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {stage === "email" && (
            <svg viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="2" width="10" height="10">
              <path d="M2 4h16v12H2z" />
              <polyline points="2,4 10,12 18,4" />
            </svg>
          )}
        </div>
        <div className="cw-track">
          <div className="cw-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {stage === "quiz" && (
        <div className="cw-body">
          <p className="cw-q">{q.question}</p>
          <div className="cw-opts">
            {q.options.map((opt, i) => (
              <button
                key={opt}
                type="button"
                className={`cw-opt${selected === opt ? " cw-opt--on" : ""}`}
                onClick={() => pick(opt)}
                disabled={!!selected}
              >
                <span className={`cw-ltr${selected === opt ? " cw-ltr--on" : ""}`}>{LETTERS[i]}</span>
                <span className="cw-txt">{opt}</span>
                <span className="cw-arr">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {stage === "email" && (
        <div className="cw-body">
          <div className="cw-recap">
            {Object.entries(answers).map(([k, v]) => (
              <div key={k} className="cw-recap__row">
                <span className="cw-recap__key">{k.charAt(0).toUpperCase() + k.slice(1)}</span>
                <span className="cw-recap__val">{v}</span>
              </div>
            ))}
          </div>

          <p className="cw-q" style={{ marginBottom: "10px", marginTop: "14px" }}>
            Where should we send your custom quote?
          </p>
          <div className="cw-email-field">
            <div className="cw-email-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <input
              type="email"
              className="cw-email-input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && sendQuote()}
              autoFocus
            />
          </div>
          {emailError && <p className="cw-email-error">{emailError}</p>}

          <button
            type="button"
            className={`cw-send-btn${sending ? " cw-send-btn--loading" : ""}`}
            onClick={sendQuote}
            disabled={sending}
          >
            {sending ? (
              <>
                <span className="cw-spinner" />
                Sending…
              </>
            ) : (
              <>
                Send My Quote
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </>
            )}
          </button>
          <button type="button" className="cw-done__restart" onClick={reset} style={{ marginTop: "8px" }}>
            ↺ Start over
          </button>
        </div>
      )}

      {stage === "sent" && (
        <div className="cw-done">
          <div style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>
            <img 
              src="/images/logo-light.png" 
              alt="AML Exports Logo" 
              style={{ height: "40px", width: "auto", objectFit: "contain", opacity: 0.9 }}
            />
          </div>
          <div className="cw-done__ring">
            <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
              <polyline points="10,24 20,34 38,14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="cw-done__title">Quote Request Sent!</h3>
          <p className="cw-done__sub">
            We&apos;ve received your inquiry and will send a custom quote to <strong>{email}</strong> within{" "}
            <strong>24 hrs</strong>.
          </p>
          <div className="cw-summary">
            {Object.entries(answers).map(([k, v]) => (
              <div key={k} className="cw-summary__row">
                <span className="cw-summary__key">{k.charAt(0).toUpperCase() + k.slice(1)}</span>
                <span className="cw-summary__val">{v}</span>
              </div>
            ))}
            <div className="cw-summary__row">
              <span className="cw-summary__key">Email</span>
              <span className="cw-summary__val">{email}</span>
            </div>
          </div>
          <a href="#contact" className="cw-done__btn">
            Submit Full Inquiry
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </a>
          <button type="button" className="cw-done__restart" onClick={reset}>
            ↺ Start over
          </button>
        </div>
      )}
    </div>
  );
}
