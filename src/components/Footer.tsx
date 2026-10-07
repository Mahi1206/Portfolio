"use client";

import { Mail, Heart } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

const socials = [
  { icon: Github, href: "https://github.com/Mahi1206", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mahima-kukadiya-b4a804374/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:kukadiyamahimace@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--border-subtle)",
        padding: "3rem 0 2rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          {/* Gradient line */}
          <div
            style={{
              width: 80,
              height: 3,
              borderRadius: 2,
              background: "linear-gradient(90deg, var(--accent-blue), var(--accent-purple), var(--accent-emerald))",
              marginBottom: "0.5rem",
            }}
          />

          {/* Socials */}
          <div style={{ display: "flex", gap: "1rem" }}>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-blue)";
                  e.currentTarget.style.color = "var(--accent-blue)";
                  e.currentTarget.style.background = "rgba(59,130,246,0.08)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            Designed & Built with{" "}
            <Heart size={14} style={{ color: "var(--accent-pink)" }} fill="var(--accent-pink)" /> by
            Mahima Kukadiya © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
