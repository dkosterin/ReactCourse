import { useState } from 'react'
import { produce } from 'immer'

// npm install immer

function ImmerComponent() {
    const [user, setUser] = useState({
        name: "Иван",
        address: {
            city: "Москва",
            street: "улица"
        }
    });

    function changeCity() {
        const newUser = produce(user, draft => {
            draft.address.city = "Ярославль";
        })

        setUser(newUser);
    }

    return (
        <>
            <h1>{user.name}</h1>
            <h2>{user.address.city}</h2>
            <button onClick={changeCity}>Изменить город</button>
        </>
    )
}

function Component() {
    const [user, setUser] = useState({
        name: "Иван",
        address: {
            city: "Москва",
            street: "улица"
        }
    });

    function changeCity() {
        // user.address.city = "Ярославль";
        // setUser(user);

        const newUser = {...user, 
            address: {
                ...user.address,
                city: "Ярославль"
            }}

        setUser(newUser);
    }

    return (
        <>
            <h1>{user.name}</h1>
            <h2>{user.address.city}</h2>
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
