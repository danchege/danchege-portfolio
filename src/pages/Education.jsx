// ============================================================
//  Education.jsx  —  Education timeline page
// ============================================================
import { useTheme, tokens } from "../context/ThemeContext";
import { useInView } from "../hooks/hooks";
import { EDUCATION } from "../data/portfolioData";
import { SectionHeader, Card, Tag } from "../components/SharedUI";

import { FaRocket, FaBuildingColumns } from "react-icons/fa6";

const Education = () => {
  const { dark } = useTheme();
  const t = tokens(dark);
  const [ref, inView] = useInView();

  return (
    <div style={{ minHeight: "100vh", background: t.bg, padding: "100px 1.5rem 5rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }} ref={ref}>
        <SectionHeader
          title="My Education"
          subtitle="The academic and professional foundations that shaped my skills"
        />

        {/* Timeline */}
        <div style={{ position: "relative" }}>

          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: 28, top: 12, bottom: 0,
            width: 2,
            background: `linear-gradient(to bottom, ${t.accent}80, ${t.accent}00)`,
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.8rem", paddingLeft: "76px" }}>
            {EDUCATION.map((edu, i) => {
              const visible = inView;
              return (
                <div key={i} style={{
                  position: "relative",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-32px)",
                  transition: `opacity 0.65s ease ${i * 0.18}s, transform 0.65s ease ${i * 0.18}s`,
                }}>

                  {/* Timeline node */}
                  <div style={{
                    position: "absolute",
                    left: -62, top: 22,
                    width: 52, height: 52,
                    borderRadius: "50%",
                    background: dark
                      ? `radial-gradient(circle at center, ${t.accent}30, ${t.bgCard})`
                      : `radial-gradient(circle at center, ${t.accent}20, #fff)`,
                    border: `2px solid ${t.accent}60`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22,
                    boxShadow: `0 0 20px ${t.accentGlow}`,
                    zIndex: 1,
                  }}>
                    {(() => {
                      const Icon = edu.icon;
                      return <Icon />;
                    })()}
                  </div>

                  {/* Card */}
                  <div style={{
                    background: t.bgCard,
                    border: `1px solid ${t.border}`,
                    borderRadius: 18,
                    padding: "2rem 2.2rem",
                    boxShadow: t.cardShadow,
                    transition: "all 0.3s ease",
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = t.borderHover;
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = `0 16px 50px ${t.accentGlow}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = t.border;
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = t.cardShadow;
                    }}
                  >
                    {/* Header row */}
                    <div style={{
                      display: "flex", alignItems: "flex-start",
                      justifyContent: "space-between",
                      flexWrap: "wrap", gap: "0.6rem",
                      marginBottom: "0.7rem",
                    }}>
                      <h3 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 800, fontSize: "1.18rem",
                        color: t.text,
                        flex: 1,
                      }}>
                        {edu.degree}
                      </h3>
                      <Tag variant="accent" size="md">{edu.period}</Tag>
                    </div>

                    {/* Institution */}
                    <p style={{
                      color: t.textMuted,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.95rem", marginBottom: "1rem",
                    }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}><FaBuildingColumns /> {edu.institution}</span>
                    </p>

                    {/* Divider */}
                    <div style={{
                      height: 1, background: t.border,
                      marginBottom: "1rem",
                    }} />

                    {/* Description */}
                    <p style={{
                      color: t.textMuted, lineHeight: 1.75,
                      fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem",
                    }}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Continuing learning note */}
        <div style={{
          marginTop: "3.5rem",
          background: dark
            ? `linear-gradient(135deg, ${t.accent}10, ${t.bgCard})`
            : `linear-gradient(135deg, ${t.accent}08, #fff)`,
          border: `1px dashed ${t.border}`,
          borderRadius: 16,
          padding: "1.8rem 2rem",
          display: "flex", alignItems: "center", gap: "1.2rem",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.8s ease 0.6s",
        }}>
          <span style={{ fontSize: 36 }}><FaRocket /></span>
          <div>
            <h4 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 700,
              color: t.text, marginBottom: "0.3rem",
            }}>
              Always Learning
            </h4>
            <p style={{
              color: t.textMuted, fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.92rem", lineHeight: 1.6,
            }}>
              Currently deepening expertise in cloud architecture, advanced React patterns,
              and expanding knowledge in DevOps and containerization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
