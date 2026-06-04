import { useState, useReducer, createContext, useContext } from 'react'
import './App.css'

const UserContext = createContext({name: "default", age: 0});

function FirstComponent() {
    return (
        <>
            <h2>FirstComponent</h2>
            <SecondComponent />
        </>
            
    )
}

function SecondComponent() {
    const user = useContext(UserContext);
    return (
        <p>Пользователь {user.name}, возраст {user.age}</p>
    )
}

function App() {
    const user = {
        name: "Username",
        age: 30
    };

    return (
        <>
            <h1>App</h1>
            <UserContext.Provider value={user}>
                <FirstComponent/>
            </UserContext.Provider>
            <SecondComponent />
        </>
    )
}

export default App
