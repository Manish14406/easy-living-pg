"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const reviews = [
  {
    id: 1,
    text: "Living at Easy Living PG has been a transformative experience. The environment is clean, secure, and the food is genuinely homely. Best decision I made moving to Bengaluru.",
    author: "Priya Sharma",
    role: "Reva University Student",
    initials: "PS",
    date: "2 months ago",
  },
  {
    id: 2,
    text: "The WiFi is excellent and the room is always clean. As a working professional, I needed reliability — Easy Living delivers exactly that. The proximity to everything makes it perfect.",
    author: "Rahul Nair",
    role: "Software Engineer",
    initials: "RN",
    date: "4 months ago",
  },
  {
    id: 3,
    text: "I was nervous about relocating to Bangalore, but the team here made the transition seamless. Felt like home from day one. The food is honestly better than my hostel back home.",
    author: "Ananya Krishnan",
    role: "B.Tech Student",
    initials: "AK",
    date: "5 months ago",
  },
  {
    id: 4,
    text: "Security is top notch and the management is very responsive. CCTV everywhere, power backup works perfectly. Highly recommend to anyone looking for PG near Reva University.",
    author: "Mohammed Irfan",
    role: "Final Year Student",
    initials: "MI",
    date: "6 months ago",
  },
];

export default function Reviews() {
  const headRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headRef, { once: true, margin: "-10%" });
  const [activeIdx, setActiveIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const scrollTo = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLDivElement>(".review-card");
    if (cards[idx]) {
      const offset = cards[idx].offsetLeft - 48;
      track.scrollTo({ left: offset, behavior: "smooth" });
      setActiveIdx(idx);
    }
  };

  return (
    <section
      className="reviews"
      id="stories"
      aria-label="Resident Stories — Reviews"
    >
      <div className="reviews-header" ref={headRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="reviews-heading">
            Resident
            <br />
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
              }}
            >
              Stories
            </em>
          </h2>
          <p className="reviews-subheading">
            Experiences shared by students and professionals who chose Easy Living PG Accommodation.
          </p>
        </motion.div>

        <motion.div
          className="reviews-rating-block"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="reviews-stars" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" aria-hidden="true" className="star-gold">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <div className="reviews-score-wrap">
            <span className="reviews-score">4.3</span>
            <span className="reviews-verified">✓ Google Verified</span>
          </div>
          <div className="reviews-count">Based on Google Reviews</div>
          <a
            href="https://www.google.com/search?sca_esv=d11ba7484cdf09fb&sxsrf=ANbL-n4wZUHxzFwqWOA1cDc8JOkuTGC9Fw:1781083780313&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYF8dXTeo63VfQUgzZMzbEPurfq2KL0bbIeY3YW-9QMbUAhjCEFkLIc9fxLU_VxnOCEHPY0UcyPoncaF68oMNbMfk7c2JrCBB8QKK1_MjDGofPBPfw%3D%3D&q=Easy+Living+PG+Accommodation+Reviews&sa=X&ved=2ahUKEwifz6iQrvyUAxXnqpUCHUzxMV4Q0bkNegQIQhAF&cshid=1781083810863025&biw=1738&bih=862&dpr=1.1"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-google-cta"
          >
            VIEW ALL REVIEWS ON GOOGLE
          </a>
        </motion.div>
      </div>

      {/* Drag-scroll review track */}
      <motion.div
        ref={trackRef}
        className="reviews-track"
        drag="x"
        dragConstraints={{ right: 0, left: -(reviews.length - 1) * 400 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{ overflowX: "visible", cursor: isDragging ? "grabbing" : "grab" }}
      >
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            className="review-card"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2 + i * 0.12,
            }}
            role="article"
            aria-label={`Review by ${review.author}`}
          >
            <div className="review-card-glow"></div>
            <div className="review-card-content">
              <div className="review-card-header">
                <div className="review-author-meta">
                  <div className="review-avatar" aria-hidden="true">
                    {review.initials}
                  </div>
                  <div>
                    <div className="review-name">{review.author}</div>
                    <div className="review-date">{review.date}</div>
                  </div>
                </div>
                <div className="review-card-stars">
                   {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" aria-hidden="true" className="star-gold">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="review-text">&ldquo;{review.text}&rdquo;</blockquote>
              <div className="review-role-badge">{review.role}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation arrows */}
      <div className="reviews-nav" aria-label="Review navigation">
        <button
          onClick={() => scrollTo(Math.max(0, activeIdx - 1))}
          disabled={activeIdx === 0}
          id="reviews-prev"
          aria-label="Previous review"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => scrollTo(Math.min(reviews.length - 1, activeIdx + 1))}
          disabled={activeIdx === reviews.length - 1}
          id="reviews-next"
          aria-label="Next review"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
