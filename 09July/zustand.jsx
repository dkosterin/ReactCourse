import { useState } from 'react'
import { produce } from 'immer'
import { create } from 'zustand'

// npm install immer
// npm install zustand

// create создает хранилище (store)
// В хранилище (store) хранятся данные и логи
// Результат -- кастомный хук
// Данные это state
// set это функция, меняющая state
const useLightStore = create(set => ({
    // state
    isLightOn: false,

    // action
    toggleLight: () => set(state => ({isLightOn: !state.isLightOn}))
}))

function Component() {
    const isLightOn = useLightStore(state => state.isLightOn);
    const toggleLight = useLightStore(state => state.toggleLight);

    return (
        <>
            <h1>{isLightOn? "Вкл" : "Выкл"}</h1>
            <button onClick={toggleLight}>Кнопка</button>
        </>
    )
}

const useCounterStore = create(set => ({
    count: 0,

    increament: () => set(state => ({count: state.count + 1})),
    decreament: () => set(state => ({count: state.count - 1}))
}))

function Counter() {
    const count = useCounterStore(state => state.count);
    const increament = useCounterStore(state => state.increament);
    const decreament = useCounterStore(state => state.decreament);

    return (
        <>
        <h1>{count}</h1>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>
        </>
    )
}

function App() {
  return (
    <>
        <Counter />
    </>
  )
}

export default App
