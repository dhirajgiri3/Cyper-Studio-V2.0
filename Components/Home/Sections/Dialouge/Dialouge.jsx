"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import TextAnim with SSR disabled
const TextAnim = dynamic(() => import('@/Animations/ScrollingText/TextAnim'), { ssr: false });

function Dialouge() {
  return (
    <section className="relative w-full h-full px-20 py-24 flex items-center justify-center md:px-8 sm:px-4">
      <div className="max-w-[1440px] w-full">
        <div className="textscroll-content w-full">
          <TextAnim
            text1={
              "Hey there! By now, I'm sure we've charmed our way into your good books (or at least made you smile 😉). But enough about us—let's talk about how we can make you happy. Ready to see the secret sauce we use to sprinkle some magic on your business? Our approach is all about understanding, advising, and delivering with a big dash of passion. So, let's dive in and see how we turn your ideas into reality. Sound good? Let's roll!"
            }
            className="text-[--grey] text-[--lg] font-normal leading-relaxed"
          />
        </div>
      </div>
    </section>
  );
}

export default Dialouge;
