"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#spaces", label: "Spaces" },
  { href: "#amenities", label: "Amenities" },
  { href: "#stories", label: "Stories" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Main navigation"
      >
        <a href="/" className="nav-logo" aria-label="Easy Living PG Home">
          <span>EASY</span> LIVING<span style={{ marginLeft: 6 }}>PG</span>
        </a>

        <ul className="nav-links" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                id={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="nav-cta"
          onClick={(e) => handleNavClick(e, "#contact")}
          id="nav-enquire"
        >
          Enquire
        </a>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          id="nav-hamburger"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              background: "#000",
              zIndex: 99,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "0 24px",
              gap: 0,
            }}
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 + i * 0.07,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "clamp(36px, 10vw, 64px)",
                  color: "#fff",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  padding: "8px 0",
                  display: "block",
                }}
                id={`mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                marginTop: 40,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 13,
                letterSpacing: "0.3em",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              8553738588
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
