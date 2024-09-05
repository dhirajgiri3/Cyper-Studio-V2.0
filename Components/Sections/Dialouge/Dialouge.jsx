"use client";

import dynamic from 'next/dynamic';
import React from 'react';
import styled from 'styled-components';

// Dynamically import TextAnim with SSR disabled
const TextAnim = dynamic(() => import('@/Animations/ScrollingText/TextAnim'), { ssr: false });

const DialogueContainer = styled.section`
  height: 100%;
  width: calc(100vw - 10rem);
  padding: 0 5rem;
  padding-top: 6rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }

  .textscroll-content {
    height: 100%;
    width: 100%;
    .content__title {
      span {
        font-size: var(--lg);
        font-weight: 400;
        color: var(--grey);
      }
    }
  }
`;

function Dialouge() {
  return (
    <DialogueContainer>
      <TextAnim
        text1={
          "Hey there! By now, I’m sure we’ve charmed our way into your good books (or at least made you smile 😉). But enough about us—let’s talk about how we can make you happy. Ready to see the secret sauce we use to sprinkle some magic on your business? Our approach is all about understanding, advising, and delivering with a big dash of passion. So, let’s dive in and see how we turn your ideas into reality. Sound good? Let’s roll!"
        }
      />
    </DialogueContainer>
  );
}

export default Dialouge;
