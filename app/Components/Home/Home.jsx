"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Sections/Hero/Hero";
import Approach from "./Sections/Approach/Approach";
import Dream from "./Sections/DreamSection/Dream";
import Story from "./Sections/Story/Story";
import OurWork from "./Sections/Our-Work/OurWork";
import ContactCard from "../ContactCard/ContactCard";
import Title from "./Sections/Our-Work/Title";

gsap.registerPlugin(ScrollTrigger);

const customEase = "power2.inOut"; // Changed to inOut for smoother transitions

const Home = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.config({ force3D: true });
    let mm = gsap.matchMedia();
    
    const ctx = gsap.context(() => {
      const sections = Array.from(mainRef.current.querySelectorAll("section[data-bg]"));
      let currentColor = sections[0].getAttribute("data-bg");
      
      // Improved scroll trigger configuration
      sections.forEach((section, index) => {
        const targetColor = section.getAttribute("data-bg");
        
        ScrollTrigger.create({
          trigger: section,
          start: "top 75%", // Adjusted trigger point
          end: "bottom 25%", // Adjusted end point
          toggleActions: "play none none reverse",
          onEnter: () => smoothUpdateBackground(targetColor),
          onEnterBack: () => smoothUpdateBackground(targetColor),
          onLeave: () => {
            if (index < sections.length - 1) {
              smoothUpdateBackground(sections[index + 1].getAttribute("data-bg"));
            }
          },
          onLeaveBack: () => {
            if (index > 0) {
              smoothUpdateBackground(sections[index - 1].getAttribute("data-bg"));
            }
          },
          invalidateOnRefresh: true,
          markers: false,
          scrub: 0.5, // Added smooth scrubbing
        });
      });

      function smoothUpdateBackground(newColor) {
        const tl = gsap.timeline({
          defaults: {
            duration: 1.2, // Increased duration
            ease: "power2.inOut",
          }
        });

        tl.to(mainRef.current, {
          backgroundColor: newColor,
          overwrite: "auto",
          onUpdate: () => {
            currentColor = newColor;
          },
        });
      }

      // Set initial background color with a smooth fade in
      gsap.from(mainRef.current, {
        backgroundColor: "#ffffff",
        duration: 1.5,
        ease: "power2.inOut",
      });
      
      gsap.set(mainRef.current, {
        backgroundColor: currentColor
      });
    }, mainRef);

    return () => {
      ctx.revert();
      mm.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <main
      ref={mainRef}
      className="min-h-screen w-full relative overflow-hidden transition-all duration-1000"
      style={{
        backgroundColor: "#f9fafb",
        transform: "translate3d(0,0,0)",
        perspective: "1000px",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        willChange: "background-color, transform",
        transition: "background-color 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Enhanced background layer with subtle gradient */}
      <div className="fixed inset-0 z-0 backdrop-blur-[120px] transition-all duration-1000 bg-gradient-to-b from-transparent to-black/5" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full">
        {/* Hero section - Highest priority */}
        <section data-bg="#f9fafb" className="min-h-screen relative z-50">
          <Hero />
        </section>

        {/* Story section */}
        <section data-bg="#ffffff" className="relative z-40">
          <Story />
        </section>

        {/* Approach section */}
        <section data-bg="#1f2126" className="min-h-screen relative z-30">
          <Approach />
        </section>

        {/* Dream section */}
        <section data-bg="#1f2126" className="min-h-screen relative z-20">
          <Dream />
        </section>

        {/* Title section */}
        <section data-bg="#ffffff" className="relative z-10">
          <Title />
        </section>

        {/* Our Work section */}
        <section data-bg="#07070c" className="relative z-10">
          <OurWork /> 
        </section>

        {/* Contact Card section */}
        <section data-bg="#07070c" className="relative z-10">
          <ContactCard />
        </section>
      </div>

      {/* Enhanced overlay layer for transitions */}
      <div 
        className="fixed inset-0 z-[60] pointer-events-none mix-blend-overlay opacity-20 transition-opacity duration-1000" 
        style={{ 
          background: 'radial-gradient(circle at center, transparent, rgba(0,0,0,0.15))',
          backdropFilter: 'blur(30px)'
        }}
      />
    </main>
  );
};

export default Home;

