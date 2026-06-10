"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let curX = -100;
    let curY = -100;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onEnter = () => cursor.classList.add("expanded");
    const onLeave = () => cursor.classList.remove("expanded");

    const interactables = () =>
      document.querySelectorAll("a, button, [data-cursor='expand']");

    function addListeners() {
      interactables().forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    }

    function animate() {
      if (!cursor) return;
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      cursor.style.left = `${curX}px`;
      cursor.style.top = `${curY}px`;
      rafId = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMove);
    addListeners();
    rafId = requestAnimationFrame(animate);

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return <div ref={cursorRef} className="cursor" aria-hidden="true" />;
}
