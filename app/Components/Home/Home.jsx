"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Sections/Hero/Hero";
import Approach from "./Sections/Approach/Approach";
import Dream from "./Sections/DreamSection/Dream";
import OurWorkTitle from "./Sections/Our-Work/Title";
import Story from "./Sections/Story/Story";
import OurWork from "./Sections/Our-Work/OurWork";

gsap.registerPlugin(ScrollTrigger);

const customEase = "power3.inOut";

const Home = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.config({ force3D: true });
    let mm = gsap.matchMedia();
    
    const ctx = gsap.context(() => {
      const sections = Array.from(mainRef.current.querySelectorAll("section[data-bg]"));
      
      sections.forEach((section, index) => {
        const targetColor = section.getAttribute("data-bg");
        
        // Enhanced scroll markers with proper z-indexing
        const marker = document.createElement("div");
        marker.style.cssText = `
          height: 100%;
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          opacity: 0;
          z-index: -1;
          pointer-events: none;
        `;
        section.appendChild(marker);

        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            end: "bottom 35%",
            scrub: 2,
            markers: false,
            anticipatePin: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
            invalidateOnRefresh: true,
            onEnter: () => {
              gsap.to(mainRef.current, {
                backgroundColor: targetColor,
                duration: 1,
                ease: customEase,
                overwrite: "auto"
              });
            },
            onEnterBack: () => {
              gsap.to(mainRef.current, {
                backgroundColor: targetColor,
                duration: 1,
                ease: customEase,
                overwrite: "auto"
              });
            }
          }
        });
      });

      gsap.set(mainRef.current, {
        backgroundColor: sections[0].getAttribute("data-bg")
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
      className="min-h-screen w-full relative overflow-hidden"
      style={{ 
        backgroundColor: "#f9fafb",
        transform: "translate3d(0,0,0)",
        perspective: "1000px",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        willChange: "background-color"
      }}
    >
      {/* Background layer */}
      <div className="fixed inset-0 z-0" />
      
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

        {/* Our Work Title section
        <section data-bg="#f9fafb" className="relative z-10">
          <OurWorkTitle />
        </section> */}

        {/* Our Work section */}
        <section data-bg="#fff" className="relative z-10">
          <OurWork />
        </section>
      </div>

      {/* Overlay layer for transitions */}
      <div className="fixed inset-0 z-[60] pointer-events-none" />
    </main>
  );
};

export default Home;

