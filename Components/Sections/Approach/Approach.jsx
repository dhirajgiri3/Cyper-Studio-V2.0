import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import the ScrollTrigger plugin

const ApproachStyle = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
  background: #202126;
  padding: 4rem 5rem;

  @media screen and (max-width: 768px) {
    padding: 4rem 2rem;
  }
  
  .creative-approach {
    color: var(--para);
    font-weight: 300;
    width: 70%;
    text-align: center;

    @media screen and (max-width : 768px) {
      width: 90%;
    }

    span {
      font-weight: 500;
      color: var(--whitel);
    }
  }

  .approachsection {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
    width: 100%;
    height: 75vh;

    @media screen and (max-width : 768px) {
      flex-direction: column;
      justify-content: flex-start;
    }

    .video {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 75vh;

      video {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 2rem;
        border: 1px solid #2b2d33;
        
      }

      @media screen and (max-width : 768px) {

        height: 100%;
        
      }
    }

    .approachcontent {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      height: 100%;
      width: 100%;
      padding: 0 3rem;

      h1 {
        font-size: var(--xxl);
        color: var(--light);
        font-weight: 500;
      }

      p {
        font-size: var(--nm);
        color: var(--para);
        width: 70%;
        text-align: center;
        font-weight: 300;
      }

      .approach-btn {
        padding: 1rem 2rem;
        background: var(--light);
        color: var(--dark);
        font-weight: 700;
        border-radius: 1rem;
        outline: none;
        border: none;
        font-size: var(--sm);
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          background: var(--whitel);
        }
      }
    }
  }
`;

gsap.registerPlugin(ScrollTrigger);

function Approach()
{
  const approachSectionRefs = useRef([]);
  const contentRefs = useRef([]);
  const videoRefs = useRef([]);

  // Initialize refs as empty arrays
  approachSectionRefs.current = [];
  contentRefs.current = [];
  videoRefs.current = [];

  useEffect(() =>
  {
    approachSectionRefs.current.forEach((section, index) =>
    {
      // Video Animation using gsap.fromTo
      gsap.fromTo(
        videoRefs.current[index],
        { opacity: 0, y: '3rem' }, // From
        {
          opacity: 1,
          y: '0rem',
          duration: 1.2,
          delay: 0.5, // Delay of 0.5s
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Content Animation using gsap.fromTo
      gsap.fromTo(
        contentRefs.current[index].children,
        { opacity: 0, y: '3rem' }, // From
        {
          opacity: 1,
          y: '0rem',
          stagger: 0.3,
          duration: 0.8,
          delay: 0.5, // Delay of 0.5s
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  // Function to add refs
  const addToRefs = (el, ref) =>
  {
    if (el && !ref.current.includes(el))
    {
      ref.current.push(el);
    }
  };

  return (
    <ApproachStyle>
      <div className="listen approachsection" ref={(el) => addToRefs(el, approachSectionRefs)}>
        <div className="video" ref={(el) => addToRefs(el, videoRefs)}>
          <video
            src="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/4.mp4?alt=media&token=14666be1-1d7f-49d9-aac8-ab36264b5499"
            loop
            autoPlay
            playsInline
            muted
          />
        </div>
        <div className="approachcontent" ref={(el) => addToRefs(el, contentRefs)}>
          <h1>We Listen</h1>
          <p>Understanding your needs, challenges, and pain points—because that’s what partners do.</p>
          <button className="approach-btn">Contact Us</button>
        </div>
      </div>
      <div className="advise approachsection" ref={(el) => addToRefs(el, approachSectionRefs)}>
        <div className="approachcontent" ref={(el) => addToRefs(el, contentRefs)}>
          <h1>We Advise</h1>
          <p>Offering solutions that align with your vision and budget—no upselling, just honesty.</p>
          <button className="approach-btn">Contact Us</button>
        </div>
        <div className="video" ref={(el) => addToRefs(el, videoRefs)}>
          <video
            src="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/5.mp4?alt=media&token=d5221841-4383-4542-9db3-3b1f669129de"
            loop
            autoPlay
            playsInline
            muted
          />
        </div>
      </div>
      <div className="deliver approachsection" ref={(el) => addToRefs(el, approachSectionRefs)}>
        <div className="video" ref={(el) => addToRefs(el, videoRefs)}>
          <video
            src="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/6.mp4?alt=media&token=0b627515-826e-46fc-ade3-cc386eafcd0d"
            loop
            autoPlay
            playsInline
            muted
          />
        </div>
        <div className="approachcontent" ref={(el) => addToRefs(el, contentRefs)}>
          <h1>We Deliver</h1>
          <p>Think we’re the right fit? Welcome to the Cyper Studio family! Let’s create something extraordinary together.</p>
          <button className="approach-btn">Contact Us</button>
        </div>
      </div>
      <p className='creative-approach'>
        At Cyper Studio, <span>we’re not interested in how deep your pockets are or how many awards you’ve won.</span>  What matters is your passion, your authenticity, and your drive. Ready to get started? Let’s make some magic!
      </p>
    </ApproachStyle>
  );
}

export default Approach;
