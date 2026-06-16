import { useState, memo, useMemo } from 'react'
import './App.css'

/*
Есть массив строк и поле ввода (input)
При изменении строки в поле выводить только те строки, у которых имеется 
введенная подстрока
*/

// Мемоизация (Memoization = Memory + Optimization)


// Мемоизация компонента
// Мемоизация данных useMemo
// Мемоизация функций useCallback
const ChildComponent = memo(function({ text })
{
    console.log("Рисуем дочерний");
    return <p>{text}</p>
});

function slowFunction(num) {
    //1e8 = 1 * 10^8
    let result = 0;
    for (let i = 0; i < 1e8; i++) {
        for (let j = 0; j < 10; j++)
            result++;
    }

    return result;
}

//const MemoizatedChildComponent = memo(ChildComponent);

function ParentComponent({count, setCount}) {
    const [text, setText] = useState("Hello");

    const num = 2;

    const number = useMemo(() => {
        return slowFunction(num);
    }, [num]);

    console.log("Рисуем родительский")
    return (
        <>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
            <ChildComponent text={text} />
            <button onClick={() => setText("Goodbye")}>Поменять текст</button>
        </>
    )
}

function SomeComponent() {
    const first = 2;
    const second = 3;

    // Можно и даже нужно
    let a = first + second;

    // Займет больше времени
    const b = useMemo(() => {
        return first + second;
    }, [first, second]);

    return (
        <p>Component</p>
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
