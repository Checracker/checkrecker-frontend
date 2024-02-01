import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Todo from '../Todo/Todo';
import { BoardProps, TodoProps } from '../Todo/TodoProps';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { TItemStatus } from '@/constants/DummyTodo';

type Props = {
    children?: ReactNode;
};
const dummyTodo: TodoProps[] = [
    {
        id: 0, //_todo id
        boradId: 1, //board id
        order: 2, //ListOrder
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
        id: 0, //_todo id
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
        id: 0, //_todo id
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
        id: 0, //_todo id
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
];
const InnerList = React.memo(({todos}:any)=>(
    <TodoList>
    {todos.map((item:any, index:any) => (
        <Todo idx={index} {...item}></Todo>
    ))}
    </TodoList>
))
function Board({ boardId, todos }: BoardProps) {
    return (
        <Droppable key={boardId} droppableId={boardId}>
            {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                    <Container>
                            <InnerList todos={todos}/>
                        {provided.placeholder}
                    </Container>
                </div>
            )}
        </Droppable>
    );
}

export default Board;

const Container = styled.div`
    //width:  calc(100vw / 2);
    height: calc((100vh - 100px) / 2);
`;

const TodoList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
