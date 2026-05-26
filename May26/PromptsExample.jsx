import { useState, useEffect } from 'react'
import './App.css'

// props -- параметры компонента (свойства)
function Item({ title, author, description }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{author}</p>
      <p>{description}</p>
    </>
  )
}

function App() {
  let item = {
    title: "Заголовок 1",
    author: "Автор 1",
    description: "Описание 1"
  };

  let item1 = {...item};
  item.title = "Заголовок 2";

  console.log({...item});
  console.log(...item1);

  return (
    <>
      <Item title="Заголовок 1" author="Автор 1" description="Описание 1"/>
      <Item {...item} />
      <Item title="Заголовок 3" />
    </>
  )
}

export default App
