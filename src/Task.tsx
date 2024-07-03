import {Task} from "./TodoList";
import * as React from 'react';

export const TaskElement = ({id, isDone, title}: Task) => {
    return (
        <li key={id}>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
        </li>
)
}

