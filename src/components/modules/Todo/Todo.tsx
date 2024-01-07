import { Box, Container as MuiContainer } from "@mui/material";
import React from "react";
import { styled as muiStyled } from "@mui/material";
import { TodoProps, TodoStatus } from "@/components/modules/Todo/TodoProps";
import Bell from "@/components/atoms/MUIIconButton/Bell";
import BellFilled from "@/components/atoms/MUIIconButton/BellFilled";
import { nanumGothic } from "@/app/utils/Fonts";
import CheckCircle from "@/components/atoms/MUIIconButton/CheckCircle";

const filteredStatus = (status:TodoStatus) =>{
    switch(status){
        case "COMPLETE":
            return "완료"
        case "IN_PROGRESS":
            return "목표"
        case "OVERDUE":
            return "초과"
    }
}

const filteredDate = (props:TodoProps) =>{
    switch(props.status){
        case "COMPLETE":
            return props.completedDate;
        case "IN_PROGRESS":
            return props.targetDate;
        case "OVERDUE":
            return props.completedDate;
    }
}


const Todo = (props: TodoProps) => {
    return (
        <Container>
            <TodoBox>
                <TodoIconBox>
                    <CheckCircle check={props.checked}/>
                    {props.alarm ? <BellFilled /> : <Bell />}
                </TodoIconBox>
                <TodoTitleBox>{props.title}</TodoTitleBox>
                <TodoDateBox>
                    <TodoStatusText className={nanumGothic.className}>{filteredStatus(props.status)}</TodoStatusText>
                    <TodoDateText className={nanumGothic.className}>{filteredDate(props)}</TodoDateText>
                </TodoDateBox>
            </TodoBox>
        </Container>
    );
};

export default Todo;

const MuiFlexRowBox = muiStyled(MuiContainer)`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
`;

const Container = muiStyled(MuiFlexRowBox)`
`;

const TodoIconBox = muiStyled(MuiFlexRowBox)({
    width:150,
    justifyContent:"flex-start",
    gap:"8px",
})
const TodoTitleBox = muiStyled(MuiFlexRowBox)({
    justifyContent:"flex-start",
});

const TodoBox = muiStyled(MuiFlexRowBox)({


    justifyContent:"flex-start",
    padding:"6px 16px",
    height:"52px",
    borderRadius:"20px",
    backgroundColor: "#FCF1F2"
})

const TodoDateBox = muiStyled('div')({
    display:"flex",
    backgroundColor: "#FFF",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    boxSizing:"border-box",
    padding:"12px",
    minWidth:"170px",
    height :"40px",
    borderRadius:"20px",
    gap:"12px"
})

const TodoStatusText = muiStyled('div')({
    color: "#000",
    fontSize: "16px",
    fontWeight: "800",
    lineHeight: "normal"
})


const TodoDateText = muiStyled('div')({
    color: "#000",
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "normal"
})