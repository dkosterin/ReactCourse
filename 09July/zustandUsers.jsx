import { useState } from 'react'
import { produce } from 'immer'
import { create } from 'zustand'

// npm install immer
// npm install zustand

const useUserStore = create(set => ({
    user: {
        name: "Иван",
        city: "Москва"
    }, 
    changeCity: () => set(({user: {...user, city: "Ярославль"}}))
}))

const useUsersStore = create(set => ({
    users: [
    {
        id: 1,
        name: "Иван",
        city: "Москва"
    }, 
    {
        id: 2,
        name: "Виктор",
        city: "Ярославль"
    }],

    changeCity: () => set(state => ({users: state.users.map(user => (
        user.id === 1? {...user, city: "Кострома"} : user
    ))})),

    addUser: () => set(state => ({users: [...state.users, {
        id: 3, 
        name: "Игорь",
        city: "Иваново"
    }]}))
}))

function User() {
  const user = useUserStore(state => state.user);
  const changeCity = useUserStore(state => state.changeCity);

  return (
    <>
        <h1>{user.name}</h1>
        <h2>{user.city}</h2>
        <button onClick={changeName}>Поменять</button>
    </>
  )
}

function App() {
    const users = useUsersStore(state => state.users);
    const changeCity = useUsersStore(state => state.changeCity);
    const addUser = useUsersStore(state => state.addUser);
    return (
        <>
        {users.map(user => (
            <div key={user.id}>
                <h1>{user.name}</h1>
                <h2>{user.city}</h2>
            </div>
            ))}
        <button onClick={changeCity}>Изменить город</button>
        <button onClick={addUser}>Добавить</button>
        </>
    )
}

export default App
