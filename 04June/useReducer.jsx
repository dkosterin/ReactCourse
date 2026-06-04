import { useState, useReducer } from 'react'
import './App.css'

function App()
{  
    // const [user, setUser] = useState({
    //     name: "Username",
    //     age: 20,
    //     //city: "Yaroslavl"
    //     address: {
    //         city: "Yaroslavl",
    //         street: "Komsomolskaya",
    //         "house": 1
    //     }
    // });

    // function updateCity(newCity) {
    //     //user.city = newCity;
    //     const newUser = {...user, city: newCity};
    //     setUser(newUser);
    // }

    // function updateCity(newCity) {
    //     const newUser = {...user, address: {...user.address, city: newCity}}
    //     setUser(newUser);
    // }

    // return (
    //     <>
    //         <p>Пользователь {user.name}, возраст {user.age}</p>
    //         <p>Адрес: {user.address.city}, {user.address.street}, {user.address.house}</p>
    //         <button onClick={() => updateCity("Moscow")}>Изменить город</button>
    //     </>
    // )

    // const [users, setUsers] = useState([
    //     {
    //         id: 1,
    //         name: "Username 1",
    //         age: 20
    //     },
    //     {
    //         id: 2,
    //         name: "Username 2",
    //         age: 25
    //     }
    // ])

    // function addUser(newUser) {
    //     // добавление в конец
    //     const newUsers = [...users, newUser];
    //     // добавление в начало [newUser, ...users]

    //     setUsers(newUsers);
    // }

    // // Добавление по индексу
    // function addUserByIndex(newUser, index) {
    //     const leftPart = users.slice(0, index);
    //     const rightPart = user.slice(index);
    //     setUsers([...leftPart, newUser, ...rightPart]);
    // }

    // // Поиск
    // function searchUser(userId) {
    //     const user = users.filter(user => user.id === userId);
    // }

    // // Удаление
    // function deleteUser(userId) {
    //     const newUsers = users.filter(user => user.id !== userId);
    //     setUsers(newUsers);
    // }

    // return (
    //     <>
    //     {
    //         users.map(user => 
    //         <p key={user.id}>
    //             Пользователь {user.name}, возраст {user.age}
    //         </p>)
    //     }
    //     <button onClick={() => addUser({
    //         id: 3,
    //         name: "Username 3",
    //         age: 30
    //     })}>Добавить</button>
    //     <button onClick={() => deleteUser(2)}>Удалить</button>
    //     </>
    // )

    // Функция - редюсер
    function countReducer(state, action) {
        if (action.type === "increase")
            return state + 1;
        if (action.type === "decrease")
            return state - 1;
        if (action.type === "reset")
            return 0;
        return state;
    }

    //const [count, setCount] = useState(0);
    const [count, dispatchCount] = useReducer(countReducer, 0);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatchCount({type: "increase"})}>+</button>
            <button onClick={() => dispatchCount({type: "decrease"})}>-</button>
            <button onClick={() => dispatchCount({type: "reset"})}>Сбросить</button>
        </>
    )

}

export default App
