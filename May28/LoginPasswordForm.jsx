import { useState, useEffect, useRef } from 'react'
import './App.css'

/*
Два текстовых поля: в первое вводим логин, во второе - пароль
Рядом кнопка: при нажатии проверяем, верно ли введены логин и пароль
Если да, то выводим сообщение о входе
Если нет, сообщение об ошибке
*/

//https://github.com/dkosterin/ReactCourse/

function UserForm() {
  const users = [
    {
      login: "admin",
      password: "admin"
    },
    {
      login: "user",
      password: "1234"
    }
  ];

  const [isLoggedIn, setLoggedIn] = useState(false);
  const nameField = useRef(null);
  const passwordField = useRef(null);
  const [userName, setUserName] = useState("");
  const [correctLogin, setCorrectLogin] = useState(true);
  const [correctPassword, setCorrectPassword] = useState(true);
  let flag = false;

  function checkCorrect() {
    setCorrectLogin(true);
    setCorrectPassword(true);
    const inputLogin = nameField.current.value;
    const inputPassword = passwordField.current.value;
    let user = null;
    for (let obj of users) {
      if (inputLogin === obj.login) {
        setCorrectLogin(true);
        user = obj;
        break;
      }
    }
    if (!user) {
      setCorrectLogin(false);
    }
    else {
      setCorrectPassword(inputPassword === user.password);
      flag = inputPassword === user.password;
      if (flag) {
        setUserName(nameField.current.value);
        setLoggedIn(true);
      }
    }
  }

  // useEffect(() => {
  //   if (correctLogin && correctPassword) {
  //     setUserName(nameField.current.value);
  //     setLoggedIn(true);
  //   }
  // }, [correctLogin, correctPassword]);

  return isLoggedIn ? 
    (<>
      <h1>Добро пожаловать, {userName}!</h1>
    </>)
    :
    (<>
      <p>Логин: <input type="text" ref={nameField} /></p>
      <p>Пароль: <input type="password" ref={passwordField} /></p>
      <button onClick={checkCorrect}>Войти</button>
      {!correctLogin && <p>Такого пользователя нет</p>}
      {!correctPassword && <p>Неверный пароль</p>}
    </>)
}

function App() {
  return <UserForm />;
}

export default App
