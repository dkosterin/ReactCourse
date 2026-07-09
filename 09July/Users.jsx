import { useState } from 'react'
import { produce } from 'immer'

// npm install immer

function ObjectComponent() {
    const [user, setUser] = useState({
        name: {
            firstName: "Иван",
            lastName: "Петров"
        },
        address: {
            city: "Москва",
            street: "улица"
        }
    })

    function changeCity() {
        const newUser = produce(user, draft => {
            draft.address.city = "Ярославль";
        })

        console.log(user === newUser);
        console.log(user.name === newUser.name);
        console.log(user.address === newUser.address);

        setUser(newUser);
    }

    return (
        <>
            <h1>{user.name.firstName}</h1>
            <h2>{user.address.city}</h2>
            <button onClick={changeCity}>Изменить</button>
        </>
    )
}

function ImmerComponent() {
    const [users, setUsers] = useState([{
        id: 1,
        name: "Иван",
        address: {
            city: "Москва",
            street: "улица"
        }
    },
    {
        id: 2,
        name: "Игорь",
        address: {
            city: "Ярославль",
            street: "улица"
        }
    }]);

    function changeCity() {
        const newUsers = produce(users, draft => {
            const updatedUser = draft.find(user => user.id === 1);

            updatedUser.address.city = "Кострома";
        })

        console.log(users[0] === newUsers[0]);
        console.log(users[1] === newUsers[1]);

        setUsers(newUsers);
    }

    function addUser() {
        const newUsers = produce(users, draft => {
            draft.push({id: 3, name: "Андрей", address: {
                city: "Иваново",
                street: "улица"
            }})
        })

        setUsers(newUsers);
    }

    return (
        <>
            {users.map(user => 
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h2>{user.address.city}</h2>
                </div>
            )}
            <button onClick={changeCity}>Изменить город</button>
            <button onClick={addUser}>Добавить</button>
        </>
    )
}

function Component() {
    const [users, setUsers] = useState([{
        id: 1,
        name: "Иван",
        address: {
            city: "Москва",
            street: "улица"
        }
    },
    {
        id: 2,
        name: "Игорь",
        address: {
            city: "Ярославль",
            street: "улица"
        }
    }]);

    function changeCity() {
        const newUsers = users.map(user => user.id === 1 ?
            {...user, address: {...user.address, city: "Кострома"}} :
            user
        )

        setUsers(newUsers);
    }

    return (
        <>
            {users.map(user => 
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h2>{user.address.city}</h2>
                </div>
            )}
            <button onClick={changeCity}>Изменить город</button>
        </>
    )
}

function App() {
  return (
    <>
        <ImmerComponent />
    </>
  )
}

export default App
