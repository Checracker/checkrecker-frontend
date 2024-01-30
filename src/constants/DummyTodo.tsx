import { TodoProps } from "@/components/modules/Todo/TodoProps";

export const dummyTodo: TodoProps[] = [
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

export const dummyData:TodoProps[] = Array.from({ length: 20 }, (_, index) => ({
    id: index,  // 각 요소의 인덱스를 id로 사용 (실제로는 고유한 값을 사용하는 것이 좋음)
    boradId: 1,
    order: index + 1,
    isAlarm: index % 2 === 0,  // 짝수번째 요소는 true, 홀수번째 요소는 false
    title: `todo만들기${index}`,
    checked: index % 2 === 0,  // 짝수번째 요소는 true, 홀수번째 요소는 false
    description: '설명',
    status: index % 2 === 0 ? 'COMPLETE' : 'IN_PROGRESS',  // 짝수번째 요소는 COMPLETE, 홀수번째 요소는 IN_PROGRESS
    createdDate: '2023-01-02',
    startDate: '2023-01-02',
    targetDate: '2023-01-02',
    completedDate: '2023-01-02',
}));

export type TItemStatus = 'board1' | 'board2' |"board3" |"board4";

export type TBoard ={
    [key in TItemStatus] :TodoProps[]
}
export const boardDummy = {
    board1:dummyData.slice(0,5),
    board2:dummyData.slice(5,10),
    board3:dummyData.slice(10,15),
    board4:dummyData.slice(15,20),
}