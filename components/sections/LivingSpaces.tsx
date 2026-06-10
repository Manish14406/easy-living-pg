"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const rooms = [
  {
    id: "single",
    image: "/room-single.png",
    type: "01",
    title: "Single Sharing",
    description:
      "A private sanctuary designed for focus and rest. Fully furnished with a premium bed, study desk, and wardrobe. Ideal for those who value personal space.",
    availability: "Available Now",
  },
  {
    id: "double",
    image: "/room-double.png",
    type: "02",
    title: "Double Sharing",
    description:
      "Thoughtfully designed shared living with curated spacing between residents. Balances community and privacy in an elegant architectural format.",
    availability: "Limited Availability",
  },
  {
    id: "triple",
    image: "/room-triple.png",
    type: "03",
    title: "Triple Sharing",
    description:
      "Our most value-optimized living format. Spacious layout engineered for three, with individual storage solutions and efficient use of space.",
    availability: "Available Now",
  },
];

function SpaceCard({
  room,
  index,
}: {
  room: (typeof rooms)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className="space-card"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.15,
      }}
    >
      <Image
        src={room.image}
        alt={`${room.title} at Easy Living PG`}
        fill
        sizes="(max-width: 900px) 100vw, 33vw"
        className="space-card-img"
      />
      <div className="space-card-overlay">
        <span className="space-card-eyebrow">{room.type} — {room.availability}</span>
        <h3 className="space-card-title">{room.title}</h3>
        <p className="space-card-desc">{room.description}</p>
        <div className="space-card-action">
          <a
            href="#contact"
            className="space-card-btn"
            id={`enquire-${room.id}`}
            aria-label={`Enquire about ${room.title}`}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <span className="space-card-enquire">Enquire</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function LivingSpaces() {
  const headRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section
      className="spaces"
      id="spaces"
      aria-label="Living Spaces — Room Types"
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
            Spaces
          </motion.span>
        </div>
        <motion.p
          className="spaces-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Three curated
          <br />
          formats for
          <br />
          every resident
        </motion.p>
      </div>

      <div className="spaces-grid" role="list">
        {rooms.map((room, i) => (
          <SpaceCard key={room.id} room={room} index={i} />
        ))}
      </div>
    </section>
  );
}
