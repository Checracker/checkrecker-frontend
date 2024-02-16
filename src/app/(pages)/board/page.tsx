'use client';

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { resetServerContext } from 'react-beautiful-dnd';
import ArrowVertical from '/public/image/arrow_vertical.svg';
import ArrowHorizontal from '/public/image/arrow_horizon.svg';
import Board from '@/components/modules/board/Board';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import Todo from '@/components/modules/Todo/Todo';
import { TBoard, TItemStatus, boardDummy } from '@/constants/DummyTodo';
import Arrow from '@/components/atoms/arrow/Arrow';
type Props = {};

export default function page({}: Props) {
    const [items, setItems] = useState<TBoard>(boardDummy);

    const onDragEnd = ({ source, destination }: DropResult) => {
        if (!destination) return;
        const scourceKey = source.droppableId as TItemStatus;
        const destinationKey = destination.droppableId as TItemStatus;

        const _items = JSON.parse(JSON.stringify(items)) as typeof items;
        // 기존 아이템 뽑아내기
        const [targetItem] = _items[scourceKey].splice(source.index, 1);
        // 기존 아이템을 새로운 위치에 삽입하기
        _items[destinationKey].splice(destination.index, 0, targetItem);
        // 상태 변경
        setItems(_items);
    };

    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));

        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);

    if (!enabled) {
        return null;
    }

    resetServerContext();

    return (
        boardDummy && (
            <Box>
                <div>
                    {/* <Vertical>
                        <ArrowVertical height={'100%'} />
                    </Vertical>
                    <Horizontal>
                        <ArrowHorizontal />
                    </Horizontal> */}
                    {/* <Arrow></Arrow> */}
                    <CssArrow/>
                </div>
                <Container>
                    <DragDropContext onDragEnd={onDragEnd}>
                        {Object.keys(items).map((key, index) => (
                            <Board
                                boardId={key}
                                todos={items[key as TItemStatus]}
                            ></Board>
                        ))}
                    </DragDropContext>
                </Container>
            </Box>
        )
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

const CssArrow = styled.div`
    position: absolute;
    top: calc(50% + 50px);
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -10;
    width: 90%; // 요소의 가로 길이를 90%로 설정
    height: 15px; /* 선의 두께 */
    background: url('/image/texture.svg'); /* 크레용질 이미지 */
    border: none;
    &::after {
        content: '';
    /* 화면에 나오게 */
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    border:solid ; 
    border-width: 15px 15px 0 0;
    border-image: url('/image/texture.png');
    transform: translateY(-50%) rotate(45deg); 
    }
`;