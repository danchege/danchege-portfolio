// ============================================================
//  Home.jsx  —  Hero / Landing page
// ============================================================
import { useEffect, useState } from "react";
import { useTheme, tokens } from "../context/ThemeContext";
import { useTypewriter } from "../hooks/hooks";
import { PERSONAL, STATS } from "../data/portfolioData";
import { Button, StatusDot, Tag } from "../components/SharedUI";

import { FaUserAstronaut, FaFilePdf } from "react-icons/fa6";
import profileImage from "../images/profile.png";

const Home = ({ setPage }) => {
  const { dark } = useTheme();
  const t = tokens(dark);
  const typedText = useTypewriter(PERSONAL.taglines);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  // ─── Background Grid ─────────────────────────────────────
  const GridBg = () => (
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none",
      backgroundImage: `
        linear-gradient(${t.accent}08 1px, transparent 1px),
        linear-gradient(90deg, ${t.accent}08 1px, transparent 1px)
      `,
      backgroundSize: "52px 52px",
    }} />
  );

  // ─── Ambient orbs ────────────────────────────────────────
  const orbs = [
    { w: 520, h: 520, top: -160, left: -140,  opacity: dark ? 0.07 : 0.05, delay: "0s" },
    { w: 420, h: 420, top: 180,  right: -100, opacity: dark ? 0.06 : 0.04, delay: "2s" },
    { w: 320, h: 320, bottom: -80, left: "35%", opacity: dark ? 0.05 : 0.03, delay: "4s" },
  ];

  const fadeStyle = (delayMs) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.7s ease ${delayMs}ms, transform 0.7s ease ${delayMs}ms`,
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: t.bg,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
      padding: "80px 1.5rem 3rem",
    }}>
      <GridBg />

      {/* Orbs */}
      {orbs.map((o, i) => (
        <div key={i} style={{
          position: "absolute",
          width: o.w, height: o.h,
          top: o.top, left: o.left, right: o.right, bottom: o.bottom,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${t.accent}, transparent 70%)`,
          opacity: o.opacity,
          animation: `float 8s ease-in-out ${o.delay} infinite alternate`,
          pointerEvents: "none",
        }} />
      ))}

      {/* Content */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 1, maxWidth: 800 }}>

        {/* Avatar ring */}
        <div style={{ ...fadeStyle(0), marginBottom: "2rem" }}>
          <div style={{
            width: 260, height: 260, margin: "0 auto",
            borderRadius: "50%",
            padding: 3,
            background: t.gradient,
            boxShadow: `0 0 50px ${t.accentGlow}`,
            position: "relative",
          }}>
            <div style={{
              width: "100%", height: "100%",
              borderRadius: "50%",
              background: t.bgCard,
              overflow: "hidden",
            }}>
              <img 
                src={profileImage} 
                alt="Profile" 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            {/* Spinning arc */}
            <div style={{
              position: "absolute", inset: -5,
              borderRadius: "50%",
              border: `2px dashed ${t.accent}50`,
              animation: "spin 14s linear infinite",
            }} />
          </div>
        </div>

        {/* Status badge */}
        <div style={{ ...fadeStyle(100), marginBottom: "1.5rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            background: `${t.accent}10`,
            border: `1px solid ${t.accent}30`,
            borderRadius: 100, padding: "0.38rem 1.1rem",
          }}>
            <StatusDot color="#22c55e" />
            <span style={{
              color: t.accent, fontSize: "0.8rem",
              fontWeight: 700, letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Available for work
            </span>
          </div>
        </div>

        {/* Heading */}
        <div style={fadeStyle(180)}>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            lineHeight: 1.08,
            color: t.text,
            marginBottom: "0.5rem",
            letterSpacing: "-0.03em",
          }}>
            Hi, I'm{" "}
            <span style={{
              color: t.accent,
              backgroundImage: t.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Daniel Chege
            </span>
          </h1>
        </div>

        {/* Typewriter */}
        <div style={{ ...fadeStyle(260), minHeight: "2.4rem", marginBottom: "1.4rem" }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            color: t.textMuted,
          }}>
            {typedText}
            <span style={{ color: t.accent, animation: "pulse 1s step-end infinite" }}>|</span>
          </span>
        </div>

        {/* Bio */}
        <div style={fadeStyle(320)}>
          <p style={{
            color: t.textMuted,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.05rem", lineHeight: 1.78,
            maxWidth: 580, margin: "0 auto 2.8rem",
          }}>
            Self-driven full-stack developer specializing in MERN applications, with a
            passion for solving real-world problems through clean, efficient code and a
            security-first mindset.
          </p>
        </div>

        {/* CTA buttons */}
        <div style={{
          ...fadeStyle(400),
          display: "flex", gap: "1rem",
          justifyContent: "center", flexWrap: "wrap",
          marginBottom: "4rem",
        }}>
          <Button variant="primary" onClick={() => setPage("Projects")}>
            View Projects →
          </Button>
          <Button variant="outline" onClick={() => setPage("Contact")}>
            Get In Touch
          </Button>
          <Button variant="ghost" href={PERSONAL.cvUrl} target="_blank">
            <FaFilePdf /> View CV
          </Button>
        </div>

        {/* Stats row */}
        <div style={{
          ...fadeStyle(500),
          display: "flex", justifyContent: "center",
          gap: "clamp(1.5rem, 5vw, 4rem)",
          flexWrap: "wrap",
          paddingTop: "2rem",
          borderTop: `1px solid ${t.border}`,
        }}>
          {STATS.map(({ number, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                color: t.accent,
                backgroundImage: t.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                {number}
              </div>
              <div style={{
                color: t.textMuted,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8rem", fontWeight: 500,
                marginTop: "0.2rem",
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
