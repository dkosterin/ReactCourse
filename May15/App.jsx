import { useState, useEffect } from 'react'
import './App.css'

function Timer() {
  const [count, setCount] = useState(0);

  // useLayoutEffect работает так же как и useEffect,
  // но в useLayoutEffect код выполняется до отрисовки компонента
  useEffect(() => {
    // Выполняется, когда Timer появился
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Таймер удален");
    }
  }, []);

  return <h1>{count}</h1>
}

function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Выполняется при изменении элементов в массиве
  useEffect(() => {
    console.log("Я здесь");

    return(() => { // cleanup функция
      console.log("А теперь здесь");
    })
  }, [count1]);

  useEffect(() => {
    console.log("Я в useEffect для count2");

    return(() => { // cleanup функция
      console.log("Поменяли значение count2");
    })
  }, [count2]);

  return (
    <>
    <div>
      <span>{count1}</span>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
    </div>
    <div>
      <span>{count2}</span>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
    </div>
    </>
  )
}

function App() {
  // return (
  //   <Counter />
  // )
  const [visible, setVisible] = useState(false);

  function showOrHideTimer() {
    if (visible)
      return <Timer />
  }

  return (
    <>
      <button onClick={() => setVisible(!visible)}>Кнопка</button>
      {showOrHideTimer()}
    </>
  )
}

export default App
