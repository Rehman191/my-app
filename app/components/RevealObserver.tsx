"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = ".reveal, .reveal-fade-right, .reveal-fade-left";

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 80 && rect.bottom > 0;
}

export default function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll(REVEAL_SELECTOR);
    const alreadyReady = document.documentElement.classList.contains("reveal-ready");

    if (!alreadyReady) {
      elements.forEach((el) => {
        if (isInViewport(el)) {
          el.classList.add("revealed");
        }
      });
      document.documentElement.classList.add("reveal-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -80px 0px", threshold: 0.05 }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("revealed")) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
