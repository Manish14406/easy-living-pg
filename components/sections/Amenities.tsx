"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const amenities = [
  {
    number: "01",
    name: "High-Speed WiFi",
    desc: "Always Connected",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    name: "Nutritious Food",
    desc: "Home-Style Meals",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    number: "03",
    name: "Housekeeping",
    desc: "Daily Cleaning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "04",
    name: "Laundry Service",
    desc: "Weekly Wash & Fold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="3" ry="3" />
        <circle cx="12" cy="13" r="5" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "05",
    name: "CCTV Security",
    desc: "24/7 Surveillance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    number: "06",
    name: "Power Backup",
    desc: "Uninterrupted Supply",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    number: "07",
    name: "RO Water",
    desc: "Pure Drinking Water",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    number: "08",
    name: "Hot Water",
    desc: "Round the Clock",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 2v4" />
        <path d="M12 2v4" />
        <path d="M16 2v4" />
        <rect x="2" y="6" width="20" height="16" rx="2" />
        <path d="M6 16s1-1.5 3-1.5 3 1.5 5 1.5 3-1.5 3-1.5" />
      </svg>
    ),
  },
  {
    number: "09",
    name: "Parking",
    desc: "Two-Wheeler Parking",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </svg>
    ),
  },
  {
    number: "10",
    name: "Fully Furnished",
    desc: "Move-In Ready",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h3" />
        <path d="M11 21c0-2.76 2.24-5 5-5s5 2.24 5 5" />
        <circle cx="16" cy="14" r="2" />
      </svg>
    ),
  },
];

function AmenityItem({ amenity, index }: { amenity: (typeof amenities)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.div
      ref={ref}
      className="amenity-item"
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: (index % 2) * 0.1,
      }}
    >
      <span className="amenity-number" aria-hidden="true">
        {amenity.number}
      </span>
      <div className="amenity-icon">{amenity.icon}</div>
      <div className="amenity-text">
        <div className="amenity-name">{amenity.name}</div>
        <div className="amenity-desc">{amenity.desc}</div>
      </div>
    </motion.div>
  );
}

export default function Amenities() {
  const headRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section
      className="amenities"
      id="amenities"
      aria-label="Everyday Comfort — Amenities"
    >
      <div className="amenities-heading-wrap" ref={headRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="amenities-heading">
            Everyday
            <em>Comfort</em>
          </h2>
        </motion.div>
      </div>

      <div className="amenities-grid" role="list">
        {amenities.map((amenity, i) => (
          <AmenityItem key={amenity.number} amenity={amenity} index={i} />
        ))}
      </div>
    </section>
  );
}
