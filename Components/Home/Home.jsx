"use client";

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Hero from "./Sections/Hero/Hero";
import Approach from "./Sections/Approach/Approach";
import Dream from "./Sections/DreamSection/Dream";
import OurWorkTitle from "./Sections/Our-Work/Title";
import Story from "./Sections/Story/Story";

gsap.registerPlugin(ScrollTrigger);

const HomeContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  background: var(--light);
  transition: background-color 0.6s ease-in-out;

  .rt {
    height: 100vh;
  }

  .section-container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      padding: 1rem;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 150%;
      background: inherit;
      z-index: -1;
      transform: translateY(-20%);
    }
  }

  .content-wrapper {
    width: 100%;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(20px);
  }
`;

function Home() {
  const homeContainerRef = useRef(null);
  const sectionsRef = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    const homeContainer = homeContainerRef.current;
    const sections = sectionsRef.current;
    const contents = contentRefs.current;

    const sectionColors = {
      0: "var(--light)",
      1: "#ffffff",
      2: "#202126",
      3: "#202126",
      default: "var(--light)",
    };

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "bottom 40%",
        markers: false,
        onEnter: () => {
          gsap.to(homeContainer, {
            backgroundColor: sectionColors[index] || sectionColors.default,
            duration: 0.6,
            ease: "power2.inOut",
          });
        },
        onEnterBack: () => {
          gsap.to(homeContainer, {
            backgroundColor: sectionColors[index] || sectionColors.default,
            duration: 0.6,
            ease: "power2.inOut",
          });
        },
      });
    });

    contents.forEach((content, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }).fromTo(
        content,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.15,
        }
      );
    });

    sections.forEach((section) => {
      gsap.to(section, {
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: true,
        },
      });
    });
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <HomeContainer ref={homeContainerRef}>
      <div className="section-container" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="content-wrapper" ref={(el) => (contentRefs.current[0] = el)}>
          <Hero />
        </div>
      </div>
      
      <div className="section-container" ref={(el) => (sectionsRef.current[1] = el)}>
        <div className="content-wrapper" ref={(el) => (contentRefs.current[1] = el)}>
          <Story />
        </div>
      </div>

      <div className="section-container" ref={(el) => (sectionsRef.current[2] = el)}>
        <div className="content-wrapper" ref={(el) => (contentRefs.current[2] = el)}>
          <Dream />
        </div>
      </div>
      <div className="section-container" ref={(el) => (sectionsRef.current[3] = el)}>
        <div className="content-wrapper" ref={(el) => (contentRefs.current[3] = el)}>
          <Approach />
        </div>
      </div>
      <div className="section-container" ref={(el) => (sectionsRef.current[4] = el)}>
        <div className="content-wrapper" ref={(el) => (contentRefs.current[4] = el)}>
          <OurWorkTitle />
        </div>
      </div>
      {/* <div className="h-screen" /> */}
    </HomeContainer>
  );
}

export default Home;