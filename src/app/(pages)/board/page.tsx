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
                    <Vertical>
                        <ArrowVertical height={'100%'} />
                    </Vertical>
                    <Horizontal>
                        <ArrowHorizontal />
                    </Horizontal>
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

const Vertical = styled.div`
    position: absolute;
    left: calc(50vw - 25px);
    height: calc(100% - 50px);

    z-index: 52;
`;

const Horizontal = styled.div`
    position: absolute;
    width: 100%;
    top: calc(50vh + 50px);
    z-index: 42;
`;
