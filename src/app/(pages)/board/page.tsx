"use client"
import { styled as muiStyled } from "@mui/material";
import { Container as MuiContainer } from "@mui/material";

import React from "react";
import styled from "@emotion/styled";
import Todo from '@/components/modules/Todo/Todo';
import { TodoProps } from "@/components/modules/Todo/TodoProps";
type Props = {};

const dummyTodo:TodoProps[] = [{
    id: 0, //_todo id
    boradId: 1, //board id
    order: 2, //ListOrder
    isAlarm: true, //alarm checked
    title: "todo만들기", //title
    checked: true,
    description: "설명", //_todo description
    status: "COMPLETE", //_todo status
    createdDate: "2023-01-02", //생성날짜
    startDate: "2023-01-02", //시작일
    targetDate: "2023-01-02", //목표일
    completedDate: "2023-01-02", //완료일

},
{
    id: 0, //_todo id
    boradId: 1, //board id
    order: 2, //ListOrder
    isAlarm: false, //alarm checked
    title: "todo만들기2", //title
    checked: false,
    description: "설명", //_todo description
    status: "IN_PROGRESS", //_todo status
    createdDate: "2023-01-02", //생성날짜
    startDate: "2023-01-02", //시작일
    targetDate: "2023-01-02", //목표일
    completedDate: "2023-01-02", //완료일

},
]


export default function page({}: Props) {
    return (
        <TodoList>
            <Todo {...dummyTodo[0]}></Todo>
            <Todo {...dummyTodo[1]}></Todo>
        </TodoList>
    );
}

const Container = styled.div`
    width:100vh;
    height:100vh;
`
const TodoList = muiStyled(MuiContainer)`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap:12px;
`;



