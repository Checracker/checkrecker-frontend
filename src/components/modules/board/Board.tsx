import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import Todo from '../Todo/Todo';
import { BoardProps, TodoProps } from '../Todo/TodoProps';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { TItemStatus } from '@/constants/DummyTodo';

type Props = {
    children?: ReactNode;
};

const InnerList = React.memo(({todos}:any)=>(
    <TodoList>
    {todos.map((item:any, index:any) => (
        <Todo idx={index} {...item}></Todo>
    ))}
    </TodoList>
))
function Board({ boardId, todos }: BoardProps) {
    const [containerHeight, setContainerHeight] = useState<string>('calc((100vh - 172px) / 2)');

    useEffect(() => {
        const updateHeight = () => {
            const newHeight = `calc((100vh - 192px) / 2)`;
            setContainerHeight(newHeight);
        };

        updateHeight(); // 초기 높이 설정

        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <Droppable key={boardId} droppableId={boardId}>
            {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                    <Container height={containerHeight}>
                            <InnerList todos={todos}/>
                        {provided.placeholder}
                    </Container>
                </div>
            )}
        </Droppable>
    );
}

export default Board;

const Container = styled.div<{ height: string }>`
    width: 100%;
    height: ${({ height }) => height};
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none; /* 스크롤바 숨기기 */
    }


`;

const TodoList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;
