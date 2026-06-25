import { useState } from 'react'

// Типизация переменных
let a: number = 5;
let b: string = "abc";
let c: boolean = true;
let d: number[] = [1, 2, 3];
let f: number | string;

let person: {name: string, age: number} = {
  name: "Ivan",
  age: 16
}

console.log(person);

let anotherPerson: {name: string, age?: number} = {
  name: "Ivan"
}

console.log(anotherPerson);

anotherPerson.age = 11;
console.log(anotherPerson);

// Типизация функций
function add(a: number, b: number) {
  return a + b;
}

function anotherAdd(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 4));
//console.log(add("a", "b"));

const h: () => void = () => console.log("Hello");
h();

const sayMessage: (message: string) => void = (message) => console.log(message);
sayMessage("Goodbye");

function printPerson(person: {name: string, age: number}): void {
  console.log(`name: ${person.name}, age: ${person.age}`);
}

function anotherPrintPerson({name, age}: {name: string, age: number}): void {
  console.log(`name: ${name}, age: ${age}`);
}

printPerson(person);
anotherPrintPerson(person);

type UserProps = {
  name: string,
  age?: number
}

const someUser: UserProps = {
  name: "Sergey",
  age: 20
}

function printUser(user: UserProps) {
  console.log(user.name);
  console.log(user.age);
}

printUser(someUser);


// Типизация компонентов и props
function UserCard({name, age}: UserProps) {
  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
    </>
  )
}

function Counter({count, onClick}: {count: number, onClick: () => void}) {
  return (
    <>
      <span>{count}</span>
      <button onClick={onClick}>+</button>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0);
  //const [count, setCount] = useState<number>(0);

  return (
    <>
      <UserCard name="Viktor" age={30} />
      <Counter count={count} onClick={() => setCount(count + 1)} />
    </>
  )
}

export default App
