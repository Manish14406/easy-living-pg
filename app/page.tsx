"use client";

import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import LivingSpaces from "@/components/sections/LivingSpaces";
import LivingArea from "@/components/sections/LivingArea";
import Amenities from "@/components/sections/Amenities";
import Food from "@/components/sections/Food";
import Reviews from "@/components/sections/Reviews";
import Location from "@/components/sections/Location";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* Persistent UI */}
      <Cursor />
      <ScrollProgress />
      <div className="grain-overlay" aria-hidden="true" />
      <Navigation />
      <FloatingCallButton />

      {/* Main content */}
      <main id="main-content" aria-label="Easy Living PG Accommodation">
        <Hero />
        <About />
        <LivingSpaces />
        <LivingArea />
        <Amenities />
        <Food />
        <Reviews />
        <Location />
        <Contact />
      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
