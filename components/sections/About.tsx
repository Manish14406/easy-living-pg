"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: "300+", label: "Residents" },
  { number: "5★", label: "Google Rating" },
  { number: "24/7", label: "Security" },
  { number: "300m", label: "From Reva" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="about"
      id="about"
      aria-label="About Easy Living PG"
    >
      <div className="about-inner">
        <motion.span
          className="about-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Est. Yelahanka — Bengaluru
        </motion.span>

        <div className="overflow-hidden">
          <motion.h2
            className="about-heading"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            A Place That Feels
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>
              Like Home.
            </em>
          </motion.h2>
        </div>

        <motion.p
          className="about-body"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          Easy Living PG Accommodation provides a safe, comfortable and
          affordable living experience near Reva University. Designed for
          students and professionals, every space is created to offer
          convenience, security and peace of mind.
        </motion.p>

        {/* Animated line */}
        <div ref={lineRef}>
          <motion.div
            className="about-line"
            initial={{ scaleY: 0, originY: "top" }}
            animate={lineInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          />
        </div>

        {/* Stats */}
        <div className="about-stats">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5 + i * 0.1,
              }}
            >
              <div className="about-stat-number">{stat.number}</div>
              <div className="about-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
