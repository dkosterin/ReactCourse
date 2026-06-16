import { useState, memo, useMemo, useRef } from 'react'
import './App.css'

/*
Есть массив строк и поле ввода (input)
При изменении строки в поле выводить только те строки, у которых имеется 
введенная подстрока
str.includes(substr)
*/
const arr = ["Рубашка", "Кроссовки", "Туфли", "Юбка"];

function App() {
    const [search, setSearch] = useState("");

    // Фильтрация
    const filteredArray = useMemo(() => {
        return arr.filter(elem => elem.toLowerCase().includes(search));
    }, [search]);

    return (
        <>
            <input type="text" value={search}
            onChange={e => setSearch(e.target.value)} />
            {filteredArray.map((elem, index) => <p key={index}>{elem}</p>)}
        </>
    )
}

export default App
