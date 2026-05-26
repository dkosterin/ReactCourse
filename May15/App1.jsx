import { useState, useEffect } from 'react'
import './App.css'

// Функции, которые начинаются на use, называются хуками

/*
Есть кнопка. При нажатии появляется текстовое поле
При втором нажатии, текстовое поле удаляется, а в консоль
пишем то, что было введено в этом поле
*/

function Message() {
  useEffect(() => {
    // Выполняется, когда компонент отрисовывается
    console.log("Я в useEffect компонента Message");

    return () => {
      // Выполняется, когда компонент удаляется
      console.log("Message размонтирован");
    }
  }, []);

  return (
    <h1>Hello</h1>
  )
}

/*
Жизненный цикл компонента:
1. Монтирование (создание компонента)
2. Обновление
3. Размонтирование
*/

function App() {

  // Весь код в компоненте, который не возвращает разметку,
  // называется побочным эффектом (side effect)
  const [visible, setVisible] = useState(false);

  function handlePush() {
    setVisible(!visible);
  }

  function showOrHide() {
    if (visible) {
      return <Message />
    }
  }

  // Код выполняется после создания компонента
  // useEffect(() => {
  //   console.log("Я в функции useEffect");

  //   // Выполняется, когда компонент размонтируется
  //   return () => {
  //     console.log("Возвращается из функции");
  //   }
  // }, []);

  return (
    <>
      <button onClick={handlePush}>Кнопка</button>
      {showOrHide()}
    </>
  )
}

export default App
