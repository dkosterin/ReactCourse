import React from 'react'
import './App.css'

// Классовые компоненты
class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Viktor",
            age: 12
        };
    }

    componentDidMount() {
        console.log("Компонент создан");
    }

    /*
    useEffect(() => {
        console.log("Компонент создан");    
    }, []);
    */

    componentWillUnmount() {
        console.log("Компонент удален");
    }

    /* 
    useEffect(() => {
        return () => {
                console.log("Компонент удален")
            }    
    }, []); 
    */

    componentDidUpdate() {
        console.log("Компонент обновлен");
    }

    /*
    useEffect(() => {
            console.log("Компонент обновлен");
        })
    */

    componentDidUpdate(prevProps, prevState) {
        if (this.props != prevProps || this.state != prevState) {
            console.log("Обновляем");
        }
    }

    render() {
        //console.log(this);

        return (
            <>
                <h1>Привет, я классовый компонент!</h1>
                <h2>{this.props.title}, {this.state.name}</h2>
                <button onClick={() => this.setState({name: "Ivan"})}>
                    Поменять
                </button>
            </>
        )
    }
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
    return (
        <>
            <ClassComponent title="Hello!" />
        </>
    )
}

export default App
