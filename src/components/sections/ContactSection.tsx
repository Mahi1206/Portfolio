"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check, Copy } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const emailAddress = "kukadiyamahimace@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    // Simulate API call for mail submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">
              <Mail size={14} />
              Get in touch
            </span>
            <h2 className="section-title">
              Let&apos;s Build <span className="gradient-text-blue">Something</span> Great
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
              Whether you want to discuss AI research, collaborate on a project, or just say hello,
              my inbox is always open.
            </p>

            {/* Quick Email Copy */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1rem",
                padding: "0.75rem 1.25rem",
                borderRadius: 12,
                border: "1px solid var(--border-subtle)",
                background: "rgba(15,15,15,0.4)",
              }}
            >
              <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                {emailAddress}
              </div>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                style={{
                  background: "none",
                  border: "none",
                  color: copied ? "var(--accent-emerald)" : "var(--text-muted)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.25rem",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (!copied) e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  if (!copied) e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Name Field */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  htmlFor="name"
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: 10,
                    border: "1px solid var(--border-subtle)",
                    background: "rgba(9,9,9,0.5)",
                    color: "var(--text-primary)",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "all 0.2s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent-blue)";
                    e.target.style.boxShadow = "0 0 10px rgba(59,130,246,0.15)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border-subtle)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Email Field */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  htmlFor="email"
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: 10,
                    border: "1px solid var(--border-subtle)",
                    background: "rgba(9,9,9,0.5)",
                    color: "var(--text-primary)",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "all 0.2s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent-blue)";
                    e.target.style.boxShadow = "0 0 10px rgba(59,130,246,0.15)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border-subtle)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Message Field */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  htmlFor="message"
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message details..."
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: 10,
                    border: "1px solid var(--border-subtle)",
                    background: "rgba(9,9,9,0.5)",
                    color: "var(--text-primary)",
                    fontSize: "0.9rem",
                    outline: "none",
                    resize: "none",
                    transition: "all 0.2s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent-blue)";
                    e.target.style.boxShadow = "0 0 10px rgba(59,130,246,0.15)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border-subtle)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status !== "idle"}
                className="btn-primary"
                style={{
                  justifyContent: "center",
                  padding: "0.85rem",
                  fontSize: "0.95rem",
                  width: "100%",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    <>
                      <Check size={18} /> Sent Successfully
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
