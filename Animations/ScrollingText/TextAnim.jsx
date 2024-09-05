"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splitting from 'splitting';

// Register GSAP ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function TextAnim({ text1, text2 }) {
  useEffect(() => {
    // Check if we are in a browser environment
    if (typeof window !== 'undefined') {
      // Initialize Splitting.js
      Splitting();

      // Query and apply GSAP animations after Splitting
      const fx1Titles = document.querySelectorAll('.content__title[data-splitting][data-effect1]');
      fx1Titles.forEach((title) => {
        const chars = title.querySelectorAll('.char');
        gsap.fromTo(
          chars,
          {
            'will-change': 'opacity, transform',
            opacity: 0,
            scale: 0.6,
            rotationZ: () => gsap.utils.random(-20, 20),
          },
          {
            ease: 'power4',
            opacity: 1,
            scale: 1,
            rotation: 0,
            stagger: 0.4,
            scrollTrigger: {
              trigger: title,
              start: 'center+=20% bottom',
              end: '+=50%',
              scrub: true,
            },
          }
        );
      });

      const fx2Titles = document.querySelectorAll('.content__title[data-splitting][data-effect2]');
      fx2Titles.forEach((title) => {
        const chars = title.querySelectorAll('.char');
        gsap.fromTo(
          chars,
          {
            'will-change': 'opacity, transform',
            opacity: 0,
            yPercent: 120,
            scaleY: 2.3,
            scaleX: 0.7,
            transformOrigin: '50% 0%',
          },
          {
            duration: 1,
            ease: 'back.inOut(2)',
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            stagger: 0.03,
            scrollTrigger: {
              trigger: title,
              start: 'center bottom+=50%',
              end: 'bottom top+=40%',
              scrub: true,
            },
          }
        );
      });

      // Clean up ScrollTrigger instances when the component is unmounted
      return () => {
        ScrollTrigger.getAll().forEach((instance) => instance.kill());
      };
    }
  }, []);

  return (
    <>
      <div className="textscroll-content">
        <h2 className="content__title" data-splitting data-effect1>
          <span className='text1'>{text1}</span>
        </h2>
      </div>
      <div className="content">
        <h2 className="content__title" data-splitting data-effect2>
          <span>{text2}</span>
        </h2>
      </div>
    </>
  );
}

export default TextAnim;
