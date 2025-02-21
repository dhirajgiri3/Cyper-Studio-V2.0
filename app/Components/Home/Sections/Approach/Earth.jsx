"use client";

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import createGlobe from "cobe";

const SkeletonContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export function Earth()
{
    const features = [
        {
            skeleton: <SkeletonFour />
        },
    ];
    return (
        <>
            {features.map((feature) => (
                <>
                    {feature.skeleton}
                </>
            ))}
        </>
    );
}

export const SkeletonFour = () =>
{
    return (
        <SkeletonContainer>
            <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
        </SkeletonContainer>
    );
};

export const Globe = ({ className }) =>
{
    const canvasRef = useRef(null);
    useEffect(() =>
    {
        let phi = 0;
        if (!canvasRef.current) return;
        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
            ],
            onRender: (state) =>
            {
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () =>
        {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
            className={className}
        />
    );
};