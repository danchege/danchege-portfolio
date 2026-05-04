// ============================================================
//  Footer.jsx  —  Site footer with social links
// ============================================================
import { useTheme, tokens } from "../context/ThemeContext";
import { PERSONAL } from "../data/portfolioData";

import { FaGithub, FaLinkedinIn, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const socials = [
  { label: "GitHub",    icon: FaGithub, url: PERSONAL.github },
  { label: "LinkedIn",  icon: FaLinkedinIn, url: PERSONAL.linkedin },
  { label: "Twitter",   icon: FaXTwitter, url: PERSONAL.twitter },
  { label: "WhatsApp",  icon: FaWhatsapp, url: PERSONAL.whatsapp },
];

const Footer = ({ setPage }) => {
  const { dark } = useTheme();
  const t = tokens(dark);

  return (
    <footer style={{
      background: t.bgAlt,
      borderTop: `1px solid ${t.border}`,
      padding: "2.5rem 2rem",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", flexWrap: "wrap",
        alignItems: "center", justifyContent: "space-between",
        gap: "1.2rem",
      }}>
        {/* Brand */}
        <div
          onClick={() => setPage("Home")}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "0.6rem" }}
        >
          <div style={{
            width: 34, height: 34, borderRadius: "50%",
            background: t.gradient,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Syne', sans-serif", fontWeight: 900,
            fontSize: "0.85rem", color: "#fff",
          }}>
            DC
          </div>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700, color: t.textMuted, fontSize: "0.95rem",
          }}>
            {PERSONAL.name}
          </span>
        </div>

        {/* Copyright */}
        <p style={{
          color: t.textMuted,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.85rem",
        }}>
          © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
        </p>

        {/* Socials */}
        <div style={{ display: "flex", gap: "0.7rem" }}>
          {socials.map(({ label, icon, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              style={{
                width: 38, height: 38, borderRadius: "50%",
                background: t.bgCard,
                border: `1px solid ${t.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, textDecoration: "none",
                transition: "all 0.25s ease",
                color: t.textMuted,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = t.accent;
                e.currentTarget.style.boxShadow = `0 0 14px ${t.accentGlow}`;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = t.border;
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {(() => {
                const Icon = icon;
                return <Icon />;
              })()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
