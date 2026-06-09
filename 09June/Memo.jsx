import { useState, memo } from 'react'
import './App.css'

// Мемоизация (Memoization = Memory + Optimization)

function ChildComponent({ text })
{
    console.log("Рисуем дочерний");
    return <p>{text}</p>
}

const MemoizatedChildComponent = memo(ChildComponent);

function ParentComponent({count, setCount}) {
    const [text, setText] = useState("Hello");
    console.log("Рисуем родительский")
    return (
        <>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
            <MemoizatedChildComponent text={text} />
            <button onClick={() => setText("Goodbye")}>Поменять текст</button>
        </>
    )
}

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <ParentComponent count={count} setCount={setCount}/>
        </>
    )
}

export default App
