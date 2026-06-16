import { useState, memo, useMemo, useRef, useCallback } from 'react'
import './App.css'

/*
Мемоизация компонентов memo
Мемоизация данных useMemo
Мемоизация функций useCallback
*/

const ChildComponent = memo(function({ text, changeText, writeSomething }) {
    console.log("Дочерний рендерится");
    writeSomething("Я зависящий от параметра");
    return (
        <>
            <p>{text}</p>
            <button onClick={changeText}>Поменять</button>
        </>
    )
})

function ParentComponent({count, setCount})
{
    const variable = 1;
    console.log("Родительский рендерится");
    const [text, setText] = useState("Hello");
    // function changeText() {
    //     setText("Goodbye");
    // }

    const changeText = useCallback(() => setText("Goodbye"), [variable]);

    const someFunction = useCallback(str => console.log(str), []);
    
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <ChildComponent text={text} changeText={changeText}
            writeSomething={someFunction} />
        </>
    )
}

function App() {
    const [count, setCount] = useState(0);
    return (
        <ParentComponent count={count} setCount={setCount} />
    )
}

export default App
