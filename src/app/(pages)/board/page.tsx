'use client';

import React from 'react';
import styled from '@emotion/styled';
import Arrow from '/public/image/arrow.svg';
import ArrowVertical from '/public/image/arrow_vertical.svg';
import ArrowHorizontal from '/public/image/arrow_horizon.svg';
import Board from '@/components/modules/board/Board';
type Props = {};

export default function page({}: Props) {
    return (
        <Box>
            <div>
                <Vertical>
                    <ArrowVertical width={'100%'} height={'100%'} />
                </Vertical>
                <Horizontal>
                    <ArrowHorizontal width={'100%'} height={'100%'} />
                </Horizontal>
            </div>
            <Container>
                <Board></Board>
                <Board></Board>
                <Board></Board>
                <Board></Board>
            </Container>
        </Box>
    );
}

const Box = styled.div``;
const Container = styled.div`
    padding: 10px;
    display: grid;
    row-gap: 50px;
    column-gap: 25px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    z-index: 10;
`;

const Vertical = styled.div`
    position: absolute;
    left: calc(50vw - 25px);
    height: calc(100% - 50px);

    z-index: 52;
`;

const Horizontal = styled.div`
    position: absolute;
    width: 100%;
    top: calc(50vh + 55px);
    z-index: 42;
`;
