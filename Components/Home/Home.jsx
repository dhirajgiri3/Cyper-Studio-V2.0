"use client";

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Ensure proper module resolution
import ImageTrail from '@/Animations/ImageTrail/ImageTrail';
import Hero from '../Sections/Hero/Hero';
import Story from '../Sections/Story/Story';
import Dialouge from '../Sections/Dialouge/Dialouge';
import Approach from '../Sections/Approach/Approach';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: var(--light);
  transition: background-color 0.5s ease; /* Transition for background color change */

  .imgtrl {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .hero,
  .story {
    height: 100%;
    width: 100%;
  }

  .dialogue {
    height: 35vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

function Home()
{
  const homeContainerRef = useRef(null); // Ref for the parent container
  const sectionsRef = useRef([]); // Refs for sections

  useEffect(() =>
  {
    const homeContainer = homeContainerRef.current;
    const sections = sectionsRef.current;

    sections.forEach((section, index) =>
    {
      // Create ScrollTrigger for each section
      ScrollTrigger.create({
        trigger: section,
        start: 'top center', // When the top of the section reaches the center of the viewport
        onEnter: () =>
        {
          // Change background color when scrolling down into the section
          switch (index)
          {
            case 0:
              gsap.to(homeContainer, { backgroundColor: 'var(--light)', duration: 0.5 }); // Blue
              break;
            case 1:
              gsap.to(homeContainer, { backgroundColor: '#fff', duration: 0.5 }); // Red
              break;
            case 2:
              gsap.to(homeContainer, { backgroundColor: '#202126', duration: 0.5 }); // Green
              break;
            case 3:
              gsap.to(homeContainer, { backgroundColor: '#202126', duration: 0.5 }); // Orange
              break;
            default:
              gsap.to(homeContainer, { backgroundColor: 'var(--light)', duration: 0.5 }); // Default color
              break;
          }
        },
        onEnterBack: () =>
        {
          // Change background color when scrolling back up into the section
          switch (index)
          {
            case 0:
              gsap.to(homeContainer, { backgroundColor: 'var(--light)', duration: 0.5 }); // Blue
              break;
            case 1:
              gsap.to(homeContainer, { backgroundColor: '#fff', duration: 0.5 }); // Red
              break;
            case 2:
              gsap.to(homeContainer, { backgroundColor: '#202126', duration: 0.5 }); // Green
              break;
            case 3:
              gsap.to(homeContainer, { backgroundColor: '#202126', duration: 0.5 }); // Orange
              break;
            default:
              gsap.to(homeContainer, { backgroundColor: 'var(--light)', duration: 0.5 }); // Default color
              break;
          }
        },
      });
    });

    // Cleanup ScrollTrigger instances on component unmount
    return () =>
    {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <HomeContainer ref={homeContainerRef}>
      <div className="imgtrl">
        <ImageTrail />
      </div>
      <section className="hero" ref={(el) => (sectionsRef.current[0] = el)}>
        <Hero />
      </section>
      <section className="story" ref={(el) => (sectionsRef.current[1] = el)}>
        <Story />
      </section>
      <section className="dialogue" ref={(el) => (sectionsRef.current[2] = el)}>
        <Dialouge />
      </section>
      <section className="approach" ref={(el) => (sectionsRef.current[3] = el)}>
        <Approach />
      </section>
    </HomeContainer>
  );
}

export default Home;
