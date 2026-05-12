// ============================================================
//  SharedUI.jsx  —  Reusable components used across pages
// ============================================================
import { useState, useEffect } from "react";
import { useTheme, tokens } from "../context/ThemeContext";

// ─── Section Header ───────────────────────────────────────────────────────────
export const SectionHeader = ({ title, subtitle }) => {
  const { dark } = useTheme();
  const t = tokens(dark);
  return (
    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 900,
        fontSize: "clamp(2rem, 4vw, 3rem)",
        color: t.text,
        letterSpacing: "-0.02em",
        marginBottom: "0.6rem",
      }}>
        {title.split(" ").map((word, i) =>
          i === title.split(" ").length - 1
            ? <span key={i} style={{ color: t.accent }}> {word}</span>
            : <span key={i}>{word} </span>
        )}
      </h2>
      {subtitle && (
        <p style={{
          color: t.textMuted, fontFamily: "'DM Sans', sans-serif",
          fontSize: "1.05rem", maxWidth: 500, margin: "0 auto",
        }}>{subtitle}</p>
      )}
      <div style={{
        width: 56, height: 4, margin: "1.2rem auto 0",
        background: t.gradient, borderRadius: 100,
        boxShadow: `0 0 12px ${t.accentGlow}`,
      }} />
    </div>
  );
};

// ─── Animated Skill Bar ───────────────────────────────────────────────────────
export const SkillBar = ({ name, level, delay = 0, inView }) => {
  const { dark } = useTheme();
  const t = tokens(dark);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(level), delay + 200);
      return () => clearTimeout(timer);
    }
  }, [inView, level, delay]);

  return (
    <div style={{ marginBottom: "1.3rem" }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        marginBottom: "0.45rem",
      }}>
        <span style={{ color: t.text, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.92rem" }}>
          {name}
        </span>
        <span style={{ color: t.accent, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.85rem" }}>
          {width}%
        </span>
      </div>
      <div style={{
        height: 7, background: t.bgAlt,
        borderRadius: 100, overflow: "hidden",
        border: `1px solid ${t.border}`,
      }}>
        <div style={{
          height: "100%",
          width: `${width}%`,
          background: t.gradient,
          borderRadius: 100,
          transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: width > 0 ? `0 0 10px ${t.accentGlow}` : "none",
        }} />
      </div>
    </div>
  );
};

// ─── Tag / Pill ───────────────────────────────────────────────────────────────
export const Tag = ({ children, variant = "accent", size = "md" }) => {
  const { dark } = useTheme();
  const t = tokens(dark);

  const styles = {
    accent: { bg: `${t.accent}18`, color: t.accent, border: `1px solid ${t.accent}35` },
    muted:  { bg: t.bgAlt,         color: t.textMuted, border: `1px solid ${t.border}` },
    solid:  { bg: t.gradient,      color: "#fff", border: "none" },
  };
  const sizes = {
    sm: { padding: "0.2rem 0.65rem", fontSize: "0.75rem" },
    md: { padding: "0.3rem 0.85rem", fontSize: "0.82rem" },
    lg: { padding: "0.4rem 1.1rem",  fontSize: "0.92rem" },
  };

  return (
    <span style={{
      ...styles[variant], ...sizes[size],
      borderRadius: 100, fontWeight: 600,
      fontFamily: "'DM Sans', sans-serif",
      display: "inline-block", whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
};

// ─── Card ─────────────────────────────────────────────────────────────────────
export const Card = ({ children, style = {}, hover = true }) => {
  const { dark } = useTheme();
  const t = tokens(dark);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => hover && setHovered(true)}
      onMouseLeave={() => hover && setHovered(false)}
      style={{
        background: t.bgCard,
        border: `1px solid ${hovered ? t.borderHover : t.border}`,
        borderRadius: 20,
        boxShadow: hovered ? `0 16px 56px ${t.accentGlow}` : t.cardShadow,
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// ─── Button ───────────────────────────────────────────────────────────────────
export const Button = ({ children, variant = "primary", onClick, href, target, style = {} }) => {
  const { dark } = useTheme();
  const t = tokens(dark);
  const [hovered, setHovered] = useState(false);

  const variants = {
    primary: {
      background: hovered ? `linear-gradient(135deg, ${t.accent2}, ${t.accent})` : t.gradient,
      color: "#fff", border: "none",
      boxShadow: hovered ? `0 10px 36px ${t.accentGlow}` : `0 6px 24px ${t.accentGlow}`,
      transform: hovered ? "translateY(-2px)" : "none",
    },
    outline: {
      background: hovered ? t.gradient : "transparent",
      color: hovered ? "#fff" : t.accent,
      border: `2px solid ${t.accent}`,
      transform: hovered ? "translateY(-2px)" : "none",
    },
    ghost: {
      background: hovered ? t.bgHover : "transparent",
      color: t.textMuted,
      border: `1px solid ${t.border}`,
      transform: hovered ? "translateY(-1px)" : "none",
    },
  };

  const base = {
    ...variants[variant],
    padding: "0.85rem 2rem",
    borderRadius: 12,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700, fontSize: "0.95rem",
    cursor: "pointer",
    transition: "all 0.25s ease",
    textDecoration: "none",
    display: "inline-flex", alignItems: "center", gap: "0.5rem",
    letterSpacing: "0.01em",
    ...style,
  };

  if (href) {
    return <a href={href} target={target} style={base} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>{children}</a>;
  }
  return <button onClick={onClick} style={base} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>{children}</button>;
};

// ─── Divider ──────────────────────────────────────────────────────────────────
export const Divider = () => {
  const { dark } = useTheme();
  const t = tokens(dark);
  return <hr style={{ border: "none", borderTop: `1px solid ${t.border}`, margin: "3rem 0" }} />;
};

// ─── Status Dot ───────────────────────────────────────────────────────────────
export const StatusDot = ({ color = "#22c55e", label }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
    <span style={{
      width: 8, height: 8, borderRadius: "50%",
      background: color,
      boxShadow: `0 0 6px ${color}`,
      display: "inline-block",
      animation: "pulse 2s ease infinite",
    }} />
    {label && <span style={{ fontSize: "0.82rem", fontWeight: 600, color }}>{label}</span>}
  </div>
);
