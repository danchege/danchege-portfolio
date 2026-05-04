// ============================================================
//  hooks.js  —  Shared custom React hooks
// ============================================================
import { useState, useEffect, useRef } from "react";

/** Fires once when element enters the viewport */
export const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};

/** Cycles through an array of strings with typewriter effect */
export const useTypewriter = (strings, typingSpeed = 90, deletingSpeed = 50, pauseMs = 1500) => {
  const [displayed, setDisplayed] = useState("");
  const [strIdx, setStrIdx]       = useState(0);
  const [charIdx, setCharIdx]     = useState(0);
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const current = strings[strIdx];
    const speed   = deleting ? deletingSpeed : typingSpeed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), pauseMs);
      } else if (deleting && charIdx > 0) {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setStrIdx((s) => (s + 1) % strings.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, strIdx, strings, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
};

/** Returns window scroll position */
export const useScrollY = () => {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
};
