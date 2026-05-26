import { useState } from 'react'
import './App.css'

function ProductItem({title, price, bgColor}) {
  return (
    <div style={{background: bgColor}}>
      <h1>{title}</h1>
      <p>{price} руб.</p>
    </div>
  )
}

function App() {
  const [price1, setPrice1] = useState(2100);
  const [bgColor2, setBgColor2] = useState("white");

  let item1 = {
    title: "Товар 1: Книга",
    price: price1
  }

  let item2 = {
    title: "Товар 2: Блокнот",
    price: 500,
    bgColor: bgColor2
  }

  function handlePriceChange() {
    if (price1 === 2100)
      setPrice1(2500);
    else
      setPrice1(2100);
  }

  function handleColorChange() {
    if (bgColor2 === "white")
      setBgColor2("blue");
    else
      setBgColor2("white");
  }

  return (
    <>
      <button onClick={handlePriceChange}>Изменить цену первого товара</button>
      <button onClick={handleColorChange}>Изменить цвет второго товара</button>
      <ProductItem title={item1.title} price={item1.price}/>
      <ProductItem {...item2}/>
    </>
  )
}

export default App
