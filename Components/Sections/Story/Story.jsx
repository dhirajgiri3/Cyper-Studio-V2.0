import React from 'react'
import styled from 'styled-components'

const StoryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 3rem;
    padding: 0 5rem;

    @media screen and (max-width: 768px) {
    padding: 0 2rem;
    padding-bottom: 3rem;
  }

    .text1 {
        font-size: var(--nm);
        font-weight: 400;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 0;
    }

    .story-left {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;

        @media screen and (max-width : 768px) {
               gap: 2rem;
            }

        h1 {
            font-size: var(--xl);
            font-family: "clash";
            font-weight: 600;
        }

        video {
            height: 65vh;
            mix-blend-mode: multiply;

            @media screen and (max-width : 768px) {
                height: 100%;
                width: 90vw;
            }
        }
    }

    .story-right {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-direction: column;

        h3 {
            font-size: var(--nm);
            font-weight: 400;
            color: var(--para);
        }
    }
`

function Story()
{
    return (
        <StoryContainer>
            <div className="story-left">
                <h1>
                    Our Story
                </h1>
                <video className="c-video" loop autoPlay muted playsInline src="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/Cyper-3d.mp4?alt=media&token=4115996f-f023-4560-8dc9-20d1437327d9" />
            </div>
            <div className="story-right">
                <h3>
                    At Cyper Studio, we believe in one thing—your success. We’re not just another tech company; we’re your dedicated partners in innovation.
                </h3>
                <h3>
                    Whether you’re starting fresh or scaling up, we’re here to deliver top-tier solutions at prices that won’t make you faint. And hey, we’re not newbies—we’ve got the experience to back it up, and we’re just getting started.
                </h3>
            </div>
        </StoryContainer>
    )
}

export default Story;