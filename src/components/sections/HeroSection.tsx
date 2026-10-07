"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, ExternalLink } from "lucide-react";

const roles = [
  "AI Engineer",
  "ML Researcher",
  "Full-Stack Developer",
  "Deep Learning Engineer",
  "Computer Vision Engineer",
];

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "AI Models" },
  { value: "15+", label: "Technologies" },
  { value: "3+", label: "Certifications" },
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const charIndex = useRef(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex.current < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, charIndex.current + 1));
          charIndex.current += 1;
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (charIndex.current > 0) {
        timeout = setTimeout(() => {
          charIndex.current -= 1;
          setDisplayedText(currentRole.slice(0, charIndex.current));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "6rem",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: "2rem" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: 9999,
              border: "1px solid rgba(16,185,129,0.3)",
              background: "rgba(16,185,129,0.08)",
              fontSize: "0.85rem",
              color: "var(--accent-emerald)",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent-emerald)",
                animation: "pulse-glow 2s infinite",
                boxShadow: "0 0 8px var(--accent-emerald)",
              }}
            />
            Open to Opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text-blue">Mahima</span>
          <br />
          <span style={{ color: "var(--text-secondary)", fontSize: "0.6em", fontWeight: 600 }}>
            I build{" "}
            <span
              style={{
                color: "var(--accent-blue)",
                borderRight: "2px solid var(--accent-blue)",
                paddingRight: 2,
                animation: "pulse-glow 1s infinite",
              }}
            >
              {displayedText}
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontSize: "1.15rem",
            color: "var(--text-secondary)",
            maxWidth: 620,
            margin: "0 auto 2.5rem",
            lineHeight: 1.8,
          }}
        >
          Passionate about creating intelligent systems at the intersection of
          <span style={{ color: "var(--accent-blue)", fontWeight: 500 }}> Artificial Intelligence</span>,
          <span style={{ color: "var(--accent-purple)", fontWeight: 500 }}> Machine Learning</span>, and
          <span style={{ color: "var(--accent-emerald)", fontWeight: 500 }}> Software Engineering</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}
        >
          <a href="#projects" className="btn-primary">
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Sparkles size={16} />
              View My Work
            </span>
          </a>
          <a href="#contact" className="btn-secondary" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <ExternalLink size={16} />
            Get in Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "1.5rem",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "1.25rem 1rem",
                borderRadius: 14,
                border: "1px solid var(--border-subtle)",
                background: "rgba(15,15,15,0.4)",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-blue)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(59,130,246,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="gradient-text-blue" style={{ fontSize: "1.75rem", fontWeight: 800 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--text-muted)",
            fontSize: "0.8rem",
          }}
        >
          <span>Scroll to explore</span>
          <ArrowDown size={16} style={{ animation: "scroll-hint 2s ease infinite" }} />
        </motion.div>
      </div>
    </section>
  );
}
