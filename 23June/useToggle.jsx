import { useState, useEffect } from 'react'
import './App.css'

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    }, []);
}

// Кастомный хук
function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    const onChange = (e) => setValue(e.target.value);

    return [value, onChange];
}

function useToggle() {
    const [value, setValue] = useState(false);

    const onToggle = () => setValue(!value);

    return [value, onToggle];
}

function useClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    }, []);

    return time;
}

function App() {
    const [value, onToggle] = useToggle();
    const time = useClock();
    return (
        <>
            <p>Состояние: {value? " Включено" : "Выключено"}</p>
            <button onClick={onToggle}>Изменить</button>
            <p>{time}</p>
        </>
    )
}

export default App
