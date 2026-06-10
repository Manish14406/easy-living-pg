"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const WHATSAPP_NUMBER = "918553738588";
const CALL_NUMBER = "8553738588";
const CALL_NUMBER_2 = "9738224702";

const roomTypes = [
  "Single Sharing",
  "Double Sharing",
  "Triple Sharing",
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const headInView = useInView(headRef, { once: true, margin: "-5%" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    roomType: "",
    moveIn: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi, I'm ${form.name}. I'm interested in ${form.roomType || "a room"} at Easy Living PG.\nPhone: ${form.phone}\nMove-in: ${form.moveIn || "TBD"}\n${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      ref={ref}
      className="contact"
      id="contact"
      aria-label="Contact — Start Your Stay"
    >
      {/* Massive heading */}
      <div className="contact-heading-wrap" ref={headRef}>
        {"START YOUR STAY".split(" ").map((word, wi) => (
          <div key={word} className="overflow-hidden">
            <motion.span
              className="contact-heading"
              style={{ display: "block" }}
              initial={{ y: "100%", opacity: 0 }}
              animate={headInView ? { y: "0%", opacity: 1 } : {}}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: wi * 0.12,
              }}
            >
              {word}
            </motion.span>
          </div>
        ))}
      </div>

      <div className="contact-inner">
        {/* Form */}
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} id="inquiry-form" aria-label="Room inquiry form">
            <div className="contact-form-group">
              <label className="contact-label" htmlFor="form-name">
                Your Name
              </label>
              <input
                id="form-name"
                type="text"
                className="contact-input"
                placeholder="Full name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="contact-form-group">
              <label className="contact-label" htmlFor="form-phone">
                Phone Number
              </label>
              <input
                id="form-phone"
                type="tel"
                className="contact-input"
                placeholder="10-digit mobile number"
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                value={form.phone}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  if (val.length <= 10) {
                    setForm({ ...form, phone: val });
                  }
                }}
              />
            </div>

            <div className="contact-form-group">
              <label className="contact-label" htmlFor="form-room">
                Room Type
              </label>
              <select
                id="form-room"
                className="contact-select"
                value={form.roomType}
                onChange={(e) => setForm({ ...form, roomType: e.target.value })}
              >
                <option value="">Select room type</option>
                {roomTypes.map((rt) => (
                  <option key={rt} value={rt}>
                    {rt}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact-form-group">
              <label className="contact-label" htmlFor="form-movein">
                Move-In Date
              </label>
              <input
                id="form-movein"
                type="date"
                className="contact-input"
                value={form.moveIn}
                onChange={(e) => setForm({ ...form, moveIn: e.target.value })}
              />
            </div>

            <div className="contact-form-group">
              <label className="contact-label" htmlFor="form-message">
                Message
              </label>
              <textarea
                id="form-message"
                className="contact-textarea"
                placeholder="Tell us anything else…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <motion.button
              type="submit"
              className="contact-submit"
              id="form-submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? "Message Sent ✓" : "Send Enquiry via WhatsApp"}
            </motion.button>
          </form>
        </motion.div>

        {/* Info block */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        >
          <span className="contact-info-eyebrow">Reach Us</span>

          <div className="contact-phones">
            <a
              href={`tel:${CALL_NUMBER}`}
              className="contact-phone"
              id="contact-phone-1"
              aria-label={`Call ${CALL_NUMBER}`}
            >
              {CALL_NUMBER}
            </a>
            <a
              href={`tel:${CALL_NUMBER_2}`}
              className="contact-phone"
              id="contact-phone-2"
              aria-label={`Call ${CALL_NUMBER_2}`}
            >
              {CALL_NUMBER_2}
            </a>
          </div>

          <div className="contact-ctas">
            <a
              href={`tel:${CALL_NUMBER}`}
              className="contact-cta-call"
              id="cta-call-now"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l1.86-1.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I'm%20interested%20in%20a%20room%20at%20Easy%20Living%20PG.`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta-whatsapp"
              id="cta-whatsapp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              WhatsApp Us
            </a>

            <a
              href={`https://maps.google.com/?q=Easy+Living+PG+Accommodation+Kattigenahalli+Main+Road+Yelahanka+Bengaluru`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta-visit"
              id="cta-book-visit"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Book a Visit
            </a>
          </div>

          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 13, lineHeight: 1.8, color: "rgba(0,0,0,0.45)" }}>
            No.10 Kattigenahalli Main Road,
            <br />
            Opp. Reva University, Yelahanka,
            <br />
            Bengaluru, Karnataka 560064
          </p>
        </motion.div>
      </div>
    </section>
  );
}
