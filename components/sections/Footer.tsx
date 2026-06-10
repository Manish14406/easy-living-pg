"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const quickLinks = [
  { href: "#spaces", label: "Living Spaces" },
  { href: "#amenities", label: "Amenities" },
  { href: "#stories", label: "Resident Stories" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact Us" },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <footer ref={ref} className="footer" id="footer" aria-label="Footer">
      <div className="footer-top">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="footer-brand-name">Easy Living PG</div>
          <p className="footer-brand-tagline">
            Premium paying guest accommodation near Reva University,
            Yelahanka, Bengaluru. Designed for students and professionals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className="footer-col-title">Quick Links</div>
          <ul className="footer-links" role="list">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links" role="list">
            <li>
              <a href="tel:8553738588">8553738588</a>
            </li>
            <li>
              <a href="tel:9738224702">9738224702</a>
            </li>
            <li style={{ marginTop: 16 }}>
              <div className="footer-address">
                No.10 Kattigenahalli Main Road,
                <br />
                Bagalur Main Rd,
                <br />
                Opp. Reva University,
                <br />
                Yelahanka, Bengaluru 560064
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Easy Living PG Accommodation. All rights reserved.
        </p>
        <p className="footer-copy">
          Yelahanka · Bengaluru · Karnataka
        </p>
      </div>
    </footer>
  );
}
