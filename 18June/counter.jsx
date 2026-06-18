import React from 'react'
import './App.css'

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <>
            <span>{this.state.count}</span>
            <button onClick={() => this.setState({count: this.state.count + 1})}>
                +
            </button>
            </>
        )
    }
}

function App() {
    return (
        <>
            <Counter />
        </>
    )
}

export default App
