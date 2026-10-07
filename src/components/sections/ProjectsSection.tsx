"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink, Star } from "lucide-react";
import { Github } from "../BrandIcons";

const projects = [
  {
    title: "Sentiment Analysis Engine",
    description:
      "A production-grade NLP pipeline using BERT and DistilBERT for real-time sentiment classification on IMDB reviews. Achieved 93% accuracy with optimized inference.",
    tags: ["Python", "PyTorch", "Transformers", "FastAPI"],
    color: "var(--accent-blue)",
    github: "https://github.com/Mahi1206",
    live: "#",
    featured: true,
  },
  {
    title: "AI-Powered Code Review Bot",
    description:
      "GitHub App that automatically reviews pull requests using GPT-4 API, providing intelligent code suggestions, security analysis, and best-practice recommendations.",
    tags: ["TypeScript", "Node.js", "OpenAI API", "GitHub API"],
    color: "var(--accent-purple)",
    github: "https://github.com/Mahi1206",
    live: "#",
    featured: true,
  },
  {
    title: "Real-Time Object Detection",
    description:
      "Computer vision system using YOLOv8 for real-time object detection and tracking. Optimized with TensorRT for edge deployment on NVIDIA Jetson.",
    tags: ["Python", "OpenCV", "YOLOv8", "TensorRT"],
    color: "var(--accent-emerald)",
    github: "https://github.com/Mahi1206",
    featured: false,
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description:
      "Modern e-commerce platform with AI-powered product recommendations, real-time inventory management, and secure payment processing.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    color: "var(--accent-cyan)",
    github: "https://github.com/Mahi1206",
    live: "#",
    featured: false,
  },
  {
    title: "Neural Style Transfer App",
    description:
      "Web application that applies artistic styles to photos using deep convolutional neural networks. Real-time preview with WebGL acceleration.",
    tags: ["TensorFlow.js", "React", "WebGL", "CNN"],
    color: "var(--accent-pink)",
    github: "https://github.com/Mahi1206",
    featured: false,
  },
  {
    title: "Smart Campus IoT Dashboard",
    description:
      "Real-time IoT monitoring dashboard for campus infrastructure. Visualizes sensor data from 50+ endpoints with predictive maintenance alerts.",
    tags: ["React", "D3.js", "MQTT", "InfluxDB"],
    color: "#f59e0b",
    github: "https://github.com/Mahi1206",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <Folder size={14} />
            Featured Work
          </span>
          <h2 className="section-title">
            Things I&apos;ve <span className="gradient-text-full">Built</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
            A selection of projects that showcase my expertise in AI, ML, and full-stack development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={cardVariants}>
              <div
                className="glass-card"
                style={{
                  padding: "1.75rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.borderColor = project.color;
                  card.style.boxShadow = `0 0 25px ${project.color}20`;
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.borderColor = "var(--border-subtle)";
                  card.style.boxShadow = "none";
                }}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.7rem",
                      color: "#f59e0b",
                      background: "rgba(245,158,11,0.1)",
                      border: "1px solid rgba(245,158,11,0.2)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: 6,
                      fontWeight: 600,
                    }}
                  >
                    <Star size={10} fill="#f59e0b" />
                    Featured
                  </div>
                )}

                {/* Accent bar */}
                <div
                  style={{
                    width: 40,
                    height: 3,
                    borderRadius: 2,
                    background: project.color,
                    marginBottom: "1.25rem",
                  }}
                />

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      style={{
                        padding: "0.25rem 0.6rem",
                        borderRadius: 6,
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        background: `${project.color}12`,
                        color: project.color,
                        border: `1px solid ${project.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "1rem" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    <Github size={15} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = project.color)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="divider" style={{ marginTop: "var(--section-padding)" }} />
    </section>
  );
}
