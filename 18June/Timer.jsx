import React from 'react'
import './App.css'

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0
        }
    }

    componentDidMount() {
        console.log("Таймер запущен");
        this.timerId = setInterval(() => {
            this.setState({seconds: this.state.seconds + 1})
        }, 1000);
    }

    componentWillUnmount() {
        console.log("Таймер остановлен");
        clearInterval(this.timerId);
    }

    render() {
        return (
            <>
                <p>Прошло секунд: {this.state.seconds}</p>
            </>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }
    render() {
        return (
        <>
            <h1>Таймер с классом</h1>
            <button onClick={() => this.setState({
                show: !this.state.show
            })}>{this.state.show? "Скрыть " : "Показать "}таймер</button>
            {this.state.show && <Timer />}
        </>
    )
    }
    
}

export default App
