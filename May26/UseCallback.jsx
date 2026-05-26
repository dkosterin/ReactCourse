import { useState, useEffect, useCallback } from 'react'
import './App.css'

function Child({ onClick }) {
  // const item = {
  //   title: "Title",
  //   price: 100,
  //   sayHello: function() {
  //     console.log("Hello");
  //   }
  // }

  //item.sayHello();
  //console.log(props);
  return (
    <div>
      <span>Кнопка, которая что-то делает</span>
      <button onClick={onClick}>+</button>
    </div>
  )
}

function Parent() {
  // function sayHi() {
  //   console.log("Hi!");
  // }

  const [count, setCount] = useState(0);

  // function increase() {
  //   setCount(count + 1);
  // }
  const sayHi = useCallback(() => console.log("Hi!"), []);
  const increase = useCallback(() => setCount(count + 1), [count]);
  const decrease = useCallback(() => setCount(count - 1), [count]);

  return (
    <>
      <p>{count}</p>
      <Child onClick={increase}/>
      <Child onClick={decrease} />
    </>
  )
}

function ChildComponent ({ name, onClick }) {
  const handleClick = useCallback(() => onClick(name));
  return <button onClick={handleClick}>{name}</button>
}

function ParentComponent() {
  const names = ["Аня", "Борис", "Вика"];

  const handleNameClick = useCallback(name => 
    console.log(`Вы нажали на ${name}`), []);

  return (
    <>
    {names.map(name => <ChildComponent key={name} 
    name={name} onClick={handleNameClick} />)}
    </>
  )
}

function App() {
  return <ParentComponent />
  //return <Parent />
}

export default App
