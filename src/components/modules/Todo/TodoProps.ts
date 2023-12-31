export type TodoProps = {
    id: number; //_todo id
    boradId: number; //board id
    order: number; //ListOrder
    alarm: boolean; //alarm checked
    title: string; //title
    checked: boolean;
    description: string; //_todo description
    status: TodoStatus; //_todo status
    createdDate: string; //생성날짜
    startDate: string; //시작일
    targetDate: string; //목표일
    completedDate: string; //완료일
    subTodos?: TodoProps; //subTodo
};

type BoardProps = {
    boardId: number;
    todos: TodoProps[];
};

export type TodoStatus = "COMPLETE" | "IN_PROGRESS" | "OVERDUE";
