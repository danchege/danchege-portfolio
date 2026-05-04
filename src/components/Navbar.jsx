// ============================================================
//  Navbar.jsx  —  Fixed top navigation with theme toggle
// ============================================================
import { useState } from "react";
import { useTheme, tokens } from "../context/ThemeContext";
import { useScrollY } from "../hooks/hooks";
import { NAV_ITEMS, PERSONAL } from "../data/portfolioData";

import { FaSun, FaMoon } from "react-icons/fa6";

const Navbar = ({ page, setPage }) => {
  const { dark, toggleDark } = useTheme();
  const t = tokens(dark);
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrolled = scrollY > 40;

  const navStyle = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 999,
    background: scrolled ? t.navBg : "transparent",
    backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
    borderBottom: scrolled ? `1px solid ${t.border}` : "none",
    boxShadow: scrolled ? t.shadow : "none",
    transition: "all 0.4s ease",
  };

  const logoClick = () => { setPage("Home"); setMenuOpen(false); };

  return (
    <nav style={navStyle}>
      {/* ─── Main bar ─────────────────────────────────── */}
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "0 2rem", height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo */}
        <div onClick={logoClick} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "0.65rem" }}>
          <div style={{
            width: 38, height: 38, borderRadius: "50%",
            background: t.gradient,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Syne', sans-serif", fontWeight: 900,
            fontSize: "0.95rem", color: "#fff",
            boxShadow: `0 0 18px ${t.accentGlow}`,
          }}>
            {PERSONAL.initials}
          </div>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800, fontSize: "1.05rem",
            color: t.accent, letterSpacing: "0.02em",
          }}>
            {PERSONAL.name}
          </span>
        </div>

        {/* Desktop links */}
        <div className="hide-mobile" style={{ alignItems: "center", gap: "0.3rem" }}>
          {NAV_ITEMS.map((item) => {
            const active = page === item;
            return (
              <button
                key={item}
                onClick={() => setPage(item)}
                style={{
                  background: active ? `${t.accent}18` : "transparent",
                  border: `1px solid ${active ? t.accent + "55" : "transparent"}`,
                  color: active ? t.accent : t.textMuted,
                  padding: "0.42rem 1.05rem",
                  borderRadius: 8,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: active ? 700 : 500,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => { if (!active) { e.target.style.color = t.text; e.target.style.background = t.bgHover; } }}
                onMouseLeave={(e) => { if (!active) { e.target.style.color = t.textMuted; e.target.style.background = "transparent"; } }}
              >
                {item}
              </button>
            );
          })}

          {/* Theme toggle */}
          <button
            onClick={toggleDark}
            title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            style={{
              width: 40, height: 40, borderRadius: "50%",
              background: t.bgCard,
              border: `1px solid ${t.border}`,
              cursor: "pointer", fontSize: 18,
              display: "flex", alignItems: "center", justifyContent: "center",
              marginLeft: "0.6rem",
              transition: "all 0.3s",
              color: t.text,
            }}
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="show-mobile" style={{ alignItems: "center", gap: "0.75rem" }}>
          <button onClick={toggleDark} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22 }}>
            {dark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              background: t.bgCard, border: `1px solid ${t.border}`,
              borderRadius: 8, width: 38, height: 38,
              cursor: "pointer", fontSize: 20,
              color: t.text, display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ─── Mobile dropdown ──────────────────────────── */}
      {menuOpen && (
        <div style={{
          background: t.navBg, backdropFilter: "blur(20px)",
          borderTop: `1px solid ${t.border}`,
          padding: "0.5rem 1.5rem 1.2rem",
          animation: "fadeIn 0.2s ease",
        }}>
          {NAV_ITEMS.map((item) => (
            <div
              key={item}
              onClick={() => { setPage(item); setMenuOpen(false); }}
              style={{
                padding: "0.9rem 0",
                borderBottom: `1px solid ${t.border}`,
                color: page === item ? t.accent : t.text,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: page === item ? 700 : 400,
                fontSize: "1rem",
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}
            >
              {item}
              {page === item && <span style={{ color: t.accent }}>●</span>}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
