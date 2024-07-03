import React from "react";
import {TaskElement } from "./Task";
import {Button} from "./Button";

type Props = {
    truck: string
    tasks: Task[]
}

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const TodoList = ({truck, tasks}:Props) => {
    const mappedTasks = !tasks.length
        ? <div>Empty</div>
        : tasks.map((el: Task, index) => {
            return (
                <TaskElement  {...el}/>
            )
            })
    return (
        <div>
            <h3>{truck}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {mappedTasks}
            </ul>
            <div>
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
        </div>
    )
}