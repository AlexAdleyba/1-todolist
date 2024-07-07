import React from 'react';
import './App.css';
import {Task, TodoList} from "./TodoList";

function App() {
    const shapka1 = 'What to learn-1';
    const shapka2 = 'What to learn-2';

    const tasks1 : Task[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS&TS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
    ]

    const tasks2: Task[] = []

    return (
        <div className="App">
            <TodoList truck={shapka1} tasks={tasks1} />
            <TodoList truck={shapka2} tasks={tasks2}/>
        </div>
    );
}

export default App;
