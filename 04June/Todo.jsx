import { useState, useReducer } from 'react'
import './App.css'

let count = 3;

function tasksReducer(state, action) {
    if (action.type === "ADD") {
        const newTask = {
            id: count,
            title: "Новая задача",
            isComplete: false
        }
        count++;
        return [...state, newTask];
    }
    if (action.type === "DELETE") {
        return state.filter(task => task.id !== action.id)
    }
    if (action.type === "COMPLETE") {
        return state.map(task => {
            return task.id === action.id ? {...task, isComplete: true } : {...task};
        })
    }
    return state;
}

function App() {
    const [tasks, dispatchTasks] = useReducer(tasksReducer, [
    {
        id: 1,
        title: "Задача 1",
        isComplete: false
    },
    {
        id: 2,
        title: "Задача 2",
        isComplete: false
    }
    ]);

    return (
        <>
        {
            tasks.map((task, index) => (
                <div key={task.id}>
                    <span>{task.title}</span>
                    {!task.isComplete && <button onClick={() => 
                        dispatchTasks({type: "COMPLETE", id: task.id})}>Выполнить</button>}
                    <button onClick={() => 
                        dispatchTasks({type: "DELETE", id: task.id})}>Удалить</button>
                </div>
            ))
        }
        <button onClick={() => dispatchTasks({type: "ADD"})}>Добавить задачу</button>
        </>
    )
}

export default App
