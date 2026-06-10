"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const letterVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: 0.5 + i * 0.06,
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const words = ["EASY", "LIVING", "PG"];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.27]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const labelOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="hero"
      id="hero"
      aria-label="Hero - Easy Living PG Accommodation"
    >
      {/* Parallax image */}
      <motion.div className="hero-image-wrap" style={{ scale }}>
        <Image
          src="/hero.png"
          alt="Easy Living PG Accommodation building exterior"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Floating side label */}
      <motion.div
        className="hero-label"
        style={{ opacity: labelOpacity }}
        aria-hidden="true"
      >
        Accommodation Near Reva University
      </motion.div>

      {/* Content */}
      <motion.div className="hero-content" style={{ opacity }}>
        {/* Massive heading */}
        <h1 className="hero-heading" aria-label="Easy Living PG">
          {words.map((word, wi) => (
            <span
              key={word}
              className="overflow-hidden"
              style={{ display: "block" }}
            >
              <motion.span
                custom={wi}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                style={{ display: "block" }}
              >
                {wi === 1 ? <em>{word}</em> : word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Bottom row */}
        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="hero-description">
            Comfortable, secure and fully furnished accommodation for students
            and professionals in Yelahanka, Bengaluru.
          </p>

          <div className="hero-actions">
            <span className="hero-phone">+91 85537 38588</span>
            <div className="hero-buttons">
              <a
                href="#contact"
                className="btn-primary"
                id="hero-book-visit"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book a Visit
              </a>
              <a
                href="#spaces"
                className="btn-outline"
                id="hero-view-rooms"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("spaces")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Rooms
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
