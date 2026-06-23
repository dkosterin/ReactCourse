import React from 'react'
import './App.css'

class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.name !== this.props.name) {
            console.log(`Имя изменилось с ${prevProps.name} на ${this.props.name}`);
        }
    }

    render() {
        return <h1>{this.props.name}</h1>
    }
}

const users = ["Viktor", "Ivan", "Sergey"];

function App() {
    const [index, setIndex] = React.useState(0);

    return (
        <>
            <button onClick={() => setIndex((index + 1) % 3)}>
                Изменить
            </button>
            <UserCard name={users[index]} />
        </>
    )
}

export default App
