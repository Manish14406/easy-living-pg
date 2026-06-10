"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const landmarks = [
  "Opposite Reva University Main Gate",
  "Behind Indian Oil Petrol Bunk",
  "Bagalur Main Road, Yelahanka",
  "5 minutes from NH-44",
];

export default function Location() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="location"
      id="location"
      aria-label="Location — Find Us"
    >
      <div className="location-inner">
        <div className="location-content">
          <motion.span
            className="location-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Location
          </motion.span>

          <div className="overflow-hidden">
            <motion.h2
              className="location-heading"
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Find
              <br />
              Us
            </motion.h2>
          </div>

          <motion.address
            className="location-address"
            style={{ fontStyle: "normal" }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            No.10 Kattigenahalli Main Road
            <br />
            Bagalur Main Rd
            <br />
            Opp. Reva University
            <br />
            Behind Indian Oil Petrol Bunk
            <br />
            Yelahanka, Bengaluru
            <br />
            Karnataka 560064
          </motion.address>

          <div className="location-landmarks">
            {landmarks.map((lm, i) => (
              <motion.div
                key={lm}
                className="location-landmark"
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.35 + i * 0.08,
                }}
              >
                <span className="location-landmark-dot" aria-hidden="true" />
                {lm}
              </motion.div>
            ))}
          </div>

          <motion.a
            href="https://maps.google.com/?q=Easy+Living+PG+Accommodation+Kattigenahalli+Main+Road+Yelahanka+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            id="get-directions"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            style={{ display: "inline-block" }}
          >
            Get Directions
          </motion.a>
        </div>

        <motion.div
          className="location-map"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3197059413767!2d77.60699237520558!3d13.119157887216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae194f9d69c9c3%3A0x1234567890abcdef!2sReva+University%2C+Kattigenahalli%2C+Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            title="Easy Living PG Location Map"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="location-map-overlay" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
