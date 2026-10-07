"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Globe, Wrench, Zap } from "lucide-react";

const categories = [
  {
    id: "ai",
    label: "AI / ML",
    icon: Cpu,
    skills: [
      { name: "TensorFlow / Keras", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 92 },
      { name: "NLP / Transformers", level: 88 },
      { name: "Computer Vision", level: 82 },
      { name: "OpenCV", level: 80 },
      { name: "Pandas / NumPy", level: 95 },
      { name: "Generative AI / LLMs", level: 78 },
    ],
  },
  {
    id: "web",
    label: "Web Dev",
    icon: Globe,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Node.js / Express", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "PostgreSQL / MongoDB", level: 85 },
      { name: "HTML / CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 78 },
      { name: "Linux / Bash", level: 85 },
      { name: "AWS / Cloud", level: 72 },
      { name: "CI/CD Pipelines", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "Postman", level: 88 },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const barVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("ai");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <Zap size={14} />
            Skills & Expertise
          </span>
          <h2 className="section-title">
            My <span className="gradient-text-emerald">Technical</span> Arsenal
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
            A comprehensive toolkit for building end-to-end AI-powered applications.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1.25rem",
                borderRadius: 10,
                border: `1px solid ${activeTab === id ? "var(--accent-blue)" : "var(--border-subtle)"}`,
                background: activeTab === id ? "rgba(59,130,246,0.1)" : "transparent",
                color: activeTab === id ? "var(--accent-blue)" : "var(--text-secondary)",
                fontSize: "0.9rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Skill bars */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1rem",
            }}
          >
            {activeCategory.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: i * 0.06 } } }}
                style={{
                  padding: "1rem 1.25rem",
                  borderRadius: 12,
                  border: "1px solid var(--border-subtle)",
                  background: "rgba(15,15,15,0.4)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  <span style={{ fontWeight: 500 }}>{skill.name}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      color: "var(--accent-blue)",
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  style={{
                    height: 4,
                    borderRadius: 2,
                    background: "var(--border-subtle)",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    custom={skill.level}
                    variants={barVariants}
                    style={{
                      height: "100%",
                      borderRadius: 2,
                      background: `linear-gradient(90deg, var(--accent-blue), var(--accent-purple))`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="divider" style={{ marginTop: "var(--section-padding)" }} />
    </section>
  );
}
