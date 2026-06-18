import React from 'react'
import './App.css'

// Классовый компонент, обрабатывающий ошибки ErrorBoundary

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <h1>Что-то пошло не так</h1>
                    <button onClick={() => this.setState({hasError: false})}>
                        Попробовать снова
                    </button>
                </>
            )
        }
        else {
            return this.props.children;
        }
    }
}

function Counter() {
    const [count, setCount] = React.useState(0);

    if (count > 5) {
        throw new Error("Count > 5");
    }
    return (
        <>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Увеличить</button>
        </>
    )
}

function App() {
    return (
        <>
            <h1>ErrorBoundary</h1>
            <ErrorBoundary>
                <Counter />
            </ErrorBoundary>
        </>
    )
}

export default App
