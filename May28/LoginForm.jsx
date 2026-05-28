import { useState, useRef } from 'react'
import './App.css'

function UserForm() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const nameField = useRef(null);
  let [userName, setUserName] = useState("");

  function login() {
    setUserName(nameField.current.value);
    setLoggedIn(true);
  }

  return isLoggedIn ? 
    (<>
      <h1>Добро пожаловать, {userName}!</h1>
    </>)
    :
    (<>
      <input type="text" ref={nameField} />
      <button onClick={login}>Войти</button>
    </>)
}

function UserProfile( {isLoggedIn, userName, onClick} ) {
  if (isLoggedIn) {
    return <h1>Добро пожаловать, {userName}</h1>
  }
  else {
    return (
      <div>
        <h1>Ввойдите в систему</h1>
        <button onClick={onClick}>Войти</button>
      </div>
      )
  }

  /*
  if (expr) {
    a = 1;
  }
  else {
    a = 2;  
  }
  
  эквивалентно

  a = expr ? 1 : 2 // тернарный оператор

  if (expr) {
    doSomething();
  }

  эквивалентно

  expr && doSomething()
  */
}

function App() {
  // const userName = "user";
  // const [isLoggedIn, setLoggedIn] = useState(false);

  // return <UserProfile userName={userName} 
  //   isLoggedIn={isLoggedIn} 
  //   onClick={() => {
  //     setLoggedIn(true);
  //   }}
  //   />
  return <UserForm />;
}

export default App
