import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahima Kukadiya | AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Mahima Kukadiya — AI Engineer, Machine Learning Researcher, and Full-Stack Developer. Building intelligent systems at the intersection of AI and Software Engineering.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "Portfolio",
    "Deep Learning",
    "NLP",
    "Computer Vision",
  ],
  authors: [{ name: "Mahima Kukadiya" }],
  openGraph: {
    title: "Mahima Kukadiya | AI Engineer",
    description: "Building intelligent systems at the intersection of AI and Software Engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <AuroraBackground />
        <div className="dot-grid" />
        <CursorGlow />
        <Header />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
