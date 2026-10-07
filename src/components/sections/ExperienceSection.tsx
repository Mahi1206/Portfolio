"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    role: "AI Developer Intern",
    company: "Research Lab / Startup",
    duration: "2025 - Present",
    location: "Remote / Hybrid",
    description:
      "Developing conversational AI agents and tuning open-source LLMs (Llama-3, Mistral) for domain-specific automation. Building ML pipelines to preprocess multimodal datasets.",
    color: "var(--accent-blue)",
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Software Solutions",
    duration: "2024 - 2025",
    location: "Gujarat, India",
    description:
      "Engineered responsive web applications using React, Next.js, and Node.js. Integrated relational databases, optimized API latency by 30%, and designed clean, glassmorphic UI systems.",
    color: "var(--accent-purple)",
  },
  {
    role: "Computer Engineering Student",
    company: "University B.Tech Programme",
    duration: "2022 - 2026",
    location: "Gujarat, India",
    description:
      "Specializing in Computer Engineering with deep coursework in AI, Machine Learning, Data Structures, Algorithms, and Cloud Systems. Leading development in university hackathons.",
    color: "var(--accent-emerald)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <Briefcase size={14} />
            My Journey
          </span>
          <h2 className="section-title">
            Experience & <span className="gradient-text-blue">Education</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "4rem" }}>
            A timeline of my professional experience, education, and technical growth.
          </p>
        </motion.div>

        {/* Timeline wrapper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            position: "relative",
            maxWidth: "800px",
            margin: "0 auto",
            paddingLeft: "2rem",
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "4px",
              top: "8px",
              bottom: "8px",
              width: "2px",
              background: "linear-gradient(180deg, var(--accent-blue), var(--accent-purple), var(--accent-emerald))",
              opacity: 0.3,
            }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              style={{
                position: "relative",
                marginBottom: "3rem",
              }}
            >
              {/* Timeline circle indicator */}
              <div
                style={{
                  position: "absolute",
                  left: "-2.3rem",
                  top: "6px",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "var(--bg-primary)",
                  border: `3px solid ${exp.color}`,
                  boxShadow: `0 0 10px ${exp.color}`,
                  zIndex: 2,
                }}
              />

              <div
                className="glass-card"
                style={{
                  padding: "1.75rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = exp.color;
                  e.currentTarget.style.boxShadow = `0 0 25px ${exp.color}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Meta details */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      color: exp.color,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {exp.duration}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <MapPin size={12} />
                    {exp.location}
                  </div>
                </div>

                {/* Role Title */}
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.25rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {exp.role}
                </h3>

                {/* Company Name */}
                <h4
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    marginBottom: "1rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  {exp.company}
                </h4>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="divider" style={{ marginTop: "var(--section-padding)" }} />
    </section>
  );
}
