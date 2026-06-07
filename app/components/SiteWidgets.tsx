"use client";

import { useEffect, useState } from "react";
import ExportCheck from "./ExportCheck";

const WHATSAPP_NUMBER = "923001234567";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I am interested in mineral exports from AML Exports."
);

export default function SiteWidgets() {
  const [showTop, setShowTop] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 250);
    const openExport = () => setExportOpen(true);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("open-export-check", openExport);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("open-export-check", openExport);
    };
  }, []);

  useEffect(() => {
    if (!exportOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [exportOpen]);

  useEffect(() => {
    if (!exportOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExportOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [exportOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="float-actions">
        <button
          type="button"
          className={`float-actions__btn float-actions__top${showTop ? " is-visible" : ""}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#c3a23d" strokeWidth="2.5" width="20" height="20">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>

        <button
          type="button"
          className="float-actions__btn float-actions__export"
          onClick={() => setExportOpen(true)}
          aria-label="60-Second Export Check"
          title="60-Second Export Check"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#24282c" strokeWidth="2" width="22" height="22">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </button>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          className="float-actions__btn float-actions__whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
            <path
              fill="#ffffff"
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            />
          </svg>
        </a>
      </div>

      {exportOpen && (
        <div className="export-modal" role="dialog" aria-modal="true" aria-label="60-Second Export Check">
          <button
            type="button"
            className="export-modal__backdrop"
            aria-label="Close"
            onClick={() => setExportOpen(false)}
          />
          <div className="export-modal__panel">
            <button
              type="button"
              className="export-modal__close"
              onClick={() => setExportOpen(false)}
              aria-label="Close export check"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ExportCheck />
          </div>
        </div>
      )}
    </>
  );
}

export function openExportCheckModal() {
  window.dispatchEvent(new CustomEvent("open-export-check"));
}
