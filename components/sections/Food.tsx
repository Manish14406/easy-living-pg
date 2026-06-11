"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const foods = [
  { id: 1, src: "/food1.jpeg", alt: "Delicious home-style food" },
  { id: 2, src: "/food2.png", alt: "Nutritious meal" },
  { id: 3, src: "/food3.png", alt: "Healthy dining" },
  { id: 4, src: "/food4.png", alt: "Freshly prepared food" },
];

function FoodCard({ food, index }: { food: (typeof foods)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.15,
      }}
      style={{
        position: "relative",
        aspectRatio: "4/5",
        borderRadius: "16px",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Image
        src={food.src}
        alt={food.alt}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />
    </motion.div>
  );
}

export default function Food() {
  const headRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headRef, { once: true, margin: "-10%" });

  return (
    <section className="spaces" id="dining" aria-label="Dining Experience">
      <div className="spaces-header" ref={headRef}>
        <div className="spaces-heading">
          <motion.span
            className="spaces-heading-black"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Dining
          </motion.span>
          <motion.span
            className="spaces-heading-thin"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Experience
          </motion.span>
        </div>
        <motion.p
          className="spaces-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Nutritious,
          <br />
          home-style
          <br />
          cooking
        </motion.p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
          marginTop: "40px",
        }}
      >
        {foods.map((food, index) => (
          <FoodCard key={food.id} food={food} index={index} />
        ))}
      </div>
    </section>
  );
}
