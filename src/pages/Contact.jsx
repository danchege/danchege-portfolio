// ============================================================
//  Contact.jsx  —  Contact form + social links page
// ============================================================
import { useState } from "react";
import { useTheme, tokens } from "../context/ThemeContext";
import { useInView } from "../hooks/hooks";
import { PERSONAL } from "../data/portfolioData";
import { SectionHeader, Card, Button } from "../components/SharedUI";

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

const SOCIAL_LINKS = [
  { icon: FaGithub, label: "GitHub",   url: PERSONAL.github,   color: "#333" },
  { icon: FaLinkedinIn, label: "LinkedIn", url: PERSONAL.linkedin, color: "#0077b5" },
  { icon: FaXTwitter, label: "Twitter",  url: PERSONAL.twitter,  color: "#1da1f2" },
  { icon: FaFacebookF, label: "Facebook", url: PERSONAL.facebook, color: "#1877f2" },
  { icon: FaWhatsapp, label: "WhatsApp", url: PERSONAL.whatsapp, color: "#25d366" },
];

const CONTACT_INFO = [
  { icon: FaEnvelope, label: "Email",    value: PERSONAL.email,  href: `mailto:${PERSONAL.email}` },
  { icon: FaPhone, label: "Phone",    value: PERSONAL.phone,  href: `tel:${PERSONAL.phone.replace(/\s/g,"")}` },
  { icon: FaWhatsapp, label: "WhatsApp", value: "Chat on WhatsApp", href: PERSONAL.whatsapp },
  { icon: FaLocationDot, label: "Location", value: PERSONAL.location, href: null },
];

// ─── Form Field ─────────────────────────────────────────────
const Field = ({ label, id, type = "text", multiline, value, onChange, t }) => (
  <div style={{ marginBottom: "1.3rem" }}>
    <label htmlFor={id} style={{
      display: "block", color: t.textMuted,
      fontSize: "0.84rem", fontWeight: 600,
      marginBottom: "0.45rem",
      fontFamily: "'DM Sans', sans-serif",
      textTransform: "uppercase", letterSpacing: "0.05em",
    }}>
      {label}
    </label>
    {multiline ? (
      <textarea
        id={id} rows={5} value={value} onChange={onChange}
        style={{
          width: "100%", padding: "0.9rem 1.1rem",
          background: t.bgAlt,
          border: `1px solid ${t.border}`,
          borderRadius: 12, color: t.text,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.95rem", resize: "vertical",
          outline: "none", boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.target.style.borderColor = t.accent)}
        onBlur={(e)  => (e.target.style.borderColor = t.border)}
      />
    ) : (
      <input
        id={id} type={type} value={value} onChange={onChange}
        style={{
          width: "100%", padding: "0.9rem 1.1rem",
          background: t.bgAlt,
          border: `1px solid ${t.border}`,
          borderRadius: 12, color: t.text,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.95rem", outline: "none",
          boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.target.style.borderColor = t.accent)}
        onBlur={(e)  => (e.target.style.borderColor = t.border)}
      />
    )}
  </div>
);

// ─── Main Component ─────────────────────────────────────────
const Contact = () => {
  const { dark } = useTheme();
  const t = tokens(dark);
  const [ref, inView] = useInView();

  const [form, setForm]       = useState({ name: "", email: "", subject: "", message: "" });



  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div style={{ minHeight: "100vh", background: t.bg, padding: "100px 1.5rem 5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
          alignItems: "start",
        }}>
          {/* ─── Contact Form ──────────────────────────── */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.7s ease",
          }}>
            <Card style={{ padding: "2.5rem" }}>
              <h3 style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: "1.25rem", color: t.text, marginBottom: "1.8rem",
              }}>
                Send a Message ✉️
              </h3>

              <Field label="Full Name *"    id="name"    value={form.name}    onChange={update("name")}    t={t} />
              <Field label="Email Address *" id="email"  type="email" value={form.email}   onChange={update("email")}   t={t} />
              <Field label="Subject"        id="subject" value={form.subject} onChange={update("subject")} t={t} />
              <Field label="Message *"      id="message" multiline value={form.message} onChange={update("message")} t={t} />

              <a
                href={`mailto:${PERSONAL.email}?subject=${encodeURIComponent(form.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  variant="primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Send Message →
                </Button>
              </a>
            </Card>
          </div>

          {/* ─── Contact Info + Socials ────────────────── */}
          <div style={{
            display: "flex", flexDirection: "column", gap: "1.8rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.7s ease 0.15s",
          }}>
            {/* Info Card */}
            <Card style={{ padding: "2rem" }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700,
                fontSize: "1rem", color: t.accent,
                textTransform: "uppercase", letterSpacing: "0.06em",
                marginBottom: "1.4rem",
              }}>
                Contact Details
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {CONTACT_INFO.map(({ icon, label, value, href }) => (
                  <div key={label} style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    padding: "0.85rem 1rem",
                    background: t.bgAlt,
                    borderRadius: 12, border: `1px solid ${t.border}`,
                  }}>
                    <span style={{ fontSize: 20, minWidth: 26 }}>
                      {(() => {
                        const Icon = icon;
                        return <Icon />;
                      })()}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        color: t.textMuted, fontSize: "0.72rem",
                        fontFamily: "'DM Sans', sans-serif",
                        textTransform: "uppercase", letterSpacing: "0.04em", fontWeight: 600,
                      }}>{label}</div>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} style={{
                          color: t.accent, fontWeight: 600,
                          fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem",
                          textDecoration: "none",
                        }}>{value}</a>
                      ) : (
                        <span style={{ color: t.text, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem" }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Socials Card */}
            <Card style={{ padding: "2rem" }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700,
                fontSize: "1rem", color: t.accent,
                textTransform: "uppercase", letterSpacing: "0.06em",
                marginBottom: "1.4rem",
              }}>
                Find Me Online
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {SOCIAL_LINKS.map(({ icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "0.9rem",
                      padding: "0.75rem 1rem",
                      background: t.bgAlt,
                      border: `1px solid ${t.border}`,
                      borderRadius: 12, textDecoration: "none",
                      color: t.text, transition: "all 0.2s",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600, fontSize: "0.92rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = t.accent;
                      e.currentTarget.style.transform = "translateX(4px)";
                      e.currentTarget.style.color = t.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = t.border;
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.color = t.text;
                    }}
                  >
                    <span style={{ fontSize: 20 }}>
                      {(() => {
                        const Icon = icon;
                        return <Icon />;
                      })()}
                    </span>
                    {label}
                    <span style={{ marginLeft: "auto", opacity: 0.4, fontSize: "0.8rem" }}>↗</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability note */}
            <div style={{
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.25)",
              borderRadius: 14, padding: "1.2rem 1.5rem",
              display: "flex", alignItems: "center", gap: "0.9rem",
            }}>
              <span style={{
                width: 10, height: 10, borderRadius: "50%",
                background: "#22c55e", boxShadow: "0 0 8px #22c55e",
                display: "inline-block", flexShrink: 0,
                animation: "pulse 2s ease infinite",
              }} />
              <p style={{
                color: "#22c55e", fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem", fontWeight: 600,
              }}>
                Currently available for freelance and full-time opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
