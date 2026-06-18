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
            return <div>Что-то не так</div>
        }
        else {
            return this.props.children;
        }
    }
}

function Child() {
    throw new Error("Oops");

    return <div>Не отрисовывается</div>
}

function SomeComponent(props) {
    return props.children;
}

// Если в Child ошибка, то выводить "Что-то не так"
function App() {
    return (
        <>
            <h1>Я здесь</h1>
            <ErrorBoundary>
                <Child />
            </ErrorBoundary>
            <h1>А теперь я здесь</h1>
        </>
    )
}

export default App
