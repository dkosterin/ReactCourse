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

function AnotherLoginForm() {
    useDocumentTitle("Вход");

    const [login, onChangeLogin] = useInput("");
    const [password, onChangePassword] = useInput("");

    return (
        <>
            <div>Логин
                <input type="text" onChange={onChangeLogin} />
            </div>
            <div>Пароль
                <input type="text" onChange={onChangePassword} />
            </div>
            <button onClick={() => console.log(`Вход: ${login}, ${password}`)}>
                Войти
            </button>
        </>
    )
}

function LoginForm() {
    useDocumentTitle("Другой вход");

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div>Логин
                <input type="text" onChange={(e) => setLogin(e.target.value)} />
            </div>
            <div>Пароль
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={() => console.log(`Вход: ${login}, ${password}`)}>
                Войти
            </button>
        </>
    )
}

function App() {
    return (
        <>
            <h1>Вход</h1>
            <AnotherLoginForm />
        </>
    )
}

export default App
