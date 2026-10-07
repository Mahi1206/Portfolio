"use client";

import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Briefcase } from "lucide-react";

const techStack = [
  { name: "Python", color: "#3776AB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "Node.js", color: "#339933" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Git", color: "#F05032" },
  { name: "Linux", color: "#FCC624" },
];

const highlights = [
  { icon: GraduationCap, text: "B.Tech in Computer Engineering", color: "var(--accent-blue)" },
  { icon: MapPin, text: "Gujarat, India", color: "var(--accent-emerald)" },
  { icon: Briefcase, text: "AI/ML & Full-Stack Development", color: "var(--accent-purple)" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section label */}
          <motion.div variants={itemVariants}>
            <span className="section-label">
              <User size={14} />
              About Me
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2 variants={itemVariants} className="section-title">
            Crafting <span className="gradient-text-blue">Intelligent</span> Solutions
          </motion.h2>

          {/* Content grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginTop: "2.5rem" }}>
            {/* Bio */}
            <motion.div variants={itemVariants}>
              <p className="section-subtitle" style={{ maxWidth: "none", marginBottom: "1.5rem" }}>
                I&apos;m Mahima Kukadiya, a passionate AI Engineer and Full-Stack Developer currently pursuing
                my B.Tech in Computer Engineering. I specialize in building end-to-end intelligent systems —
                from training deep learning models to deploying production-grade web applications.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                My work spans across Natural Language Processing, Computer Vision, and Generative AI. I&apos;m
                driven by the vision of making AI accessible, ethical, and impactful. When I&apos;m not coding,
                you&apos;ll find me reading research papers, contributing to open source, or exploring new
                frameworks.
              </p>

              {/* Highlight cards */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {highlights.map(({ icon: Icon, text, color }, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      padding: "0.6rem 1rem",
                      borderRadius: 10,
                      border: "1px solid var(--border-subtle)",
                      background: "rgba(15,15,15,0.4)",
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <Icon size={16} style={{ color }} />
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants}>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "1.25rem",
                  color: "var(--text-primary)",
                }}
              >
                Technologies I Work With
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.08, y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.55rem 1rem",
                      borderRadius: 10,
                      border: "1px solid var(--border-subtle)",
                      background: "rgba(15,15,15,0.5)",
                      cursor: "default",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = tech.color;
                      e.currentTarget.style.boxShadow = `0 0 15px ${tech.color}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: tech.color,
                        flexShrink: 0,
                      }}
                    />
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="divider" style={{ marginTop: "var(--section-padding)" }} />
    </section>
  );
}
