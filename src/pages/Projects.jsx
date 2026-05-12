// ============================================================
//  Projects.jsx  —  Projects showcase page
// ============================================================
import { useState } from "react";
import { useTheme, tokens } from "../context/ThemeContext";
import { useInView } from "../hooks/hooks";
import { PROJECTS } from "../data/portfolioData";
import { SectionHeader, Tag } from "../components/SharedUI";

import { FaArrowUpRightFromSquare, FaGithub, FaPersonDigging } from "react-icons/fa6";

// Unique filter tags
const ALL_FILTERS = ["All", ...new Set(PROJECTS.map((p) => p.tag))];

const ProjectCard = ({ project, index, inView }) => {
  const { dark } = useTheme();
  const t = tokens(dark);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: t.bgCard,
        border: `1px solid ${hovered ? t.borderHover : t.border}`,
        borderRadius: 20,
        padding: "2rem",
        display: "flex", flexDirection: "column",
        position: "relative", overflow: "hidden",
        boxShadow: hovered ? `0 20px 60px ${t.accentGlow}` : t.cardShadow,
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.3s ease",
        opacity: inView ? 1 : 0,
        // stagger each card
        animation: inView ? `fadeUp 0.5s ease ${index * 0.07}s both` : "none",
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: t.gradient,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s",
      }} />

      {/* Featured badge */}
      {project.featured && (
        <div style={{
          position: "absolute", top: 16, right: 16,
          background: `${t.accent}20`,
          border: `1px solid ${t.accent}40`,
          borderRadius: 100, padding: "0.2rem 0.7rem",
          fontSize: "0.72rem", fontWeight: 700,
          color: t.accent, fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.04em",
        }}>
          ★ Featured
        </div>
      )}

      {/* Icon + Category */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.3rem" }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: t.gradientSoft,
          border: `1px solid ${t.border}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26,
          transition: "transform 0.3s",
          transform: hovered ? "scale(1.1) rotate(-4deg)" : "scale(1)",
        }}>
          {(() => {
            const Icon = project.icon;
            return <Icon />;
          })()}
        </div>
        <Tag variant="muted" size="sm">{project.category}</Tag>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800, fontSize: "1.22rem",
        color: t.text, marginBottom: "0.7rem",
      }}>
        {project.name}
      </h3>

      {/* Description */}
      <p style={{
        color: t.textMuted, lineHeight: 1.7,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.92rem", flexGrow: 1,
        marginBottom: "1.5rem",
      }}>
        {project.description}
      </p>

      {/* Tech stack pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.6rem" }}>
        {project.stack.map((s) => (
          <Tag key={s} variant="muted" size="sm">{s}</Tag>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "0.75rem" }}>
        {project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1, textAlign: "center",
              padding: "0.65rem 0",
              background: t.gradient,
              color: "#fff",
              borderRadius: 10, textDecoration: "none",
              fontWeight: 700, fontSize: "0.88rem",
              fontFamily: "'DM Sans', sans-serif",
              transition: "opacity 0.2s",
              boxShadow: `0 4px 18px ${t.accentGlow}`,
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
          >
            <FaArrowUpRightFromSquare /> Live Demo
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: project.demo === "#" ? 1 : 1, textAlign: "center",
            padding: "0.65rem 0",
            background: "transparent",
            color: t.accent,
            border: `1.5px solid ${t.accent}50`,
            borderRadius: 10, textDecoration: "none",
            fontWeight: 600, fontSize: "0.88rem",
            fontFamily: "'DM Sans', sans-serif",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = t.gradient;
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderColor = "transparent";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = t.accent;
            e.currentTarget.style.borderColor = `${t.accent}50`;
          }}
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const { dark } = useTheme();
  const t = tokens(dark);
  const [ref, inView] = useInView();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.tag === activeFilter);

  return (
    <div style={{ minHeight: "100vh", background: t.bg, padding: "100px 1.5rem 5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        <SectionHeader
          title="My Projects"
          subtitle="Things I've built — from real-world tools to community platforms"
        />

        {/* Filter Tabs */}
        <div style={{
          display: "flex", justifyContent: "center",
          flexWrap: "wrap", gap: "0.6rem",
          marginBottom: "3rem",
        }}>
          {ALL_FILTERS.map((filter) => {
            const active = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  background: active
                    ? t.gradient
                    : t.bgCard,
                  color: active ? "#fff" : t.textMuted,
                  border: `1px solid ${active ? "transparent" : t.border}`,
                  borderRadius: 100,
                  padding: "0.42rem 1.2rem",
                  cursor: "pointer",
                  fontWeight: 600, fontSize: "0.88rem",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "all 0.2s ease",
                  boxShadow: active ? `0 4px 18px ${t.accentGlow}` : "none",
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.8rem",
        }}>
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* More projects banner */}
        <div style={{
          marginTop: "3.5rem",
          background: t.bgCard,
          border: `1px dashed ${t.border}`,
          borderRadius: 16,
          padding: "2rem 2.5rem",
          textAlign: "center",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.8s ease 0.5s",
        }}>
          <span style={{ fontSize: 34, display: "block", marginBottom: "0.6rem" }}><FaPersonDigging /></span>
          <h4 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            color: t.text, marginBottom: "0.4rem",
          }}>
            More projects coming soon!
          </h4>
          <p style={{
            color: t.textMuted, fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.92rem",
          }}>
            This portfolio is actively updated. Star the GitHub profile to stay notified.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
