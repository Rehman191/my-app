"use client";

import { useState, useEffect } from "react";

/* ── 60-Second Export Check ── */
const QUESTIONS = [
  {
    id: "mineral",
    question: "What mineral are you looking to import?",
    options: ["Pink Himalayan Salt", "Emerald / Rubies", "Lapis Lazuli / Aquamarine", "Chromite / Industrial Ore", "Multiple / Not Sure"],
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

function ExportCheck() {
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
      else setStage("email"); // all questions done → go to email step
    }, 280);
  };

  const sendQuote = () => {
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setSending(true);
    // Simulate async send
    setTimeout(() => {
      setSending(false);
      setStage("sent");
    }, 1000);
  };

  const reset = () => {
    setStep(0); setAnswers({}); setStage("quiz");
    setSelected(null); setEmail(""); setEmailError(""); setSending(false);
  };

  const q = QUESTIONS[step];
  const pct = stage === "quiz" ? (step / QUESTIONS.length) * 100 : 100;

  return (
    <div className="cw">
      {/* Header */}
      <div className="cw-head">
        <div className="cw-head__left">
          <div className="cw-head__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#CD7530" strokeWidth="2.2" width="14" height="14">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div>
            <div className="cw-head__name">60-Second Export Check</div>
            <div className="cw-head__sub">
              {stage === "quiz" ? "Get a tailored quote in minutes"
                : stage === "email" ? "One last step — where to send it?"
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
          <div className="cw-head__badge" style={{ background: "rgba(205,117,48,0.18)", border: "1px solid rgba(205,117,48,0.35)" }}>
            <span className="cw-head__cur" style={{ fontSize: "0.7rem" }}>Step 5</span>
          </div>
        )}
        {stage === "sent" && (
          <div className="cw-head__badge" style={{ background: "rgba(72,187,120,0.15)", border: "1px solid rgba(72,187,120,0.3)" }}>
            <span className="cw-head__cur" style={{ color: "#48bb78", fontSize: "0.7rem" }}>✓ Sent</span>
          </div>
        )}
      </div>

      {/* Progress bar — always full once quiz done */}
      <div className="cw-progress">
        {QUESTIONS.map((_, i) => (
          <div key={i} className={`cw-dot ${stage !== "quiz" || i < step ? "done" : i === step ? "active" : "idle"}`}>
            {(stage !== "quiz" || i < step) && (
              <svg viewBox="0 0 10 10" fill="none" width="8" height="8">
                <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        ))}
        {/* Email dot */}
        <div className={`cw-dot ${stage === "sent" ? "done" : stage === "email" ? "active" : "idle"}`} style={{ width: 22, height: 22 }}>
          {stage === "sent" && (
            <svg viewBox="0 0 10 10" fill="none" width="8" height="8">
              <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {stage === "email" && (
            <svg viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="2" width="10" height="10">
              <path d="M2 4h16v12H2z"/><polyline points="2,4 10,12 18,4"/>
            </svg>
          )}
        </div>
        <div className="cw-track"><div className="cw-fill" style={{ width: `${pct}%` }} /></div>
      </div>

      {/* Body */}
      {stage === "quiz" && (
        <div className="cw-body">
          <p className="cw-q">{q.question}</p>
          <div className="cw-opts">
            {q.options.map((opt, i) => (
              <button
                key={opt}
                className={`cw-opt${selected === opt ? " cw-opt--on" : ""}`}
                onClick={() => pick(opt)}
                disabled={!!selected}
              >
                <span className={`cw-ltr${selected === opt ? " cw-ltr--on" : ""}`}>{LETTERS[i]}</span>
                <span className="cw-txt">{opt}</span>
                <span className="cw-arr">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {stage === "email" && (
        <div className="cw-body">
          {/* Mini answers recap */}
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
              <svg viewBox="0 0 24 24" fill="none" stroke="rgba(205,117,48,0.7)" strokeWidth="2" width="14" height="14">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <input
              type="email"
              className="cw-email-input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
              onKeyDown={(e) => e.key === "Enter" && sendQuote()}
              autoFocus
            />
          </div>
          {emailError && <p className="cw-email-error">{emailError}</p>}

          <button
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
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </>
            )}
          </button>
          <button className="cw-done__restart" onClick={reset} style={{ marginTop: "8px" }}>↺ Start over</button>
        </div>
      )}

      {stage === "sent" && (
        <div className="cw-done">
          <div className="cw-done__ring">
            <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
              <polyline points="10,24 20,34 38,14" stroke="#CD7530" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="cw-done__title">Quote Request Sent!</h3>
          <p className="cw-done__sub">
            We&apos;ve received your inquiry and will send a custom quote to <strong>{email}</strong> within <strong>24 hrs</strong>.
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
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </a>
          <button className="cw-done__restart" onClick={reset}>↺ Start over</button>
        </div>
      )}

      <style>{`
        /* Shell */
        .cw {
          background: rgba(8,8,12,0.75);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          overflow: hidden;
          width: 100%;
          box-shadow: 0 24px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07);
        }

        /* Head */
        .cw-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          background: rgba(205,117,48,0.07);
        }
        .cw-head__left { display: flex; align-items: center; gap: 10px; }
        .cw-head__icon {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1.5px solid rgba(205,117,48,0.4);
          background: rgba(205,117,48,0.1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .cw-head__name {
          font-family: 'Poppins', sans-serif;
          font-weight: 600; font-size: 0.875rem;
          color: #fff; line-height: 1.2;
        }
        .cw-head__sub {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6875rem; color: rgba(255,255,255,0.32); margin-top: 1px;
        }
        .cw-head__badge {
          display: flex; align-items: baseline; gap: 2px;
          background: rgba(205,117,48,0.14);
          border: 1px solid rgba(205,117,48,0.24);
          border-radius: 20px; padding: 4px 12px;
        }
        .cw-head__cur {
          font-family: 'Poppins', sans-serif;
          font-weight: 700; font-size: 0.9rem; color: #CD7530;
        }
        .cw-head__sep {
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem; color: rgba(255,255,255,0.18); margin: 0 1px;
        }
        .cw-head__tot {
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem; color: rgba(255,255,255,0.28);
        }

        /* Progress */
        .cw-progress {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 14px 18px 0;
        }
        .cw-dot {
          width: 22px; height: 22px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
          position: relative; z-index: 1;
        }
        .cw-dot.idle {
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.11);
        }
        .cw-dot.active {
          background: #CD7530;
          border: 2px solid #E8934A;
          box-shadow: 0 0 0 4px rgba(205,117,48,0.18);
        }
        .cw-dot.done {
          background: #CD7530;
          border: 2px solid #CD7530;
        }
        .cw-track {
          flex: 1; height: 2px;
          background: rgba(255,255,255,0.07);
          border-radius: 2px; overflow: hidden; position: relative;
        }
        .cw-fill {
          position: absolute; left: 0; top: 0; bottom: 0;
          background: linear-gradient(90deg, #CD7530, #E8934A);
          border-radius: 2px;
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        /* Body */
        .cw-body { padding: 16px 18px 18px; }
        .cw-q {
          font-family: 'Poppins', sans-serif;
          font-weight: 600; font-size: 0.9375rem;
          color: #fff; line-height: 1.45; margin-bottom: 13px;
          letter-spacing: -0.1px;
        }

        /* Options */
        .cw-opts { display: flex; flex-direction: column; gap: 6px; }
        .cw-opt {
          display: flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 9px;
          padding: 9px 11px;
          cursor: pointer; text-align: left;
          transition: all 0.22s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden;
        }
        .cw-opt::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(205,117,48,0.1), transparent);
          opacity: 0; transition: opacity 0.22s;
        }
        .cw-opt:hover {
          border-color: rgba(205,117,48,0.4);
          background: rgba(205,117,48,0.07);
          transform: translateX(3px);
        }
        .cw-opt:hover::after { opacity: 1; }
        .cw-opt--on {
          border-color: #CD7530 !important;
          background: rgba(205,117,48,0.15) !important;
          transform: translateX(3px);
        }
        .cw-opt:disabled { cursor: default; }

        .cw-ltr {
          width: 24px; height: 24px;
          border-radius: 6px;
          border: 1.5px solid rgba(255,255,255,0.13);
          background: rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Poppins', sans-serif;
          font-weight: 700; font-size: 0.625rem;
          color: rgba(255,255,255,0.38);
          flex-shrink: 0;
          transition: all 0.22s ease;
        }
        .cw-opt:hover .cw-ltr {
          background: rgba(205,117,48,0.18);
          border-color: rgba(205,117,48,0.45);
          color: #CD7530;
        }
        .cw-ltr--on { background: #CD7530 !important; color: #fff !important; border-color: #CD7530 !important; }

        .cw-txt {
          flex: 1;
          font-family: 'Manrope', sans-serif;
          font-size: 0.8125rem; font-weight: 600;
          color: rgba(255,255,255,0.65);
          transition: color 0.22s;
        }
        .cw-opt:hover .cw-txt,
        .cw-opt--on .cw-txt { color: #fff; }

        .cw-arr {
          color: rgba(255,255,255,0.15);
          display: flex; align-items: center;
          flex-shrink: 0;
          transition: all 0.22s;
        }
        .cw-opt:hover .cw-arr { color: #CD7530; transform: translateX(2px); }

        /* ── Email step ── */
        .cw-recap {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 9px; overflow: hidden;
        }
        .cw-recap__row {
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 8px; padding: 6px 12px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .cw-recap__row:last-child { border-bottom: none; }
        .cw-recap__key {
          font-family: 'Manrope', sans-serif;
          font-size: 0.5625rem; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.25); white-space: nowrap;
        }
        .cw-recap__val {
          font-family: 'Manrope', sans-serif;
          font-size: 0.7rem; font-weight: 600;
          color: rgba(255,255,255,0.6); text-align: right;
        }

        .cw-email-field {
          display: flex; align-items: center;
          background: rgba(255,255,255,0.06);
          border: 1.5px solid rgba(255,255,255,0.12);
          border-radius: 9px;
          overflow: hidden;
          transition: border-color 0.22s, box-shadow 0.22s;
          margin-bottom: 6px;
        }
        .cw-email-field:focus-within {
          border-color: rgba(205,117,48,0.6);
          box-shadow: 0 0 0 3px rgba(205,117,48,0.12);
        }
        .cw-email-icon {
          padding: 0 12px;
          display: flex; align-items: center;
          flex-shrink: 0;
        }
        .cw-email-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Manrope', sans-serif;
          font-size: 0.875rem; font-weight: 500;
          color: #fff;
          padding: 11px 12px 11px 0;
          width: 100%;
        }
        .cw-email-input::placeholder { color: rgba(255,255,255,0.22); }

        .cw-email-error {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6875rem; font-weight: 600;
          color: #fc8181;
          margin: 0 0 6px;
        }

        .cw-send-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%;
          background: linear-gradient(135deg, #CD7530, #E8934A);
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-weight: 600; font-size: 0.875rem;
          padding: 13px;
          border: none; border-radius: 9px;
          cursor: pointer;
          transition: all 0.25s;
          box-shadow: 0 4px 20px rgba(205,117,48,0.35);
          margin-top: 4px;
        }
        .cw-send-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #A85F20, #CD7530);
          transform: translateY(-1px);
          box-shadow: 0 6px 28px rgba(205,117,48,0.45);
        }
        .cw-send-btn--loading { opacity: 0.75; cursor: default; }

        .cw-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Done */
        .cw-done {
          padding: 22px 18px 18px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
        }
        .cw-done__ring {
          width: 56px; height: 56px; border-radius: 50%;
          border: 2px solid rgba(205,117,48,0.3);
          background: rgba(205,117,48,0.1);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 0 0 7px rgba(205,117,48,0.07);
        }
        .cw-done__title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700; font-size: 1.125rem; color: #fff; margin-bottom: 6px;
        }
        .cw-done__sub {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8125rem; color: rgba(255,255,255,0.42);
          line-height: 1.65; margin-bottom: 16px;
        }
        .cw-done__sub strong { color: #CD7530; font-weight: 700; }

        .cw-summary {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 9px; overflow: hidden; margin-bottom: 14px;
        }
        .cw-summary__row {
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 8px; padding: 7px 13px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .cw-summary__row:last-child { border-bottom: none; }
        .cw-summary__key {
          font-family: 'Manrope', sans-serif;
          font-size: 0.5625rem; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.28); white-space: nowrap;
        }
        .cw-summary__val {
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem; font-weight: 600;
          color: rgba(255,255,255,0.72); text-align: right;
        }

        .cw-done__btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #CD7530; color: #fff;
          font-family: 'Poppins', sans-serif;
          font-weight: 600; font-size: 0.8125rem;
          padding: 12px 22px; border-radius: 9px;
          text-decoration: none; transition: all 0.25s;
          width: 100%; justify-content: center; margin-bottom: 10px;
          box-shadow: 0 4px 20px rgba(205,117,48,0.3);
        }
        .cw-done__btn:hover { background: #A85F20; color: #fff; }

        .cw-done__restart {
          background: none; border: none;
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem; font-weight: 600;
          color: rgba(255,255,255,0.22);
          cursor: pointer; padding: 4px;
          transition: color 0.2s;
        }
        .cw-done__restart:hover { color: rgba(255,255,255,0.5); }
      `}</style>
    </div>
  );
}


/* ── Hero ── */
export default function Hero() {
  const [checkOpen, setCheckOpen] = useState(false);

  // Lock body scroll when bottom sheet is open on mobile
  useEffect(() => {
    document.body.style.overflow = checkOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [checkOpen]);

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

      {/* MAIN CONTENT */}
      <div className="container hero__body">
        {/* Left column */}
        <div className="hero__left">
          <div className="hero__badge fade-up">
            <span className="hero__badge-dot" />
            Pakistan&apos;s Premier Mineral Exporter Since 2004
          </div>

          <h1 className="hero__title fade-up fade-up-1">
            Exporting Pakistan&apos;s<br/>
            <em className="hero__title-em">Finest Minerals</em><br/>
            to the World
          </h1>

          <p className="hero__subtitle fade-up fade-up-2">
            Premium gemstones, industrial minerals &amp; decorative rocks — sourced
            responsibly from Pakistan&apos;s ancient mountains, certified to international
            standards, and delivered globally.
          </p>

          <div className="hero__bullets fade-up fade-up-2">
            {[
              "ISO 9001:2015 Certified",
              "GIA Compliant Grading",
              "Direct Mine Partnerships",
              "50+ Countries Served",
            ].map((b) => (
              <div key={b} className="hero__bullet">
                <svg viewBox="0 0 24 24" fill="none" stroke="#CD7530" strokeWidth="3" width="13" height="13">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {b}
              </div>
            ))}
          </div>

          <div className="hero__actions fade-up fade-up-3">
            <a href="#minerals" className="hero__btn-primary" id="hero-explore-btn">
              Explore Minerals
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
              60-Second Export Check
            </button>
          </div>

          <div className="hero__stats fade-up fade-up-4">
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
        <div className="hero__sheet-backdrop" onClick={() => setCheckOpen(false)} />
      )}
      <div className={`hero__sheet ${checkOpen ? "hero__sheet--open" : ""}`}>
        {/* Drag handle */}
        <div className="hero__sheet-handle" />
        {/* Sheet header */}
        <div className="hero__sheet-header">
          <div className="hero__sheet-title">
            <div className="hero__sheet-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#CD7530" strokeWidth="2.2" width="14" height="14">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <div className="hero__sheet-name">60-Second Export Check</div>
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
                <path d="M13 4L6.5 10.5 3 7" stroke="#CD7530" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          padding-top: 120px;
        }

        /* Video */
        .hero__video-wrap { position: absolute; inset: 0; z-index: 0; }
        .hero__video { width: 100%; height: 100%; object-fit: cover; object-position: center; }
        .hero__overlay-base { position: absolute; inset: 0; background: rgba(12,12,18,0.72); }
        .hero__overlay-left {
          position: absolute; inset: 0;
          background: linear-gradient(105deg, rgba(12,12,18,0.9) 0%, rgba(12,12,18,0.75) 50%, rgba(12,12,18,0.3) 100%);
        }
        .hero__overlay-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 220px;
          background: linear-gradient(to top, rgba(12,12,18,0.85), transparent);
        }

        /* Grid */
        .hero__body {
          position: relative; z-index: 2;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 56px;
          align-items: center;
          padding-top: 32px;
          padding-bottom: 100px;
        }

        /* Badge */
        .hero__badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.6875rem; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          background: rgba(205,117,48,0.13);
          border: 1px solid rgba(205,117,48,0.22);
          padding: 6px 14px; border-radius: 40px; margin-bottom: 24px;
        }
        .hero__badge-dot {
          width: 6px; height: 6px;
          background: #CD7530; border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }

        /* Title */
        .hero__title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: clamp(2.25rem, 5.5vw, 3.75rem);
          line-height: 1.1; color: #fff;
          letter-spacing: -1.5px; margin-bottom: 22px;
        }
        .hero__title-em { font-style: normal; color: #CD7530; }

        /* Subtitle */
        .hero__subtitle {
          font-family: 'Manrope', sans-serif;
          font-size: 1rem; color: rgba(255,255,255,0.58);
          line-height: 1.85; max-width: 520px; margin-bottom: 24px;
        }

        /* Bullets */
        .hero__bullets {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 8px 20px; margin-bottom: 32px; max-width: 420px;
        }
        .hero__bullet {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.8125rem; font-weight: 600;
          color: rgba(255,255,255,0.62);
        }

        /* Actions */
        .hero__actions {
          display: flex; align-items: center; gap: 12px;
          flex-wrap: wrap; margin-bottom: 40px;
        }
        .hero__btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Poppins', sans-serif;
          font-weight: 600; font-size: 0.875rem;
          color: #fff; background: #CD7530;
          padding: 13px 26px; border-radius: 6px;
          text-decoration: none; border: 2px solid #CD7530;
          transition: all 0.25s;
        }
        .hero__btn-primary:hover {
          background: #A85F20; border-color: #A85F20; color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(205,117,48,0.35);
        }
        .hero__btn-check {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Poppins', sans-serif;
          font-weight: 600; font-size: 0.875rem;
          color: rgba(255,255,255,0.78);
          background: rgba(255,255,255,0.06);
          padding: 11px 20px; border-radius: 6px;
          border: 2px solid rgba(255,255,255,0.16);
          cursor: pointer; transition: all 0.25s;
        }
        .hero__btn-check:hover,
        .hero__btn-check--active {
          background: rgba(205,117,48,0.12);
          border-color: rgba(205,117,48,0.45);
          color: #CD7530;
        }

        /* Stats */
        .hero__stats {
          display: flex; align-items: stretch;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          max-width: 480px; border-radius: 6px; overflow: hidden;
        }
        .hero__stat {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; padding: 16px 14px; position: relative;
        }
        .hero__stat-divider {
          position: absolute; left: 0; top: 20%; bottom: 20%;
          width: 1px; background: rgba(255,255,255,0.09);
        }
        .hero__stat strong {
          font-family: 'Poppins', sans-serif;
          font-weight: 700; font-size: 1.5rem;
          color: #CD7530; letter-spacing: -0.5px; line-height: 1;
        }
        .hero__stat span {
          font-family: 'Manrope', sans-serif;
          font-size: 0.5625rem; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.32); margin-top: 5px; text-align: center;
        }

        /* Right panel */
        .hero__right { display: none; flex-direction: column; }
        .hero__right--visible { display: flex; }
        .hero__right-intro {
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem; color: rgba(255,255,255,0.4);
          line-height: 1.7; margin-bottom: 14px;
        }

        /* Trust bar */
        .hero__trust-bar {
          position: relative; z-index: 2;
          background: rgba(0,0,0,0.45);
          border-top: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(8px); padding: 14px 0;
        }
        .hero__trust-inner {
          display: flex; align-items: center; gap: 24px; flex-wrap: wrap;
        }
        .hero__trust-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.625rem; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }
        .hero__trust-cert {
          display: inline-flex; align-items: center; gap: 5px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.6875rem; font-weight: 600;
          color: rgba(255,255,255,0.48);
        }

        /* Scroll cue */
        .hero__scroll-cue {
          position: absolute; bottom: 68px; left: 50%;
          transform: translateX(-50%);
          z-index: 2; display: flex; flex-direction: column;
          align-items: center; gap: 8px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.5625rem; letter-spacing: 2px;
          text-transform: uppercase; color: rgba(255,255,255,0.22); font-weight: 600;
        }
        .hero__scroll-mouse {
          width: 20px; height: 32px;
          border: 1.5px solid rgba(205,117,48,0.35);
          border-radius: 10px; display: flex;
          justify-content: center; padding-top: 5px;
        }
        .hero__scroll-wheel {
          width: 2px; height: 6px;
          background: #CD7530; border-radius: 2px;
          animation: scrollWheel 1.8s ease-in-out infinite;
        }
        @keyframes scrollWheel {
          0%, 100% { transform: translateY(0); opacity: 1; }
          60% { transform: translateY(8px); opacity: 0.2; }
        }

        /* ── Bottom Sheet (mobile only) ── */
        .hero__sheet-backdrop {
          display: none;
        }
        .hero__sheet {
          display: none;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero__body { grid-template-columns: 1fr; gap: 36px; }
          .hero__right--visible { display: flex; max-width: 480px; }
        }
        @media (max-width: 768px) {
          .hero { padding-top: 100px; }
          .hero__scroll-cue { display: none; }
          .hero__bullets { grid-template-columns: 1fr; }
          .hero__stats { display: grid; grid-template-columns: 1fr 1fr; max-width: 100%; }

          /* Hide the inline right panel on mobile — use bottom sheet instead */
          .hero__right,
          .hero__right--visible {
            display: none !important;
          }

          /* Backdrop */
          .hero__sheet-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.65);
            z-index: 998;
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            animation: fadeIn 0.22s ease;
          }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

          /* Bottom sheet */
          .hero__sheet {
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 999;
            background: #0e0e14;
            border-top: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px 20px 0 0;
            max-height: 90vh;
            overflow-y: auto;
            overflow-x: hidden;
            transform: translateY(100%);
            transition: transform 0.38s cubic-bezier(0.32, 0.72, 0, 1);
            -webkit-overflow-scrolling: touch;
            box-shadow: 0 -20px 60px rgba(0,0,0,0.5);
          }
          .hero__sheet--open {
            transform: translateY(0);
          }

          .hero__sheet-handle {
            width: 36px;
            height: 4px;
            background: rgba(255,255,255,0.15);
            border-radius: 2px;
            margin: 12px auto 0;
          }

          .hero__sheet-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 20px 14px;
            border-bottom: 1px solid rgba(255,255,255,0.07);
            background: rgba(205,117,48,0.07);
            position: sticky;
            top: 0;
            z-index: 1;
          }

          .hero__sheet-title {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .hero__sheet-icon {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            border: 1.5px solid rgba(205,117,48,0.4);
            background: rgba(205,117,48,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .hero__sheet-name {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 0.875rem;
            color: #fff;
            line-height: 1.2;
          }

          .hero__sheet-sub {
            font-family: 'Manrope', sans-serif;
            font-size: 0.6875rem;
            color: rgba(255,255,255,0.32);
            margin-top: 1px;
          }

          .hero__sheet-close {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,0.12);
            background: rgba(255,255,255,0.06);
            color: rgba(255,255,255,0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            flex-shrink: 0;
            transition: all 0.2s;
          }
          .hero__sheet-close:hover {
            background: rgba(205,117,48,0.15);
            border-color: rgba(205,117,48,0.4);
            color: #CD7530;
          }

          .hero__sheet-body {
            padding: 20px 16px 32px;
          }

          /* Pulse the check button on mobile to hint it does something */
          .hero__btn-check {
            position: relative;
          }
          .hero__btn-check::after {
            content: 'Tap to start';
            position: absolute;
            top: -22px;
            left: 50%;
            transform: translateX(-50%);
            font-family: 'Manrope', sans-serif;
            font-size: 0.5625rem;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #CD7530;
            white-space: nowrap;
            animation: hintPulse 2.5s ease-in-out infinite;
            pointer-events: none;
          }
          @keyframes hintPulse {
            0%, 100% { opacity: 0.6; transform: translateX(-50%) translateY(0); }
            50% { opacity: 1; transform: translateX(-50%) translateY(-2px); }
          }
        }
        @media (max-width: 480px) {
          .hero__title { font-size: 2rem; letter-spacing: -1px; }
          .hero__btn-check { font-size: 0.75rem; padding: 10px 14px; }
          .hero__sheet-body { padding: 16px 12px 40px; }
        }
      `}</style>
    </section>
  );
}
