import { useState } from 'react'
import './App.css'

let object = {
    name: "Viktor",
    sayHello: function() {
        console.log("Hello");
    }
}

// Классовые компоненты

// name, age
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Person: ${this.name}, age ${this.age}`);
    }
}

// name, age, group
class Student extends Person {
    constructor(name, age, group) {
        super(name, age); // Вызываю конструктор базового класса Person
        // this.name = name;
        // this.age = age;
        this.group = group;
    }

    print() {
        super.print();
        console.log(`Group of student: ${this.group}`);
        //console.log(`Student: ${this.name}, age ${this.age}, group ${this.group}`);
    }

    // print(str) {
    //     console.log(str);
    // }
}

// Функциональный компонент
function Component(props) {
    const [name, setName] = useState("Viktor");

    return (
        <>
            <h1>Hello, {name}</h1>
            <button onClick={() => setName("Ivan")}>Поменять</button>
            <h2>{props.title}</h2>
        </>
    )
}

function App() {
    let person = new Person("Viktor", 20);
    console.log(person.name);
    console.log(person.age);
    person.print();

    let student = new Student("Ivan", 16, 31);
    console.log(student.name);
    console.log(student.age);
    console.log(student.group);

    student.print();
    student.print("Hello");

    return (
        <>
            <Component title="Program"/>
        </>
    )
}

export default App
