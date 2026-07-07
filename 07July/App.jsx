import { useState, lazy, Suspense } from 'react'
import './App.css'

const HomePage = lazy(() => import('./HomePage.jsx'));

function App() {
   
    return (
        <>
            <h1>Я в компоненте App</h1>
            <Suspense fallback={<div>Загружаюсь...</div>}>
                <HomePage />
            </Suspense>
        </>
    )
}

export default App
