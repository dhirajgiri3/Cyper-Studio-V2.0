import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Item4 } from './Item4';
import styled from 'styled-components';

const CanvasContainer = styled(Canvas)`
    height: 70vh;
    width: 100%;
`

const Scene = () =>
{
    return (
        <CanvasContainer>
            <ambientLight />
            <Suspense fallback={null}>
                <Item4 />
            </Suspense>
            <Environment preset='sunset' />
        </CanvasContainer>
    );
};

export default Scene;
