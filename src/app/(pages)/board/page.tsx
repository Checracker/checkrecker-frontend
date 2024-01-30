'use client';

import React, { useState } from 'react';
import styled from '@emotion/styled';
import Arrow from '/public/image/arrow.svg';
import ArrowVertical from '/public/image/arrow_vertical.svg';
import ArrowHorizontal from '/public/image/arrow_horizon.svg';
import Board from '@/components/modules/board/Board';
import {
    DragDropContext,
    Draggable,
    DropResult,
    Droppable,
} from 'react-beautiful-dnd';
import Todo from '@/components/modules/Todo/Todo';
import { TodoProps } from '@/components/modules/Todo/TodoProps';
type Props = {};
const dummyTodo: TodoProps[] = [
    {
        id: 0, //_todo id
        boradId: 1, //board id
        order: 1, //ListOrder
        isAlarm: true, //alarm checked
        title: 'todo만들기', //title
        checked: true,
        description: '설명', //_todo description
        status: 'COMPLETE', //_todo status
        createdDate: '2023-01-02', //생성날짜
        startDate: '2023-01-02', //시작일
        targetDate: '2023-01-02', //목표일
        completedDate: '2023-01-02', //완료일
    },
    {
        id: 1, //_todo id
        boradId: 1, //board id
        order: 2, //ListOrder
        isAlarm: false, //alarm checked
        title: 'todo만들기2', //title
        checked: false,
        description: '설명', //_todo description
        status: 'IN_PROGRESS', //_todo status
        createdDate: '2023-01-02', //생성날짜
        startDate: '2023-01-02', //시작일
        targetDate: '2023-01-02', //목표일
        completedDate: '2023-01-02', //완료일
    },
    {
        id: 2, //_todo id
        boradId: 1, //board id
        order: 3, //ListOrder
        isAlarm: false, //alarm checked
        title: 'todo만들기2', //title
        checked: false,
        description: '설명', //_todo description
        status: 'IN_PROGRESS', //_todo status
        createdDate: '2023-01-02', //생성날짜
        startDate: '2023-01-02', //시작일
        targetDate: '2023-01-02', //목표일
        completedDate: '2023-01-02', //완료일
    },
    {
        id: 3, //_todo id
        boradId: 1, //board id
        order: 4, //ListOrder
        isAlarm: false, //alarm checked
        title: 'todo만들기2', //title
        checked: false,
        description: '설명', //_todo description
        status: 'IN_PROGRESS', //_todo status
        createdDate: '2023-01-02', //생성날짜
        startDate: '2023-01-02', //시작일
        targetDate: '2023-01-02', //목표일
        completedDate: '2023-01-02', //완료일
    },
];
export default function page({}: Props) {
    const [items, setItems] = useState(dummyTodo);

    const onDragEnd = ({ source, destination }: DropResult) => {
        if (!destination) return;

        // 깊은 복사
        const _items = JSON.parse(JSON.stringify(items)) as typeof items;
        // 기존 아이템 뽑아내기
        const [targetItem] = _items.splice(source.index, 1);
        // 기존 아이템을 새로운 위치에 삽입하기
        _items.splice(destination.index, 0, targetItem);
        // 상태 변경
        setItems(_items);
    };

    return (
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
                    <Droppable droppableId="droppable">
                        {provided => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {items.map((item, index) => (
                                    <Todo idx={index} {...item}></Todo>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    {/* <Board></Board>
                    <Board></Board>
                    <Board></Board>
                    <Board></Board> */}
                </DragDropContext>
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
    top: calc(50vh + 50px);
    z-index: 42;
`;
