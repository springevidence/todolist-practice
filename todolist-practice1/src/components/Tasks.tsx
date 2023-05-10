import React from 'react';

export type dataType = {
    title: string
    tasks: Array<tasksType>
    students: Array<string>
}
export type tasksType = {
    taskId: number
    title: string
    isDone: boolean
}

type TasksPropsType = {
    data: dataType
}
function Tasks(props: TasksPropsType) {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <ul>
                {props.data.tasks.map ((elem, i) => {
                    return (
                        <li key={elem.taskId}>
                            <span>{elem.taskId}. </span>
                            <span>{elem.title}</span>
                            <span>{elem.isDone}</span>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {props.data.students.map ((elem, i) => {
                    return (
                        <li key={i+1}>
                            {elem}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Tasks;