// ============================================================
//  ThemeContext.jsx  —  Dark / Light mode global state
// ============================================================
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("dc_theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("dc_theme", dark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleDark = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// ─── Centralised design tokens ───────────────────────────────────────────────
export const tokens = (dark) => ({
  bg:         dark ? "#08080f" : "#f0f4fa",
  bgAlt:      dark ? "#0f0f1a" : "#ffffff",
  bgCard:     dark ? "#14142a" : "#ffffff",
  bgHover:    dark ? "#1a1a35" : "#f8faff",
  border:     dark ? "rgba(99,179,237,0.12)" : "rgba(56,189,248,0.25)",
  borderHover:dark ? "rgba(99,179,237,0.45)" : "rgba(56,189,248,0.6)",
  text:       dark ? "#e2e8f0" : "#1a202c",
  textMuted:  dark ? "#8892a4" : "#64748b",
  accent:     "#38bdf8",
  accent2:    "#0ea5e9",
  accentGlow: dark ? "rgba(56,189,248,0.18)" : "rgba(56,189,248,0.12)",
  navBg:      dark ? "rgba(8,8,15,0.88)" : "rgba(240,244,250,0.9)",
  shadow:     dark ? "0 8px 40px rgba(0,0,0,0.6)" : "0 8px 40px rgba(56,189,248,0.1)",
  cardShadow: dark ? "0 4px 24px rgba(0,0,0,0.4)" : "0 4px 24px rgba(0,0,0,0.06)",
  gradient:   `linear-gradient(135deg, #38bdf8, #0ea5e9)`,
  gradientSoft:`linear-gradient(135deg, rgba(56,189,248,0.15), rgba(14,165,233,0.08))`,
});
