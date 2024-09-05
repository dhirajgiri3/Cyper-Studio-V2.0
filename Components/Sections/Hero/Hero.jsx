import Scene from '@/Animations/ThreeD/Hero/Scene'
import PrimaryButton from '@/Components/Buttons/PrimaryButton'
import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.section`
    height: 100vh;
    width: 100%;
    padding: 0 5rem;
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width : 768px) {
        padding: 0 2rem;
        padding-top: 8rem;
        gap: 3rem;
    }

    .hero-top {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        height: 55vh;

        @media screen and (max-width : 768px) {
            flex-direction: column;
            height: 60vh;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 2rem;
        }

        .texts {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1;
            width: 100%;
            height: 100%;
            gap: 2rem;
  

        h1 {
            font-size: var(--lxl);
            line-height: 1.2;
            font-weight: 500;
            font-family: "clash";
            color: var(--black);

            span {
                 font-family: 'serif';
                 font-weight: 100;
                 font-style: italic;
            }

            @media screen and (max-width : 768px) {
                font-size: var(--xxl);
            }
        }

        p {
            font-size: var(--nm);
            font-weight: 400;
            color: var(--para);
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
    }

    .threed {
        width: 100%;
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    }

    .hero-bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        p {
            color: var(--para);
            font-size: var(--nm);
        }
    }
`

function Hero()
{
    return (
        <>
            <HeroContainer>
                <div className="hero-top">
                    <div className="texts">
                        <h1>
                            Where <span>Innovation</span> <br />
                            Meets <span>Passion</span>
                        </h1>
                        <p>
                            <span>
                                Bringing Premium Solutions to Everyone—Because Your Success is Our Success.</span>
                            <span>
                                <strong>Welcome to Cyper Studio! </strong> We’re not just tech wizards—we’re your partners in innovation. Whether you’re a startup with big dreams or an established business ready to scale, we’re here to help you succeed without breaking the bank. Ready to kick off your journey? Let’s make magic happen—no stress, just results. </span>
                        </p>
                    </div>
                    <div className="threed">
                        <Scene />
                    </div>
                </div>
                <div className="hero-bottom">
                    <p>
                        We love to bring smiles to people’s faces , and that’s our job—yep, we’re serious! 😉
                    </p>
                    <PrimaryButton>
                        Get Started
                    </PrimaryButton>
                </div>
            </HeroContainer>
        </>
    )
}

export default Hero