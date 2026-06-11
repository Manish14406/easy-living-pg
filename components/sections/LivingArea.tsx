"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function LivingArea() {
  const headRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section
      className="spaces"
      id="living-area"
      aria-label="Common Living Area"
    >
      <div className="spaces-header" ref={headRef}>
        <div className="spaces-heading">
          <motion.span
            className="spaces-heading-black"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Living
          </motion.span>
          <motion.span
            className="spaces-heading-thin"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Area
          </motion.span>
        </div>
        <motion.p
          className="spaces-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          A vibrant
          <br />
          community
          <br />
          lounge
        </motion.p>
      </div>

      <motion.div
        className="living-area-image-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
          minHeight: "400px",
          borderRadius: "16px",
          overflow: "hidden",
          marginTop: "40px"
        }}
      >
        <Image
          src="/living_area.png"
          alt="Common Living Area at Easy Living PG"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)",
          display: "flex",
          alignItems: "flex-end",
          padding: "clamp(20px, 5vw, 40px)"
        }}>
          <h3 style={{
            color: "white",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontFamily: "var(--font-playfair)",
            fontWeight: 400,
            letterSpacing: "0.02em",
            margin: 0
          }}>
            Relax & Connect
          </h3>
        </div>
      </motion.div>
    </section>
  );
}
