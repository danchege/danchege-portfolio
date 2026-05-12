// ============================================================
//  About.jsx  —  About me page
// ============================================================
import { useTheme, tokens } from "../context/ThemeContext";
import { useInView } from "../hooks/hooks";
import { PERSONAL, TRAITS } from "../data/portfolioData";
import { SectionHeader, Card, Tag, Button } from "../components/SharedUI";

import {
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedinIn,
  FaUserAstronaut,
  FaFilePdf,
} from "react-icons/fa6";

const About = ({ setPage }) => {
  const { dark } = useTheme();
  const t = tokens(dark);
  const [ref, inView] = useInView();

  const infoRows = [
    { icon: FaLocationDot, label: "Location",    value: PERSONAL.location },
    { icon: FaEnvelope, label: "Email",       value: PERSONAL.email },
    { icon: FaPhone, label: "Phone",       value: PERSONAL.phone },
    { icon: FaGithub, label: "GitHub",      value: "github.com/danchege" },
    { icon: FaLinkedinIn, label: "LinkedIn",    value: "linkedin.com/in/dan-chege…" },
  ];

  const fadeIn = (i) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
  });

  return (
    <div style={{ minHeight: "100vh", background: t.bg, padding: "100px 1.5rem 5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>
        <SectionHeader
          title="About Me"
          subtitle="A little about who I am and what drives me"
        />

        {/* ─── Top Grid: Bio + Info Card ─────────────────── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
          marginBottom: "4rem",
        }}>
          {/* Bio */}
          <div style={fadeIn(0)}>
            <Card style={{ padding: "2.5rem", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.8rem" }}>
                <div style={{
                  width: 60, height: 60, borderRadius: "50%",
                  background: t.gradient,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 28,
                }}>
                  <FaUserAstronaut />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800, fontSize: "1.3rem",
                    color: t.text,
                  }}>
                    Daniel <span style={{ color: t.accent }}>Chege</span>
                  </h3>
                  <p style={{ color: t.textMuted, fontSize: "0.88rem", fontFamily: "'DM Sans', sans-serif" }}>
                    Full-Stack Developer · Nairobi, Kenya
                  </p>
                </div>
              </div>

              <p style={{
                color: t.textMuted, lineHeight: 1.88,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.97rem", marginBottom: "1.4rem",
              }}>
                {PERSONAL.bio}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["MERN Stack", "Nairobi, Kenya", "Cyber Security", "Open Source"].map((tag) => (
                  <Tag key={tag} variant="accent">{tag}</Tag>
                ))}
              </div>

              <div style={{ marginTop: "2rem", display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                <Button variant="primary" onClick={() => setPage("Projects")} style={{ fontSize: "0.88rem", padding: "0.65rem 1.4rem" }}>
                  See My Work
                </Button>
                <Button variant="ghost" href={PERSONAL.cvUrl} target="_blank" style={{ fontSize: "0.88rem", padding: "0.65rem 1.4rem" }}>
                  <FaFilePdf /> Download CV
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Info Card */}
          <div style={fadeIn(1)}>
            <Card style={{ padding: "2rem", height: "100%" }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700,
                fontSize: "1rem", color: t.accent,
                letterSpacing: "0.06em", textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}>
                Quick Info
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {infoRows.map(({ icon, label, value }) => {
                  const isClickable = label === "GitHub" || label === "LinkedIn";
                  const href = label === "GitHub" ? PERSONAL.github : PERSONAL.linkedin;
                  
                  return (
                    <div key={label} style={{
                      display: "flex", alignItems: "center", gap: "1rem",
                      padding: "0.85rem 1rem",
                      background: t.bgAlt,
                      borderRadius: 12, border: `1px solid ${t.border}`,
                      ...(isClickable && { cursor: "pointer", transition: "all 0.2s ease" }),
                    }}
                    onClick={isClickable ? () => window.open(href, "_blank") : undefined}
                    onMouseEnter={isClickable ? (e) => {
                      e.currentTarget.style.background = t.accent + "15";
                      e.currentTarget.style.borderColor = t.accent;
                    } : undefined}
                    onMouseLeave={isClickable ? (e) => {
                      e.currentTarget.style.background = t.bgAlt;
                      e.currentTarget.style.borderColor = t.border;
                    } : undefined}
                    >
                      <span style={{ fontSize: 20, minWidth: 26 }}>
                        {(() => {
                          const Icon = icon;
                          return <Icon />;
                        })()}
                      </span>
                      <div>
                        <div style={{ color: t.textMuted, fontSize: "0.72rem", fontWeight: 600, fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                          {label}
                        </div>
                        {!isClickable && (
                          <div style={{ 
                            color: t.text, 
                            fontWeight: 600, 
                            fontFamily: "'DM Sans', sans-serif", 
                            fontSize: "0.9rem", 
                            marginTop: "0.1rem"
                          }}>
                            {value}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>

        {/* ─── Traits Grid ───────────────────────────────── */}
        <div style={{ marginBottom: "1rem" }}>
          <h3 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "1.4rem", color: t.text,
            marginBottom: "2rem", textAlign: "center",
          }}>
            What defines my{" "}
            <span style={{ color: t.accent }}>approach</span>
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}>
            {TRAITS.map((item, i) => (
              <div key={i} style={fadeIn(i + 2)}>
                <Card style={{ padding: "2rem", textAlign: "center" }}>
                  <div style={{
                    width: 64, height: 64,
                    borderRadius: "50%",
                    background: t.gradientSoft,
                    border: `1px solid ${t.border}`,
                    margin: "0 auto 1.2rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 28,
                  }}>
                    <item.icon />
                  </div>
                  <h4 style={{
                    fontFamily: "'Syne', sans-serif", fontWeight: 700,
                    color: t.text, marginBottom: "0.6rem", fontSize: "1.05rem",
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    color: t.textMuted, fontSize: "0.88rem",
                    lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {item.desc}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
