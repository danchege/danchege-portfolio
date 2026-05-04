// ============================================================
//  Skills.jsx  —  Skills & technologies page
// ============================================================
import { useTheme, tokens } from "../context/ThemeContext";
import { useInView } from "../hooks/hooks";
import { SKILLS } from "../data/portfolioData";
import { SectionHeader, SkillBar, Tag } from "../components/SharedUI";

import { FaBoltLightning, FaWrench, FaToolbox, FaTags, FaBookOpen, FaMicroscope } from "react-icons/fa6";

const CATEGORY_META = {
  "Frontend":           { icon: FaBoltLightning, color: "#f59e0b" },
  "Backend":            { icon: FaWrench, color: "#10b981" },
  "Tools & Platforms":  { icon: FaToolbox, color: "#8b5cf6" },
};

const Skills = () => {
  const { dark } = useTheme();
  const t = tokens(dark);
  const [ref, inView] = useInView();

  return (
    <div style={{ minHeight: "100vh", background: t.bg, padding: "100px 1.5rem 5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>
        <SectionHeader
          title="My Skills"
          subtitle="Technologies and tools I use to build great products"
        />

        {/* Skill Category Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginBottom: "3rem",
        }}>
          {Object.entries(SKILLS).map(([category, skills], ci) => {
            const meta = CATEGORY_META[category];
            return (
              <div
                key={category}
                style={{
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                  borderRadius: 20,
                  padding: "2rem 2.2rem",
                  boxShadow: t.cardShadow,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.65s ease ${ci * 0.15}s, transform 0.65s ease ${ci * 0.15}s`,
                }}
              >
                {/* Category Header */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  marginBottom: "2rem",
                  paddingBottom: "1.2rem",
                  borderBottom: `1px solid ${t.border}`,
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${meta.color}18`,
                    border: `1px solid ${meta.color}35`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22,
                  }}>
                    {(() => {
                      const Icon = meta.icon;
                      return <Icon />;
                    })()}
                  </div>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800, fontSize: "1.1rem",
                    color: t.text,
                  }}>
                    {category}
                  </h3>
                </div>

                {/* Skill Bars */}
                {skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={si * 90 + ci * 120}
                    inView={inView}
                  />
                ))}
              </div>
            );
          })}
        </div>

        {/* All Tech Badge Cloud */}
        <div style={{
          background: t.bgCard,
          border: `1px solid ${t.border}`,
          borderRadius: 20,
          padding: "2rem 2.5rem",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.8s ease 0.55s",
        }}>
          <h4 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            color: t.text, marginBottom: "1.4rem", fontSize: "1.05rem",
          }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}><FaTags /> Full Tech Stack at a Glance</span>
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
            {Object.values(SKILLS).flat().map((s) => (
              <Tag key={s.name} variant="accent" size="md">{s.name}</Tag>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div style={{
          marginTop: "2rem",
          background: dark
            ? `linear-gradient(135deg, rgba(56,189,248,0.06), ${t.bgCard})`
            : `linear-gradient(135deg, rgba(56,189,248,0.05), #fff)`,
          border: `1px dashed ${t.border}`,
          borderRadius: 16,
          padding: "1.6rem 2rem",
          display: "flex", alignItems: "center", gap: "1.2rem",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.8s ease 0.7s",
        }}>
          <span style={{ fontSize: 32 }}><FaBookOpen /></span>
          <div>
            <h4 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 700,
              color: t.text, marginBottom: "0.4rem",
            }}>
              Currently Exploring
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["Docker", "AWS", "TypeScript", "Next.js", "GraphQL"].map((s) => (
                <Tag key={s} variant="muted" size="sm"><FaMicroscope /> {s}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
