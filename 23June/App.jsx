import React from 'react'
import './App.css'

class Counter extends React.Component {
    constructor(props) {
        console.log("Конструктор");
        super(props);

        this.state = {
            count: 0,
            title: "Hello"
        };
    }

    componentDidMount() {
        console.log("Вмонтировался");
    }

    /*
    useEffect(() => {
        console.log("Вмонтировался");
    }, [])
    */

    // componentDidUpdate() {
    //     console.log("Изменился");
    // }

    /*
    useEffect(() => {
        console.log("Изменился");
    })
    */

    componentWillUnmount() {
        console.log("Размонтировался");
    }

    /*
    useEffect(() => {
        return () => {
            console.log("Изменился");
        }
    })
    */

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("count изменился");
        }

        if (prevProps.name !== this.props.name) {
            console.log("name изменился");
        }
    }

    /*
    useEffect(() => {
        return () => {
            console.log("Изменился");
        }
    }, [count])
    */

    render() {
        console.log("Рендер");

        return (
            <>
                <h2>{this.state.count}</h2>
                <button onClick={() => this.setState({count: 
                    this.state.count + 1})}>+</button>
                <h3>{this.state.title}</h3>
                <button onClick={() => this.setState({title: "Goodbye"})}>
                    Изменить
                </button>
            </>
        )
    }
}

class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMonth() {

    }

    componentDidUpdate(prevProps) {
        // Имя изменилось на ...
    }

    componentWillUnmount() {

    }

    render() {
        return <h1>{this.props.name}</h1>
    }
}

const users = ["Viktor", "Ivan", "Sergey"];

function App() {
    const [userName, setUserName] = React.useState("Viktor");

    return (
        <>
            <button>Изменить</button>
            <UserCard name={userName} />
        </>
    )


    // const [show, setShow] = React.useState(false);

    // return (
    //     <>
    //         <h1>Счетчик</h1>
    //         <button onClick={() => setShow(!show)}>
    //             {show? "Скрыть " : "Показать "} счетчик
    //         </button>
    //         {show && <Counter />}
    //     </>
    // )
}

export default App
